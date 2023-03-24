import { unsetError } from "@/globals/slices";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { injectDispatch, injectRouter } from "@/globals/client";
import { useRouter } from "next/router";

export default function AxiosProvider({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const error = useSelector((state) => state.error);
  useEffect(() => {
    injectDispatch(dispatch);
    injectRouter(router);
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
