export interface Pokemon {
  id: string
  name: string
  url: string
}

export interface FavoritePokemon extends Pokemon {
  height: number
  weight: number,
  image: string
  sprites?: {
    other?: {
      dream_world?: {
        front_default?: string
      }
    }
  }
}
