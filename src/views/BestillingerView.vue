<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { ref, onMounted } from 'vue'
import { ProductService } from '@/testservice/ProductService'
import { columns } from '@/data/examorderscolumns.js'

onMounted(() => {
  ProductService.getProductsMini().then((data) => (products.value = data))
})

const products = ref()

/* const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' }
] */
</script>
<template>
  <div class="card bestillinger">
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column v-for="col in columns" :key="col" :field="col" :header="col"></Column>
    </DataTable>
  </div>
</template>

<style scoped>
:deep(.p-column-title) {
  /* background: red; */
  font-weight: bold;
}
</style>
