<template>
<section class="grid">
  <article
    v-for="pokemon in pokemons"
    :key="pokemon.id"
    class="col-12 md:col-6"
  >
    <div
      v-if="!isLoading"
      class="pokemon"
      style="min-height: 6.95rem"
    >
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
    <div v-else>
      <div class="grid">
        <div class="col-2">
          <Skeleton
            class="pokemon--skeleton__item"
            height="6.6rem"
            width="100%"
          />
        </div>
        <div class="col-10">
          <Skeleton
            class="pokemon--skeleton__item"
            height="6.5rem"
            width="100%"
          />
        </div>
      </div>
    </div>
  </article>

  <PreviewPokemon
    v-model:visible="modal.isVisible"
    :preview-pokemon="previewPokemon"
    @modal:confirm="handleAddFavoritePokemon"
  />
</section>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, PropType, reactive, ref } from 'vue'

import Button from 'primevue/button'
import Skeleton from 'primevue/skeleton'

import { FavoritePokemon, Pokemon } from '@/models'
import { useStorePokemons, useToast } from '@/composables'
import { requestUtil } from '@/utils'

export default defineComponent({
  name: 'ListPokemons',

  components: {
    Button,
    Skeleton,
    PreviewPokemon: defineAsyncComponent(() => import('./PreviewPokemon.vue'))
  },

  props: {
    pokemons: {
      type: Array as PropType<Pokemon[]>,
      default: () => []
    },
    isLoading: Boolean
  },

  setup () {
    const { favoritePokemons, dispatch_getPokemon, ADD_FAVORITE_POKEMON } = useStorePokemons()

    const { $toast } = useToast()

    const previewPokemon = ref<FavoritePokemon|null>(null)

    const modal = reactive<{isVisible: boolean}>({
      isVisible: false
    })

    function handleViewDetailPokemon (pokemon: Pokemon) {
      requestUtil({
        action: dispatch_getPokemon as any,
        payload: {
          pokemonId: pokemon.id
        },
        resolve: ({ data }: {data: FavoritePokemon}) => {
          previewPokemon.value = data
          modal.isVisible = true
        }
      })
    }

    function handleAddFavoritePokemon () {
      const availeableToAddAsFavorite = favoritePokemons.value.find(fp => fp.id === previewPokemon.value?.id)

      if (availeableToAddAsFavorite) {
        $toast.open({
          message: 'El pokemon ya existe en su lista de favoritos',
          type: 'warning'
        })
      } else {
        $toast.open({
          message: 'El pokemon se ha agregado a su lista de favoritos'
        })

        ADD_FAVORITE_POKEMON(previewPokemon.value!)
      }

      modal.isVisible = false
    }

    return {
      modal,
      //
      previewPokemon,
      handleViewDetailPokemon,
      handleAddFavoritePokemon
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
    background-color: $bg-hover-pokemon;
  }

  &__info {
    display: flex;
    align-items: center;

    &__img {
      max-height: 7rem;
      padding: .25rem 0;
    }
    &__name {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
  &__actions {
    & button {
      border-radius: .5rem;
      background-color: var(--cyan-700);
      &:hover {
        background-color: var(--cyan-700);
        filter: brightness(130%);
      }
    }
  }
}
</style>
