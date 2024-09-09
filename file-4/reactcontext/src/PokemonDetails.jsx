import { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  // const { name } = useParams();
  // console.log(name);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  console.log([...searchParams]);
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
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => navigate(-1)}>go back</button>
      </div>
    </>
  );
}

export default PokemonDetails;
