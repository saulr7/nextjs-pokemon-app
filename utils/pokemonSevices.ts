import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

const getPokemonInfo = async (id: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
  return pokemon

}

export { getPokemonInfo }