import "./App.css";
import PokemonDetails from "./PokemonDetails";
import PokemonList from "./PokemonList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<PokemonList />} />
          <Route path="/pokemon/:id" component={PokemonDetails} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
