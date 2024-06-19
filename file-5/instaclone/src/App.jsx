import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
// import Feed from "./components/Feed";
// import AppContext, { AppProvider } from "./context/AppContext.jsx";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <AppProvider> */}
      {/* <AppContext> */}
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/feed" component={Feed} /> */}
          </Routes>
        </Container>
      </Router>
      {/* </AppContext> */}
      {/* // </AppProvider> */}
    </ThemeProvider>
  );
}

export default App;
