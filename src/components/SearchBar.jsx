import React, { useState } from "react";
import { SearchPokemon } from "../Api";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchContainer from "./SearchContainer";

import Input from "./Input";
import Button from "./Button";

const SearchInput = styled.div`
  background: #fff;
  margin-right: 20px;
`;

const SearchButton = styled.div``;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await SearchPokemon(search.toLowerCase());
    setPokemon(data);
  };

  return (
    <SearchContainer>
      <SearchInput>
        <Input onChange={onChange} />
      </SearchInput>
      <SearchButton>
        <Button onClick={onClick}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </Button>
      </SearchButton>
      <div>
        {/* {pokemon && (
          <div>
            <div>Nombre: {pokemon.name}</div>
            <div>Tipo: {pokemon.types[0].type.name}</div>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
          </div>
        )} */}
      </div>
    </SearchContainer>
  );
};

export default SearchBar;
