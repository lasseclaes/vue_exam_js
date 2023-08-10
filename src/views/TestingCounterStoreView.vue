<!-- //https://pinia.vuejs.org/introduction.html -->

<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
function incrementLoc() {
  counter.increment()
}
function decrementLoc() {
  counter.decrement()
}
</script>

<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ counter.count }}</div>
  <button @click="decrementLoc">Click me -</button>
  <button @click="incrementLoc">Click me +</button>
</template>
