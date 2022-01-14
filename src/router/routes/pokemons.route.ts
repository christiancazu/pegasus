import { RouteRecordRaw } from 'vue-router'

const pokemonsRoutes: RouteRecordRaw[] = [
  {
    path: 'pokemons',
    name: 'Pokemons',
    component: () => import('@/views/Pokemons.vue')
  }
]

export default pokemonsRoutes
