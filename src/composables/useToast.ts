import { getCurrentInstance } from 'vue'

export const useToast = () => {
  const i = getCurrentInstance() as NonNullable<ReturnType<typeof getCurrentInstance>>

  const $toast = i.appContext.app.config.globalProperties.$toast

  return {
    $toast
  }
}
