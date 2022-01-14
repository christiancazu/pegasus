import { RouteRecordRaw } from 'vue-router'

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
  }
]

export default routes
