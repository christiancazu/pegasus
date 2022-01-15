import { FavoritePokemon, Pokemon } from '@/models'

export interface PokemonsStateInterface {
  pokemons: Pokemon[];
  favoritePokemons: FavoritePokemon[];
}

function state (): PokemonsStateInterface {
  return {
    pokemons: [],
    favoritePokemons: []
  }
}

export default state
