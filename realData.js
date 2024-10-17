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
    "carbon dioxide",
    "oxygen",
];

const values = [
    86.64,
    5.8,
    1.58,
    0.269,
    0.147,
    0.069,
    0.073,
    0.0052,
    0.061,
    1.93,
    3.4,
    0.0164
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

export const realData = components.map((name, index) => {
    // console.log(index, component);
    return {
        name,
        value: values[index],
        uncertainty: uncertainties[index]
    }
});