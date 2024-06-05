// import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <PokemonList />
        <PokemonDetails />
      </div>
    </Provider>
  );
};

export default App;
