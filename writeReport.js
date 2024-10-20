const reportBody = document.getElementById('report-body');

const rows = [
    ['Масова теплота згоряння, вища', 'Hm_G'],
    ['Масова теплота згоряння, нижа', 'Hm_N'],
    ['Об\'ємна теплота згоряння, вища', 'Hv_G'],
    ['Об\'ємна теплота згоряння, нижа', 'Hv_N'],
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

export default function writeReport(gasData) {
    const report2 = rows.reduce((acc, current) => {
        return acc +
            `<tr>
                <th>${current[0]}</th>
                <td>${parseFloat(gasData[current[1]].toFixed(5))}</td>
            </tr>`;
    }, '');

    reportBody.innerHTML = report2;
}

const wetReportBody = document.getElementById('wet-report-body');
const wetDiffBody = document.getElementById('wet-diff-body');

export function writeWetReport(wetGasData, dryGasData) {
    const report = rows.reduce((acc, current) => {
        return acc +
        `<tr>
            <th>${current[0]}</th>
            <td>${parseFloat(wetGasData[current[1]].toFixed(5))}</td>
        </tr>`;
    }, '');

    wetReportBody.innerHTML = report;

    const diffReport = rows.reduce((acc, current) => {
        const diff = dryGasData[current[1]] - wetGasData[current[1]];
        const diffPercent = diff / dryGasData[current[1]] * 100;
        return acc +
        `<tr>
            <td>${parseFloat(diff.toFixed(5))}</td>
            <td>${parseFloat(diffPercent.toFixed(4))}%</td>
        </tr>`;
    }, '');

    wetDiffBody.innerHTML = diffReport;
}