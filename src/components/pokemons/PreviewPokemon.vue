<template>
<Dialog
  v-bind="$attrs"
  :breakpoints="{'960px': '90vw'}"
  :closable="false"
  modal
  style="dialog"
>
  <template #header>
    <div class="dialog__title">
      Agregar a mis favoritos
    </div>
  </template>
  <div class="flex justify-content-center">
    <Card class="pokemon">
      <template #header>
        <img
          height="144"
          :src="previewPokemon.sprites.other.dream_world.front_default"
        >
      </template>
      <template #title>
        <div class="pokemon__title">
          {{ previewPokemon.name }}
        </div>
      </template>
      <template #subtitle>
        <div class="pokemon__types">
          <strong>Tipos: </strong>
          {{ previewPokemon.types.map(t => t.type.name).join(', ') }}
        </div>
      </template>
      <template #content>
        <div class="grid">
          <div class="col-6">
            <strong>Altura:</strong> {{ previewPokemon.height }}
          </div>
          <div class="col-6">
            <strong>Peso:</strong> {{ previewPokemon.weight }}
          </div>
        </div>
      </template>
    </Card>
  </div>
  <template #footer>
    <Button
      class="dialog__actions--cancel p-button-text"
      icon="pi pi-times"
      label="Cancelar"
      @click="$emit('update:visible', false)"
    />
    <Button
      autofocus
      class="dialog__actions--add ml-2"
      icon="pi pi-check"
      label="Agregar"
      @click="$emit('modal:confirm')"
    />
  </template>
</Dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Card from 'primevue/card'

import { FavoritePokemon } from '@/models'

export default defineComponent({
  name: 'PreviewPokemon',

  components: {
    Dialog,
    Button,
    Card
  },

  props: {
    previewPokemon: {
      type: Object as PropType<FavoritePokemon>,
      default: () => null
    }
  },

  emits: ['update:visible', 'modal:confirm']
})
</script>

<style lang="scss" scoped>
.dialog {
  max-width: 24em;

  &__title {
    font-size: 20px;
    color: var(--cyan-700) !important;
  }

  &__actions {
    &--cancel {
      color: var(--cyan-700);
    }
    &--add,
    &--add:focus {
      background-color: var(--cyan-700);
    }
  }
}

.pokemon {
  padding-top: 2rem;
  max-width: 20rem;
  width: 100%;
  box-shadow: none;

  &__title {
    text-transform: capitalize;
    text-align: center;
  }

  &__types {
    text-align: center;
  }
}

strong {
  font-weight: 700;
}
</style>
