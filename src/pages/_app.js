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

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: { main: "#1d256a" },
      primaryAlt: { main: "#007bff", contrastText: "#fff" },
      secondary: { main: "#11cb5f" },
      tertiary: { main: "#343a40" },
      lighBg: { main: "white" },
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
    },
  });
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
