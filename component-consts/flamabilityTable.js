const flamabilityTable = {
    methane: {
        t0: { lfl: 5, ufl: 15 },
        t20: { lfl: 5.28, ufl: 15.5 }
    },
    ethane: {
        t0: { lfl: 3.0, ufl: 12.5 },
        t20: { lfl: 3.07, ufl: 14.95 }
    },
    propane: {
        t0: { lfl: 2.0, ufl: 9.5 },
        t20: { lfl: 2.31, ufl: 9.5 }
    },
    'n-butane': {
        t0: { lfl: 1.7, ufl: 8.5 },
        t20: { lfl: 1.8, ufl: 8.5 }
    },
    get '2-methylpropane'() {
        return this['n-butane'];
    },
    'n-pentane': {
        t0: { lfl: 1.35, ufl: 8 },
        t20: { lfl: 1.47, ufl: 8 }
    },
    get '2-methylbutane'() {
        return this['n-pentane'];
    },
    get '2,2-dimethylpropane'() {
        return this['n-pentane'];
    },
    'n-hexane': {
        t20: { lfl: 1.24, ufl: 6  },
        get t0() {
            return this.t20;
        }
    }
};

export default flamabilityTable;