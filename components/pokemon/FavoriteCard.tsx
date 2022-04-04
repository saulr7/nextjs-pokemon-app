import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

type IProps = {
  id: number;
};

const FavoriteCard: FC<IProps> = ({ id }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} xl={1} key={id}>
      <Card hoverable clickable css={{ padding: 10 }} onClick={onClick}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width='100%'
          height={140}
        />
      </Card>
    </Grid>
  );
};

export default FavoriteCard;
