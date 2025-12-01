<template>
  <Transition name="rei-fade">
    <div v-if="loading" class="rei-loading">
      <div class="rei-spinner"></div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean
}>()
</script>

<style scoped>
.rei-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.rei-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--color-border);
  border-top-color: hsla(160, 100%, 37%, 1);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.rei-fade-enter-active,
.rei-fade-leave-active {
  transition: opacity 0.3s ease;
}

.rei-fade-enter-from,
.rei-fade-leave-to {
  opacity: 0;
}

@media (prefers-color-scheme: dark) {
  .rei-loading {
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
