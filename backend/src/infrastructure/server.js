import express from "express";
import dotenv from "dotenv";
import connectDB from "./db";

// Load env vars before anything else
dotenv.config();

console.log("Starting server...");

const app = express();
const PORT = process.env.PORT || 8080;

// Database connection
await connectDB();

app.get("/", (req, res) => {
    console.log("Route accessed");
    res.send("Connected to MongoDB - Server is running successfully!");
});

app.listen(PORT, () => {
    console.log(`Server ==> http://localhost:${PORT}`);  
});