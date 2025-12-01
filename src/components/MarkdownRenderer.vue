<template>
  <div ref="root" class="rei-markdown" v-html="html"></div>
  <ImageLightbox :src="lightboxSrc" :visible="lightboxVisible" @close="lightboxVisible = false" />
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import ImageLightbox from '@/components/ImageLightbox.vue'
const props = defineProps<{ content: string }>()
const md = new MarkdownIt({ linkify: true, html: false })
const html = computed(() => md.render(props.content || ''))
const root = ref<HTMLElement | null>(null)
const lightboxSrc = ref('')
const lightboxVisible = ref(false)

function bindImages() {
  nextTick(() => {
    const el = root.value
    if (!el) return
    const imgs = el.querySelectorAll('img')
    imgs.forEach((img) => {
      ;(img as HTMLImageElement).style.cursor = 'zoom-in'
      img.addEventListener('click', () => {
        lightboxSrc.value = (img as HTMLImageElement).src
        lightboxVisible.value = true
      })
    })
  })
}

onMounted(bindImages)
watch(html, bindImages)
</script>

<style scoped>
.rei-markdown {
  line-height: 1.75;
}
.rei-markdown h1,
.rei-markdown h2,
.rei-markdown h3 {
  margin: 1rem 0 0.5rem;
}
.rei-markdown p,
.rei-markdown ul,
.rei-markdown ol {
  margin: 0.5rem 0;
}
.rei-markdown pre {
  background: var(--color-border);
  padding: 12px;
  border-radius: 8px;
  overflow: auto;
}
.rei-markdown a {
  color: hsla(160, 100%, 37%, 1);
  text-decoration: none;
}
.rei-markdown a:hover {
  text-decoration: underline;
}
</style>
