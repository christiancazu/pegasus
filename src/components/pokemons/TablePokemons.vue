<template>
<DataTable
  current-page-report-template="Showing {first} to {last} of {totalRecords} entries"
  data-key="name"
  filter-display="menu"
  :global-filter-fields="['name']"
  paginator
  paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
  responsive-layout="scroll"
  row-hover
  :rows="5"
  :rows-per-page-options="[5, 10, 20, 50]"
  :value="filteredPokemons"
>
  <template #header>
    <div class="flex justify-content-between align-items-center">
      <h1 style="font-size: 20px;">
        Mis pokemones favoritos
      </h1>
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText
          v-model="filter"
          class="p-inputtext-sm"
          placeholder="Buscar por nombre"
        />
      </span>
    </div>
  </template>
  <template #empty>
    No Hay pokemones favoritos
  </template>
  <Column
    class="row-pokemon"
    field="name"
    header="Nombre"
    sortable
  >
    <template #body="{data}">
      {{ data.name }}
    </template>
  </Column>
  <Column
    class="row-pokemon"
    field="height"
    header="Alto"
    sortable
  >
    <template #body="{data}">
      {{ data.height }}
    </template>
  </Column>
  <Column
    class="row-pokemon"
    field="weight"
    header="Peso"
    sortable
  >
    <template #body="{data}">
      {{ data.weight }}
    </template>
  </Column>
  <Column
    class="row-pokemon py-0"
    field="imagen"
    header="Imagen"
  >
    <template #body="{data}">
      <img
        :alt="data.name"
        height="96"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`"
      >
    </template>
  </Column>
  <Column
    class="row-pokemon"
    header="Eliminar"
  >
    <template #body="{data}">
      <Button
        class="p-button-danger p-button-rounded"
        icon="pi pi-trash"
        style="height: 2.5rem; width: 2.5rem"
        @click="$emit('pokemon:delete', data.id)"
      />
    </template>
  </Column>
</DataTable>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

export default defineComponent({
  name: 'TablePokemons',

  components: {
    DataTable,
    Column,
    InputText,
    Button
  },

  props: {
    pokemons: {
      type: Array,
      default: () => []
    }
  },

  emits: ['pokemon:delete'],

  setup (props) {
    const filter = ref('')

    const filteredPokemons = computed(
      () => props.pokemons.filter(p => p.name.includes(filter.value.toLowerCase()))
    )

    return {
      filter,
      filteredPokemons
    }
  }
})
</script>

<style lang="scss">
.p-datatable-header,
.p-datatable .p-datatable-tbody > tr,
.p-paginator {
  background-color: transparent !important;
}

.p-datatable .p-datatable-tbody > tr:hover {
  background-color: $bg-hover-pokemon !important;
}

.row-pokemon {
  min-width: 8rem;
  vertical-align: middle;
  background-color: transparent !important;
}
</style>
