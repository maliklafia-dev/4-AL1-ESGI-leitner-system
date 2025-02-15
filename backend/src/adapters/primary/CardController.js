import express from "express";

/** @swagger
 * tags:
 *   - name: Cards
 *     description: API for managing cards
 *   - name: Learning
 *     description: API for learning and quiz functionality
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Card:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The card's unique identifier
 *         question:
 *           type: string
 *           description: The question text
 *         answer:
 *           type: string
 *           description: The answer text
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Tags associated with the card
 *     CardUserData:
 *       type: object
 *       required:
 *         - question
 *         - answer
 *       properties:
 *         question:
 *           type: string
 *         answer:
 *           type: string
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *     CardId:
 *       type: string
 *       description: The unique identifier of a card
 */

/**
 * @swagger
 * tags:
 *   - name: Cards
 *     description: API for managing cards
 *   - name: Learning
 *     description: API for quiz and learning functionality
 */
class CardController {
  constructor(cardService) {
    this.router = express.Router();
    this.cardService = cardService;
    /**
     * @swagger
     * /cards:
     *   get:
     *     tags: [Cards]
     *     summary: Get all cards
     *     description: Used to fetch every card by given tags. If no tags are provided, it will fetch all cards.
     *     parameters:
     *       - in: query
     *         name: tags
     *         schema:
     *           type: string
     *         description: Comma-separated tags of cards to find. If not present, all cards will be returned.
     *         example: tag1,tag2
     *     responses:
     *       200:
     *         description: Found cards by tag query
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Card'
     *       500:
     *         description: Server error
     */
    this.router.get("/cards", this.getAllCards.bind(this));
    /**
     * @swagger
     * /cards:
     *   post:
     *     tags: [Cards]
     *     summary: Create a card
     *     description: Used to create a new card in the system. A new card will appear in the next quiz.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/CardUserData'
     *     responses:
     *       201:
     *         description: Created card
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Card'
     *       400:
     *         description: Bad request
     */
    this.router.post("/cards", this.createCard.bind(this));
    /**
     * @swagger
     * /cards/quizz:
     *   get:
     *     tags: [Learning]
     *     summary: Cards for the day
     *     description: Fetch all cards for a quiz on a given date. If no date is provided, the quiz is for today.
     *     parameters:
     *       - in: query
     *         name: date
     *         schema:
     *           type: string
     *           format: date
     *         description: Date of the quiz. If not provided, today is used.
     *         example: 2023-11-03
     *     responses:
     *       200:
     *         description: Returns all cards for today's quiz
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Card'
     *       400:
     *         description: Bad request
     */
    this.router.get("/cards/quizz", this.getQuizCards.bind(this));
    /**
     * @swagger
     * /cards/{cardId}/answer:
     *   patch:
     *     tags: [Learning]
     *     summary: Answer a question
     *     description: Used to answer a question. The body indicates whether the user's answer is correct or not.
     *     parameters:
     *       - in: path
     *         name: cardId
     *         required: true
     *         schema:
     *           $ref: '#/components/schemas/CardId'
     *         description: ID of the card being answered
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required: [isValid]
     *             properties:
     *               isValid:
     *                 type: boolean
     *                 description: True if the user answered correctly, false otherwise
     *               userAnswer:
     *                 type: string
     *                 description: The user's answer text
     *               forceValidation:
     *                 type: boolean
     *                 description: Force the system to re-check the answer
     *     responses:
     *       204:
     *         description: The answer has been recorded
     *       400:
     *         description: Bad request
     *       404:
     *         description: Card not found
     */
    this.router.patch("/cards/:cardId/answer", this.answerCard.bind(this));
  }

  async getAllCards(req, res) {
    try {
      const tags = req.query.tags ? req.query.tags.split(",") : [];
      const cards = await this.cardService.getAllCards(tags);
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async createCard(req, res) {
    try {
      if (!req.body || !req.body.question || !req.body.answer) {
        return res.status(400).json({
          error: "Missing required fields: question and answer are required",
        });
      }
      const newCard = await this.cardService.createCard(req.body);
      res.status(201).json(newCard);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getQuizCards(req, res) {
    try {
      const date = req.query.date ? new Date(req.query.date) : new Date();
      const cards = await this.cardService.getCardsForQuiz(date);
      res.status(200).json(cards);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async answerCard(req, res) {
    try {
      const { isValid, userAnswer, forceValidation = false } = req.body;
      if (isValid === undefined) {
        return res.status(400).json({ error: "isValid is required" });
      }

      await this.cardService.answerCard(
        req.params.cardId,
        isValid,
        userAnswer,
        forceValidation,
      );

      res.status(204).send();
    } catch (error) {
      if (error.message === "Card not found") {
        return res.status(404).json({ error: error.message });
      }
      res.status(400).json({ error: error.message });
    }
  }
}

export default CardController;
