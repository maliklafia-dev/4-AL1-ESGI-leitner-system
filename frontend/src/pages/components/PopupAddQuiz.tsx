import { useState } from "react";
import { champs } from "../../utils/inputsCreateCard";
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import styles from "../styles/popup.module.css";

function PopupAddQuiz({ closePopupCreation }: any) {
  const [inputs, setInputs] = useState(
    champs.map((input) => ({
      ...input,
      value: input.id === "category" ? "FIRST" : "",
    })),
  );

  const handleInputChange = (
    id: any,
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { value } = event.target;
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, value: value } : input,
      ),
    );
  };

  const handleRegister = () => {
    console.log("hey ! - handle click on button register new card");
    console.log(inputs);
    closePopupCreation();
  };

  const isDisable = () => {
    return inputs.some((input: any) => {
      if (input.required && input.value === "") {
        return true;
      }
      return false;
    });
  };

  return (
    <Box>
      <Typography className={styles.styleTypographyRed}>
        * Champs obligatoires
      </Typography>
      <Box className={styles.stylesBoxPopup}>
        {inputs.map((input) => (
          <Grid2
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ width: "150px", alignContent: "center" }}>
              {input.name} {input.required && " *"}
            </Typography>
            {input.changable ? (
              <TextField
                className={styles.styleInputs}
                onChange={(value) => handleInputChange(input.id, value)}
                id={input.id}
                value={input.value}
                type="search"
                variant="outlined"
              />
            ) : (
              <TextField
                className={styles.styleInputs}
                disabled
                id={input.id}
                defaultValue={input.value}
                variant="outlined"
                type="search"
              />
            )}
          </Grid2>
        ))}

        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={handleRegister}
            disabled={isDisable()}
            variant="contained"
            color="success"
            sx={{ borderRadius: "14px" }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default PopupAddQuiz;
