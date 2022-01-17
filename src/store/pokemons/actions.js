import { axiosInstance } from '@/config/axios'

import { pokemonTypes } from './pokemon.types'

const actions = {
  async dispatch_getPokemons ({ commit }, payload) {
    try {
      const { data } = await axiosInstance.get('', payload)

      commit(pokemonTypes.SET_POKEMONS, data.results)

      return data
    } catch (error) {
      return Promise.reject(error)
    }
  },

  dispatch_getPokemon (_, { pokemonId }) {
    return axiosInstance.get(pokemonId)
  }
}

export default actions
