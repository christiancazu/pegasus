<template>
<section class="error">
  <h1>404 - Página no encontrada</h1>
  <div>
    <Button
      label="Volver"
      @click="$router.push('/')"
    />
  </div>
</section>
</template>

<script>
import { defineComponent } from 'vue'

import Button from 'primevue/button'

export default defineComponent({
  name: 'ErrorView',

  components: {
    Button
  }
})
</script>

<style lang="scss" scoped>
.error {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  & h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
