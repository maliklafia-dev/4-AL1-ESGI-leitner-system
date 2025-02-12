const request = require('supertest');
const express = require('express');
const cardRouter = require('../../../src/adaptors/primary/CardController');

const app = express();
app.use(express.json());
app.use(cardRouter);

describe('CardController', () => {
    test('should create a new card', async () => {
        const response = await request(app)
            .post('/cards')
            .send({ question: 'What is JavaScript?', answer: 'A programming language', tag: 'Programming' });

        expect(response.status).toBe(201);
        expect(response.body.question).toBe('What is JavaScript?');
    });

    test('should return all cards', async () => {
        // Ajout d'une carte pour s'assurer qu'il y en a au moins une
        await request(app).post('/cards').send({ question: 'Test?', answer: 'Yes', tag: 'General' });

        const response = await request(app).get('/cards');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('should return error for invalid answer data', async () => {
        const response = await request(app)
            .patch('/cards/invalid-id/answer')
            .send({});

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('isValid is required');
    });
});
