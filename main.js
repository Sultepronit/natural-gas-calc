import './style.css';
import writeReport from './writeReport';
import GasData from './calculators/gasData';
import gatherConsts from './calculators/gatherConts';
import { inputData } from './input-data';


const components = gatherConsts(inputData);
console.log(components);

// const temperatures = [0, 15, 15.55, 20, 25];
// export const temperatures = ['0', '15', '15.55', '20', '25'];

const combustionTSelect = document.getElementById('combustuion-t');
const meteringTSelect = document.getElementById('metering-t');

function calculateAndReport() {
    const gasData = new GasData(components, combustionTSelect.value, meteringTSelect.value);
    console.log(gasData);
    writeReport(gasData);
}

calculateAndReport();

combustionTSelect.addEventListener('input', calculateAndReport);
meteringTSelect.addEventListener('input', calculateAndReport);
