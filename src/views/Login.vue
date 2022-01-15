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
    :loading="isProcessingLogin"
    @click="handleLogin"
  />
</section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import Button from 'primevue/button'

import { storageService } from '@/services'
import { useToast } from '@/composables'

export default defineComponent({
  name: 'LoginView',

  components: {
    Button
  },

  setup () {
    const router = useRouter()

    const { $toast } = useToast()

    const isProcessingLogin = ref(false)

    async function handleLogin () {
      isProcessingLogin.value = true

      // fake login
      await new Promise<void>(resolve => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })

      isProcessingLogin.value = false

      storageService.setToken('eyFakeToken')

      $toast.open({
        message: 'Bienvenido a API-Pókemon'
      })

      router.push({ name: 'Home' })
    }

    return {
      isProcessingLogin,
      handleLogin
    }
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
