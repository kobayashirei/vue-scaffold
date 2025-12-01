# 使用 `unplugin-auto-import`（最推荐！）

支持 Vue、Pinia、VueUse、Axios、自定义 utils 自动导入。

### 📦 安装

```bash
pnpm add -D unplugin-auto-import
```

### 🔧 Vite 配置（`vite.config.ts`）

```ts
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        'vue', // ref, computed, reactive...
        'vue-router',
        'pinia',
        '@vueuse/core',
      ],
      dts: 'types/auto-imports.d.ts', // 自动生成类型声明
      dirs: ['src/utils', 'src/stores'], // 自动导入你的工具 & store
      vueTemplate: true, // 允许模板中使用
    }),
  ],
})
```

### 🚀 使用效果

配置完后，你可以直接使用：

```ts
const count = ref(0)
const router = useRouter()
const store = useMainStore()
```

完全 **不用写 import**，超级爽。

---

# 组件自动导入（unplugin-vue-components）

组件也能自动导入，不用再写：

```ts
import MyButton from '@/components/MyButton.vue'
```

### 📦 安装

```bash
pnpm add -D unplugin-vue-components
```

### 🔧 配置

```ts
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Components({
      dirs: ['src/components'],
      dts: 'types/components.d.ts',
      deep: true,
    }),
  ],
})
```

### 🚀 使用效果

你只要放在 `/components` 中：

```vue
<MyButton />
```

自动 import，自动注册，全都帮你做了。
