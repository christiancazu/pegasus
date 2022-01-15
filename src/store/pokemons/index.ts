import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { PokemonsStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const pokemonsModule: Module<PokemonsStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default pokemonsModule
