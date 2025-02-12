const Card = require('../../models/Card');

class CardService {
    constructor() {
        this.cards = new Map();
    }

    createCard(cardData) {
        const card = new Card(cardData);
        this.cards.set(card.id, card);
        return card;
    }

    getCardById(cardId) {
        if (!this.cards.has(cardId)) {
            throw new Error('Card not found');
        }
        return this.cards.get(cardId);
    }

    getAllCards(tags = []) {
        let cardsArray = Array.from(this.cards.values());
        if (tags.length > 0) {
            cardsArray = cardsArray.filter(card => tags.includes(card.tag));
        }
        return cardsArray;
    }

    updateCard(cardId, updatedData) {
        const card = this.getCardById(cardId);
        Object.assign(card, updatedData);
        return card;
    }

    answerCardCorrectly(cardId) {
        const card = this.getCardById(cardId);
        card.answerCorrectly();
        return card;
    }

    answerCardIncorrectly(cardId) {
        const card = this.getCardById(cardId);
        card.answerIncorrectly();
        return card;
    }
}

module.exports = CardService;
