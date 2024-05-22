// https://unpkg.com/pokemons@1.1.0/pokemons.

import { Pokemon } from "../types";
import { formatPokemonName } from "../utils/utils";

export const fetchPokemons = async (): Promise<Array<Pokemon>> => {
  const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons");
  if (!response.ok) {
    throw new Error("Hubo un error al recuperar los datos");
  }
  const result = await response.json();

  const pokemons: Array<Pokemon> = result.results.map((pokemon: Pokemon) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(
      pokemon.name.toLowerCase()
    )}.gif`,
  }));

  const uniquePokemons: Array<Pokemon> = pokemons.filter(
    (pokemon: Pokemon, index: number) =>
      pokemons.findIndex((other: Pokemon) => other.id === pokemon.id) === index
  );

  return uniquePokemons;
};
