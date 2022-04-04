import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui/";
import { getFavorites } from "../../utils";

const FavorirtesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const pokemons = getFavorites();
    setFavorites(pokemons);
  }, []);

  if (favorites.length === 0) {
    return (
      <Layout title='Favorites'>
        <NoFavorites />
      </Layout>
    );
  }

  return (
    <Layout title='Favorites'>
      <FavoritePokemons favorites={favorites} />
    </Layout>
  );
};

export default FavorirtesPage;
