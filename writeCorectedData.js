const correctedTbody = document.getElementById('corrected-data-body');

export function writeCorrectedTable(componetns) {
    const tbody = componetns.reduce((acc, current) => {
        return acc +
            `<tr>
                <th>${current.name}</th>
                <td>${(current.value * 100).toFixed(4)}</td>
            </tr>`;
    }, '');

    correctedTbody.innerHTML = tbody;
}