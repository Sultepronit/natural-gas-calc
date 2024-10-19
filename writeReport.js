const reportBody = document.getElementById('report-body');

export default function writeReport(gasData) {
    const rows = [
        ['Масова теплота згоряння, вища', 'Hm_G'],
        ['Масова теплота згоряння, нижа', 'Hm_N'],
        ['Об\'ємна теплота згоряння, вища', 'Hv_G'],
        ['Об\'ємна теплота згоряння, нижа', 'Hv_N'],
        ['Відносна густина', 'G'],
        ['Густина', 'D'],
        ['Число Воббе, вище', 'W_G'],
        ['Число Воббе, нижче', 'W_N'],
    ];

    const report2 = rows.reduce((acc, current) => {
        return acc +
            `<tr>
                <td>${current[0]}</td>
                <td>${gasData[current[1]].toFixed(5)}</td>
            </tr>`;
    }, '');

    reportBody.innerHTML = report2;
}

const wetReportBody = document.getElementById('wet-report-body');
const wetDiffBody = document.getElementById('wet-diff-body');

export function writeWetReport(wetGasData, dryGasData) {
    const rows = [
        ['Масова теплота згоряння, вища', 'Hm_G'],
        ['Масова теплота згоряння, нижа', 'Hm_N'],
        ['Об\'ємна теплота згоряння, вища', 'Hv_G'],
        ['Об\'ємна теплота згоряння, нижа', 'Hv_N'],
        ['Відносна густина', 'G'],
        ['Густина', 'D'],
        ['Число Воббе, вище', 'W_G'],
        ['Число Воббе, нижче', 'W_N'],
    ];

    const report = rows.reduce((acc, current) => {
        return acc +
        `<tr>
            <td>${current[0]}</td>
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