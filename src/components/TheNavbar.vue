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
        :id="item.id"
        v-slot="{ isActive, isExactActive }"
        class="nav__right__links"
        :to="item.to"
      >
        <template v-if="item.id === 'route-logout'">
          <Button
            class="nav__right__logout"
            icon="pi pi-sign-out"
          />
        </template>
        <a
          v-else
          :class="{'active-link': isActive, 'active-link-exact': isExactActive}"
        >
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
import Button from 'primevue/button'

export default defineComponent({
  name: 'TheNavbar',

  components: {
    Menubar,
    Button
  },

  setup () {
    const items = ref([
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
      },
      {
        id: 'route-logout',
        label: 'Favoritos',
        to: { name: 'Logout' }
      }
    ])

    return {
      items
    }
  }
})
</script>

<style lang="scss" styled>
// custom menubar styles
.p-menubar {
  display: flex;
  justify-content: space-between;
  border: none;
  border-radius: 0;
}

.p-menubar-button {
  color: $white !important;
}

.nav {
  background-color: $gray;
  position: fixed;
  z-index: 100;
  width: 100%;

  @include desktop() {
    padding-left: 4rem;
    padding-right: 4rem;
  }

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
      color: $white;
    }
  }

  &__right {
    display: flex;
    justify-content: end;

    @include responsive() {
      background-color: $gray;
    }

    &__links {
      text-decoration: none;
      color: $white-medium;
      margin-left: 1.5rem;
      padding-top: .25rem;
      padding-bottom: .25rem;

      @include responsive() {
        margin-right: 1rem;
      }
    }
    & .active-link {
      &-exact {
        color: $white;
        font-weight: 700;
      }
    }

    &__logout {
      background-color: transparent;
      border-radius: 50%;
      border: 1px solid $white;
    }
  }
}
</style>
