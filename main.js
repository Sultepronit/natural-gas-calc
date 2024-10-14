import './style.css';
import gatherConsts from './calculators/gatherConts';
import { inputData } from './input-data';
import calculateM from './calculators/calculateM';
import calculateHc_G from './calculators/calculateHc_G';

console.log('here we go!');
console.log(inputData);

const inputWithConsts = gatherConsts(inputData);
console.log(inputWithConsts);

const M = calculateM(inputWithConsts);
console.log(M);

// 0C!!!!!!
const Hc_G = calculateHc_G(inputWithConsts);
console.log(Hc_G);

const Hm_G = Hc_G / M;
console.log(Hm_G);