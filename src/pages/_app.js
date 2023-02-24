import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "@/components/layout";
// import store from "@/store";
import { Provider } from "react-redux";
import { useStore } from "@/store";
import { gray } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: "#1d256a" },
    secondary: { main: "#11cb5f" },
    tertiary: { main: "#343a40" },
    lighBg: { main: "#fff" },
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
  },
});

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  switch (Component.name) {
    case "Login" || "Root":
      return (
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      );
    default:
      return (
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
      );
  }
}
