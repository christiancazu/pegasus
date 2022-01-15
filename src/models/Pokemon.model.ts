export interface Pokemon {
  id: string
  name: string
  url: string
}

export interface FavoritePokemon extends Pokemon {
  height: number
  weight: number
}
