import { combineReducers } from "redux";

// INITIAL AUTH STATE
const authState = {
  isAuth: true,
  userToken: "",
  userName: "",
};

// GLOBAL ERROR STATE
const errorState = {
  isError: false,
  message: "",
};

// AUTH REDUCER
const authReducer = (state = authState, { type, payload }) => {
  switch (type) {
    case "setAuth":
      //   return {
      //     isAuth: true,
      //     userToken: payload.userToken,
      //     userName: payload.userName,
      //   };
      console.log("auth reducer");
      state.isAuth = true;
      state.userToken = payload.userToken;
      state.userName = payload.userName;
      return state;
    default:
      return state;
  }
};

// ERROR REDUCER
const errorReducer = (state = errorState, { type, payload }) => {
  switch (type) {
    case "setError":
      state.isError = true;
      state.message = payload.message;
    case "dismissError":
      state.isError = false;
      state.message = "";
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  auth: authReducer,
  error: errorReducer,
};

export default combineReducers(reducers);
