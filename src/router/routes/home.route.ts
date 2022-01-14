import { RouteRecordRaw } from 'vue-router'

const homeRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }
]

export default homeRoutes
