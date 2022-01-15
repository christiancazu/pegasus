<template>
<main class="auth-layout">
  <RouterView />
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthLayout'
})
</script>

<style scoped>
.auth-layout {
  min-height: 100vh;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,92,1) 35%, rgba(0,212,255,1) 100%);
}
</style>
