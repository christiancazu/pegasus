import { RouteRecordRaw } from 'vue-router'
import authRoutes from './auth.route'

import favoritesRoutes from './favorites.route'
import homeRoutes from './home.route'
import logoutRoutes from './logout.route'
import pokemonsRoutes from './pokemons.route'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'Home',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      ...homeRoutes,
      ...pokemonsRoutes,
      ...favoritesRoutes,
      ...logoutRoutes
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    redirect: 'Login',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      ...authRoutes
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/views/Error404.vue')
  }
]

export default routes
