import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: { main: "#1d256a" },
      secondary: { main: "#11cb5f" },
      tertiary: { main: "#343a40" },
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

  switch (Component.name) {
    case "Login":
      return (
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      );
    default:
      return (
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      );
  }
}
