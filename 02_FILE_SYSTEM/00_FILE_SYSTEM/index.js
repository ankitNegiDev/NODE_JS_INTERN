const {readFile ,readFileSync,writeFile,writeFileSync,appendFile,appendFileSync,copyFile,copyFileSync, statSync, unlinkSync,unlink}=require("fs");

// Crud 



// create file..
const data = "hello writing data in file text.txt";
const data2="second data is inserted";
writeFileSync('./test.txt', data);


// read file ...


// console.log("data is : ",readFileSync('./readingFile.txt','utf-8'));

/*
readFileSync('./test.txt','utf-8',function callback(error,data){
    if(error){
        console.log("error : ",error);
    }else{
        console.log("data : ",data);
    }
});
*/



// readfile with readFile..(callback is compulsory...)
// readFile('./readingFile.txt','utf-8',function callback(error,data){
//     if(error){
//         console.log("error: ",error);
//     }else{
//         console.log("data : ",data);
//     }
// });


// update...
const newData=`\n${new Date().getDate().toLocaleString()}`;

appendFileSync('./test.txt',newData);

// copy ....

copyFileSync('test.txt', './copyFile.txt');


// to see the file stas...
// statSync("fileName")


// deelte.
// unlinkSync("fileName")

unlinkSync('./deleteFile.txt');