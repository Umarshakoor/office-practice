import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import AccPure from "./components/AccPure";
// import AccordionTask from "./components/AccordionTask";
import PortfolioLandingPage from "./components/Portfolio";
import Project from "./components/Project.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioLandingPage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/product" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
