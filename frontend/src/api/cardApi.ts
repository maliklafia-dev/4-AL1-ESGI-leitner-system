const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export const fetchQuizCards = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/cards/quizz`);
    if (!response.ok) throw new Error("Error fetching quiz cards");
    return await response.json();
  } catch (error) {
    console.error("API Error (fetchQuizCards):", error);
    return [];
  }
};

export const answerCard = async (cardId: string, isValid: boolean) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cards/${cardId}/answer`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isValid }),
    });

    if (!response.ok) throw new Error("Error updating card status");

    return response;
  } catch (error) {
    console.error("API Error (answerCard):", error);
  }
};

export const createCard = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cards`);
      if (!response.ok) {
        throw new Error("Erreur lors du chargement des cartes");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur API:", error);
    }
  };
