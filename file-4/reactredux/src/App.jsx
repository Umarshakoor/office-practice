import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon" element={<PokemonDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
