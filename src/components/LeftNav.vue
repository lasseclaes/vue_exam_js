<script setup lang="ts">
import Menu from 'primevue/menu'
import { ref } from 'vue'
import { PrimeIcons } from 'primevue/api'

const items = ref([
  { label: 'Bestillinger', icon: PrimeIcons.INBOX, to: '/bestillinger' },
  { label: 'Arkiv', icon: PrimeIcons.FOLDER, to: '/bestillinger/arkiv', class: 'sub-menu' },
  { label: 'Slettede', icon: PrimeIcons.TRASH, to: '/bestillinger/slettede', class: 'sub-menu' },
  { separator: true },
  { label: 'Eksamener', icon: PrimeIcons.PENCIL, to: '/eksamener' },
  { separator: true },
  { label: 'Statistik', icon: PrimeIcons.CHART_PIE, to: '/statistik' },
  { separator: true },
  { label: 'Fakturering', icon: PrimeIcons.MONEY_BILL, to: '/fakturering' },
  { separator: true },
  { label: 'Rush hour', icon: PrimeIcons.FLAG_FILL, to: '/rushhour' },
  { separator: true },
  { label: 'Dubletter', icon: PrimeIcons.COPY, to: '/dubletter' },
  { separator: true },
  { label: 'Udtræk', icon: PrimeIcons.LIST, to: '/udtraek' }
])
</script>

<template>
  <div class="card">
    <!-- flex justify-content-center-->
    <Menu :model="items" />
  </div>
</template>

<style scoped>
:deep(.router-link-active.router-link-active-exact) {
  background-color: var(--blue-200);
}
:deep(.p-menu) {
  width: fit-content;
  /* background-color: red; */
}
:deep(.p-menu .p-menuitem-separator) {
  margin: 0;
}

.card {
  grid-column: 1 / 2;
}

:deep(.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link) {
  padding: 1.25rem 4rem 1.25rem 2rem;
  /* background: red; */
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
