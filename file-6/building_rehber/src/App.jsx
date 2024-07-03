import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignUp from "./components/SignUp";
import Stack from "./components/Stack";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(26, 84, 138, 1)",
    },
    secondary: {
      main: "#f50057",
    },
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
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
