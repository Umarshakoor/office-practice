import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";

import "./index.css";
import Dashboard from "./components/Dashboard";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(26, 84, 138, 1)",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Poppins"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Router>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
