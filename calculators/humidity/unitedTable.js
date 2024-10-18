import { table1 } from "./table1";
import { table2 } from "./table2";

// export const unitedTable = [ ...table1, ...table2 ];
const table2popped = [...table2];
table2popped.pop();
export const unitedTable = [...table2popped, ...table1];
console.log(unitedTable);