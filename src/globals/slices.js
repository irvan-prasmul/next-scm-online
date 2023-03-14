import { createSlice } from "@reduxjs/toolkit";

// auth state
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: true,
    userToken: "",
    userName: "",
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = true;
      state.userToken = action.payload.userToken;
      state.userName = action.payload.userName;
    },
  },
});
export const { setAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;

// global error state
export const errorSlice = createSlice({
  name: "error",
  initialState: {
    isError: false,
    message: "",
  },
  reducers: {
    setError: (state, action) => {
      state.isError = true;
      state.message = action.payload.message;
    },
    unsetError: (state) => {
      state.isError = false;
      state.message = "";
    },
  },
});
export const { setError, unsetError } = errorSlice.actions;
export const errorReducer = errorSlice.reducer;
