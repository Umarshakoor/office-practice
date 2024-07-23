import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AccPure from "./components/AccPure";
import AccordionTask from "./components/AccordionTask";
import PortfolioLandingPage from "./components/Portfolio";
import Project from "./components/Project.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AccordionTask />} />
          <Route path="/portfolio" element={<PortfolioLandingPage />} />
          <Route path="/accpure" element={<AccPure />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
