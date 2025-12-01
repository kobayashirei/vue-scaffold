import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// custom plugins
import AutoImport from "unplugin-auto-import/vite"
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      imports: [
        'vue', // ref, computed, reactive...
        'vue-router',
        'pinia',
        'vue-i18n',
        '@vueuse/core',
      ],
      dts: 'types/auto-imports.d.ts', // 自动生成类型声明
      dirs: ['src/utils', 'src/stores', 'src/types'], // 自动导入你的工具 & store
      vueTemplate: true, // 允许模板中使用
    }),
    Components({
      dirs: ["src/components"],
      dts: "types/components.d.ts",
      deep: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: "0.0.0.0",
    port: 4000,
  }
})
