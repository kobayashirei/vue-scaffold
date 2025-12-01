<template>
  <Transition :name="transition">
    <div v-if="visible && src" class="rei-lightbox" @click="emit('close')">
      <img :src="src" alt="image" class="rei-lightbox-img" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useAppConfig } from '@/app/config'
const props = defineProps<{ src: string; visible: boolean }>()
const emit = defineEmits<{ close: [] }>()
const transition = useAppConfig().ui.transitions.fade
</script>

<style scoped>
.rei-lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}
.rei-lightbox-img {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}
.rei-fade-enter-active,
.rei-fade-leave-active {
  transition: opacity 0.2s ease;
}
.rei-fade-enter-from,
.rei-fade-leave-to {
  opacity: 0;
}
</style>
