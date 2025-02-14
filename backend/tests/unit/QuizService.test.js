import QuizService from '../../src/domain/services/QuizService.js';
import Quiz from '../../src/domain/models/Quiz.js';
import Card from '../../src/domain/models/Card.js';

describe('QuizService', () => {
    let quizService;
    let card1, card2, card3;

    beforeEach(() => {
        quizService = new QuizService();

        // Créons des cartes fictives
        card1 = new Card({ question: "What is TDD?", answer: "Test-Driven Development", tag: "testing" });
        card2 = new Card({ question: "What is SOLID?", answer: "Principles of OOP", tag: "design" });
        card3 = new Card({ question: "What is DDD?", answer: "Domain-Driven Design", tag: "architecture" });
    });

    test('should create a new quiz', () => {
        const quizData = { userId: "user123", date: new Date(), cards: [card1, card2] };
        const quiz = quizService.createQuiz(quizData);

        expect(quiz).toBeInstanceOf(Quiz);
        expect(quiz.cards.length).toBe(2);
        expect(quiz.status).toBe(Quiz.STATUSES.PENDING);
    });

    test('should start a quiz', () => {
        const quizData = { userId: "user123", cards: [card1, card2] };
        const quiz = quizService.createQuiz(quizData);

        quizService.startQuiz(quiz.id);
        expect(quiz.status).toBe(Quiz.STATUSES.IN_PROGRESS);
        expect(quiz.startedAt).not.toBeNull();
    });

    test('should record an answer', () => {
        const quizData = { userId: "user123", cards: [card1, card2] };
        const quiz = quizService.createQuiz(quizData);
        quizService.startQuiz(quiz.id);

        quizService.recordAnswer(quiz.id, card1.id, true);
        expect(quiz.getAnsweredCards().length).toBe(1);
        expect(quiz.getRemainingCards().length).toBe(1);
    });

    test('should complete a quiz when all cards are answered', () => {
        const quizData = { userId: "user123", cards: [card1, card2] };
        const quiz = quizService.createQuiz(quizData);
        quizService.startQuiz(quiz.id);

        quizService.recordAnswer(quiz.id, card1.id, true);
        quizService.recordAnswer(quiz.id, card2.id, false);

        quizService.completeQuiz(quiz.id);
        expect(quiz.status).toBe(Quiz.STATUSES.COMPLETED);
        expect(quiz.completedAt).not.toBeNull();
    });

    test('should throw error when starting an already started quiz', () => {
        const quizData = { userId: "user123", cards: [card1, card2] };
        const quiz = quizService.createQuiz(quizData);
        quizService.startQuiz(quiz.id);

        expect(() => quizService.startQuiz(quiz.id)).toThrow('Quiz can only be started when pending');
    });

    test('should throw error if quiz not found', () => {
        expect(() => quizService.getQuizProgress('nonexistent-id')).toThrow('Quiz not found');
    });
});
