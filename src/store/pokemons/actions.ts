import { axiosInstance } from '@/config/axios'
import { Pokemon } from '@/models'
import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { pokemonTypes } from './pokemon.types'
import { PokemonsStateInterface } from './state'

const actions: ActionTree<PokemonsStateInterface, StateInterface> = {
  async dispatch_getPokemons ({ commit }, payload) {
    try {
      const { data } = await axiosInstance.get('', payload)

      commit(pokemonTypes.SET_POKEMONS, data.results as Pokemon[])

      return data
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default actions
