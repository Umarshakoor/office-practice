// PokemonDetails.js
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./PokemonDetails.css";

const PokemonDetails = () => {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    if (selectedPokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then((response) => response.json())
        .then((data) => setPokemonDetails(data))
        .catch((error) =>
          console.error("Error fetching Pokémon details:", error)
        );
    }
  }, [selectedPokemon]);

  if (!selectedPokemon) {
    return <div>Select a Pokémon to see its details</div>;
  }

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-details">
      <h1>{pokemonDetails.name}</h1>
      <img
        src={pokemonDetails.sprites.front_default}
        alt={pokemonDetails.name}
      />
      <table>
        <tbody>
          <tr>
            <td>Height:</td>
            <td>{pokemonDetails.height}</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{pokemonDetails.weight}</td>
          </tr>
          <tr>
            <td>Base Experience:</td>
            <td>{pokemonDetails.base_experience}</td>
          </tr>
          <tr>
            <td>Abilities:</td>
            <td>
              <ul>
                {pokemonDetails.abilities.map((ability, index) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PokemonDetails;
