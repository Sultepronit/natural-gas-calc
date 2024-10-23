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
        u_Hc_G: Number(constsTable[index][22].replace(',', '.')),
        a: Number(constsTable[index][5]),
        b: Number(constsTable[index][6]),
        c: Number(constsTable[index][7]),
        d: Number(constsTable[index][8]),
        e: Number(constsTable[index][9]),
        s: {
            '0': Number(constsTable[index][11].replace(',', '.')),
            '15': Number(constsTable[index][12].replace(',', '.')),
            '15.55': Number(constsTable[index][13].replace(',', '.')),
            '20': Number(constsTable[index][14].replace(',', '.')),
        },
        u_s: Number(constsTable[index][15].replace(',', '.')),
        flamability: flamabilityTable[name]
    }
});

console.log(componentConsts);