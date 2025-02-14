import CardService from '../../src/domain/services/CardService.js';
import Card from '../../src/domain/models/Card.js';

describe('CardService', () => {
    let cardService;
    let cardRepositoryMock;
    
    beforeEach(() => {
        // Create mock repository with implementations
        cardRepositoryMock = {
            save: jest.fn(card => Promise.resolve(card)),
            findById: jest.fn(),
            findAll: jest.fn()
        };
        
        // Initialize service with mock repository
        cardService = new CardService(cardRepositoryMock);
    });

    describe('createCard', () => {
        test('should create a new card with correct initial values', async () => {
            const cardData = {
                question: "What is TDD?",
                answer: "Test-Driven Development",
                tag: "testing"
            };

            const createdCard = await cardService.createCard(cardData);

            expect(createdCard.question).toBe(cardData.question);
            expect(createdCard.answer).toBe(cardData.answer);
            expect(createdCard.tag).toBe(cardData.tag);
            expect(createdCard.category).toBe('FIRST');
            expect(cardRepositoryMock.save).toHaveBeenCalled();
        });

        test('should throw error if required fields are missing', async () => {
            const invalidCardData = { question: "What is TDD?" };
            
            await expect(cardService.createCard(invalidCardData))
                .rejects
                .toThrow('Card must have both question and answer');
        });
    });

    describe('getCardById', () => {
        test('should retrieve a card by ID', async () => {
            const mockCard = {
                id: 'test-id',
                question: "What is SOLID?",
                answer: "Principles of OOP",
                tag: "design",
                category: 'FIRST'
            };

            // Mock the findById implementation to return our mock card
            cardRepositoryMock.findById.mockResolvedValue(mockCard);

            const retrievedCard = await cardService.getCardById('test-id');
            
            expect(retrievedCard).toEqual(mockCard);
            expect(cardRepositoryMock.findById).toHaveBeenCalledWith('test-id');
        });

        test('should throw error when card not found', async () => {
            // Mock findById to return null, simulating no card found
            cardRepositoryMock.findById.mockResolvedValue(null);

            await expect(cardService.getCardById('nonexistent-id'))
                .rejects
                .toThrow('Card not found');
        });
    });

    describe('updateCard', () => {
        test('should update card with new values', async () => {
            const existingCard = {
                id: 'test-id',
                question: "Old Question",
                answer: "Old Answer",
                tag: "general",
                category: 'FIRST',
                lastAnsweredAt: new Date(),
                createdAt: new Date()
            };

            const updateData = {
                question: "New Question",
                answer: "New Answer"
            };

            cardRepositoryMock.findById.mockResolvedValue(existingCard);

            const updatedCard = await cardService.updateCard('test-id', updateData);

            expect(updatedCard.question).toBe(updateData.question);
            expect(updatedCard.answer).toBe(updateData.answer);
            expect(updatedCard.category).toBe(existingCard.category);
            expect(cardRepositoryMock.save).toHaveBeenCalled();
        });
    });

    describe('answerCard', () => {
        test('should handle correct answer', async () => {
            const card = {
                id: 'test-id',
                question: "What is DDD?",
                answer: "Domain-Driven Design",
                category: 'FIRST',
                answerCorrectly: jest.fn(function() {
                    this.category = 'SECOND';
                    return this;
                })
            };

            cardRepositoryMock.findById.mockResolvedValue(card);

            const updatedCard = await cardService.answerCardCorrectly('test-id');
            
            expect(updatedCard.category).toBe('SECOND');
            expect(cardRepositoryMock.save).toHaveBeenCalled();
        });

        test('should handle incorrect answer', async () => {
            const card = {
                id: 'test-id',
                question: "What is Clean Code?",
                answer: "Readable code",
                category: 'SECOND',
                answerIncorrectly: jest.fn(function() {
                    this.category = 'FIRST';
                    return this;
                })
            };

            cardRepositoryMock.findById.mockResolvedValue(card);

            const updatedCard = await cardService.answerCardIncorrectly('test-id');
            
            expect(updatedCard.category).toBe('FIRST');
            expect(cardRepositoryMock.save).toHaveBeenCalled();
        });
    });

    describe('getAllCards', () => {
        test('should retrieve all cards', async () => {
            const mockCards = [
                { id: '1', question: 'Q1', answer: 'A1', category: 'FIRST' },
                { id: '2', question: 'Q2', answer: 'A2', category: 'SECOND' }
            ];
            
            cardRepositoryMock.findAll.mockResolvedValue(mockCards);
            
            const cards = await cardService.getAllCards();
            
            expect(cards).toEqual(mockCards);
            expect(cardRepositoryMock.findAll).toHaveBeenCalled();
        });
    });
});