import { basicConsts as consts } from "../basicConsts";
import { toKelvin } from "../helpers";
import gatherConsts from "./gatherConts";
import prepareComonents from "./prepareComonents";

class GasData {
    constructor(inputComponents, combustionT, meteringT) {
        // this.components = gatherConsts(inputComponents);
        this.components = prepareComonents(inputComponents);
        this.combT = combustionT;
        this.metT = meteringT;
        this._cachedResults = {};
    }
    get Hc_G() {
        if (this._cachedResults['Hc_G']) return this._cachedResults['Hc_G'];
        
        const value = this.components.reduce((acc, current) => {
            return acc + (current.value * current.Hc_G[this.combT])
        }, 0);

        this._cachedResults['Hc_G'] = value;
        return value;
    };
    get Hc_N() {
        if (this._cachedResults['Hc_N']) return this._cachedResults['Hc_N'];

        const value = this.Hc_G - this.components.reduce((acc, current) => {
            return acc + (current.value * current.b / 2 * consts.L[this.combT]);
        }, 0);

        this._cachedResults['Hc_N'] = value;
        return value;
    };
    get M() {
        if (this._cachedResults['M']) return this._cachedResults['M'];

        const value = this.components.reduce((acc, current) => acc + (current.value * current.M), 0);
        
        this._cachedResults['M'] = value;
        return value;
    };
    get Hm_G() {
        console.log('get Hm_G');
        return this.Hc_G / this.M;
    };
    get Hm_N() {
        console.log('get Hm_N');
        return this.Hc_N / this.M;
    };
    get s() {
        if (this._cachedResults['s']) return this._cachedResults['s'];

        const value = this.components.reduce((acc, current) => {
            return acc + (current.value * current.s[this.metT]);
        }, 0);

        this._cachedResults['s'] = value;
        return value;
    };
    get Z() {
        if (this._cachedResults['Z']) return this._cachedResults['Z'];

        const value = 1 - this.s**2;

        this._cachedResults['Z'] = value;
        return value;
    };
    get V0() {
        console.log('get V0');
        return consts.R * toKelvin(this.metT) / consts.P;
    };
    get V() {
        return this.Z * consts.R * toKelvin(this.metT) / consts.P;
    };
    get Hv_G() {
        return this.Hc_G / this.V;
    };
    get Hv_N() {
        return this.Hc_N / this.V;
    };
    get G() {
        return this.M * consts.Z_air[this.metT] / consts.M_air / this.Z;
    };
    get D() {
        return this.M / this.V0 / this.Z;
    };
    get W_G() {
        return this.Hv_G / Math.sqrt(this.G);
    };
    get W_N() {
        return this.Hv_N / Math.sqrt(this.G);
    };
    get Z30() {
        return 1 - 30 / 1 * this.s**2;
    };
    get K_et() {
        const c_met = this.components.find(component => component.name === 'methane').value;
        const c_et = this.components.find(component => component.name === 'ethane').value;
        return Math.round(c_met / c_et);
    };
    get K_pr() {
        const c_met = this.components.find(component => component.name === 'methane').value;
        const c_pr = this.components.find(component => component.name === 'propane').value;
        return Math.round(c_met / c_pr);
    };
    get lfl() {
        const long = 1 / this.components.reduce((acc, current) => {
            return acc + (current.flamability?.lfl ? current.value / current.flamability.lfl : 0);
        }, 0);
        return Number(long.toFixed(1));
    };
    get ufl() {
        const long = 1 / this.components.reduce((acc, current) => {
            return acc + (current.flamability?.ufl ? current.value / current.flamability.ufl : 0);
        }, 0);
        return Number(long.toFixed(1));
    };
    get u_Hm_G() {
        let part1 = 0;
        for (const i of this.components) {
            for (const j of this.components) {
                part1 += ((i.Hc_G[this.combT] / this.Hc_G) - (i.M / this.M)) * i.uncertainty
                    * Number(i.name === j.name)
                    * ((j.Hc_G[this.combT] / this.Hc_G) - (j.M / this.M)) * j.uncertainty;
            }
        }

        let part2 = 0;
        for (const i of this.components) {
            part2 += i.value**2 * i.u_Hc_G**2;
        }
        part2 /= this.Hc_G**2;

        let part3 = 0;
        for (const i of this.components) {
            for (const j of this.components) {
                part3 += i.value * i.uM * Number(i.name === j.name) * j.value * j.uM;
            }
        }
        part3 /= this.M**2;

        return Math.sqrt(part1 + part2 + part3) * this.Hm_G;
    };
    get u_Hm_N() {
        let part1 = 0;
        for (const i of this.components) {
            for (const j of this.components) {
                part1 += (((i.Hc_G[this.combT] - consts.L[this.combT] / 2 * i.b) / this.Hc_N) - (i.M / this.M))
                    * i.uncertainty * Number(i.name === j.name)
                    * (((j.Hc_G[this.combT] - consts.L[this.combT] / 2 * j.b) / this.Hc_N) - (j.M / this.M))
                    * j.uncertainty;
            }
        }

        let part2 = 0;
        for (const i of this.components) {
            part2 += i.value**2 * i.u_Hc_G**2;
        }
        part2 /= this.Hc_N**2;

        let part3 = 0;
        for (const i of this.components) {
            for (const j of this.components) {
                part3 += i.value * i.uM * Number(i.name === j.name) * j.value * j.uM;
            }
        }
        part3 /= this.M**2;

        let sum4 = 0;
        for (const i of this.components) {
            sum4 += i.value * i.b;
        }
        let part4 = (sum4 / 2 / this.Hc_N)**2 * consts.u_L**2;

        return Math.sqrt(part1 + part2 + part3 + part4) * this.Hm_N;
    };

    get u_Hv_G() {
        let part1 = 0;
        for (const i of this.components) {
            for (const j of this.components) {
                part1 += ((i.Hc_G[this.combT] / this.Hc_G) + (2 * i.s[this.metT] * this.s / this.Z))
                    * i.uncertainty * Number(i.name === j.name)
                    * ((j.Hc_G[this.combT] / this.Hc_G) + (2 * j.s[this.metT] * this.s / this.Z))
                    * j.uncertainty;
            }
        }

        let part2 = 0;
        for (const i of this.components) {
            part2 += i.value**2 * i.u_Hc_G**2;
        }
        part2 /= this.Hc_G**2;

        let sum3 = 0;
        for (const i of this.components) {
            sum3 += i.value**2 * i.u_s**2
        }
        const part3 = 4 * this.s**2 * sum3 / this.Z**2;

        const part4 = (consts.u_R / consts.R)**2;

        return Math.sqrt(part1 + part2 + part3 + part4) * this.Hv_G;
    };

    get u_Hv_N() {
        let part1 = 0;
        for (const i of this.components) {
            for (const j of this.components) {
                part1 += (((i.Hc_G[this.combT] - (consts.L[this.combT] / 2 * i.b)) / this.Hc_N)
                        + (2 * i.s[this.metT] * this.s / this.Z))
                    * i.uncertainty * Number(i.name === j.name)
                    * (((j.Hc_G[this.combT] - (consts.L[this.combT] / 2 * j.b)) / this.Hc_N)
                        + (2 * j.s[this.metT] * this.s / this.Z))
                    * j.uncertainty;
            }
        }

        let sum2 = 0;
        for (const i of this.components) {
            sum2 += i.value**2 * i.u_Hc_G**2;
        }
        const part2 = sum2 / this.Hc_N**2;

        let sum3 = 0;
        for (const i of this.components) {
            sum3 = i.value**2 * i.u_s**2;
        }
        const part3 = 4 * this.s**2 * sum3 / this.Z**2;

        const part4 = (consts.u_R / consts.R)**2;

        let sum5 = 0;
        for (const i of this.components) {
            sum5 += i.value * i.b;
        }

        const part5 = (sum5 / 2 / this.Hc_N)**2 * consts.u_L**2;

        return Math.sqrt(part1 + part2 + part3 + part4 + part5) * this.Hv_N;
    };
    get uM_matrixSum() {
        if (this._cachedResults['uM_matrixSum']) return this._cachedResults['uM_matrixSum'];

        let value = 0;
        for (const i of this.components) {
            for (const j of this.components) {
                value += i.value * /* i.uM * j.uM * */ j.value * (
                    i.a * j.a * consts.A.carbon.u**2 +
                    i.b * j.b * consts.A.hydrogen.u**2 +
                    i.c * j.c * consts.A.nitrogen.u**2 +
                    i.d * j.d * consts.A.oxygen.u**2 +
                    i.e * j.e * consts.A.sulfur.u**2
                ) /* / i.uM / j.uM */
            }
        }

        this._cachedResults['uM_matrixSum'] = value;
        return value;
    };
    get u_DGHead() {
        let part1 = 0;
        for (const i of this.components) {
            for (const j of this.components) {
                part1 += (i.M / this.M + (2 * i.s[this.metT] * this.s / this.Z))
                    * i.uncertainty * Number(i.name === j.name) * j.uncertainty
                    * (j.M / this.M + (2 * j.s[this.metT] * this.s / this.Z));
                // console.log((j.M / this.M + (2 * j.s[this.metT] * this.s / this.Z)))
            }
        }

        const part2 = this.uM_matrixSum / this.M**2;

        let sum3 = 0;
        for (const i of this.components) {
            sum3 = i.value**2 * i.u_s**2
        }
        const part3 = 4 * this.s**2 * sum3 / this.Z**2;

        return part1 + part2 + part3;
    };
    get u_D() {
        return Math.sqrt(this.u_DGHead + (consts.u_R / consts.R)**2) * this.D;
    };
    get u_G() {
        return Math.sqrt(
            this.u_DGHead
            + (consts.u_M_air / consts.M_air)**2
            + (consts.u_Z_air / consts.Z_air[this.metT])**2
        ) * this.G;
    };
    get u_W_G() {
        let part1 = 0;
        for (const i of this.components) {
            for (const j of this.components) {
                part1 += ((i.Hc_G[this.combT] / this.Hc_G) + (i.s[this.metT] * this.s / this.Z) - (i.M / 2 / this.M))
                    * i.uncertainty * Number(i.name === j.name) * j.uncertainty
                    * ((j.Hc_G[this.combT] / this.Hc_G) + (j.s[this.metT] * this.s / this.Z) - (j.M / 2 / this.M));
            }
        }

        let part2 = 0;
        for (const i of this.components) {
            part2 += i.value**2 * i.u_Hc_G**2;
        }
        part2 /= this.Hc_G**2;

        let sum3 = 0;
        for (const i of this.components) {
            sum3 += i.value**2 * i.u_s**2;
        }
        const part3 = this.s**2 * sum3 / this.Z**2;

        const part4 = this.uM_matrixSum / 4 / this.M**2;

        const part5 = (consts.u_R / consts.R)**2;

        const part6 = (consts.u_M_air / 2 / consts.M_air)**2;

        const part7 = (consts.u_Z_air / 2 / consts.Z_air[this.metT])**2;

        return Math.sqrt(part1 + part2 + part3 + part4 + part5 + part6 + part7) * this.W_G;
    };
    get u_W_N() {
        let part1 = 0;
        for (const i of this.components) {
            for (const j of this.components) {
                part1 += (((i.Hc_G[this.combT] - consts.L[this.combT] / 2 * i.b) / this.Hc_N)
                        + (i.s[this.metT] * this.s / this.Z) - (i.M / 2 / this.M))
                    * i.uncertainty * Number(i.name === j.name) * j.uncertainty
                    * (((j.Hc_G[this.combT] - consts.L[this.combT] / 2 * j.b) / this.Hc_N)
                       + (j.s[this.metT] * this.s / this.Z) - (j.M / 2 / this.M));
            }
        }

        let part2 = 0;
        for (const i of this.components) {
            part2 += i.value**2 * i.u_Hc_G**2;
        }
        part2 /= this.Hc_N**2;

        let sum3 = 0;
        for (const i of this.components) {
            sum3 += i.value**2 * i.u_s**2;
        }
        const part3 = this.s**2 * sum3 / this.Z**2;

        const part4 = this.uM_matrixSum / 4 / this.M**2;

        const part5 = (consts.u_R / consts.R)**2;

        const part6 = (consts.u_M_air / 2 / consts.M_air)**2;

        const part7 = (consts.u_Z_air / 2 / consts.Z_air[this.metT])**2;

        let sum8 = 0;
        for (const i of this.components) {
            sum8 += i.value * i.b;
        }
        const part8 = (sum8 / 2 / this.Hc_N)**2 * consts.u_L**2;

        return Math.sqrt(part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8) * this.W_N;
    };
};

export default GasData;