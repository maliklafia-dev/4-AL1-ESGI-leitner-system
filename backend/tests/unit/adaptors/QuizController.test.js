const request = require('supertest');
const express = require('express');
const quizRouter = require('../../../src/adaptors/primary/QuizController');
const app = express();
app.use(express.json());
app.use(quizRouter);

describe('QuizController', () => {
    test('should create a new quiz', async () => {
        const response = await request(app)
            .post('/quiz')
            .send({ userId: '123', cards: [{ id: 'abc' }] });

        expect(response.status).toBe(201);
        expect(response.body.userId).toBe('123');
    });

    test('should start a quiz', async () => {
        const quiz = await request(app).post('/quiz').send({ userId: '123', cards: [{ id: 'abc' }] });
        const response = await request(app).post(`/quiz/${quiz.body.id}/start`);

        expect(response.status).toBe(200);
        expect(response.body.status).toBe('IN_PROGRESS');
    });

    test('should return error when recording an answer with missing fields', async () => {
        const quiz = await request(app).post('/quiz').send({ userId: '123', cards: [{ id: 'abc' }] });
        const response = await request(app).patch(`/quiz/${quiz.body.id}/answer`).send({});

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('cardId and isCorrect are required');
    });
});
