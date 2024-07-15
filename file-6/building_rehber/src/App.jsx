import { useContext, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
import Dashboard from "./components/Dashboard";
import { StateContext } from "./state/AppState";
import "./index.css";

function App() {
  const { theme } = useContext(StateContext);

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          primary: {
            main: theme === "light" ? "#1a548a" : "#000",
          },
          secondary: {
            main: theme === "light" ? "#f50057" : "#f48fb1",
          },
          background: {
            default: theme === "light" ? "#1a548a" : "#000",
          },
        },
        typography: {
          fontFamily: ["Montserrat", "Poppins"].join(","),
          button: {
            textTransform: "none",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
              },
            },
          },
          MuiButtonBase: {
            defaultProps: {
              disableRipple: true,
            },
          },
          MuiCssBaseline: {
            styleOverrides: {
              "*, *::before, *::after": {
                transition: "none !important",
                animation: "none !important",
              },
            },
          },
        },
      }),
    [theme]
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="app">
        <Router>
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
