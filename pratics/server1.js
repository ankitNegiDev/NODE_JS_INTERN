import express from "express";
import userRouter from "./routes/user.js";

const app=express();

app.use(express.json()); 

app.use(function appLevelMiddleware(req,res,nex){
    console.log("app level");
    next();
})
app.use('/user',userRouter);

app.get('/',function callback(req,res){
    res.send("welcome on home page-----");
})

app.listen(3000,function (){
    console.log('server is running on port 3000');
})