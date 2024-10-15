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
        return acc + `<tr><td>${current[0]}</td><td>${gasData[current[1]]}</td></tr>`;
    }, '');

    reportBody.innerHTML = report2;
}