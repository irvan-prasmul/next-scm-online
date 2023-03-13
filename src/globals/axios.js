const { default: axios } = require("axios");
import { useSelector, useDispatch } from "react-redux";

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Add a request interceptor
// client.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     console.log("intercept error request:", error);
//     const dispatch = useDispatch();
//     dispatch({
//       type: "setError",
//       payload: {
//         errorMessage: "Test Error",
//       },
//     });
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
client.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("intercept error response:", error);
    const dispatch = useDispatch();

    dispatch({
      type: "setAuth",
      payload: {
        userToken: "dummy token",
        userName: "setError",
      },
    });
    dispatch({
      type: "setError",
      payload: {
        errorMessage: "Test Error",
      },
    });
    return Promise.reject(error);
  }
);
