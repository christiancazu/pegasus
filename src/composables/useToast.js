import { getCurrentInstance } from 'vue'

export const useToast = () => {
  const i = getCurrentInstance()

  const $toast = i.appContext.app.config.globalProperties.$toast

  return {
    $toast
  }
}
