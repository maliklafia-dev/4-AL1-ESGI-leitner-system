const express = require('express');
const QuizService = require('../../domain/services/primary/QuizService');

class QuizController {
    constructor() {
        this.router = express.Router();
        this.quizService = new QuizService();

        this.router.post('/quiz', this.createQuiz.bind(this));
        this.router.post('/quiz/:quizId/start', this.startQuiz.bind(this));
        this.router.patch('/quiz/:quizId/answer', this.recordAnswer.bind(this));
        this.router.get('/quiz/:quizId/progress', this.getQuizProgress.bind(this));
        this.router.post('/quiz/:quizId/complete', this.completeQuiz.bind(this));
    }

    createQuiz(req, res) {
        try {
            const quiz = this.quizService.createQuiz(req.body);
            res.status(201).json(quiz);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    startQuiz(req, res) {
        try {
            const quiz = this.quizService.startQuiz(req.params.quizId);
            res.status(200).json(quiz);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    recordAnswer(req, res) {
        try {
            const { cardId, isCorrect } = req.body;
            if (!cardId || isCorrect === undefined) {
                return res.status(400).json({ error: 'cardId and isCorrect are required' });
            }
            this.quizService.recordAnswer(req.params.quizId, cardId, isCorrect);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    getQuizProgress(req, res) {
        try {
            const progress = this.quizService.getQuizProgress(req.params.quizId);
            res.status(200).json(progress);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    completeQuiz(req, res) {
        try {
            this.quizService.completeQuiz(req.params.quizId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new QuizController().router;
