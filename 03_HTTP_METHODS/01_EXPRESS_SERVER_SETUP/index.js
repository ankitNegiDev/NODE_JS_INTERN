//  npm install --save-dev nodemon
//  * npx nodemon index.js


const express = require("express");
const app= express();

app.use(express.json());

const port=3000;
app.listen(port,function callback(){
    console.log("server is listening on prot no ",port);
})

app.get('/',function callback(request,response){
    console.log("get request \n");
    response.send("on / or home sending response using get\n");
})

app.get('/about',function callback(request,response){
    console.log("get request on /about\n");
    // return response.send("<h1> about page</h1>")
    return response.send("on /about sending response using get\n");
})


app.post('/post',function callback(request,response){
    console.log("post request \n");
    console.log("request.body is : ",request.body);
    return response.send("<h1> hello from post request</h1>");
}) 

app.put('/put',function callback(request,response){
    console.log("put request\n");
    console.log("request.body put request : ",request.body);
    console.log("request.body.username : ",request.body.userName);
    let newData={
        username:"xyz",
        age:2556,
    }
    request.body=newData;
    console.log("request.body put request new data : ", request.body);
    return response.send("<h1>Hello from put request </h1>");
})

app.patch('/patch',function callback(request,response){
    console.log("patch request\n");
    console.log("request.body.username patch request : ", request.body.userName);
    let newUsername = "abc";
    request.body.userName = newUsername;
    console.log("request.body.username : ", request.body.userName);
    return response.send("<h1> hello from patch request</h1>");
})

app.delete('/delete',function callback(request,response){
    console.log("delete request\n");
    let data=request.body;
    data.pop();
    console.log("request . body data \n",request.body);
    return response.send("<h1>hello from deelte request</h1>");
});
