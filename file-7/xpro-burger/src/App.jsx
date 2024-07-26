import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Website from "./components/Website";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Website />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
