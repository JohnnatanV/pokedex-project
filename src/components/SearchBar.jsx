import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchPokemon } from "../Api";

import SearchContainer from "./SearchContainer";
import Input from "./Input";
import Button from "./Button";

const SearchInput = styled.div`
  background: #fff;
  margin-right: 20px;
`;

const SearchBar = ({ setFindPokemon }) => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const inputPokemon = (e) => {
    setSearch(e.target.value);
  };

  const searchPokedex = async (e) => {
    const data = await SearchPokemon(search.toLowerCase());
    setPokemon(data);
    setFindPokemon(pokemon);
  };

  return (
    <SearchContainer>
      <SearchInput>
        <Input onChange={inputPokemon} />
      </SearchInput>
      <div>
        <Button onClick={searchPokedex}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </Button>
      </div>
    </SearchContainer>
  );
};

export default SearchBar;
