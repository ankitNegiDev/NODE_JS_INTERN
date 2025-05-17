const express = require ('express');
const app = express();

const PORT=5050;

app.listen(PORT,()=>{
    console.log("server running on port ",PORT);
})

// middleware .. it runs on every incoming request
// app.use(function callback(req,res,next){
//     console.log("i am 1st middle ware funciton thanks");
//     // because req-res cyscle ends here ..
//     // res.send("i am middle ware \n");
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("i am 2nd middleware \n");
//     next();
// })


app.use('/sam/:id',(req,res,next)=>{
    const idd=req.params;
    console.log("id ",idd);
    if(idd==="3"){
        next();
    }else{
        res.send("<h1>invalid user</h1>");
    }
})


// app.use('/sam', (req, res, next) => {
//     console.log("/sam middlware to check");
//     const data = req.query.user;
//     console.log("data : ", data);
//     if (data === "samarth") {
//         next();
//     } else {
//         res.send("<h1>invalid user</h1>");
//     }
// })

app.get('/',function callback(req,res){
    console.log("root route");
    res.send("<h1>i am root route</h1>");
})

app.get('/about',function callback(req,res){
    console.log("root route");
    res.send("<h1>i am /about route</h1>");
})

app.get('/sam',function callback(req,res){
    console.log("sam one ");
    res.send("<h1> sam route</h1>");
})

app.get('/sam/:id',(req,res)=>{
    console.log("/sam/id route");
    res.send("<h1>/sam/id rotue</h>");
})

// localhost:5050/sam?user="samarth"