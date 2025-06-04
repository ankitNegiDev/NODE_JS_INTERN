// file curd..

import fs from 'fs';
import path from 'path';

// __dirname
console.log("current path : ",__dirname);

// const filePath=path.join(__dirname,anyfolderif,'data-sync.txt');
const filePath = path.join(__dirname, 'data-sync.txt');


function createFileSync(filePath,content){
    try{
        fs.writeFileSync(filePath,content); // over write content if file with content exist. else it will create new.
        console.log("file created succcefully");
    }catch(error){
        console.log("erro in create file",error);
    }
}