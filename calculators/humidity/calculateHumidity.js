import { table } from "./table";

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

function calculateWaterContent(tableData, p) {
    let w = 1 / tableData.k;
    if (tableData.ice) w = w * tableData.water / tableData.ice;

    return w * 1_000_000 * 14.7 / p * (460 + tableData.dewPoint) / (460 + 60);
}

export default function calculateHumidity(tc) {
    const p = 14.4;
    // const tf = tc * 1.8 + 32;
    const tf = tc;
    console.log(tc, tf)

    const tableData = findTableData(tf);
    console.log(tableData);

    if (tableData?.exact) {
        return calculateWaterContent(tableData.exact, p);
    }

    const dewPointA = calculateWaterContent(tableData.from, p);
    const dewPointB = calculateWaterContent(tableData.to, p);
    const diffA = tableData.to.dewPoint - tf;
    const diffB = tf - tableData.from.dewPoint;
    const diffSum = diffA + diffB;
    const factorA = diffA / diffSum;
    const factorB = diffB / diffSum;

    return (dewPointA * factorA) + (dewPointB * factorB);
}