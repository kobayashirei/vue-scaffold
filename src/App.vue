<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppLoading from '@/components/AppLoading.vue'
import { useLoadingStore } from '@/stores/loading'
import { useAppConfig } from '@/app/config'

const loadingStore = useLoadingStore()
const ui = useAppConfig().ui
</script>

<template>
  <div class="rei-layout">
    <AppLoading :loading="loadingStore.isLoading" />
    <AppHeader />

    <main class="rei-content">
      <RouterView v-slot="{ Component }">
        <Transition :name="ui.transitions.page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.rei-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.rei-content {
  flex: 1;
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.rei-page-enter-active,
.rei-page-leave-active {
  transition: opacity 0.2s ease;
}

.rei-page-enter-from,
.rei-page-leave-to {
  opacity: 0;
}
</style>
