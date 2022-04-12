import React from "react";
import styled from "styled-components";

import "./Pokemon.css";

const Card = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const Type = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TypeBox = styled(Box)`
  padding: 5px 10px;
  width: 60px;
  border: 1.5px solid;
  border-radius: 15px;
  text-transform: capitalize;
  font-weight: 600;
`;

const PokeImg = styled.img`
  width: 60%;
`;

const Pokemon = ({ pokemon, findPokemon }) => {
  return (
    <Card>
      <Box>
        <span style={{ marginRight: "5px" }}>#{pokemon.id}</span>
        <h3 style={{ textTransform: "capitalize" }}>{pokemon.name}</h3>
      </Box>
      <Box>
        <PokeImg
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.id}
        />
      </Box>

      <Type>
        {pokemon.types.map((element, index) => {
          return (
            <TypeBox className={element.type.name} key={index}>
              {element.type.name}
            </TypeBox>
          );
        })}
      </Type>
    </Card>
  );
};

export default Pokemon;
