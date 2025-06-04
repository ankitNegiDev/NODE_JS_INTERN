// comment.modal.js

import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    userName: String,
    // if lot of things then do this else go with above one ..
    commment : {
        type:String,
        required : true,
        min:3,
        max:10,
        unique:true,
        trim:true
    }
});

export const comment = mongoose.model("comments", commentSchema); // comment collection

// export default comment

// mongoose.model("collection name",schema)