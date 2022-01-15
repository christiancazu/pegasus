<template>
<section class="login">
  <img
    alt="favicon"
    height="240"
    src="favicon.ico"
  >
  <h1 class="login__title">
    Pegasus - Evaluación Front-end
  </h1>
  <h1 class="login__name">
    Christian Carrillo Zúñiga
  </h1>
  <Button
    class="login__btn p-button-warning px-6 py-4"
    label="Ingresar"
  />
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Button from 'primevue/button'

export default defineComponent({
  name: 'LoginView',

  components: {
    Button
  }
})
</script>

<style lang="scss" scoped>
.login {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__title,
  &__name {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 800;
  }

  &__title {
    margin-top: 1rem;
  }
}
</style>
