import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import { setOffset, setLimit } from "./store/Slices/paginationSlice";

function PokemonList() {
  const dispatch = useDispatch();
  const offset = useSelector((state) => state.pagination.offset);
  const limit = useSelector((state) => state.pagination.limit);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        );
        const data = await response.json();
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemon();
  }, [offset, limit]);

  const handleNextPage = () => {
    dispatch(setOffset(offset + limit));
    setSearchParams({ offset: offset + limit, limit });
  };

  const handlePreviousPage = () => {
    dispatch(setOffset(offset - limit >= 0 ? offset - limit : 0));
    setSearchParams({
      offset: offset - limit >= 0 ? offset - limit : 0,
      limit,
    });
  };

  return (
    <div>
      <h2>Pokemon List</h2>
      {pokemons?.results.length > 0 &&
        pokemons.results.map((pokemon, i) => (
          <div key={i}>
            <h4>{pokemon.name}</h4>
            <Link to={`/pokemon?name=${pokemon.name}`}>{pokemon.name}</Link>
          </div>
        ))}

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
