import "./App.css";
import PokemonDetails from "./PokemonDetails";
import PokemonList from "./PokemonList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/home/pokemon/:name?" element={<PokemonDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
