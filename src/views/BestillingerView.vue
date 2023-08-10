<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { ref, onMounted } from 'vue'
// import { ProductService } from '@/testservice/ProductService'
import { columns } from '@/data/examorderscolumns.js'

/* onMounted(() => {
  ProductService.getProductsMini().then((data) => (products.value = data))
})

const products = ref() */
import { useExamOrdersStore } from '@/stores/examorders'
const examOrdersLoc = useExamOrdersStore()

console.log(examOrdersLoc.examOrders)
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
    >
      <Column
        v-for="col in columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        style="width: fit-content"
        sortable
      ></Column>
    </DataTable>
  </div>
</template>

<style scoped>
:deep(.p-column-title) {
  /* background: red; */
  font-weight: bold;
}
</style>
