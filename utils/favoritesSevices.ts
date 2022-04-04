
const getFavorites = (): number[] => {

  if (typeof window === "undefined") {
    return []
  }
  return JSON.parse(localStorage.getItem("favorites") || "[]")
}

const toggleFavorite = (id: number) => {


  let favorites: number[] = getFavorites()

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id)

  } else {
    favorites.push(id)
  }

  localStorage.setItem("favorites", JSON.stringify(favorites))

}


const existsInFavorites = (id: number): boolean => {

  const favorites: number[] = getFavorites()

  return favorites.includes(id)

}






export { toggleFavorite, existsInFavorites, getFavorites }