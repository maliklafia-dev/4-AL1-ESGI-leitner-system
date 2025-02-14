import CardRepositoryPort from '../../../domain/ports/secondary/CardRepositoryPort.js';
import Card from '../../../domain/models/Card.js';

class CardRepository extends CardRepositoryPort {
    constructor(mongoClient) {
        super();
        this.collection = mongoClient.db.collection('cards');
    }

    async save(card) {
        const cardData = {
            _id: card.id,
            question: card.question,
            answer: card.answer,
            tag: card.tag,
            category: card.category,
            lastAnsweredAt: card.lastAnsweredAt,
            createdAt: card.createdAt,
            updatedAt: new Date()
        };

        await this.collection.updateOne(
            { _id: cardData._id },
            { $set: cardData },
            { upsert: true }
        );

        return card;
    }

    async findById(id) {
        const cardData = await this.collection.findOne({ _id: id });
        if (!cardData) return null;
        
        return new Card({
            id: cardData._id,
            question: cardData.question,
            answer: cardData.answer,
            tag: cardData.tag,
            category: cardData.category,
            lastAnsweredAt: cardData.lastAnsweredAt,
            createdAt: cardData.createdAt,
            updatedAt: cardData.updatedAt
        });
    }

    async findAll() {
        const cardsData = await this.collection.find().toArray();
        return cardsData.map(cardData => new Card({
            id: cardData._id,
            question: cardData.question,
            answer: cardData.answer,
            tag: cardData.tag,
            category: cardData.category,
            lastAnsweredAt: cardData.lastAnsweredAt,
            createdAt: cardData.createdAt,
            updatedAt: cardData.updatedAt
        }));
    }

    async delete(id) {
        const result = await this.collection.deleteOne({ _id: id });
        return result.deletedCount > 0;
    }

    async exists(id) {
        const count = await this.collection.countDocuments({ _id: id }, { limit: 1 });
        return count > 0;
    }
}

export default  CardRepository ;
