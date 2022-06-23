import { createSlice } from "@reduxjs/toolkit";

const initial = "";

export const themeSlice = createSlice({

    name: "theme",
    initialState:{ value: initial},
    reducers: {

        changeColor: (state, action) => {
            state.value = action.payload;
        },

    },

});

export const { changeColor } = themeSlice.actions;

//export const { logout } = userSlice.actions;