import React, { FC } from "react";
import { Grid } from "@nextui-org/react";
import FavoriteCard from "./FavoriteCard";

type IProps = {
  favorites: number[];
};

const FavoritePokemons: FC<IProps> = ({ favorites }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {favorites.map((id) => (
        <FavoriteCard id={id} key={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoritePokemons;
