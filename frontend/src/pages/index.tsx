import { Box, Button, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import CustomDialog from "./components/CustomDialog";
import PopupAddQuiz from "./components/PopupAddQuiz";
import PopupStartGame from "./components/PopupStartGame";
import style from "../pages/styles/home.module.css";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const [openQuiz, setOpenQuiz] = useState(false);
  const [addCard, setAddCard] = useState(false);

  const handlePopupOpenQuiz = () => {
    setOpenQuiz(true);
  };

  const handlePopupCloseQuiz = () => {
    setOpenQuiz(false);
  };

  const handleOpenPopupAddCard = () => {
    setAddCard(true);
  };

  const handleClosePopupAddCard = () => {
    setAddCard(false);
  };

  // const handleSeeCards = () => {
  //   setAddCard(false);
  // };

  return (
    <Grid2 className={style.styleContainer}>
      <Box className={style.styleBox}>
        <Typography variant="h5" className={style.positionCenter}>
          LEITNER STYSTEM
        </Typography>
        <p>Nice to see you Lilya</p>
        <Button className={style.styleButton} onClick={handlePopupOpenQuiz}>
          Play
        </Button>
        <Button className={style.styleButton} onClick={handleOpenPopupAddCard}>
          Add a Card
        </Button>
        <Button className={style.styleButton} onClick={() => router.push("/cards")}>
          See all Cards
        </Button>
      </Box>
      <CustomDialog
        title="LEITNER STYSTEM"
        open={openQuiz}
        onClose={handlePopupCloseQuiz}
        children={<PopupStartGame />}
      />
      <CustomDialog
        title="Add a Card"
        open={addCard}
        onClose={handleClosePopupAddCard}
        children={<PopupAddQuiz closePopupCreation={handleClosePopupAddCard} />}
      />
    </Grid2>
  );
}
