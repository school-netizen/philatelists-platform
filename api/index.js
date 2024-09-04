import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/userRoutes.js';
dotenv.config();

const app = express();
const PORT = 3000;

//Let's Connect to DataBase :)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log(err))


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use("/api/user", userRouter);
