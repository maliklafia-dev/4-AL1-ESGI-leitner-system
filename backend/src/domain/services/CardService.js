// src/domain/services/CardService.js
import CardServicePort from '../ports/primary/CardServicePort.js';
import Card from '../models/Card.js';

class CardService extends CardServicePort {
    constructor(cardRepository) {
        super();
        this.cardRepository = cardRepository;
    }

    async createCard(cardData) {
        const card = new Card(cardData);
        return this.cardRepository.save(card);
    }

    async getCardById(cardId) {
        const card = await this.cardRepository.findById(cardId);
        if (!card) {
            throw new Error('Card not found');
        }
        return card;
    }

    async updateCard(cardId, updatedData) {
        const existingCard = await this.getCardById(cardId);
        const updatedCard = new Card({
            ...updatedData,
            id: cardId,
            category: existingCard.category,
            lastAnsweredAt: existingCard.lastAnsweredAt,
            createdAt: existingCard.createdAt
        });
        return this.cardRepository.save(updatedCard);
    }

    async answerCardCorrectly(cardId) {
        const card = await this.getCardById(cardId);
        card.answerCorrectly();
        return this.cardRepository.save(card);
    }

    async answerCardIncorrectly(cardId) {
        const card = await this.getCardById(cardId);
        card.answerIncorrectly();
        return this.cardRepository.save(card);
    }
}

export default CardService;