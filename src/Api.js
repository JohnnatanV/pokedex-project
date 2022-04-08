const headUrl = "https://pokeapi.co/api/v2/";

export const SearchPokemon = async (pokemon) => {
  try {
    let url = `${headUrl}pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (err) {}
};

export const getPokemons = async (limit = 9, offset = 0) => {
  try {
    let url = `${headUrl}pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (err) {}
};
