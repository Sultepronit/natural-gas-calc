import { constsTable } from "./constsTable";
import flamabilityTable from "./flamabilityTable";
import { names } from "./names";

export const componentConsts = names.map((name, index) => {
    return {
        name,
        M: Number(constsTable[index][3].replace(',', '.')),
        Hc_G: {
            '0': Number(constsTable[index][17].replace(',', '.')),
            '15': Number(constsTable[index][18].replace(',', '.')),
            '15.55': Number(constsTable[index][19].replace(',', '.')),
            '20': Number(constsTable[index][20].replace(',', '.')),
            '25': Number(constsTable[index][21].replace(',', '.')),
        },
        b: Number(constsTable[index][6].replace(',', '.')),
        s: {
            '0': Number(constsTable[index][11].replace(',', '.')),
            '15': Number(constsTable[index][12].replace(',', '.')),
            '15.55': Number(constsTable[index][13].replace(',', '.')),
            '20': Number(constsTable[index][14].replace(',', '.')),
        },
        flamability: flamabilityTable[name]
    }
});

console.log(componentConsts);