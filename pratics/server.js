import http from 'http';

const server=http.createServer(function callback(req,res){
    if(req.url==='/ping'){
        res.end("hii pinged successfully");
    }else if(req.url === '/home'){
        res.end("hii user is on /home page");
    }
})

server.listen(3000,function callback(){
    console.log("server is listening on port 3000");
})