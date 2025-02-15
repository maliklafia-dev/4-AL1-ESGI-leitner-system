import { Box, Button, Grid2, Typography, Stack } from "@mui/material";
import { useState } from "react";
import CustomDialog from "./components/CustomDialog";
import PopupAddQuiz from "./components/PopupAddQuiz";
import PopupStartGame from "./components/PopupStartGame";
import { useRouter } from "next/router";
import styles from './styles/home.module.css';

export default function HomePage() {
  const router = useRouter();
  const [openQuiz, setOpenQuiz] = useState(false);
  const [addCard, setAddCard] = useState(false);

  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      height="100vh"
      className={styles.styleBackground}
    >
      <Box className={styles.styleBox} sx={{ p: 8 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Leitner System
        </Typography>
        <Typography variant="h6" color="black" gutterBottom>
          Learn effectively with flashcards
        </Typography>

        <Stack spacing={2} direction="column" alignItems="center" sx={{ mt: 3 }}>
          <Button
            className={styles.styleButton}
            variant="contained"
            sx={{ background: '#367917cc' }}
            onClick={() => setOpenQuiz(true)}
          >
            🎯 Lancer une Partie
          </Button>

          <Button
            className={styles.styleButton}
            variant="contained"
            sx={{ background: '#265a91c4' }}
            onClick={() => setAddCard(true)}
          >
            ➕ Ajouter une Carte
          </Button>

          <Button
            className={styles.styleButton}
            variant="outlined"
            sx={{ background: '#8bbbc6' }}
            onClick={() => router.push("/cards")}
          >
            📖 Voir Toutes les Cartes
          </Button>
        </Stack>
      </Box>

      <CustomDialog title="Lancer une Partie" open={openQuiz} onClose={() => setOpenQuiz(false)}>
        <PopupStartGame />
      </CustomDialog>

      <CustomDialog title="Ajouter une Carte" open={addCard} onClose={() => setAddCard(false)}>
        <PopupAddQuiz closePopupCreation={() => setAddCard(false)} />
      </CustomDialog>
    </Grid2>
  );
}
