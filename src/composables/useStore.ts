import { computed } from 'vue'
import { useStore } from 'vuex'

import { FavoritePokemon, Pokemon } from '@/models'
import { pokemonTypes } from '@/store/pokemons/pokemon.types'

export const useStorePokemons = () => {
  const { state, dispatch, commit } = useStore()

  return {
    pokemons: computed<Pokemon[]>(() => state.pokemons.pokemons),
    favoritePokemons: computed<FavoritePokemon[]>(() => state.pokemons.favoritePokemons),

    dispatch_getPokemons: (payload: any) => dispatch('pokemons/dispatch_getPokemons', payload),
    dispatch_getPokemon: ({ pokemonId }: {pokemonId: string}) => dispatch('pokemons/dispatch_getPokemon', { pokemonId }),

    ADD_FAVORITE_POKEMON: (pokemon: FavoritePokemon) => commit(`pokemons/${pokemonTypes.ADD_FAVORITE_POKEMON}`, pokemon),
    REMOVE_FAVORITE_POKEMON: (pokemonId: string) => commit(`pokemons/${pokemonTypes.REMOVE_FAVORITE_POKEMON}`, pokemonId)
  }
}
