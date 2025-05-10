// blocking .... synch

const { readFileSync } = require("fs");

console.log("10");
const result = readFileSync('./test.txt','utf-8')
console.log("result : ",result);
console.log("20");