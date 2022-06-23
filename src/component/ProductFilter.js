import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import {changeModelYear, changeAirFlow, changeMaxPower, changeDiameter } from "../Reducer/filter";
import { Box, Stack, Slider } from '@mui/material';



    const marks = [
    {
      value: 10,
      label: '10',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 30,
      label: '30',
    },
    {
      value: 40,
      label: '40',
    },
    {
      value: 50,
      label: '50',
    },
    
  ];



function ProductFilter() {

      const [year, setYear] = React.useState([20, 30]);
      const [flow, setFlow] = React.useState([20, 30]);
      const [power, setPower] = React.useState([20, 30]);
      const [speed, setSpeed] = React.useState([20, 30]);
      const [diameter, setDiameter] = React.useState([20, 30]);
      const [height, setHeight] = React.useState([20, 30]);

      const handleChange1 = (event, newValue) => {
        setYear(newValue);
      };

      const handleChange2 = (event, newValue) => {
        setFlow(newValue);
      };

      const handleChange3 = (event, newValue) => {
        setPower(newValue);
      };

      const handleChange4 = (event, newValue) => {
        setSpeed(newValue);
      };

      const handleChange5 = (event, newValue) => {
        setDiameter(newValue);
      };

      const handleChange6 = (event, newValue) => {
        setHeight(newValue);
      };



    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    <div style={{ width: "180px" }}>
                        <label>Model year</label>
                        <br/>
                        <br/>
                        <Slider
                            aria-label="Always visible"
                            defaultValue={30}
                            valueLabelDisplay="auto"
                            value = {year}
                            onChange={handleChange1}
                            step={10}
                            marks={marks}
                            min={10}
                            max={50}
                        />
                       <br/>
                       <br/>
                       <label>Airflow</label>
                        <br/>
                        <br/>
                        <Slider
                            aria-label="Always visible"
                            defaultValue={30}
                            valueLabelDisplay="auto"
                            value = {flow}
                            onChange={handleChange2}
                            step={10}
                            marks={marks}
                            min={10}
                            max={50}
                        />
                        <br/>
                       <br/>
                       <label>Max power</label>
                        <br/>
                        <br/>
                        <Slider
                            aria-label="Always visible"
                            defaultValue={30}
                            valueLabelDisplay="auto"
                            value = {power}
                            onChange={handleChange3}
                            step={10}
                            marks={marks}
                            min={10}
                            max={50}
                        />
                        <br/>
                       <br/>
                       <label>Sound at max speed</label>
                        <br/>
                        <br/>
                        <Slider
                            aria-label="Always visible"
                            defaultValue={30}
                            valueLabelDisplay="auto"
                            value = {speed}
                            onChange={handleChange4}
                            step={10}
                            marks={marks}
                            min={10}
                            max={50}
                        />
                        <br/>
                       <br/>
                       <label>Fan sweep diameter</label>
                        <br/>
                        <br/>
                        <Slider
                            aria-label="Always visible"
                            defaultValue={30}
                            valueLabelDisplay="auto"
                            value = {diameter}
                            onChange={handleChange5}
                            step={10}
                            marks={marks}
                            min={10}
                            max={50}
                        />
                        <br/>
                       <br/>
                       <label>Height</label>
                        <br/>
                        <br/>
                        <Slider
                            aria-label="Always visible"
                            defaultValue={30}
                            valueLabelDisplay="auto"
                            value = {height}
                            onChange={handleChange6}
                            step={10}
                            marks={marks}
                            min={10}
                            max={50}
                        />
                    </div>
                </Stack>
            </Box>
        </div>
    );
}

export default ProductFilter;