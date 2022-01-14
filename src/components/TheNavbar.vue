<template>
<Menubar
  class="nav"
  exact
  :model="items"
>
  <template #start>
    <div class="nav__left">
      <img
        alt="logo"
        class="nav__left__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png"
      >
      <div class="nav__left__text">
        API-Pokémon
      </div>
    </div>
  </template>
  <template #item="{item}">
    <div class="nav__right">
      <RouterLink
        v-slot="{ isActive, isExactActive}"
        class="nav__right__links"
        :to="item.to"
      >
        <a :class="{'active-link': isActive, 'active-link-exact': isExactActive}">
          {{ item.label }}
        </a>
      </RouterLink>
    </div>
  </template>
</Menubar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Menubar from 'primevue/menubar'

export default defineComponent({
  name: 'TheNavbar',

  components: {
    Menubar
  },

  setup () {
    const items = ref([
      {
        label: 'Inicio',
        to: { name: 'Home' }
      },

      {
        label: 'Pokemones',
        to: { name: 'Pokemons' }
      },
      {
        label: 'Favoritos',
        to: { name: 'Favorites' }
      }
    ])

    return {
      items
    }
  }
})
</script>

<style lang="scss">
.p-menubar {
  display: flex;
  justify-content: space-between;
}

.nav {
  background-color: #fff;

  &__left {
    display: flex;
    align-items: center;

    &__logo {
      height: 2.5rem;
    }
    &__text {
      padding-left: .5rem;
      padding-right: .5rem;
      font-size: 1.25rem;
    }
  }

  &__right {
    display: flex;
    justify-content: end;

    &__links {
      text-decoration: none;
      color: $gray;
      margin-left: 1.5rem;
      padding-top: .25rem;
      padding-bottom: .25rem;

      @media (max-width: 960px) {
        margin-right: 1rem;
      }
    }
    & .active-link {
      &-exact {
        color: $black;
        font-weight: 700;
      }
    }
  }
}
</style>
