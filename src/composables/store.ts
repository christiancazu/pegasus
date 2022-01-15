import { computed } from 'vue'
import { useStore } from 'vuex'

import { Pokemon } from '@/models'

export const useStorePokemons = () => {
  const { state, getters, dispatch, commit } = useStore()

  return {
    pokemons: computed<Pokemon[]>(() => state.pokemons.pokemons),

    dispatch_getPokemons: (payload: any) => dispatch('pokemons/dispatch_getPokemons', payload)
  }
}
