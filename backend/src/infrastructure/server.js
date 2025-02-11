import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import CardController from '../adapters/primary/CardController.js';
import CardService from '../domain/services/CardService.js';
import MongoCardRepository from '../adapters/secondary/repositories/MongoCardRepository.js';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

console.log("Starting server...");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;
 
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Card API',
            version: '1.0.0',
            description: 'API for managing flashcards',
        },
    },
    apis: ['./src/adapters/primary/CardController.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MongoDB URI is not defined in environment variables');
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected");

        const cardRepository = new MongoCardRepository(mongoose.connection);
        const cardService = new CardService(cardRepository);
        const cardController = new CardController(cardService);

        app.use('/api/cards', cardController.getRouter());

    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
};

await connectDB();

app.get("/", (req, res) => {
    console.log("Route accessed");
    res.send("Connected to MongoDB - Server is running successfully!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        message: 'Something went wrong!',
        error: err.message 
    });
});

app.listen(PORT, () => {
    console.log(`Server ==> http://localhost:${PORT}`);
});