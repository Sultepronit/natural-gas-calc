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
    }
    get Hc_G() {
        return this.components.reduce((acc, current) => {
            return acc + (current.value * current.Hc_G[this.combT])
        }, 0);
    };
    get Hc_N() {
        return this.Hc_G - this.components.reduce((acc, current) => {
            return acc + (current.value * current.b / 2 * consts.L[this.combT]);
        }, 0)
    };
    get M() {
        return this.components.reduce((acc, current) => acc + (current.value * current.M), 0); 
    };
    get Hm_G() {
        return this.Hc_G / this.M;
    };
    get Hm_N() {
        return this.Hc_N / this.M;
    };
    get s() {
        return this.components.reduce((acc, current) => {
            return acc + (current.value * current.s[this.metT]);
        }, 0);
    };
    get Z() {
        return 1 - this.s**2;
    };
    get V0() {
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
        const s = Math.sqrt(1 - this.Z /* * p2 / p0 */); 
        for (const i of this.components) {
            for (const j of this.components) {
                part1 += ((i.Hc_G[this.combT] / this.Hc_G) + (2 * i.s[this.metT] * s / this.Z))
                    * i.uncertainty * Number(i.name === j.name)
                    * ((j.Hc_G[this.combT] / this.Hc_G) + (2 * j.s[this.metT] * s / this.Z))
                    * j.uncertainty;
            }
        }

        let part2 = 0;
        for (const i of this.components) {
            part2 += i.value**2 * i.u_Hc_G**2;
        }
        part2 /= this.Hc_G**2;

        let part3 = 0;
        for (const i of this.components) {
            // here we go!
        }
        part3 /= this.M**2;

        return Math.sqrt(part1 + part2 + part3) * this.Hm_G;
    };
};

export default GasData;