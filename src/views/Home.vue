<template>
<section class="home-section">
  <img
    alt="logo"
    :src="require('@/assets/images/logo.png')"
  >
</section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView'
})
</script>

<style lang="scss" scoped>
.home-section {
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  & img {
    @include responsive() {
      padding: 1rem;
      width: 100%;
    }
  }
}
</style>
