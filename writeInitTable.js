const initTbody = document.getElementById('init-data-body');

export default function writeInitTable(componetns) {
    const tbody = componetns.reduce((acc, current) => {
        return acc + `<tr><td>${current.name}</td><td>${current.value}</td></tr>`;
    }, '');

    initTbody.innerHTML = tbody;
}

const correctedTbody = document.getElementById('corrected-data-body');
export function writeCorrectedTable(componetns) {
    const tbody = componetns.reduce((acc, current) => {
        return acc + `<tr><td>${current.name}</td><td>${current.value}</td></tr>`;
    }, '');

    correctedTbody.innerHTML = tbody;
}