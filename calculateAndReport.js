import GasData from "./calculators/gasData";
import calculateDewPoint from "./calculators/humidity/calculateDewPoint";
import calculateHumidity2 from "./calculators/humidity/calculateHumidity2";
import { inputData } from "./mainInput";
import writeInitTable, { writeCorrectedTable } from "./writeInitTable";
import writeReport, { writeWetReport } from "./writeReport";

const combustionTSelect = document.getElementById('combustuion-t');
const meteringTSelect = document.getElementById('metering-t');

const humidityToggler = document.getElementById('humidity-toggler');
const humidityData = document.getElementById('humidity-data');
const dewPoint = document.getElementById('dew-point');
const waterContent = document.getElementById('water-content');
const secondaryDewPointPressure = document.getElementById('dp-pressure');
const secondaryDewPointDisplay = document.getElementById('secondary-dew-point');
const correctedData = document.getElementById('corrected-data');

const totalControl = document.getElementById('total-control');

const dryReport = document.getElementById('dry-report');

secondaryDewPointPressure.style.width
    = (secondaryDewPointPressure.value.length + 0.5) + 'ch';

humidityToggler.addEventListener('change', () => {
    if (humidityToggler.checked) {
        humidityData.classList.remove('hidden');
        correctedData.classList.remove('hidden');
        dryReport.classList.add('hidden');
    } else {
        humidityData.classList.add('hidden');
        correctedData.classList.add('hidden');
        dryReport.classList.remove('hidden');
    }
});

function wetGasCase(components, dryGasData) {
    const humidity60F = dewPoint.value === '' ? 0
        : calculateHumidity2(dewPoint.value);
    console.log(humidity60F);
    // waterContent.innerText = Math.round(humidity60F);

    const secondaryDewPoint = calculateDewPoint(humidity60F, secondaryDewPointPressure.value);
    console.log(secondaryDewPoint);
    secondaryDewPointDisplay.innerText = secondaryDewPoint;

    const addWaterNV = humidity60F / 18 / 1000;

    const dry50FGasData = new GasData(components, '15.55', '15.55');
    const gasN = dry50FGasData.D * 1000 / dry50FGasData.M;

    const waterX = addWaterNV / gasN;
    const humidityFactor = 1 - waterX;

    const wetGasComponents = components.map((component) => {
        return {
            ...component,
            value: component.value * humidityFactor
        };
    });
    wetGasComponents.push({ name: 'water', value: waterX});
    writeCorrectedTable(wetGasComponents);

    const wetGasData = new GasData(wetGasComponents, combustionTSelect.value, meteringTSelect.value);

    const molesInCubicMeter = 1000 / wetGasData.V;
    const waterN = waterX * molesInCubicMeter;
    const humidity = waterN * 18 * 1000;
    console.log('m', humidity);
    waterContent.innerText = Math.round(humidity);

    // wetGasData.humidity = Math.round(humidity);
    console.log('wet:', wetGasData);

    writeWetReport(wetGasData, dryGasData);
}

export default function calculateAndReport() {
    const components = inputData.map(component => ({ ...component, value: (component.value / 100) || 0 }));
    const total = components.reduce((acc, component) => acc + component.value, 0) * 100;
    // console.log(total);
    totalControl.innerText = `${total.toFixed(4)}`;

    const gasData = new GasData(components, combustionTSelect.value, meteringTSelect.value);
    console.log('dry:', gasData);
    writeReport(gasData);

    wetGasCase(components, gasData);
}

combustionTSelect.addEventListener('input', calculateAndReport);
meteringTSelect.addEventListener('input', calculateAndReport);
dewPoint.addEventListener('input', calculateAndReport);
secondaryDewPointPressure.addEventListener('input', calculateAndReport);