import calculateAndReport from "./calculateAndReport";

const mainInput = document.getElementById('main-input-body');

class GasComponent {
    constructor(name, label, value, uncertainty) {
        this.name = name;
        this.label = label;
        this.value = value || '';
        this.uncertainty = uncertainty;
    }
}

const restored = JSON.parse(localStorage.getItem('inputData'));
// const restored = null;

export const inputData = restored || [
    new GasComponent('methane', 'метан', 86.64),
    new GasComponent('ethane', 'етан', 5.8),
    new GasComponent('propane', 'пропан', 1.58),
    new GasComponent('n-butane', 'n-butane', 0.269),
    new GasComponent('2-methylpropane', '2-methylpropane', 0.147),
    new GasComponent('n-pentane', 'n-pentane', 0.069),
    new GasComponent('2-methylbutane', '2-methylbutane', 0.073),
    new GasComponent('2,2-dimethylpropane', '2,2-dimethylpropane', 0.0052),
    new GasComponent('n-hexane', 'n-hexane', 0.061),
    new GasComponent('nitrogen', 'nitrogen', 1.93),
    new GasComponent('carbon dioxide', 'carbon dioxide', 3.4),
    new GasComponent('oxygen', 'oxygen', 0.0164),
];

console.log(inputData);

export function prepareMainInput() {
    const tbody = inputData.reduce((html, component, index) => {
        return html +
            `<tr>
                <th>${component.label}</th>
                <td class="td-input">
                    <input
                        type="text"
                        class="table-input"
                        name="${component.name}"
                        oninput="handleInput(event, ${index})"
                        style="width: ${String(component.value).length + 0.5}ch"
                        value="${component.value}"
                    >
                </td>
            </tr>`;
    }, '');

    mainInput.innerHTML = tbody;
}

window.handleInput = (e, index) => {
    console.log(e.target.name);
    console.log(e.target.value);

    e.target.style.width = (e.target.value.length + 0.5) + 'ch';

    inputData[index].value = e.target.value;
    console.log(inputData);
    localStorage.setItem('inputData', JSON.stringify(inputData));

    calculateAndReport();
}