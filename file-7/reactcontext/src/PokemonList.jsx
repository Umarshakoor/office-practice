import { useEffect, useState } from "react";
import useMyContext from "./contextHook";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function PokemonList() {
  const { offset, setOffSet, limit } = useMyContext();
  const [pokemons, setPokemons] = useState(null);
  // console.log(pokemons);

  useEffect(() => {
    fetchPokemon();
  }, [offset]);
  // console.log(pokemons);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        // fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      );
      const data = await response.json();
      console.log(data);
      setPokemons(data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  const handleNextPage = () => {
    console.log(setOffSet, offset);
    setOffSet(offset + limit);
  };

  const handlePreviousPage = () => {
    setOffSet((prevOffset) =>
      prevOffset - limit >= 0 ? prevOffset - limit : 0
    );
  };

  return (
    <div>
      <h2>Pokemon List</h2>
      {/* showing pokemon url in a list */}
      {pokemons?.results.length > 0 &&
        pokemons.results.map((pokemon) => {
          return (
            <li key={pokemon.name}>
              {pokemon.url}
              {pokemon.name}
            </li>
          );
        })}

      {/*       <BrowserRouter>
        <Routes>
          {pokemons?.results.length > 0 &&
            pokemons.results.map((pokemon) => (
              <Route key={pokemon.name} path={`${pokemon.url}{pokemon.name}`}>
                <Link to={`${pokemon.url}`}>{pokemon.url}</Link>
              </Route>
            ))}
        </Routes>
      </BrowserRouter> */}

      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={offset === 0}>
          Previous
        </button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
}

export default PokemonList;
