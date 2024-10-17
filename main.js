import './style.css';
import writeReport, { writeWetReport } from './writeReport';
import GasData from './calculators/gasData';
import gatherConsts from './calculators/gatherConts';
import writeInitTable, { writeCorrectedTable } from './writeInitTable';
import { inputData, prepareMainInput } from './mainInput';
import { inputData as example3 } from './input-data';
import { example2 } from './example2';
import { realData } from './realData';
import calculateAndReport from './calculateAndReport';
import { table } from './calculators/humidity/table';
import calculateHumidity from './calculators/humidity/calculateHumidity';

// export const temperatures = ['0', '15', '15.55', '20', '25'];

const addDisplay = document.getElementById('add-display');

prepareMainInput();

calculateAndReport();

console.log(table);

console.log(calculateHumidity(-40));

console.log(calculateHumidity(-0.1));
console.log(calculateHumidity(0));
console.log(calculateHumidity(0.1));
console.log(calculateHumidity(6.7));

console.log(calculateHumidity(40));

console.log(calculateHumidity(99));
console.log(calculateHumidity(100));
console.log(calculateHumidity(101));