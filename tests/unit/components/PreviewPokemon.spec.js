import { mount } from '@vue/test-utils'
import PreviewPokemon from '@/components/pokemons/PreviewPokemon.vue'

import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Card from 'primevue/card'

const previewPokemonMock = {
  id: '1',
  name: 'Pikachu',
  url: 'https://pokeapi.co/api/v2/pokemon/1',
  height: 44,
  weight: 480,
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
}

describe('PreviewPokemon', () => {
  test('render PreviewPokemon', () => {
    const wrapper = mount(PreviewPokemon, {
      props: {
        previewPokemon: previewPokemonMock
      }
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  test('find componemts', () => {
    const wrapper = mount(PreviewPokemon)

    expect(wrapper.findComponent(Dialog).exists())
    expect(wrapper.findComponent(Button).exists())
    expect(wrapper.findComponent(Card).exists())
  })

  test('emit events to parent', async () => {
    const wrapper = mount(PreviewPokemon)

    wrapper.vm.$emit('update:visible', true)
    wrapper.vm.$emit('modal:confirm')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted()['update:visible']).toBeTruthy()
    expect(wrapper.emitted()['modal:confirm']).toBeTruthy()

    expect(wrapper.emitted()['update:visible'][0]).toEqual([true])
  })
})
