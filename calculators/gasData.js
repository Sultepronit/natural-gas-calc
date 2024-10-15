import { basicConsts } from "../basicConsts";
import { toKelvin } from "../helpers";

class GasData {
    constructor(components, combustionT, meteringT) {
        this.components = components;
        this.combustionT = combustionT;
        this.meteringT = meteringT;
    }
    get Hc_G() {
        return this.components.reduce((acc, current) => {
            return acc + (current.value * current.Hc_G[this.combustionT])
        }, 0);
    };
    get Hc_N() {
        return this.Hc_G - this.components.reduce((acc, current) => {
            return acc + (current.value * current.b / 2 * basicConsts.L[this.combustionT]);
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
        // return this.components.reduce((acc, current) => acc + (current.value * current.s0C), 0);
        return this.components.reduce((acc, current) => {
            return acc + (current.value * current.s[this.meteringT]);
        }, 0);
    };
    get Z() {
        return 1 - this.s**2;
    };
    get V0() {
        return basicConsts.R * toKelvin(this.meteringT) / basicConsts.P;
    };
    get V() {
        return this.Z * basicConsts.R * toKelvin(this.meteringT) / basicConsts.P;
    };
    get Hv_G() {
        return this.Hc_G / this.V;
    };
    get Hv_N() {
        return this.Hc_N / this.V;
    };
    get G() {
        return this.M * basicConsts.Z_air[this.meteringT] / basicConsts.M_air / this.Z;
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
};

export default GasData;