<template>
  <div class="rei-blog-post">
    <MarkdownRenderer v-if="content" :content="content" />
    <p v-else>{{ $t('common.notFound') }}</p>
  </div>
</template>

<script setup lang="ts">
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
const route = useRoute()

const modules = import.meta.glob('/src/posts/content/*.md', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>
const content = ref('')

async function load() {
  const slug = route.params.slug as string
  const path = `/src/posts/content/${slug}.md`
  const loader = modules[path]
  content.value = loader ? await loader() : ''
}

watch(() => route.params.slug, load, { immediate: true })
</script>

<style scoped>
.rei-blog-post {
  max-width: 800px;
  margin: 0 auto;
}
</style>
