const { readFile } = require("fs");

console.log("10");
readFile("./test.txt",'utf-8',function callback(err,data){
    if(err){
        console.log("error : ",err);
    }else{
        console.log("data:",data);
    }
})
console.log("20");


const os = require('os');
console.log("core length : ",os.cpus().length);
