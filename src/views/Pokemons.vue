<template>
<section>
  <WrapperPokemon title="Lista de Pokemones">
    <ListPokemons
      :is-loading="isLoadingBtnBack || isLoadingBtnNext"
      :pokemons="pokemons"
    />
  </WrapperPokemon>

  <div class="pagination">
    <Button
      v-if="pagination.previous"
      class="pagination__btn--back p-button-outlined"
      label="Anterior"
      :loading="isLoadingBtnBack"
      @click="handlePreviousPokemonPage"
    />
    <Button
      v-if="pagination.next"
      class="pagination__btn--next mx-2"
      label="Siguiente"
      :loading="isLoadingBtnNext"
      @click="handleNextPokemonPage"
    />
  </div>

  <TablePokemons
    :pokemons="favoritePokemons"
    @pokemon:delete="handleDeleteFavoritePokemon"
  />
</section>
</template>

<script>
import { defineAsyncComponent, defineComponent, reactive, ref } from 'vue'
import { useStorePokemons } from '@/composables'

import Button from 'primevue/button'

import { requestUtil } from '@/utils'

export default defineComponent({
  name: 'PokemonsView',

  components: {
    WrapperPokemon: defineAsyncComponent(() => import('@/components/pokemons/WrapperPokemon.vue')),
    ListPokemons: defineAsyncComponent(() => import('@/components/pokemons/ListPokemons.vue')),
    TablePokemons: defineAsyncComponent(() => import('@/components/pokemons/TablePokemons.vue')),
    Button
  },

  setup () {
    const {
      pokemons, favoritePokemons,
      dispatch_getPokemons,
      REMOVE_FAVORITE_POKEMON
    } = useStorePokemons()

    const pagination = reactive({
      count: 0,
      previous: null,
      next: null,
      offset: 0
    })

    const isLoadingBtnBack = ref(false)
    const isLoadingBtnNext = ref(false)

    function handlePreviousPokemonPage () {
      pagination.offset = pagination.offset - 10
      init(isLoadingBtnBack)
    }

    function handleNextPokemonPage () {
      pagination.offset = pagination.offset + 10
      init(isLoadingBtnNext)
    }

    function handleDeleteFavoritePokemon (idPokemon) {
      REMOVE_FAVORITE_POKEMON(idPokemon)
    }

    async function init (isLoadingBtn) {
      requestUtil({
        action: dispatch_getPokemons,
        payload: {
          params: {
            limit: 10,
            offset: pagination.offset
          }
        },
        loader: (v) => {
          isLoadingBtn.value = v
        },
        resolve: (data) => {
          pagination.count = data.count
          pagination.previous = data.previous
          pagination.next = data.next
        }
      })
    }

    init(isLoadingBtnNext)

    return {
      pokemons,
      favoritePokemons,
      pagination,
      //
      handlePreviousPokemonPage,
      handleNextPokemonPage,
      //
      isLoadingBtnBack,
      isLoadingBtnNext,
      //
      handleDeleteFavoritePokemon
    }
  }
})
</script>

<style lang="scss" scoped>
.pagination {
  margin: 2rem 0;

  &__btn--back {
    background-color: white;
    color: var(--gray-500);
  }
  &__btn--next {
    background-color: var(--gray-500);
  }

  &__btn--back,
  &__btn--next {
    border-radius: .5rem;
    &:hover {
      background-color: var(--gray-600);
    }
  }
}
</style>
