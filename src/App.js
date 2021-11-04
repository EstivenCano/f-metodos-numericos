import "./App.css";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container flexDirection='column' color='text'>
        <Box className='AppBar'>
          <Typography
            className='Title'
            variant='h5'
            sx={{ fontFamily: "Montserrat Alternates" }}
            color='text'>
            Métodos numéricos
          </Typography>
          <Typography
            className='Title'
            variant='caption'
            sx={{
              fontFamily: "Montserrat Alternates",
            }}>
            Proyecto final
          </Typography>
        </Box>
        <Grid
          item
          container
          flexDirection='column'
          width='100%'
          minHeight='85vh'
          alignItems='center'>
          <Tabs
            value={value}
            TabIndicatorProps={{
              style: {
                borderRadius: "25px",
                height: "5px",
              },
            }}
            indicatorColor='primary'
            textColor='primary'
            onChange={handleChange}
            aria-label='lista_metodos'>
            <Tab
              label='Derivadas'
              className='Tab'
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                fontFamily: "Montserrat Alternates",
              }}
              {...a11yProps(0)}
            />
            <Tab
              label='La Grange'
              className='Tab'
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                fontFamily: "Montserrat Alternates",
              }}
              {...a11yProps(1)}
            />
            <Tab
              label='Newton'
              className='Tab'
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                fontFamily: "Montserrat Alternates",
              }}
              {...a11yProps(2)}
            />
            <Tab
              label='Interpolación'
              className='Tab'
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                fontFamily: "Montserrat Alternates",
              }}
              {...a11yProps(3)}
            />
            <Tab
              label='Integral'
              className='Tab'
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                fontFamily: "Montserrat Alternates",
              }}
              {...a11yProps(4)}
            />
          </Tabs>

          <TabPanel value={value} index={0}></TabPanel>
          <TabPanel value={value} index={1}></TabPanel>
          <TabPanel value={value} index={2}></TabPanel>
          <TabPanel value={value} index={3}></TabPanel>
          <TabPanel value={value} index={4}></TabPanel>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
