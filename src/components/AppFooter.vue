<template>
  <footer class="rei-footer">
    <div class="copyright">
      &copy; {{ new Date().getFullYear() }} Rei Project. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
// AppFooter
</script>

<style scoped>
.rei-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-soft);
  font-size: 0.9rem;
  margin-top: auto;
}
</style>
