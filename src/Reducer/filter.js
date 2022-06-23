import React from 'react';
import { createSlice } from "@reduxjs/toolkit";

const initial = {modelYear:[10,50], airFlow:[10,50], maxPower:[10,50], diameter:[10,50]};

export const filterSlice = createSlice({

  name: "filter",
  initialState:{ value: initial},
  reducers: {

    changeModelYear: (state, action) => {
          state.value.modelYear = action.payload;
     },

    changeAirFlow: (state, action) => {
          state.value.airFlow = action.payload;
     },

    changeMaxPower: (state, action) => {
          state.value.maxPower = action.payload;
    },

    changeDiameter: (state, action) => {
      state.value.diameter = action.payload;
    },
  },

});

export const { changeModelYear, changeAirFlow, changeMaxPower, changeDiameter} = filterSlice.actions;
