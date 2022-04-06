import React, { useState } from "react";
import {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";

import confetti from "canvas-confetti";

import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import { existsInFavorites, getPokemonInfo, toggleFavorite } from "../../utils";

type IProps = {
  pokemon: Pokemon;
};

const PoekomPage: NextPage<IProps> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    existsInFavorites(pokemon.id)
  );

  const onToggleSave = () => {
    toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: { x: 0.5, y: 0.5 },
    });
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: 5 }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: 30 }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "no-image.png"
                }
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}>
              <Text h1 transform='capitalize'>
                {pokemon.name}
              </Text>
              <Button
                color='gradient'
                ghost={!isInFavorites}
                onClick={onToggleSave}>
                {isInFavorites ? "Remove" : "Save"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}> Sprites:</Text>
              <Container display='flex' direction='row'>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons = [...Array(400)].map((_, index) => `${index + 1}`);

  return {
    paths: pokemons.map((id) => ({
      params: { pokemonId: id },
    })),

    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const { pokemonId } = params as { pokemonId: string };

  const pokemon = await getPokemonInfo(pokemonId);

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { pokemon },
    revalidate: 86400, //60 * 60 * 24,
  };
};

export default PoekomPage;
