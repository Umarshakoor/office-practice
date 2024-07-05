import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignUp from "./components/SignUp";
import Stack from "./components/Stack";
import TyreMenu from "./components/TyreMenu";
import "./App.css";
import Dashboard from "./components/Dashboard";

const theme = createTheme({
  typography: {
    fontFamily: "poppins",
  },
  palette: {
    primary: {
      main: "rgba(26, 84, 138, 1)",
    },
    secondary: {
      main: "#f50057",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before,*::after": {
          transitions: "none !important",
          Animation: "none !important",
        },
      },
    },
  },

  transitions: {
    create: () => "npne",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/tyre" element={<TyreMenu />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
