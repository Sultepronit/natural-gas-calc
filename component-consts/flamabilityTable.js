const flamabilityTable = {
    methane: { lfl: 5.28, ufl: 15.5 },
    ethane: { lfl: 3.07, ufl: 14.95 },
    propane: { lfl: 2.31, ufl: 9.5 },
    'n-butane': { lfl: 1.8, ufl: 8.5 },
    get '2-methylpropane'() {
        return this['n-butane'];
    },
    'n-pentane': { lfl: 1.47, ufl: 8 },
    get '2-methylbutane'() {
        return this['n-pentane'];
    },
    get '2,2-dimethylpropane'() {
        return this['n-pentane'];
    },
    'n-hexane': { lfl: 1.24, ufl: 6 }
};

export default flamabilityTable;