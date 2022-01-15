import { FavoritePokemon, Pokemon } from '@/models'
import { MutationTree } from 'vuex'
import { pokemonTypes } from './pokemon.types'
import { PokemonsStateInterface } from './state'

const mutation: MutationTree<PokemonsStateInterface> = {
  [pokemonTypes.SET_POKEMONS] (state: PokemonsStateInterface, pokemons: Pokemon[]) {
    state.pokemons = pokemons.map(pokemon => ({
      ...pokemon,
      // obtain id from url
      id: (pokemon.url.split('pokemon/')[1]).slice(0, -1)
    }))
  },

  [pokemonTypes.ADD_FAVORITE_POKEMON] (state: PokemonsStateInterface, favoritePokemon: FavoritePokemon) {
    state.favoritePokemons.push(favoritePokemon)
  },

  [pokemonTypes.REMOVE_FAVORITE_POKEMON] (state: PokemonsStateInterface, pokemonId: string) {
    const pokemonIndex = state.favoritePokemons.findIndex(p => p.id === pokemonId)

    state.favoritePokemons.splice(pokemonIndex, 1)
  }
}

export default mutation
