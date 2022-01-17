import { pokemonTypes } from './pokemon.types'

const mutation = {
  [pokemonTypes.SET_POKEMONS] (state, pokemons) {
    state.pokemons = pokemons.map(pokemon => ({
      ...pokemon,
      // obtain id from url
      id: (pokemon.url.split('pokemon/')[1]).slice(0, -1)
    }))
  },

  [pokemonTypes.ADD_FAVORITE_POKEMON] (state, favoritePokemon) {
    state.favoritePokemons.push({
      id: favoritePokemon.id,
      name: favoritePokemon.name,
      url: '',
      height: favoritePokemon.height,
      weight: favoritePokemon.weight,
      image: favoritePokemon.sprites.other.dream_world.front_default
    })
  },

  [pokemonTypes.REMOVE_FAVORITE_POKEMON] (state, pokemonId) {
    const pokemonIndex = state.favoritePokemons.findIndex(p => p.id === pokemonId)

    state.favoritePokemons.splice(pokemonIndex, 1)
  }
}

export default mutation
