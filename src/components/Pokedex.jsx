import styled from "styled-components";
import Pokemon from "./Pokemon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PokeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-content: center;
  justify-items: center;
  gap: 5px 5px;
  margin-bottom: 40px;
`;

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  return (
    <div>
      {loading ? (
        <div>
          <h4>Buscando Pokemons...</h4>
          <FontAwesomeIcon icon="spinner" pulse />
        </div>
      ) : (
        <PokeGrid>
          {pokemons.map((pokemon, index) => {
            return (
              <Pokemon pokemon={pokemon} key={index}>
                #{index + 1}: {pokemon.name}
              </Pokemon>
            );
          })}
        </PokeGrid>
      )}
    </div>
  );
};

export default Pokedex;
