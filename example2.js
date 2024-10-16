const components = [
    "methane",
    "ethane",
    "nitrogen",
    "carbon dioxide",
    "water"
];

const values = [
    0.931819,
    0.025618,
    0.010335,
    0.015391,
    0.016837
];

const uncertainties = [
    0.0003500,
    0.0002430,
    0.0001950,
    0.0001110,
    0.0001620
];

export const example2 = components.map((name, index) => {
    return {
        name,
        value: values[index],
        uncertainty: uncertainties[index]
    }
});