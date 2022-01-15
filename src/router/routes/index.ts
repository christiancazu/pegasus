import { RouteRecordRaw } from 'vue-router'
import authRoutes from './auth.route'

import favoritesRoutes from './favorites.route'
import homeRoutes from './home.route'
import pokemonsRoutes from './pokemons.route'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'Home',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      ...homeRoutes,
      ...pokemonsRoutes,
      ...favoritesRoutes
    ]
  },
  {
    path: '/auth',
    redirect: 'Login',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      ...authRoutes
    ]
  }
]

export default routes
