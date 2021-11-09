import React, { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LineChart from "../components/lineChart";
import axios from "axios";

const RKuttaSup = () => {
  const [xArray, setxArray] = useState([]);
  const [xNumber, setxNumber] = useState("");
  const [yArray, setyArray] = useState([]);
  const [yNumber, setyNumber] = useState("");
  const [showError, setShowError] = useState(false);
  const [point, setPoint] = useState("");
  const [interpolation, setInterpolation] = useState("");

  const handleError = () => {
    xArray.length !== yArray.length ? setShowError(true) : setShowError(false);
  };

  useEffect(() => {
    handleError();
    xArray.sort();
    yArray.sort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xArray, yArray]);

  const handleClick = async () => {
    await axios({
      method: "post",
      url: "http://127.0.0.1:5000/lagrangreParams",
      data: {
        x: xArray,
        y: yArray,
        busq: point,
      },
    }).then((res) => {
      setInterpolation(res.data);
      console.log(res.data);
    });
  };

  return (
    <>
      <Grid
        item
        container
        xs={12}
        md={6}
        p={1}
        mt={1}
        justifyContent='center'
        alignItems='center'>
        <Typography
          variant='body1'
          align='center'
          sx={{
            fontFamily: "Montserrat Alternates",
            fontWeight: "bold",
            width: "100%",
          }}>
          Ingrese los valores de x e y
        </Typography>
        <Box
          component='form'
          onSubmit={(e) => {
            e.preventDefault();
          }}
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
            width='100%'
            sx={{ marginInline: 2 }}
            justifyContent='space-around'
            alignItems='baseline'>
            <Box sx={{ width: "50%" }}>
              <TextField
                id='standard-basic'
                label='Punto a buscar'
                variant='outlined'
                value={point}
                type='number'
                onChange={(e) => setPoint(e.target.value)}
                size='small'
                sx={{
                  justifyContent: "center",
                }}
              />
            </Box>
            <Button
              variant='contained'
              color='secondary'
              type='submit'
              sx={{
                textTransform: "none",
              }}
              onClick={(e) => {
                handleClick();
              }}>
              Graficar
            </Button>
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        container
        justifyContent='center'
        alignContent='center'
        xs={5}
        md={6}
        p={1}
        mt={1}>
        <LineChart
          yArray={yArray}
          xArray={xArray}
          point={point}
          title={"Runge Kutta Superior"}
          interpolation={interpolation}
        />
        <Grid container justifyContent='space-evenly'>
          <Grid item>{`Result: ${interpolation}`}</Grid>
          <Grid item>{`Error: ${interpolation}`}</Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default RKuttaSup;
