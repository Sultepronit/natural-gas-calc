import { table1 } from "./table1";
import { table2 } from "./table2";

export default function calculateCorrection(p) {
    const table10F = table1[0];
    const table20F = table2[table2.length - 1];

    return table10F.calculateHumidity(p) / table20F.calculateHumidity(p);
}