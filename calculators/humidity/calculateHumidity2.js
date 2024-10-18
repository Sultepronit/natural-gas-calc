import { table1 } from "./table1";
import { table2 } from "./table2";
import { unitedTable } from "./unitedTable";

function findTableRow(tf) {
    return table.find((row) => row.dewPoint >= tf);
}

function findTableData(tf) {
    if (tf < 0) return { from: findTableRow(0), to: findTableRow(1) };
    if (tf > 100) return { from: findTableRow(99), to: findTableRow(100) };

    const candidateIndex = table.findIndex((row) => row.dewPoint >= tf);
    const candidate = table[candidateIndex];

    if (candidate.dewPoint === tf) return { exact: candidate };

    return { from: table[candidateIndex - 1], to: candidate };
}

function findInSegment(x1, y1, x2, y2, x) {
    const diff1 = x2 - x;
    console.log(diff1);
    const diff2 = x - x1;
    console.log(diff2);
    const xSegment = x2 - x1;
    console.log(diff1);

    return (y1 * diff1 / xSegment) + (y2 * diff2 / xSegment);
}

console.log(findInSegment(7, 10.85, 10, 15.5, 17));

export default function calculateHumidity2(dewPointC) {
    // const p = 14.7;
    const p = 568.55;
    dewPointC = (isNaN(dewPointC) || dewPointC === '') ? -100 : Number(dewPointC);
    
    let dewPointF = dewPointC * 1.8 + 32;
    dewPointF = dewPointC;
    if (dewPointF < -40) dewPointF = -40;
    console.log(dewPointC, dewPointF);

    const table10F = table1[0];
    const table20F = table2[table2.length - 1];

    const correction = table10F.calculateHumidity(p) / table20F.calculateHumidity(p);
    console.log(correction);

    const candidateIndex = unitedTable.findIndex(row => row.dewPoint >= dewPointF);
    const candidate = unitedTable[candidateIndex];
    console.log(candidateIndex, candidate);

    if (candidate.dewPoint === dewPointF) return candidate.calculateHumidity(p, correction);

    return { from: unitedTable[candidateIndex - 1], to: candidate };

    // const tableData = findTableData(tf);
    // console.log(tableData);

    // if (tableData?.exact) {
    //     return calculateWaterContent(tableData.exact, p);
    // }

    // const humidityA = calculateWaterContent(tableData.from, p);
    // const humidityB = calculateWaterContent(tableData.to, p);
    // const diffA = tableData.to.dewPoint - tf;
    // const diffB = tf - tableData.from.dewPoint;
    // const diffSum = diffA + diffB;
    // const factorA = diffA / diffSum;
    // const factorB = diffB / diffSum;

    // return (humidityA * factorA) + (humidityB * factorB);
}