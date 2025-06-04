import mongoose from "mongoose";

const postSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true,
        trim:true,
        minlength:20,
        maxlength:40,
    }
})

// collection / modal
export const Post= mongoose.model("post",postSchema); // post collection.
