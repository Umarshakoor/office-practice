export const FETCH_POKEMNON_REQUEST = "FETCH_POKEMNON_REQUEST";
export const FETCH_POKEMNON_SUCCESS = "FETCH_POKEMNON_SUCCESS";
export const FETCH_POKEMNON_FAILURE = "FETCH_POKEMNON_FAILURE";
export const SELECT_POKEMON = "SELECT_POKEMON";

export const fetchPokemon =
  (offset = 0, limit = 20) =>
  async (dispatch) => {
    dispatch({ type: FETCH_POKEMNON_REQUEST });
    try {
      const response = await fetch(`
        https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
      const data = await response.json();
      dispatch({ type: FETCH_POKEMNON_SUCCESS, payload: data.results });
    } catch (e) {
      dispatch({ type: FETCH_POKEMNON_FAILURE, payload: e });
    }
  };
export const selectPokemon = (name) => ({
  type: SELECT_POKEMON,
  payload: name,
});
