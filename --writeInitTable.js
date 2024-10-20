const initTbody = document.getElementById('init-data-body');

export default function writeInitTable(componetns) {
    const tbody = componetns.reduce((acc, current) => {
        return acc +
            `<tr>
                <td>${current.name}</td>
                <td>${(current.value * 100).toFixed(4)}</td>
            </tr>`;
    }, '');

    initTbody.innerHTML = tbody;
}

const correctedTbody = document.getElementById('corrected-data-body');
export function writeCorrectedTable(componetns) {
    const tbody = componetns.reduce((acc, current) => {
        return acc +
            `<tr>
                <td>${current.name}</td>
                <td>${(current.value * 100).toFixed(4)}</td>
            </tr>`;
    }, '');

    correctedTbody.innerHTML = tbody;
}