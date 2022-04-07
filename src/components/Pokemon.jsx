import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
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
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.id}
        />
      </div>
      <div>
        <div>
          {pokemon.types.map((element, index) => {
            return <div key={index}>{element.type.name}</div>;
          })}
        </div>
      </div>
    </Card>
  );
};

export default Pokemon;
