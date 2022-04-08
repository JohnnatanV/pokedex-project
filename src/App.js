import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faCaretLeft,
  faCaretRight,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import { getPokemonData, getPokemons } from "./Api";

import "./App.css";

library.add(faMagnifyingGlass, faCaretLeft, faCaretRight, faSpinner);

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const data = await getPokemons(24, 24 * page);
        const promises = data.results.map(
          async (pokemon) => await getPokemonData(pokemon.url)
        );
        const results = await Promise.all(promises);
        setPokemons(results);
        setLoading(false);
        setTotal(Math.ceil(data.count / 24));
      } catch (err) {
        console.log(err);
      }
    };

    fetchPokemons();
  }, [page]);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <Header page={page} setPage={setPage} total={total} />

      <Pokedex loading={loading} pokemons={pokemons} />
    </div>
  );
};

export default App;
