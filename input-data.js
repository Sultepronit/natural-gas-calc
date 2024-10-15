const components = [
    "methane",
    "ethane",
    "propane",
    "n-butane",
    "2-methylpropane",
    "n-pentane",
    "2-methylbutane",
    "2,2-dimethylpropane",
    "n-hexane",
    "nitrogen",
    "carbon dioxide"
];

const values = [
    0.922393,
    0.025358,
    0.015190,
    0.000523,
    0.001512,
    0.002846,
    0.002832,
    0.001015,
    0.002865,
    0.010230,
    0.015236
];

const uncertainties = [
    0.0003480,
    0.0002470,
    0.0001490,
    0.0000180,
    0.0000270,
    0.0000070,
    0.0000090,
    0.0000040,
    0.0000080,
    0.0001950,
    0.0001120,
];

export const inputData = components.map((name, index) => {
    // console.log(index, component);
    return {
        name,
        value: values[index],
        uncertainty: uncertainties[index]
    }
});