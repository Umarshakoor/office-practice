import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    fetchPokemon();
  }, [id]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setPokemon(data);
      console.log("data", data.sprites.front_default);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
    </div>
  );
}

export default PokemonDetails;
