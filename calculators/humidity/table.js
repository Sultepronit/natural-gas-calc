const temperature = [
    0,
    5,
    10,
    20,
    30,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    50,
    60,
    70,
    80,
    90,
    100,
];

const k = [
    14810,
    11550,
    9060,
    5662,
    3608,
    3301.9,
    3178,
    3059.2,
    2945.5,
    2836.4,
    2731.9,
    2631.7,
    2535.7,
    2443.5,
    2355.1,
    2270.3,
    2188.9,
    2110.8,
    2035.8,
    1703.1,
    1206.3,
    867.44,
    632.68,
    467.66,
    350.06,
];

const water = [
    1.139,
    1.436,
    1.807,
    2.785,
    4.224,
    4.579,
];

const ice = [
    0.958,
    1.241,
    1.599,
    2.61,
    4.178,
    4.579,
];

export const table = temperature.map((temperature, index) => {
    return {
        temperature,
        k: k[index],
        ...(water[index] ? { water: water[index] } : null),
        ...(ice[index] ? { ice: ice[index] } : null)
    }
});