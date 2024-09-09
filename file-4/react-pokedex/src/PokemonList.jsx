import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon, selectPokemon } from "./store/actions/pokemonAction";
import "./PokemonList.css";

const PokemonList = () => {
  const dispatch = useDispatch();
  const { pokemonList, loading, error } = useSelector((state) => state.pokemon);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const limit = 20;

  useEffect(() => {
    dispatch(fetchPokemon(offset, limit));
  }, [dispatch, offset]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPokemonList(pokemonList);
    } else {
      setFilteredPokemonList(
        pokemonList.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [pokemonList, searchTerm]);

  const handleNextPage = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const handlePreviousPage = () => {
    setOffset((prevOffset) =>
      prevOffset - limit >= 0 ? prevOffset - limit : 0
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Pokémon List</h1>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="pokemon-grid">
        {filteredPokemonList.map((pokemon, index) => (
          <div key={index} className="pokemon-item">
            <button onClick={() => dispatch(selectPokemon(pokemon.name))}>
              {pokemon.url}
              {pokemon.name}
            </button>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={offset === 0}>
          Previous
        </button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default PokemonList;
