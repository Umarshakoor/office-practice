import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";

const App = () => {
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
};

export default App;
