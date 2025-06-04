import mongoose from 'mongoose';
import express from 'express';
import { commentRoutes } from './routes/commentRoutes.js';

const app=express();


app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/sampleDB')
.then(()=>{
    console.log("db connected");
})
.catch((error)=>{
    console.log("db not connected error occured\n");
})


// app.use(commentRoutes(app))
commentRoutes(app);
userRoutes(app);





const PORT=3000;

app.get('/',(req,res)=>{
    return res.send("<h1>welcome route</h1>");
})

app.listen(PORT,()=>{
    console.log("server started on port ",PORT);
})


// index -> routes () -> controller -> 
