import { csvData } from "./csv-data";

const csvRows = csvData.split('\n');
export const constsTable = csvRows.map(row => row.split(';'));
