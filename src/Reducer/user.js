import { createSlice } from "@reduxjs/toolkit";

const initial = {name: "None", password: "None", token: "None", isAuth: false};

export const userSlice = createSlice({

    name: "user",
    initialState:{ value: initial},
    reducers: {

        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => {
            state.value = initial;
        },

    },

});

export const { login, logout } = userSlice.actions;

//export const { logout } = userSlice.actions;