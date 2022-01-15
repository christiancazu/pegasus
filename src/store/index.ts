import { createStore } from 'vuex'
import { PokemonsStateInterface } from './pokemons/state'

import pokemons from './pokemons'
export interface StateInterface {
  // Define your own store structure, using submodules if needed
  pokemons: PokemonsStateInterface;
}

export default createStore<StateInterface>({
  modules: {
    pokemons
  }
})
