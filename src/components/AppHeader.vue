<template>
  <header :class="['rei-header', isHidden ? 'rei-header--hidden' : '']">
    <div class="rei-logo">
      <img alt="Vue logo" class="rei-logo-img" src="@/assets/logo.svg" width="32" height="32" />
      <span class="rei-title">{{ appName }}</span>
    </div>
    
    <nav class="rei-nav">
      <RouterLink to="/" class="rei-nav-item">{{ $t('common.home') }}</RouterLink>
      <RouterLink to="/about" class="rei-nav-item">{{ $t('common.about') }}</RouterLink>
      <RouterLink to="/blog" class="rei-nav-item">{{ $t('common.blog') }}</RouterLink>
    </nav>

    <div class="rei-actions">
      <button class="rei-btn" @click="mobileOpen = !mobileOpen">☰</button>
    </div>
  </header>
  <Transition name="rei-fade">
    <nav v-if="mobileOpen" class="rei-nav-mobile">
      <RouterLink @click="mobileOpen=false" to="/" class="rei-nav-item">{{ $t('common.home') }}</RouterLink>
      <RouterLink @click="mobileOpen=false" to="/about" class="rei-nav-item">{{ $t('common.about') }}</RouterLink>
      <RouterLink @click="mobileOpen=false" to="/blog" class="rei-nav-item">{{ $t('common.blog') }}</RouterLink>
    </nav>
  </Transition>
</template>

<script setup lang="ts">
import { useAppConfig } from '@/app/config'
const appName = useAppConfig().app.name
const mobileOpen = ref(false)
const isHidden = ref(false)
const lastY = ref(0)
const threshold = 10
const { y } = useWindowScroll()
watch(y, (val) => {
  if (val < 80) {
    isHidden.value = false
  } else {
    const dirDown = val - lastY.value > threshold
    const dirUp = lastY.value - val > threshold
    if (dirDown) isHidden.value = true
    if (dirUp) isHidden.value = false
  }
  lastY.value = val
})
</script>

<style scoped>
.rei-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 24px;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-background);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: transform var(--transition-normal) ease;
}

.rei-header--hidden { transform: translateY(-100%); }

.rei-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: bold;
  font-size: 1.2rem;
}

.rei-nav {
  display: flex;
  gap: 24px;
}

.rei-nav-item {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.rei-nav-item:hover,
.rei-nav-item.router-link-active {
  color: hsla(160, 100%, 37%, 1);
}

.rei-actions {
  display: flex;
  gap: 12px;
}

.rei-nav-mobile {
  display: none;
}

@media (max-width: 768px) {
  .rei-nav { display: none; }
  .rei-nav-mobile { display: flex; flex-direction: column; gap: 16px; padding: 16px; border-bottom: 1px solid var(--color-border); }
}
</style>
