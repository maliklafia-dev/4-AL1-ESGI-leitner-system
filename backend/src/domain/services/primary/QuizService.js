const Quiz = require('../../models/Quiz');

class QuizService {
    constructor() {
        this.quizes = new Map(); // Simule une base de données en mémoire
    }

    createQuiz(quizData) {
        const quiz = new Quiz(quizData);
        this.quizes.set(quiz.id, quiz);
        return quiz;
    }

    startQuiz(quizId) {
        const quiz = this.getQuizById(quizId);
        quiz.start();
        return quiz;
    }

    recordAnswer(quizId, cardId, isCorrect) {
        const quiz = this.getQuizById(quizId);
        quiz.recordAnswer(cardId, isCorrect);
        return quiz;
    }

    completeQuiz(quizId) {
        const quiz = this.getQuizById(quizId);
        quiz.complete();
        return quiz;
    }

    getQuizProgress(quizId) {
        const quiz = this.getQuizById(quizId);
        return quiz.getProgress();
    }

    getQuizById(quizId) {
        if (!this.quizes.has(quizId)) {
            throw new Error('Quiz not found');
        }
        return this.quizes.get(quizId);
    }
}

module.exports = QuizService;
