import axios from "axios";
import { setAuth, setError } from "./slices";

export default function defaultClient(dispatch) {
  const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Accept: "application/json",
      // Authorization: `Bearer ${token}`,
    },
  });
  client.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log("intercept error response:", error);
      await dispatch(
        setError({
          message: "intercept error",
        })
      );
      return Promise.reject(error);
    }
  );
  return client;
}

// export const clientPortable = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   headers: {
//     Accept: "application/json",
//     // Authorization: `Bearer ${token}`,
//   },
// });
// clientPortable.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     console.log("intercept error response:", error);
//     const dispatch = useDispatch();
//     dispatch(
//       setAuth({
//         userToken: "dummy token",
//         userName: "interceptor",
//       })
//     );
//     return Promise.reject(error);
//   }
// );

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

// export default axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
// });
// export default client;
