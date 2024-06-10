import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  SELECT_POKEMON,
} from "../actions/PokemonAction";

const initialState = {
  loading: false,
  pokemonList: [],
  error: null,
  selectedPokemon: null,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonList: action.payload,
      };
    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SELECT_POKEMON:
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
