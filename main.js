import './style.css';
import './print-style.css';
// import writeReport, { writeWetReport } from './writeReport';
// import GasData from './calculators/gasData';
// import gatherConsts from './calculators/gatherConts';
// import writeInitTable, { writeCorrectedTable } from './writeInitTable';
import { prepareMainInput } from './mainInput';
// import { inputData as example3 } from './input-data';
// import { example2 } from './example2';
// import { realData } from './realData';
import calculateAndReport from './calculateAndReport';
// import { table } from './calculators/humidity/table';
// import calculateHumidity from './calculators/humidity/calculateHumidity';
// import { unitedTable } from './calculators/humidity/unitedTable';
// import calculateHumidity2 from './calculators/humidity/calculateHumidity2';

// export const temperatures = ['0', '15', '15.55', '20', '25'];

prepareMainInput();

calculateAndReport();
