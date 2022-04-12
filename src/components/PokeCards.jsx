import React from "react";
import Pokemon from "./Pokemon";
import PokeGrid from "./PokeGrid";

const PokeCards = ({ pokemons, findPokemon }) => {
  return (
    <div>
      {findPokemon ? (
        <PokeGrid>
          <Pokemon pokemon={findPokemon} key={findPokemon.name}>
            #{findPokemon.name + 1}: {findPokemon.name}
          </Pokemon>
        </PokeGrid>
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

export default PokeCards;
