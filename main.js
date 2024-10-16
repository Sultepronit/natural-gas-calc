import './style.css';
import writeReport, { writeWetReport } from './writeReport';
import GasData from './calculators/gasData';
import gatherConsts from './calculators/gatherConts';
import { inputData } from './input-data';
import { example2 } from './example2';
import writeInitTable, { writeCorrectedTable } from './writeInitTable';


// const components = gatherConsts(inputData);
// const components = gatherConsts(example2);
// console.log(components);

// export const temperatures = ['0', '15', '15.55', '20', '25'];

const addDisplay = document.getElementById('add-display');

const combustionTSelect = document.getElementById('combustuion-t');
const meteringTSelect = document.getElementById('metering-t');

// const addWater = {
//     mgPerCMeter = 
// }

function calculateAndReport() {
    // const gasData = new GasData(example2, combustionTSelect.value, meteringTSelect.value);
    writeInitTable(inputData);
    const gasData = new GasData(inputData, combustionTSelect.value, meteringTSelect.value);
    console.log(gasData);
    writeReport(gasData);

    const addWaterMV = 190.6183;
    const addWaterNV = addWaterMV / 18 / 1000;
    // console.log(addWaterNV);

    const dryGasData = new GasData(inputData, '15.55', '15.55');
    const gasN = dryGasData.D * 1000 / dryGasData.M;
    // console.log(gasN);

    const waterX = addWaterNV / gasN;
    // console.log(waterX);
    const humidityFactor = 1 - waterX;
    // console.log(humidityFactor);

    // console.log(inputData);

    const wetGasComponents = inputData.map((component) => {
        return {
            ...component,
            value: component.value * humidityFactor
        };
    });
    wetGasComponents.push({ name: 'water', value: waterX});
    // console.log(wetGasComponents);
    writeCorrectedTable(wetGasComponents);

    const wetGasData = new GasData(wetGasComponents, combustionTSelect.value, meteringTSelect.value);
    console.log(wetGasData);

    writeWetReport(wetGasData);
}

calculateAndReport();

combustionTSelect.addEventListener('input', calculateAndReport);
meteringTSelect.addEventListener('input', calculateAndReport);
