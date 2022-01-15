import { Pokemon } from '@/models'
import { MutationTree } from 'vuex'
import { pokemonTypes } from './pokemon.types'
import { PokemonsStateInterface } from './state'

const mutation: MutationTree<PokemonsStateInterface> = {
  [pokemonTypes.SET_POKEMONS] (state: PokemonsStateInterface, pokemons: Pokemon[]) {
    console.error(pokemons)
    state.pokemons = pokemons.map(pokemon => ({
      ...pokemon,
      // obtain id from url
      id: (pokemon.url.split('pokemon/')[1]).slice(0, -1)
    }))
  }
}

export default mutation
