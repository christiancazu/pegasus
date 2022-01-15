import { RouteRecordRaw } from 'vue-router'

const logoutRoutes: RouteRecordRaw[] = [
  {
    path: 'logout',
    name: 'Logout',
    component: () => import('@/views/Logout.vue')
  }
]

export default logoutRoutes
