const reportBody = document.getElementById('report-body');

const rows = [
    ['Масова теплота згоряння, вища', 'Hm_G'],
    ['Масова теплота згоряння, нижча', 'Hm_N'],
    ['Об\'ємна теплота згоряння, вища', 'Hv_G'],
    ['Об\'ємна теплота згоряння, нижча', 'Hv_N'],
    ['Відносна густина', 'G'],
    ['Густина', 'D'],
    ['Число Воббе, вище', 'W_G'],
    ['Число Воббе, нижче', 'W_N'],
    ['Коефіцієнт реального газу (30 атм)', 'Z30'],
    ['Коефіцієнт вмісту газу (за етаном)', 'K_et'],
    ['Коефіцієнт вмісту газу (за пропаном)', 'K_pr'],
    ['НКМ', 'lfl'],
    ['ВКМ', 'ufl'],
];

const getU = (u) => (u * 2).toPrecision(2);
function roundValue(value, U) {
    const n = U.split('.')[1]?.length;
    return value.toFixed(n);
}

export default function writeReport(gasData) {
    const report2 = rows.reduce((acc, row) => {
        const [title, valueName] = row;

        const U = getU(gasData[`u_${valueName}`] || 0.01);

        const value = roundValue(gasData[valueName], U);

        return acc +
            `<tr>
                <th>${title}</th>
                <td>${value}</td>
                <td>${U}</td>
            </tr>`;
    }, '');

    reportBody.innerHTML = report2;
}

const wetReportBody = document.getElementById('wet-report-body');
const wetDiffBody = document.getElementById('wet-diff-body');

export function writeWetReport(wetGasData, dryGasData) {
    const report = rows.reduce((acc, row) => {
        const [title, valueName] = row;

        const U = getU(wetGasData[`u_${valueName}`] || 0.01);

        const value = roundValue(wetGasData[valueName], U);

        return acc +
        `<tr>
            <th>${title}</th>
            <td>${value}</td>
            <td>${U}</td>
        </tr>`;
    }, '');

    wetReportBody.innerHTML = report;

    const diffReport = rows.reduce((acc, row) => {
        const valueName = row[1];

        const diff = dryGasData[valueName] - wetGasData[valueName];

        const U = getU(wetGasData[`u_${valueName}`] || 0.01);
        const value = roundValue(diff, U);

        const diffPercent = (value / dryGasData[valueName] * 100).toPrecision(2);
        return acc +
        `<tr>
            <td>${parseFloat(value)}</td>
            <td>${parseFloat(diffPercent)} %</td>
        </tr>`;
    }, '');

    wetDiffBody.innerHTML = diffReport;
}