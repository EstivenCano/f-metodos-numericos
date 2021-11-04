import "./App.css";
import React, { useState, useEffect } from "react";
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
      <Grid container flexDirection='row' color='text'>
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            background: "rgba(153,99,0,0.8)",
            fliter: "blur(50.4px)",
            width: "100%",
            height: "10vh",
            justifyContent: "center",
            alignItems: "center",
            borderBottomRightRadius: "30px",
            borderBottomLeftRadius: "30px",
          }}>
          <Typography className='Title' variant='h5' color='white'>
            Métodos numéricos
          </Typography>
        </Box>
        <Grid
          item
          container
          flexDirection='column'
          width='100%'
          alignItems='center'
          mt={8}>
          <Tabs
            value={value}
            indicatorColor='secondary'
            textColor='secondary'
            onChange={handleChange}
            aria-label='lista_metodos'>
            <Tab label='Derivadas' {...a11yProps(0)} />
            <Tab label='La Grange' {...a11yProps(1)} />
            <Tab label='Newton' {...a11yProps(2)} />
            <Tab label='Interpolacion' {...a11yProps(3)} />
            <Tab label='Integral' {...a11yProps(4)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
