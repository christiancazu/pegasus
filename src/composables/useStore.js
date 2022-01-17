import { computed } from 'vue'
import { useStore } from 'vuex'

import { pokemonTypes } from '@/store/pokemons/pokemon.types'

export const useStorePokemons = () => {
  const { state, dispatch, commit } = useStore()

  return {
    pokemons: computed(() => state.pokemons.pokemons),
    favoritePokemons: computed(() => state.pokemons.favoritePokemons),

    dispatch_getPokemons: (payload) => dispatch('pokemons/dispatch_getPokemons', payload),
    dispatch_getPokemon: ({ pokemonId }) => dispatch('pokemons/dispatch_getPokemon', { pokemonId }),

    ADD_FAVORITE_POKEMON: (pokemon) => commit(`pokemons/${pokemonTypes.ADD_FAVORITE_POKEMON}`, pokemon),
    REMOVE_FAVORITE_POKEMON: (pokemonId) => commit(`pokemons/${pokemonTypes.REMOVE_FAVORITE_POKEMON}`, pokemonId)
  }
}
