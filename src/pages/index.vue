<script setup lang="ts">
const c = useAppConfigureStore()
function add() {
  c.siteConfig.test_num++
}
</script>

<template>
  <main>
    <!-- {{ c.siteConfig.title }} -->
    <h1>{{ c.siteConfig.test_num }}</h1>
    <button @click="add">btn</button>
  </main>
</template>
