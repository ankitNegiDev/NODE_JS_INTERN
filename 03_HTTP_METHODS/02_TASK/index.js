const express = require("express");
const app = express();

const port = 3000;
app.listen(port, function callback() {
    console.log("server is listening on prot no ", port);
})

app.get('/', function callback(request, response) {
    console.log("get request \n");
    return response.send("<h1> home page</h1>")
})

app.get('/about', function callback(request, response) {
    console.log("get request on /about\n");
    return response.send("<h1>about page</h1>");
})

app.get('/profile',function callback(request,response){
    console.log("get request on /profile\n");
    return response.send("<h1>profile page</h1>");
})