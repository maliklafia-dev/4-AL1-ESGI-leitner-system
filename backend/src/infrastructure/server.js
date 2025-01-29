import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT | 8080;

connectDB();

app.get("/", (req, res) => {
    res.send("Connected to MongoDB - Server is running successfully !");
});

app.listen(PORT, () => {
    console.log(`Server ==> hhtp://localhost:${PORT}`);
});