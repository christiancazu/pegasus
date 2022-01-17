<template>
<main class="main-layout">
  <TheNavbar />

  <div class="page-content">
    <RouterView />
  </div>
</main>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    TheNavbar: defineAsyncComponent(() => import('@/components/TheNavbar.vue'))
  }
})
</script>

<style lang="scss">
.main-layout {
  background-color: $bg-layout;
  min-height: 100vh;
}
</style>
