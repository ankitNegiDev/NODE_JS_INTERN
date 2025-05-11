
const http=require("http");

const server=http.createServer(function callback(request,response){
    console.log("a new request response is initiated \n");

    console.log("request object : ",request);
    response.end("Hello this is my first http  server\n");
})
const port=3000;
server.listen(port,function callback(){
    console.log(`server is listening on port : ${port}`);
})


