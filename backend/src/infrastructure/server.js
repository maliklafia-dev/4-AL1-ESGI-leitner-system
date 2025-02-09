import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load env vars before anything else
dotenv.config();

console.log("Starting server...");

const app = express();
const PORT = process.env.PORT || 8080;

// Database connection
const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MongoDB URI is not defined in environment variables');
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
};

// Connect to database
await connectDB();

app.get("/", (req, res) => {
    console.log("Route accessed");
    res.send("Connected to MongoDB - Server is running successfully!");
});

app.listen(PORT, () => {
    console.log(`Server ==> http://localhost:${PORT}`);  
});