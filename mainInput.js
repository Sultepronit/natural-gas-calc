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
    new GasComponent('n-butane', 'н-бутан', 0.269),
    new GasComponent('2-methylpropane', '2-метилпропан', 0.147),
    new GasComponent('n-pentane', 'н-пентан', 0.069),
    new GasComponent('2-methylbutane', '2-метилбутан', 0.073),
    new GasComponent('2,2-dimethylpropane', '2,2-диметилпропан', 0.0052),
    new GasComponent('n-hexane', 'н-гексан', 0.061),
    new GasComponent('nitrogen', 'азот', 1.93),
    new GasComponent('carbon dioxide', 'вуглекислий газ', 3.4),
    new GasComponent('oxygen', 'кисень', 0.0164),
    // new GasComponent('hydrogen sulfide', 'hydrogen sulfide', 0.0164),
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