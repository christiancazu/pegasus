<template>
<div class="wrapper-pokemon">
  <div class="wrapper-pokemon__title">
    {{ title }}
  </div>
  <slot />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WrapperPokemon',

  props: {
    title: {
      type: String,
      required: true
    }
  },

  setup () {
    return {}
  }
})
</script>

<style lang="scss" styled>
.wrapper-pokemon {
  padding: 2rem;
  border: 1px solid $gray;
  border-radius: 1rem;
  position: relative;

  @include responsive() {
    padding: 1rem;
  }

  &__title {
    position: absolute;
    top: -8px;
    left: 20px;
    padding: 0 4px;
    color: $gray;
    background-color: $bg-layout;
  }
}
</style>
