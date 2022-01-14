import { RouteRecordRaw } from 'vue-router'

const favoritesRoutes: RouteRecordRaw[] = [
  {
    path: 'favorites',
    name: 'Favorites',
    component: () => import('@/views/Favorites.vue')
  }
]

export default favoritesRoutes
