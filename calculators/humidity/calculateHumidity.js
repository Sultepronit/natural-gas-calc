import { table } from "./table";

/** 
 * put temperature in Celsius to find nearest table's temperatures in Fahrenheit
 */
function findTemperatures(tc) {
    const tf = tc * 1.8 + 32;
    console.log(tc, tf)
    if (tf < 1) return [0, 1];

    if (tf > 99) return [99, 100];

    const candidateIndex = table.findIndex((row) => row.temperature >= tf);
    console.log(candidateIndex);
    const candidate = table[candidateIndex];
    return [candidate, null];
}

export default function calculateHumidity(temperature) {
    const temperatures = findTemperatures(temperature);
    console.log(temperatures);
}