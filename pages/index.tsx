import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { Grid } from "@nextui-org/react";
import { Layout } from "../components/layouts/index";
import { pokeApi } from "../api/index";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

type IProps = {
  pokemons: SmallPokemon[];
};

const HomePage: NextPage<IProps> = ({ pokemons }) => {
  return (
    <Layout title='List Pokemon'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=400");

  const pokemons: SmallPokemon[] = data.results.map((pok, i) => ({
    ...pok,
    id: i + 1,
    url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: { pokemons },
  };
};

export default HomePage;
