import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { BasicPinia } from '@/types/pinia'

export interface counterState extends BasicPinia {
  count: Ref<number>
  doubleCount: Ref<number>
  increment: () => void
}

export const useCounterStore = defineStore('counter', (): counterState => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment, version: null }
}, { persist: true })
