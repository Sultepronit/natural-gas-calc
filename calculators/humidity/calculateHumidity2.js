import { findInSegment } from "../../helpers";
import { table1 } from "./table1";
import { table2 } from "./table2";
import { unitedTable } from "./unitedTable";

export default function calculateHumidity2(dewPointC) {
    // const p = 14.7;
    // const p = 568.55;
    const p = 3920 / 6.89475729; // kPa to psi
    dewPointC = (isNaN(dewPointC) || dewPointC === '') ? -40 : Number(dewPointC);
    
    let dewPointF = dewPointC * 1.8 + 32;
    // dewPointF = dewPointC;
    if (dewPointF < -40) dewPointF = -40;
    console.log(dewPointC, dewPointF);

    const table10F = table1[0];
    const table20F = table2[table2.length - 1];
    const unitedTable100FIndex = unitedTable.length - 1;

    const correction = table10F.calculateHumidity(p) / table20F.calculateHumidity(p);
    // console.log(correction);

    let candidateIndex = unitedTable.findIndex(row => row.dewPoint >= dewPointF);
    if (candidateIndex < 0) candidateIndex = unitedTable100FIndex; // > 100F
    const candidate = unitedTable[candidateIndex];
    console.log(candidateIndex, candidate);

    if (candidate.dewPoint === dewPointF) return candidate.calculateHumidity(p, correction);

    return findInSegment(
        unitedTable[candidateIndex - 1].dewPoint,
        unitedTable[candidateIndex - 1].calculateHumidity(p, correction),
        candidate.dewPoint,
        candidate.calculateHumidity(p, correction),
        dewPointF
    );
}