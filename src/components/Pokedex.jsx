import PokeCards from "./PokeCards";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pokedex = ({ pokemons, loading, findPokemon }) => {
  return (
    <div>
      {loading ? (
        <div>
          <h4>Buscando Pokemons...</h4>
          <FontAwesomeIcon icon="spinner" pulse />
        </div>
      ) : (
        <PokeCards pokemons={pokemons} findPokemon={findPokemon} />
      )}
    </div>
  );
};

export default Pokedex;
