import { useEffect, useState } from "react";
import useMyContext from "./contextHook";
import { Link } from "react-router-dom";
function PokemonList() {
  const { offset, setOffSet, limit } = useMyContext();
  const [pokemons, setPokemons] = useState(null);
  const baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  useEffect(() => {
    fetchPokemon();
  }, [offset]);
  // console.log(pokemons);

  useEffect(() => {
    const savedOffset = localStorage.getItem("offset");
    if (savedOffset) {
      setOffSet(Number(savedOffset));
    }
  }, [setOffSet]);

  useEffect(() => {
    if (!pokemons) {
      fetchPokemon();
    } else {
      // localStorage.setItem("pokemons", JSON.stringify(pokemons));
      localStorage.setItem("offset", offset);
    }
  }, [pokemons, offset, limit]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(baseUrl);

      // fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      const data = await response.json();
      // console.log(data);
      setPokemons(data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  const handleNextPage = () => {
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
        pokemons.results.map((pokemon, i) => {
          return (
            <>
              <div>
                <h4>{pokemon.name}</h4>
              </div>
              <Link key={i} to={pokemon.url}>
                {pokemon.url}
              </Link>
            </>
          );
        })}

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
