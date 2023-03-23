import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DefaultLayout from "@/components/layout/defaultLayout";
// import store from "@/store";
import { Provider, useDispatch } from "react-redux";
import store from "@/globals/store";
import AxiosProvider from "@/components/general/axiosProvider";
import { injectDispatch, injectStore } from "@/globals/client";
import { useEffect } from "react";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import LocalizationProvider from "@mui/x-date-pickers/LocalizationProvider";

const theme = createTheme({
  palette: {
    primary: { main: "#1d256a" },
    secondary: { main: "#11cb5f" },
    tertiary: { main: "#343a40" },
    lightBg: { main: "#fff" },
    darkBg: { main: "#000000" },
    primaryButton: { main: "#007bff", contrastText: "#fff" },
    secondaryButton: { main: "#6c757d", contrastText: "#fff" },
    lightBlueHeader: { main: "#17a2b8", contrastText: "#fff" },
  },
  typography: {
    allVariants: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    h7: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    h8: {
      fontSize: "0.875rem",
      fontWeight: 600,
    },
    bodyCst1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    bodyTable1: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    bodyTableBoldItalic: {
      fontSize: "0.875rem",
      fontWeight: 700,
      fontStyle: "italic",
    },
    formHelperText: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
  },
});
injectStore(store);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AxiosProvider>
        <ThemeProvider theme={theme}>
          {Component.layout == "none" ? (
            <Component {...pageProps} />
          ) : (
            <DefaultLayout>
              <Component {...pageProps} />
            </DefaultLayout>
          )}
        </ThemeProvider>
      </AxiosProvider>
    </Provider>
  );
}
