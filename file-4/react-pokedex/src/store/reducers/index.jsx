import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer.jsx";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});
export default rootReducer;
