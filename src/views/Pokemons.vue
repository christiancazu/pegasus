<template>
<section>
  <WrapperPokemon title="Lista de Pokemones">
    <ListPokemons :pokemons="pokemons" />
  </WrapperPokemon>
</section>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import { useStorePokemons } from '@/composables'

import { Pokemon } from '@/models'
import { requestUtil } from '@/utils'

export default defineComponent({
  name: 'PokemonsView',

  components: {
    WrapperPokemon: defineAsyncComponent(() => import('@/components/pokemons/WrapperPokemon.vue')),
    ListPokemons: defineAsyncComponent(() => import('@/components/pokemons/ListPokemons.vue'))
  },
  setup () {
    const { pokemons, dispatch_getPokemons } = useStorePokemons()

    async function init () {
      requestUtil({
        action: dispatch_getPokemons,
        payload: {
          params: {
            limit: 10
          }
        },
        resolve: (pokemons: Pokemon[]) => {
          console.warn('pokemons', pokemons)
        }
      })
    }

    init()

    return {
      pokemons
    }
  }
})
</script>
