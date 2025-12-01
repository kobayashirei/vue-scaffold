<template>
  <div class="rei-blog">
    <h1>{{ $t('common.blog') }}</h1>
    <ul class="rei-posts">
      <li v-for="post in posts" :key="post.slug">
        <RouterLink :to="`/blog/${post.slug}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const modules = import.meta.glob('/src/posts/content/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function extractTitle(content: string, fallback: string) {
  const m = content.match(/^#\s+(.+)$/m)
  return m?.[1]?.trim() || fallback
}

const posts = computed(() => {
  return Object.entries(modules).map(([path, content]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '')
    return { slug, title: extractTitle(content, slug) }
  })
})
</script>

<style scoped>
.rei-blog {
  max-width: 800px;
  margin: 0 auto;
}
.rei-posts {
  list-style: none;
  padding: 0;
}
.rei-posts li {
  margin: 8px 0;
}
</style>
