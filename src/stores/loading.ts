import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false)
  const requestCount = ref(0)

  function show() {
    if (requestCount.value === 0) {
      isLoading.value = true
    }
    requestCount.value++
  }

  function hide() {
    if (requestCount.value > 0) {
      requestCount.value--
    }
    if (requestCount.value === 0) {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    show,
    hide
  }
})
