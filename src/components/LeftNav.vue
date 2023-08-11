<script setup lang="ts">
import Menu from 'primevue/menu'
import { ref } from 'vue'
import { PrimeIcons } from 'primevue/api'

const items = ref([
  { label: 'Bestillinger', icon: PrimeIcons.INBOX, url: '/bestillinger' },
  {
    label: 'Arkiv',
    icon: PrimeIcons.FOLDER,
    url: '/bestillinger/arkiv',
    class: 'sub-menu'
  },
  {
    label: 'Slettede',
    icon: PrimeIcons.TRASH,
    url: '/bestillinger/slettede',
    class: 'sub-menu'
  },
  { separator: true },
  { label: 'Eksamener', icon: PrimeIcons.PENCIL },
  { separator: true },
  { label: 'Statistik', icon: PrimeIcons.CHART_PIE },
  { separator: true },
  { label: 'Fakturering', icon: PrimeIcons.MONEY_BILL },
  { separator: true },
  { label: 'Rush hour', icon: PrimeIcons.FLAG_FILL },
  { separator: true },
  { label: 'Dubletter', icon: PrimeIcons.COPY },
  { separator: true },
  { label: 'Udtræk', icon: PrimeIcons.LIST }
])
</script>

<template>
  <div class="card flex justify-content-center">
    <Menu :model="items" />
    <RouterLink to="/notes">Notes</RouterLink>
  </div>
</template>

<style scoped>
:deep(.p-menu .p-menuitem-separator) {
  margin: 0;
}

:deep(.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link) {
  padding: 1.25rem 1.25rem;
}
</style>

<style>
.sub-menu {
  /* background-color: red; */
  margin-left: 1.5rem;
}

.p-menu .p-menuitem.sub-menu > .p-menuitem-content .p-menuitem-link {
  padding: 1rem 1.25rem;
}
/* .sub-menu:last-of-type { */
.sub-menu:nth-child(3) {
  margin-bottom: 1rem;
  /* background: red; */
}
</style>
