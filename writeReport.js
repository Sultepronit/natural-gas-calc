const reportBody = document.getElementById('report-body');
const addReportBody = document.getElementById('add-report-body');

const rows = [
    ['Молярна теплота згоряння, вища', 'Hc_G'],
    ['Молярна теплота згоряння, нижча', 'Hc_N'],
    ['Масова теплота згоряння, вища', 'Hm_G'],
    ['Масова теплота згоряння, нижча', 'Hm_N'],
    ['Об\'ємна теплота згоряння, вища', 'Hv_G'],
    ['Об\'ємна теплота згоряння, нижча', 'Hv_N'],
    ['Відносна густина', 'G'],
    ['Густина', 'D'],
    ['Число Воббе, вище', 'W_G'],
    ['Число Воббе, нижче', 'W_N'],
    // ['Коефіцієнт реального газу (30 атм)', 'Z30'],
    // ['Коефіцієнт вмісту газу (за етаном)', 'K_et'],
    // ['Коефіцієнт вмісту газу (за пропаном)', 'K_pr'],
    // ['НКМ (0 °С)', 'lflT0'],
    // ['НКМ (20 °С)', 'lflT20'],
    // ['ВКМ (0 °С)', 'uflT0'],
    // ['ВКМ (20 °С)', 'uflT20'],
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

const addRows = [
    ['Коефіцієнт вмісту газу (за етаном)', 'K_et'],
    ['Коефіцієнт вмісту газу (за пропаном)', 'K_pr'],
    // ['НКМ (0 °С)', 'lflT0'],
    // ['НКМ (20 °С)', 'lflT20'],
    // ['ВКМ (0 °С)', 'uflT0'],
    // ['ВКМ (20 °С)', 'uflT20'],
    ['Межі поширення полум\'я (0 °С)', 'flsT0'],
    ['Межі поширення полум\'я (20 °С)', 'flsT20'],
];

export function writeAddReport(gasData) {
    const report = addRows.reduce((acc, row) => {
        const [title, valueName] = row;

        return acc +
            `<tr>
                <th>${title}</th>
                <td>${gasData[valueName]}</td>
            </tr>`;
    }, '');

    addReportBody.innerHTML = report;
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