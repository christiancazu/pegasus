import { storageService } from '@/services'
import { RouteLocationNormalized, NavigationGuardNext, RouteRecord } from 'vue-router'

export default (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): any => {
  const isLogged = storageService.getToken()

  if (to.matched.some((record: RouteRecord) => record.meta.requiresAuth)) {
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
