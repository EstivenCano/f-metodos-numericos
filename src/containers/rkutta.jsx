import React, { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LineChart from "../components/lineChart";
import Modal from "../components/modal";
import axios from "axios";

const RKutta = () => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [point, setPoint] = useState("");
  const [step, setStep] = useState("");
  const [yArray, setyArray] = useState([]);
  const [xArray, setxArray] = useState([]);
  const [funct, setFunc] = useState("");

  const handleClick = async () => {
    await axios({
      method: "post",
      url: "http://127.0.0.1:5000/runge",
      data: {
        funcion: funct,
        x: parseFloat(x),
        y: parseFloat(y),
        xf: parseFloat(point),
        h: parseFloat(step),
      },
    })
      .then((res) => {
        console.log({
          funcion: funct,
          x: parseFloat(x),
          y: parseFloat(y),
          xf: parseFloat(point),
          h: parseFloat(step),
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid
      container
      flexDirection='row'
      justifyContent='space-around'
      alignContent='center'>
      <Grid
        item
        container
        xs={12}
        md={4}
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
          Ingrese los valores requeridos
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
              justifyContent: "space-evenly",
              marginBlock: 2,
            },
          }}>
          <Grid>
            <TextField
              id='standard-basic'
              label='Función'
              variant='outlined'
              type='text'
              value={funct}
              onChange={(e) => {
                setFunc(e.target.value);
              }}
              InputProps={{
                endAdornment: <Modal />,
              }}
              size='small'
              sx={{
                justifyContent: "center",
              }}
            />
          </Grid>
          <Grid
            container
            flexDirection='row'
            width='100%'
            justifyContent='space-around'
            alignItems='baseline'>
            <TextField
              id='standard-basic'
              label='Número para X'
              variant='outlined'
              value={x}
              type='number'
              onChange={(e) => setX(e.target.value)}
              size='small'
              sx={{
                justifyContent: "center",
              }}
            />
          </Grid>
          <Grid
            container
            flexDirection='row'
            width='100%'
            justifyContent='space-around'
            alignItems='baseline'>
            <TextField
              id='standard-basic'
              label='Número para Y'
              variant='outlined'
              value={y}
              type='number'
              onChange={(e) => setY(e.target.value)}
              size='small'
              sx={{
                justifyContent: "center",
              }}
            />
          </Grid>
          <Grid
            container
            flexDirection='row'
            width='100%'
            justifyContent='space-around'
            alignItems='baseline'>
            <TextField
              id='standard-basic'
              label='Punto a buscar'
              variant='outlined'
              value={step}
              type='number'
              onChange={(e) => setStep(e.target.value)}
              size='small'
              sx={{
                justifyContent: "center",
              }}
            />
          </Grid>
          <Grid
            container
            flexDirection='row'
            width='100%'
            justifyContent='space-around'
            alignItems='baseline'>
            <TextField
              id='standard-basic'
              label='Salto'
              variant='outlined'
              value={point}
              type='number'
              onChange={(e) => setPoint(e.target.value)}
              size='small'
              sx={{
                justifyContent: "center",
              }}
            />
          </Grid>
        </Box>
        <Button
          variant='contained'
          sx={{ textTransform: "none" }}
          onClick={(e) => {
            handleClick();
          }}>
          Graficar
        </Button>
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
        <Grid container justifyContent='space-evenly'></Grid>
      </Grid>
    </Grid>
  );
};

export default RKutta;
