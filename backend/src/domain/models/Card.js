const { v4: uuidv4 } = require('uuid');

class Card {
    static CATEGORIES = ['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH', 'SIXTH', 'SEVENTH', 'DONE'];

    constructor(props) {
        this.validateProps(props);

        this.id = uuidv4();
        this.question = props.question;
        this.answer = props.answer;
        this.tag = props.tag;
        this.category = 'FIRST';
        this.lastAnsweredAt = null;
    }

    validateProps(props) {
        if (!props.question) {
            throw new Error('Question is required');
        }
        if (!props.answer) {
            throw new Error('Answer is required');
        }
    }

    answerCorrectly() {
        const currentIndex = Card.CATEGORIES.indexOf(this.category);
        if (currentIndex < Card.CATEGORIES.length - 1) {
            this.category = Card.CATEGORIES[currentIndex + 1];
        }
        this.lastAnsweredAt = new Date();
    }

    answerIncorrectly() {
        this.category = 'FIRST';
        this.lastAnsweredAt = new Date();
    }
}

module.exports = Card;