export const basicConsts = {
    P: 101.3250,
    R: 8.3144621, // checked
    u_R: 0.00000750, // checked
    M_air: 28.965460, // checked
    u_M_air: 0.00017, // checked
    L: { // checked
        '0': 45.064,
        '15': 44.431,
        '15.55': 44.408,
        '20': 44.222,
        '25': 44.013,
    },
    u_L: 0.004,
    Z_air: {
        '0': 0.9994190,
        '15': 0.9995950,
        '15.55': 0.9996010,
        '20': 0.9996450,
    },
    u_Z_air: 0.000015,
    A: { 
        carbon: { value: 12.0107, u: 0.0004000},
        hydrogen: { value: 1.00794, u: 0.0000350},
        nitrogen: { value: 14.0067, u: 0.0001000},
        oxygen: { value: 15.9994, u: 0.0001500},
        sulfur: { value: 32.065, u: 0.0025000},
        helium: { value: 4.002602, u: 0.0000010},
        neon: { value: 20.1797, u: 0.0003000},
        argon: { value: 39.948, u: 0.0005000},
    }
};

export default basicConsts;





