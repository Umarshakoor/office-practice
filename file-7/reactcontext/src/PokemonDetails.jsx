import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();
  const navigate = useNavigate();
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

  useEffect(() => {
    fetchPokemon();
  }, [name]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setPokemon(data);
      console.log(data);
      console.log("data", data.sprites.front_default);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h2>{pokemon.name}</h2>
        <img
          src={pokemon.sprites?.front_default}
          height={300}
          alt={pokemon.name}
        />
        <h2>Pokemon height: {pokemon.height}</h2>
        <h2>Pokemon weight: {pokemon.weight}</h2>
      </div>
      {pokemon.abilities.map((ability) => {
        <h3>{ability.stats}</h3>;
      })}
      <div>
        <button onClick={() => navigate(-1)}>go back</button>
      </div>
    </>
  );
}

export default PokemonDetails;
