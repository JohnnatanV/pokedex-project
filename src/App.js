import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCaretLeft,
  faCaretRight,
  faSpinner,
  faLessThanEqual,
} from "@fortawesome/free-solid-svg-icons";

import { getPokemonData, getPokemons } from "./Api";

import "./App.css";

library.add(faMagnifyingGlass, faCaretLeft, faCaretRight, faSpinner);

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      const promises = data.results.map(
        async (pokemon) => await getPokemonData(pokemon.url)
      );
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <Header />
      {loading ? (
        <div>
          <h4>Buscando Pokemons...</h4>
          <FontAwesomeIcon icon="spinner" pulse />
        </div>
      ) : (
        <Pokedex pokemons={pokemons} />
      )}
    </div>
  );
};

export default App;
