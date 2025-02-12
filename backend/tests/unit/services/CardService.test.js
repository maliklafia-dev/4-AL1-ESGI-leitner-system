const CardService = require('../../../src/domain/services/primary/CardService');
const Card = require('../../../src/domain/models/Card');

describe('CardService', () => {
    let cardService;

    beforeEach(() => {
        cardService = new CardService();
    });

    test('should create a new card', () => {
        const cardData = { question: "What is TDD?", answer: "Test-Driven Development", tag: "testing" };
        const card = cardService.createCard(cardData);

        expect(card).toBeInstanceOf(Card);
        expect(card.question).toBe(cardData.question);
        expect(card.answer).toBe(cardData.answer);
        expect(card.tag).toBe(cardData.tag);
        expect(card.category).toBe('FIRST');
    });

    test('should retrieve a card by ID', () => {
        const cardData = { question: "What is SOLID?", answer: "Principles of OOP", tag: "design" };
        const createdCard = cardService.createCard(cardData);

        const retrievedCard = cardService.getCardById(createdCard.id);
        expect(retrievedCard).toEqual(createdCard);
    });

    test('should update a card', () => {
        const cardData = { question: "Old Question", answer: "Old Answer", tag: "general" };
        const createdCard = cardService.createCard(cardData);

        const updatedData = { question: "New Question", answer: "New Answer" };
        const updatedCard = cardService.updateCard(createdCard.id, updatedData);

        expect(updatedCard.question).toBe(updatedData.question);
        expect(updatedCard.answer).toBe(updatedData.answer);
    });

    test('should move a card to the next category when answered correctly', () => {
        const cardData = { question: "What is DDD?", answer: "Domain-Driven Design", tag: "architecture" };
        const createdCard = cardService.createCard(cardData);

        const updatedCard = cardService.answerCardCorrectly(createdCard.id);

        expect(updatedCard.category).toBe('SECOND');
    });

    test('should reset card to category FIRST when answered incorrectly', () => {
        const cardData = { question: "What is Clean Code?", answer: "Readable and maintainable code", tag: "best-practices" };
        const createdCard = cardService.createCard(cardData);

        cardService.answerCardCorrectly(createdCard.id); // Pass to category 2
        const resetCard = cardService.answerCardIncorrectly(createdCard.id);

        expect(resetCard.category).toBe('FIRST');
    });

    test('should throw an error if card not found', () => {
        expect(() => cardService.getCardById('nonexistent-id')).toThrow('Card not found');
    });
});
