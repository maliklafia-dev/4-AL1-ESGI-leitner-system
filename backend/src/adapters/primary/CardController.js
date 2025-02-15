import express from "express";

class CardController {
  constructor(cardService) {
    this.router = express.Router();
    this.cardService = cardService;

    this.router.get("/cards", this.getAllCards.bind(this));
    this.router.post("/cards", this.createCard.bind(this));
    this.router.get("/cards/quizz", this.getQuizCards.bind(this));
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
          forceValidation
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
