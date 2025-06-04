import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        trim: true, // remove white space from start and end.
        maxlength: 20,
    }
});

const tweet = mongoose.model("tweet", tweetSchema); // tweet collection
export default tweet;

