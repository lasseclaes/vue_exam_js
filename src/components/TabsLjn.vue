<script setup>
import TabMenu from 'primevue/tabmenu'
import { ref, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
const items = ref([
  {
    label: 'Ubehandlede',
    to: { path: '/bestillinger', query: { status: 'ubehandlede' } }
  },
  {
    label: 'Dialog',
    to: { path: '/bestillinger', query: { status: 'dialog' } }
  },
  {
    label: 'Korrektur',
    to: { path: '/bestillinger', query: { status: 'korrektur' } }
  },
  {
    label: 'Godkendte',
    to: { path: '/bestillinger', query: { status: 'godkendte' } }
  },
  {
    label: 'Til Brænding',
    to: { path: '/bestillinger', query: { status: 'tilbraending' } }
  },
  {
    label: 'Brændt',
    to: { path: '/bestillinger', query: { status: 'braendte' } }
  },
  {
    label: 'Kontrolleret',
    to: { path: '/bestillinger', query: { status: 'kontrolleret' } }
  },
  {
    label: 'Direkte forsendelse',
    to: { path: '/bestillinger', query: { status: 'direkteforsendelse' } }
  }
])

onUpdated(() => {
  console.log('HEY onUpdated')
})

const $route = useRoute()

function onTabChange(e) {
  console.log('onTabChange:', e)
  console.log($route.query.status)

  //const url = new URL(window.location)
  // const param = url.searchParams.get('test')
  // console.log('param:', param)
  //const status_filter = url.searchParams.get('status')
  //console.log('status_filter:', status_filter)

  /*   console.log(window.location.pathname)
  const cleanPathname = window.location.pathname.slice(1)
  console.log('cleanPathname:', cleanPathname) */
}
</script>

<template>
  <div class="card">
    <TabMenu :model="items" @tab-change="onTabChange" />
    <!-- <router-view /> -->
  </div>
</template>

<style>
.card {
  grid-column: 2 / -1;
}
</style>
