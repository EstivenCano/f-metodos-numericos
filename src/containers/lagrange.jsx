import React, { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const FormLaGrange = () => {
  const [xArray, setxArray] = useState("");
  const [xNumber, setxNumber] = useState("");
  const [yArray, setyArray] = useState("");
  const [yNumber, setyNumber] = useState("");
  const [showError, setShowError] = useState(false);

  const handleError = () => {
    xArray.length !== yArray.length ? setShowError(true) : setShowError(false);
  };

  useEffect(() => {
    handleError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xArray, yArray]);

  return (    
    <Box
      component='form'
      sx={{
        "& .MuiTextField-root": {
          display: "flex",
          width: "100%",          
          marginBlock: 2,
        },
      }}>
      <Grid
        container
        flexDirection='row'
        justifyContent='space-around'
        width='100%'
        alignItems='baseline'>
        <Box sx={{ width: "50%" }}>
          <TextField
            id='standard-basic'
            label='Datos en X'
            variant='outlined'
            type='number'
            value={xNumber}
            onKeyDown={(e) => {
              if (e.key === "Enter" && xNumber !== "") {
                setxArray((xArray) => [...xArray, xNumber]);
                setxNumber("");
              }
            }}
            onChange={(e) => {
              setxNumber(e.target.value);
            }}
            helperText={`Puntos de x:[ ${xArray} ]`}
            size='small'
            sx={{
              justifyContent: "center",
            }}
          />
        </Box>
        <Button
          variant='contained'
          onClick={(e) => {
            if (xArray.length !== 0) {
              setxArray((xArray) =>
                xArray.filter((_, i) => i !== xArray.length - 1)
              );
            }
          }}>
          -
        </Button>
        <Button
          variant='contained'
          onClick={(e) => {
            if (xNumber !== "") {
              setxArray((xArray) => [...xArray, xNumber]);
              setxNumber("");
            }
          }}>
          +
        </Button>
      </Grid>
      <Grid
        container
        flexDirection='row'        
        sx={{background: 'green'}}
        justifyContent='space-around'
        alignItems='baseline'>
        <Box sx={{ width: "50%" }}>
          <TextField
            id='standard-basic'
            label='Datos en Y'
            variant='outlined'
            value={yNumber}
            type='number'
            onKeyDown={(e) => {
              if (e.key === "Enter" && yNumber !== "") {
                setyArray((yArray) => [...yArray, yNumber]);
                setyNumber("");
              }
            }}
            onChange={(e) => setyNumber(e.target.value)}
            helperText={`Puntos de y:[ ${yArray} ]`}
            size='small'
            sx={{
              justifyContent: "center",
            }}
          />
        </Box>
        <Button
          variant='contained'
          onClick={(e) => {
            if (yArray.length !== 0) {
              setyArray((yArray) =>
                yArray.filter((_, i) => i !== yArray.length - 1)
              );
            }
          }}>
          -
        </Button>
        <Button
          variant='contained'
          onClick={(e) => {
            if (yNumber !== "") {
              setyArray((yArray) => [...yArray, yNumber]);
              setyNumber("");
            }
          }}>
          +
        </Button>
      </Grid>
      {showError ? (
        <Typography
          variant='caption'
          sx={{
            marginInline: 2,
            color: "red",
            fontWeight: "bold",
            fontFamily: "Montserrat Alternates",
          }}>
          {`Tamaño de X(${xArray.length}) y Y(${yArray.length}) deben ser iguales`}
        </Typography>
      ) : null}

      <Grid
        container
        flexDirection='row'
        width='35%'
        sx={{ marginInline: 2 }}
        justifyContent='space-around'
        alignItems='baseline'>
        <Box sx={{ width: "100%" }}>
          <TextField
            id='standard-basic'
            label='Punto a buscar'
            variant='outlined'
            type='number'
            onKeyDown={(e) => {
              if (e.key === "Enter" && yNumber !== "") {
                setyArray((yArray) => [...yArray, yNumber]);
                setyNumber("");
              }
            }}
            onChange={(e) => setyNumber(e.target.value)}
            size='small'
            sx={{
              justifyContent: "center",
            }}
          />
        </Box>
      </Grid>
    </Box>    
  );
};

export default FormLaGrange;
