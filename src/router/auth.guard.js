import { storageService } from '@/services'

export default (to, from, next) => {
  const isLogged = storageService.getToken()

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isLogged) {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    if (isLogged) {
      return next({ name: 'Home' })
    }
    next()
  }
}
