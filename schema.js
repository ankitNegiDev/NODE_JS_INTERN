// name , image url,rating , couisins, deliverytime.


import mongoose from "mongoose";

const resturantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, // remove white space from start and end.
        maxlength: 20,
    },
    imageUrl:{
        type:String,
        required: true,
        trim: true, // remove white space from start and end.
        maxlength: 20,
    },
    couisins:{
        type: String,
        required: true,
        trim: true, // remove white space from start and end.
        maxlength: 20,
    },
    deliveryTime:{
        type: String,
        required: true,
        trim: true, // remove white space from start and end.
        maxlength: 20,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    }
});

const Resturant = mongoose.model("Resturant", resturantSchema); // tweet collection
export default resturantSchema;

