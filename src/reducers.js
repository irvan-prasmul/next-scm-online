import { combineReducers } from "redux";

// INITIAL AUTH STATE
const authState = {
  isAuth: true,
  userToken: "",
  userName: "",
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
      state.isAuth = true;
      state.userToken = payload.userToken;
      state.userName = payload.userName;
      return state;
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  auth: authReducer,
};

export default combineReducers(reducers);
