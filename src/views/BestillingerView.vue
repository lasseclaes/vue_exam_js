<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { ref, onMounted } from 'vue'
import InputText from 'primevue/inputtext'
// import { ProductService } from '@/testservice/ProductService'
import { columns } from '@/data/examorderscolumns.js'
import CheckBoxLjn from '@/components/CheckBoxLjn.vue'

/* onMounted(() => {
  ProductService.getProductsMini().then((data) => (products.value = data))
})

const products = ref() */
import { useExamOrdersStore } from '@/stores/examorders'
const examOrdersLoc = useExamOrdersStore()

// console.log(examOrdersLoc.examOrders)

//  filters
import { FilterMatchMode, FilterOperator } from 'primevue/api'
const loading = ref(false)

const filters = ref()
const initFilters = () => {
  filters.value = { global: { value: null, matchMode: FilterMatchMode.CONTAINS } }
}
initFilters()
</script>

<template>
  <div class="card bestillinger">
    <DataTable
      :value="examOrdersLoc.examOrders"
      tableStyle="min-width: 50rem"
      showGridlines
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} to {last} of {totalRecords}"
      removableSort
      v-model:filters="filters"
      dataKey="id"
      :globalFilterFields="columns.map((column) => column.field)"
      filterDisplay="row"
      :loading="loading"
    >
      <template #header>
        <div class="flex justify-space-between">
          <h1>Bestillinger</h1>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="filters['global'].value" placeholder="Søg i bestillinger" />
          </span>
        </div>
      </template>

      <Column
        v-for="col in columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        style="width: fit-content"
        sortable
      ></Column>
      <CheckBoxLjn />
    </DataTable>
  </div>
</template>

<style scoped>
:deep(.p-column-title) {
  /* background: red; */
  font-weight: bold;
}
</style>

<style></style>
