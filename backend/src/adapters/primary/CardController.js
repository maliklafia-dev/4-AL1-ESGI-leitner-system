// src/adapters/primary/CardController.js
import express from 'express';

class CardController {
    constructor(cardService) {
        this.cardService = cardService;
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post('/', this.createCard.bind(this));
        this.router.get('/:id', this.getCardById.bind(this));
        this.router.put('/:id', this.updateCard.bind(this));
        this.router.post('/:id/correct', this.answerCardCorrectly.bind(this));
        this.router.post('/:id/incorrect', this.answerCardIncorrectly.bind(this));
    }

    async createCard(req, res, next) {
        try {
            const cardData = {
                question: req.body.question,
                answer: req.body.answer,
                tag: req.body.tag
            };

            const card = await this.cardService.createCard(cardData);
            res.status(201).json(card);
        } catch (error) {
            next(error);
        }
    }

    async getCardById(req, res, next) {
        try {
            const card = await this.cardService.getCardById(req.params.id);
            res.json(card);
        } catch (error) {
            if (error.message === 'Card not found') {
                res.status(404).json({ message: error.message });
            } else {
                next(error);
            }
        }
    }

    async updateCard(req, res, next) {
        try {
            const cardData = {
                question: req.body.question,
                answer: req.body.answer,
                tag: req.body.tag
            };

            const card = await this.cardService.updateCard(req.params.id, cardData);
            res.json(card);
        } catch (error) {
            if (error.message === 'Card not found') {
                res.status(404).json({ message: error.message });
            } else {
                next(error);
            }
        }
    }

    async answerCardCorrectly(req, res, next) {
        try {
            const card = await this.cardService.answerCardCorrectly(req.params.id);
            res.json(card);
        } catch (error) {
            if (error.message === 'Card not found') {
                res.status(404).json({ message: error.message });
            } else {
                next(error);
            }
        }
    }

    async answerCardIncorrectly(req, res, next) {
        try {
            const card = await this.cardService.answerCardIncorrectly(req.params.id);
            res.json(card);
        } catch (error) {
            if (error.message === 'Card not found') {
                res.status(404).json({ message: error.message });
            } else {
                next(error);
            }
        }
    }

    getRouter() {
        return this.router;
    }
}

export default CardController;