<template>
<section class="grid">
  <template v-if="favoritePokemons.length">
    <div
      v-for="pokemon in favoritePokemons"
      :key="pokemon.id"
      class="col-12 md:col-6"
    >
      <WrapperPokemon :title="pokemon.name">
        <div class="flex justify-content-center">
          <img
            :alt="pokemon.name"
            class="favorite-pokemon"
            :src="pokemon.image"
          >
        </div>
      </WrapperPokemon>
    </div>
  </template>
  <template v-else>
    <h1 class="no-favorites">
      No ha seleccionado Pokemones favoritos
    </h1>
  </template>
</section>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue'

import { useStorePokemons } from '@/composables'

export default defineComponent({
  name: 'FavoritesView',

  components: {
    WrapperPokemon: defineAsyncComponent(() => import('@/components/pokemons/WrapperPokemon.vue'))
  },

  setup () {
    const { favoritePokemons } = useStorePokemons()

    return {
      favoritePokemons
    }
  }
})
</script>

<style lang="scss" scoped>
.favorite-pokemon {
  max-height: 10rem;
  height: 10rem;
  max-width: auto;
}
.md\:col-6 {
  padding: 2rem;

  @include responsive() {
    padding: 1rem .5rem;
  }
}
.no-favorites {
  color: var(--cyan-700);
  font-size: 2rem;
}
</style>
