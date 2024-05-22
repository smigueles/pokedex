export type Pokemon = {
  name: string;
  id: number;
  imgSrc: string;
  national_number?: string;
};

export type PokemonDetail = {
  name: string;
  id: string;
  imgSrc: string;
  hp: number;
  attack: number;
  defense: number;
};
