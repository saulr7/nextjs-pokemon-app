import React, { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { SmallPokemon } from "../../interfaces";
import { useRouter } from "next/router";

type IProps = {
  pokemon: SmallPokemon;
};

const PokemonCard: FC<IProps> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.url} width='100%' height={140}></Card.Image>
          <Card.Footer>
            <Row justify='space-between'>
              <Text transform='capitalize'>{pokemon.name}</Text>
              <Text>#{pokemon.id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
