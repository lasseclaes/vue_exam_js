<!-- <script setup lang="ts">
import { URL } from 'url' -->
<script setup>
const url = new URL(window.location)
const param = url.searchParams.get('test')

console.log('param:', param)
console.log(window.location.pathname)
const cleanPathname = window.location.pathname.slice(1)
console.log('cleanPathname:', cleanPathname)
</script>
<template>
  <h5>Nothing here</h5>
</template>
