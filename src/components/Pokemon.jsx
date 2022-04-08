import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 80%;
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

const PokeImg = styled.img`
  width: 60%;
`;

const Pokemon = (props) => {
  const { pokemon } = props;

  return (
    <Card>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "5px" }}>#{pokemon.id}</span>
        <h3 style={{ textTransform: "capitalize" }}>{pokemon.name}</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PokeImg
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.id}
        />
      </div>

      <Type>
        {pokemon.types.map((element, index) => {
          return (
            <div className={element.type.name} key={index}>
              {element.type.name}
            </div>
          );
        })}
      </Type>
    </Card>
  );
};

export default Pokemon;
