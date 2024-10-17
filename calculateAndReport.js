import GasData from "./calculators/gasData";
import calculateHumidity from "./calculators/humidity/calculateHumidity";
import { inputData } from "./mainInput";
import writeInitTable, { writeCorrectedTable } from "./writeInitTable";
import writeReport, { writeWetReport } from "./writeReport";

const combustionTSelect = document.getElementById('combustuion-t');
const meteringTSelect = document.getElementById('metering-t');

const dewPoint = document.getElementById('dew-point');
const waterContent = document.getElementById('water-content');

const totalControl = document.getElementById('total-control');

export default function calculateAndReport() {
    const components = inputData.map(component => ({ ...component, value: (component.value / 100) || 0 }));
    const total = components.reduce((acc, component) => acc + component.value, 0) * 100;
    // console.log(total);
    totalControl.innerText = `${total.toFixed(4)} %`;

    // writeInitTable(components);
    const gasData = new GasData(components, combustionTSelect.value, meteringTSelect.value);
    console.log(gasData);
    writeReport(gasData);

    const humidity = calculateHumidity(dewPoint.value);
    console.log(humidity);
    waterContent.innerText = (humidity < 28 ? '< ' : '') + Math.round(humidity);

    // const addWaterMV = 190.6183;
    const addWaterNV = humidity / 18 / 1000;

    const dryGasData = new GasData(components, '15.55', '15.55');
    const gasN = dryGasData.D * 1000 / dryGasData.M;

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
    console.log(wetGasData);

    writeWetReport(wetGasData);
}

combustionTSelect.addEventListener('input', calculateAndReport);
meteringTSelect.addEventListener('input', calculateAndReport);
dewPoint.addEventListener('input', calculateAndReport);