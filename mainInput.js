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

// const restored = JSON.parse(localStorage.getItem('inputData'));
const restored = null;

export const inputData = restored || [
    new GasComponent('methane', 'метан', 86.64, 0.26),
    new GasComponent('ethane', 'етан', 5.8, 0.23),
    new GasComponent('propane', 'пропан', 1.58, 0.1),
    new GasComponent('n-butane', 'н-бутан', 0.269, 0.016),
    new GasComponent('2-methylpropane', '2-метилпропан', 0.147, 0.009),
    new GasComponent('n-pentane', 'н-пентан', 0.069, 0.004),
    new GasComponent('2-methylbutane', '2-метилбутан', 0.073, 0.005),
    new GasComponent('2,2-dimethylpropane', '2,2-диметилпропан', 0.0052, 0.001),
    new GasComponent('n-hexane', 'н-гексан', 0.061, 0.004),
    new GasComponent('nitrogen', 'азот', 1.93, 0.08),
    new GasComponent('carbon dioxide', 'вуглекислий газ', 3.4, 0.21),
    new GasComponent('oxygen', 'кисень', 0.0164, 0.0022),
    // new GasComponent('hydrogen sulfide', 'hydrogen sulfide', 0.0164),
];

console.log(inputData);

function calculateMethaneValue() {
    const methaneValue = 100 - inputData.slice(1).reduce((acc, component) => acc + component.value, 0);
    console.log(methaneValue);
    // inputData[0].value = Number(methaneValue.toFixed(5));
    inputData[0].value = parseFloat(methaneValue.toFixed(5));

    return inputData[0].value;
}

export function prepareMainInput() {
    calculateMethaneValue();

    const tbody = inputData.reduce((html, component, index) => {
        return html +
            `<tr>
                <th>${component.label}</th>
                <td class="td-input">
                    <input
                        type="text"
                        class="table-input"
                        name="x-${component.name}"
                        oninput="handleInput(event, ${index})"
                        style="width: ${String(component.value).length + 0.5}ch"
                        value="${component.value}"
                        ${index === 0 ? 'disabled' : ''}
                    >
                </td>
                <td class="td-input">
                    <input
                        type="text"
                        class="table-input"
                        name="u-${component.name}"
                        oninput="handleInput(event, ${index})"
                        style="width: ${String(component.uncertainty).length + 0.5}ch"
                        value="${component.uncertainty}"
                    >
                </td>
            </tr>`;
    }, '');

    mainInput.innerHTML = tbody;
}

let methaneInput = null;

window.handleInput = (e, index) => {
    console.log(e.target.name);
    console.log(e.target.value);

    e.target.style.width = (e.target.value.length + 0.5) + 'ch';

    if (e.target.name.startsWith('x-')) {
        inputData[index].value = Number(e.target.value);
    } else { // u-
        inputData[index].uncertainty = Number(e.target.value);
    }


    if (!methaneInput) methaneInput = document.getElementsByName('x-methane')[0];
    methaneInput.value = calculateMethaneValue();

    console.log(inputData);
    localStorage.setItem('inputData', JSON.stringify(inputData));

    calculateAndReport();
}