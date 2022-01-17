import { createStore } from 'vuex'

import pokemons from './pokemons'

export default createStore({
  modules: {
    pokemons
  }
})
