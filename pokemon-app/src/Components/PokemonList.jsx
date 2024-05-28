// src/components/PokemonList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonList.css";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokemon(response.data.results);
    };
    fetchPokemon();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pokemon-container">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={search}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="pokemon-list">
        {filteredPokemon.map((p, index) => (
          <PokemonCard key={index} name={p.name} url={p.url} />
        ))}
      </div>
    </div>
  );
};

const PokemonCard = ({ name, url }) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await axios.get(url);
      setPokemonData(response.data);
    };
    fetchPokemonData();
  }, [url]);

  return (
    <div className="pokemon-card">
      {pokemonData.sprites && (
        <img src={pokemonData.sprites.front_default} alt={name} />
      )}
      <h3>{name}</h3>
    </div>
  );
};

export default PokemonList;
