const fs= require("fs");

const path = require("path");
const filePath = path.join(__dirname, "test.txt");

function createFileSync(filePath,content){
    try{
        fs.createFileSync(filePath,content);
        console.log("created suceessfully");
    }catch(error){
        console.log('error in create file ',error);
    }
}

// createFileSync(filePath,"hii");


function readFileSync(){
    try{
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log("readed data is : ", data);
    }catch(error){
    
    }
}

// update ..

function updateFileSync(filePath,newContent){
    try{
        fs.appendFileSync(filePath,`\n${newContent}`);
        console.log("sucess inf updated");
    }catch(error){
        console.log("error in update : ",error);
    }
}

// updateFileSync(filePath,"updated content");

// delte ..

function deleteFile(filePath){
    try{
        fs.unlinkSync(filePath);
        console.log("file dated");
    }catch(error){
        console.log('errr in delte file',error);
    }
}