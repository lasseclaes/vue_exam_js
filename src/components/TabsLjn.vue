<script setup>
import TabMenu from 'primevue/tabmenu'
import { ref } from 'vue'

function onTabChange(e) {
  console.log('onTabChange:', e)
  const url = new URL(window.location)
  // const param = url.searchParams.get('test')
  // console.log('param:', param)
  const status_filter = url.searchParams.get('status')
  console.log('status_filter:', status_filter)
  /*   console.log(window.location.pathname)
  const cleanPathname = window.location.pathname.slice(1)
  console.log('cleanPathname:', cleanPathname) */
}

const items = ref([
  {
    label: 'Ubehandlede',
    to: '/bestillinger?status=ubehandlede'
  },
  {
    label: 'Dialog',
    to: '/bestillinger?status=dialog'
  },
  {
    label: 'Korrektur',
    to: '/bestillinger?status=korrektur'
  },
  {
    label: 'Godkendte',
    to: '/bestillinger?status=godkendte'
  },
  {
    label: 'Til Brænding',
    to: '/bestillinger?status=tilbraending'
  },
  {
    label: 'Brændt',
    to: '/bestillinger?status=braendte'
  },
  {
    label: 'Kontrolleret',
    to: '/bestillinger?status=kontrolleret'
  },
  {
    label: 'Direkte forsendelse',
    to: '/bestillinger?status=direkteforsendelse'
  }
])
</script>

<template>
  <div class="card">
    <TabMenu :model="items" @tab-change="onTabChange" />
    <router-view />
  </div>
</template>

<style>
.card {
  grid-column: 2 / -1;
}
</style>
