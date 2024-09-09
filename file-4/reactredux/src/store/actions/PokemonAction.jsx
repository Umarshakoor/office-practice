export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";

export const SELECT_POKEMON = "SELECT_POKEMON";

export const fetchPokemon =
  (offset = 0, limit = 20) =>
  async (dispatch) => {
    dispatch({ type: FETCH_POKEMON_REQUEST });
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );
      const data = await response.json();
      dispatch({ type: FETCH_POKEMON_SUCCESS, payload: data.results });
    } catch (e) {
      dispatch({ type: FETCH_POKEMON_FAILURE, payload: e });
    }
  };

export const selectPokemon = (name) => ({
  type: SELECT_POKEMON,
  payload: name,
});
