import express from 'express';
const app = express();
import mongoose from 'mongoose';
import { resturantRoutes } from './routes/resturantRoutes.js';

mongoose.connect('mongodb+srv://ankitnegi9104:eJEX9GlSJH9U0Wyy@cluster0.1fv7jqt.mongodb.net/')
    .then(() => {
        console.log("DB CONNECTED");
    })
    .catch((err) => {
        console.log("DB NOT CONNECTED", err);
    })

app.use(express.json()) //middleware

resturantRoutes(app);

app.get('/', (req, res) => {
    res.send("Welcome to root route")
})


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`SERVER CONNECTED AT PORT:${PORT}`);
})


// mongodb+srv://samarthvohraindia:TqyEEJgrzyHbJJCQ@cluster0.vpxahlo.mongodb.net/
// samarthvohraindia
// TqyEEJgrzyHbJJCQ

// index -> routes () -> controller ->


// eJEX9GlSJH9U0Wyy
// ankitnegi9104

// mongodb + srv://ankitnegi9104:eJEX9GlSJH9U0Wyy@cluster0.1fv7jqt.mongodb.net/