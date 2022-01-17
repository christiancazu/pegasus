import { flushPromises, RouterLinkStub, shallowMount } from '@vue/test-utils'

import TheNavbar from '@/components/TheNavbar.vue'
import Menubar from 'primevue/menubar'
import { makeRouter } from '@/router'

const mockRouter = {
  push: jest.fn()
}

describe('TheNavbar', () => {
  test('render TheNavbar', async () => {
    const wrapper = shallowMount(TheNavbar, {
      scopedSlots: {
        default: `{{ isActive, isExactActive }}`
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        },
        mocks: {
          $route: mockRouter
        }
      },
      data () {
        return [
          {
            id: 'route-home',
            label: 'Inicio',
            to: { name: 'Home' }
          },
          {
            id: 'route-pokemons',
            label: 'Pokemones',
            to: { name: 'Pokemons' }
          },
          {
            id: 'route-favorites',
            label: 'Favoritos',
            to: { name: 'Favorites' }
          }
        ]
      }
    })

    expect(wrapper.exists).toBeTruthy()
    expect(wrapper.findComponent(Menubar).exists())
  })

  test('find components', () => {
    const wrapper = shallowMount(TheNavbar, {
      scopedSlots: {
        default: `{{ isActive, isExactActive }}`
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        },
        mocks: {
          $route: mockRouter
        }
      }
    })

    expect(wrapper.findComponent(Menubar).exists())
  })

  test('fake navigation', async () => {
    const router = makeRouter()

    router.push('/pokemons')
    await router.isReady()

    const wrapper = shallowMount(TheNavbar, {
      scopedSlots: {
        default: `{{ isActive, isExactActive }}`
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        },
        mocks: {
          $route: mockRouter
        },
        plugins: [router]
      }
    })

    await flushPromises()

    expect(wrapper.find('#pokemon').exists()).toBe(false)
  })
})
