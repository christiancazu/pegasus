import { RouteRecordRaw } from 'vue-router'

const authRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  }
]

export default authRoutes
