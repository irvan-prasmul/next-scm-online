import { setError, unsetError } from "@/globals/slices";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AxiosProvider({ children }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  useEffect(() => {
    console.log("initiate interceptors");
    console.log("THIS WILL APPEAR TWICE ONLY ON DEVELOPEMENT");
    axios.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      async function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log("intercept error response:", error);
        dispatch(
          setError({
            message: "intercept error",
          })
        );
        return Promise.reject(error);
      }
    );
    axios.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        config.baseURL = process.env.NEXT_PUBLIC_API_URL;
        config.headers.Accept = "application/json";
        //   config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      function (error) {
        // Do something with request error
        console.log("intercept error request:", error);
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <>
      {children}
      <Snackbar
        open={error.isError}
        autoHideDuration={6000}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          dispatch(unsetError());
        }}
      >
        <Alert
          onClose={(event, reason) => {
            if (reason === "clickaway") {
              return;
            }
            dispatch(unsetError());
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error.message}
        </Alert>
      </Snackbar>
    </>
  );
}
