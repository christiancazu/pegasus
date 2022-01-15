import { createRouter, createWebHistory } from 'vue-router'
import authGuard from './auth.guard'

import routes from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(authGuard)

export default router

export const makeRouter = () => createRouter({
  history: createWebHistory(),
  routes
})
