import styled from "styled-components";
import Pokemon from "./Pokemon";

const PokeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-content: center;
  justify-items: center;
  gap: 5px 5px;
`;

const Pokedex = (props) => {
  const { pokemons } = props;
  return (
    <PokeGrid>
      {pokemons.map((pokemon, index) => {
        return (
          <Pokemon pokemon={pokemon} key={index}>
            #{index + 1}: {pokemon.name}
          </Pokemon>
        );
      })}
    </PokeGrid>
  );
};

export default Pokedex;
