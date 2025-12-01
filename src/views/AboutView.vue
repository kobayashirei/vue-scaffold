<template>
  <div class="about">
    About
    <h1>This is an about page / {{ c.count }}</h1>
    <h2>{{ c.version }}</h2>
    <button @click="c.increment">Double Count</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'

// const x = useCounter

const c = useCounterStore()
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
