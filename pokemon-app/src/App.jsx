// src/App.js
import React from "react";

import "./App.css";
import PokemonList from "./Components/PokemonList";

function App() {
  return (
    <div className="App">
      <h1 className="pokii">Pokémon List</h1>
      <PokemonList />
    </div>
  );
}

export default App;
