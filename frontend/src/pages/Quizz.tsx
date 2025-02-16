import { useState, useEffect } from "react";
import { 
  Container, Box, Typography, Button, Card, CardContent, Stack, 
  LinearProgress, Snackbar, Alert, TextField 
} from "@mui/material";

export default function Quizz() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [response, setResponse] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const [canForceValidation, setCanForceValidation] = useState(false);

  const progress = ((currentIndex + 1) / cards.length) * 100;
  const currentCard = cards[currentIndex];

  useEffect(() => {
    const fetchQuizCards = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cards/quizz`);
        if (!res.ok) throw new Error("Error fetching cards");
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuizCards();
  }, []);

  const handleChangeResponse = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResponse(event.target.value);
  };

  const submitAnswer = async (id: number, isValid: boolean) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cards/${id}/answer`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isValid }),
      });

      if (!res.ok){
        console.log(res);
        throw new Error("Error submitting answer");
      } 

      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setResponse("");
        setCorrectAnswer(null);
        setCanForceValidation(false);
        setSuccessMessage("");
      }, 1000);

    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const handleAnswer = async () => {
    if (!currentCard) return;

    if (response.trim().toLowerCase() === currentCard.answer.trim().toLowerCase()) {
      setSuccessMessage("✅ Correct answer! 🎉");
      submitAnswer(currentCard.id, true);
    } else {
      setSuccessMessage("❌ Wrong answer 😕");
      setCorrectAnswer(currentCard.answer);
      setCanForceValidation(true);
    }
  };

  return (
    <Container maxWidth="sm">
      {isLoading ? (
        <Typography textAlign="center">Loading quiz cards...</Typography>
      ) : cards.length === 0 ? (
        <Typography textAlign="center">No cards to review today.</Typography>
      ) : (
        <Box textAlign="center" m={3}>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
            📖 Review your cards with the Leitner System
          </Typography>

          <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: 5, mb: 3 }} />

          <Card sx={{ borderRadius: '15px', p: 3, mb: 1, textAlign: "center", background: "linear-gradient(135deg, rgb(18, 94, 43), rgb(3, 42, 109))", color: "white" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">{currentCard.question}</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mt: 2 }}>Category: {currentCard.category}</Typography>
            </CardContent>

            <TextField
              fullWidth
              onChange={handleChangeResponse}
              value={response}
              variant="outlined"
              sx={{ background: "#f5f5f5", mb: 1, borderRadius: '10px' }}
              placeholder="Your answer..."
            />
            <Button variant="contained" onClick={handleAnswer} disabled={response === ""}>Submit</Button>
          </Card>

          {correctAnswer && (
            <Box mt={2} p={2} border="1px solid red" borderRadius="10px" bgcolor="#ffdddd">
              <Typography variant="body1" color="red">❌ Wrong answer</Typography>
              <Typography variant="body2">✅ Correct answer: <strong>{correctAnswer}</strong></Typography>
            </Box>
          )}

          {canForceValidation && (
            <Stack spacing={2} direction="row" justifyContent="center" mt={3}>
              <Button variant="contained" color="success" onClick={() => submitAnswer(currentCard.id, true)}>✅ Force Validation</Button>
              <Button variant="contained" onClick={() => submitAnswer(currentCard.id, false)}>Pass</Button>
            </Stack>
          )}

          <Snackbar open={!!successMessage} autoHideDuration={2000} onClose={() => setSuccessMessage("")}>
            <Alert severity={successMessage.includes("Correct") ? "success" : "error"}>{successMessage}</Alert>
          </Snackbar>
        </Box>
      )}
    </Container>
  );
}
