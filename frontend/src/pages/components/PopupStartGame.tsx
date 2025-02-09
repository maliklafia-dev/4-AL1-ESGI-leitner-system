import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import style from '../styles/popup.module.css';
import { useState } from "react";

function PopupStartGame() {
    const [response, setResponse] = useState('');
    const question = "quel est la capital de la France";

    const handleChangeResponse = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setResponse(value);
    }

    const handleSubmit = () => {
        console.log('hey ! - handle submit response');
    }

    const isDisable = () => {
        return response === '';
      };

    return (
        <Box className={style.styleBox}>
            <Typography className={style.styleTypograpgy}>
                Question : 
            </Typography>
            <Grid2 className={style.styleGridQuestion}>
                {question}
            </Grid2>
            <Typography className={style.styleTypograpgy}>
                Response : 
            </Typography>
            <Grid2 sx={{ textAlign: 'center' }}>
                <TextField 
                    multiline
                    fullWidth
                    minRows={2}
                    maxRows={4}
                    className={style.styleTextFeild}
                    type="search"
                    variant="outlined" 
                    onChange={(value) => handleChangeResponse(value)}
                /> 
            </Grid2>
            <Box sx={{ textAlign: 'center' }}>
                <Button onClick={handleSubmit} disabled={isDisable()} variant="contained" color="success" sx={{ borderRadius: '14px' }}>
                    Register
                </Button>
            </Box>
        </Box>
    )
}

export default PopupStartGame;