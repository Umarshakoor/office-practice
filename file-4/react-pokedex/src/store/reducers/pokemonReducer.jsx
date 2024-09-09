import {
  FETCH_POKEMNON_REQUEST,
  FETCH_POKEMNON_SUCCESS,
  FETCH_POKEMNON_FAILURE,
  SELECT_POKEMON,
} from "../actions/pokemonAction";

const initialState = {
  loading: false,
  pokemonList: [],
  error: null,
  selectedPokemon: null,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMNON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMNON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonList: action.payload,
      };
    case FETCH_POKEMNON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
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
