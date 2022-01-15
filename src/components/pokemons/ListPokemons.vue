<template>
<section class="grid">
  <article
    v-for="pokemon in pokemons"
    :key="pokemon.id"
    class="col-12 md:col-6"
  >
    <div class="pokemon">
      <div class="pokemon__info">
        <div class="pokemon__info__img">
          <img
            :alt="pokemon.name"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
          >
        </div>
        <div class="pokemon__info__name">
          {{ pokemon.name }}
        </div>
      </div>
      <div class="pokemon__actions">
        <Button
          label="Info"
          @click="handleViewDetailPokemon(pokemon)"
        />
      </div>
    </div>
  </article>
</section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Button from 'primevue/button'

import { Pokemon } from '@/models'

export default defineComponent({
  name: 'ListPokemons',

  components: {
    Button
  },

  props: {
    pokemons: {
      type: Array as PropType<Pokemon[]>,
      default: () => []
    }
  },

  setup () {
    function handleViewDetailPokemon (pokemon: Pokemon) {
      console.warn(pokemon)
    }

    return {
      handleViewDetailPokemon
    }
  }
})
</script>

<style lang="scss" scoped>
.pokemon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  transition: all .25s;

  &:hover {
    background-color: $gray;
    border: 1px solid $black;
    color: $white-medium;
  }

  &__info {
    display: flex;
    align-items: center;

    &__img {
      max-height: 7rem;
    }
    &__name {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
  &__actions {
    & button {
      background-color: var(--cyan-700);
    }
  }
}
</style>
