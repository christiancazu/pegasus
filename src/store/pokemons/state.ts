import { Pokemon } from '@/models'

export interface PokemonsStateInterface {
  pokemons: Pokemon[];
}

function state (): PokemonsStateInterface {
  return {
    pokemons: []
  }
}

export default state
