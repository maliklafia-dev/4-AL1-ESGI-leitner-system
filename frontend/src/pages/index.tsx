import { Box, Button, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import CustomDialog from "./components/CustomDialog";
import PopupAddQuiz from "./components/PopupAddQuiz";
import PopupStartGame from "./components/PopupStartGame";
import style from "../pages/styles/home.module.css";

export default function HomePage() {
  const [openQuiz, setOpenQuiz] = useState(false);
  const [addQuiz, setAddQuiz] = useState(false);

  const handlePopupOpenQuiz = () => {
    setOpenQuiz(true);
  };

  const handlePopupCloseQuiz = () => {
    setOpenQuiz(false);
  };

  const handleOpenPopupAddQuiz = () => {
    setAddQuiz(true);
  };

  const handleClosePopupAddQuiz = () => {
    setAddQuiz(false);
  };

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
        <Button className={style.styleButton} onClick={handleOpenPopupAddQuiz}>
          Add a Quiz
        </Button>
      </Box>
      <CustomDialog
        title="LEITNER STYSTEM"
        open={openQuiz}
        onClose={handlePopupCloseQuiz}
        children={<PopupStartGame />}
      />
      <CustomDialog
        title="Add a Quiz"
        open={addQuiz}
        onClose={handleClosePopupAddQuiz}
        children={<PopupAddQuiz closePopupCreation={handleClosePopupAddQuiz} />}
      />
    </Grid2>
  );
}
