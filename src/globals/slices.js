import { createSlice } from "@reduxjs/toolkit";

// auth state
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    userToken: "",
    refreshToken: "",
    userName: "",
    email: "",
    email2: null,
    initial: "",
    role: "",
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = true;
      state.userToken = action.payload.userToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setUser: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.email2 = action.payload.email2;
      state.initial = action.payload.initial;
      state.role = action.payload.role;
    },
    unAuth: (state, action) => {
      state.isAuth = false;
      state.userToken = "";
      state.refreshToken = "";
      state.userName = "";
      state.email = "";
      state.email2 = null;
      state.initial = "";
      state.role = "";
    },
  },
});
export const { setAuth, setUser, unAuth } = authSlice.actions;
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
