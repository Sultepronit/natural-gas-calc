import { findInSegment } from "../../helpers";
import calculateCorrection from "./calculateCorrection";
import { unitedTable } from "./unitedTable";

export default function calculateDewPoint(humidity, p) {
    p = p * 1000 / 6.89475729; // MPa to psi
    const correction = calculateCorrection(p);

    let candidateIndex = unitedTable.findIndex(row => {
        return row.calculateHumidity(p, correction) >= humidity
    });

    const unitedTable100FIndex = unitedTable.length - 1;
    if (candidateIndex < 0) candidateIndex = unitedTable100FIndex; // > 100F

    const candidate = unitedTable[candidateIndex];
    const candidateHumidity = candidate.calculateHumidity(p, correction);
    console.log(candidateIndex, candidate);
    console.log(candidate.calculateHumidity(p, correction));

    if (candidateHumidity === humidity) return candidate.dewPointC;

    if (candidateIndex === 0) return `< ${candidate.dewPointC}`;

    console.log(unitedTable[candidateIndex - 1]);

    return findInSegment(
        unitedTable[candidateIndex - 1].calculateHumidity(p, correction),
        unitedTable[candidateIndex - 1].dewPointC,
        candidateHumidity,
        candidate.dewPointC,
        humidity
    ).toFixed(1);
}