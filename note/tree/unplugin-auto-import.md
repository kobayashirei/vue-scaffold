# 🌟 方式一：使用 `unplugin-auto-import`（最推荐！）

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

# 🌟 方式二：组件自动导入（unplugin-vue-components）

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

---

# 🌟 方式三：Nuxt3 / Nuxt4 内置“自动导入”

如果你是用 **Nuxt**，那更简单，因为：

### Nuxt 自动导入：

- composables（auto-import）
- utils（自动）
- components（自动）
- server/api 自动路由

只需要在 `nuxt.config.ts` 写：

```ts
export default defineNuxtConfig({
  imports: {
    dirs: ['composables', 'utils', 'stores'],
  },
})
```

Nuxt 会自动把以下全部自动导入：

### `composables/useUser.ts`

```ts
export function useUser() { ... }
```

直接使用：

```ts
const user = useUser()
```

### `stores/user.ts`（Pinia）

```ts
export const useUserStore = defineStore("user", {...})
```

使用时：

```ts
const user = useUserStore()
```

完全不 import，Nuxt 自己处理。

---

# 🌟 方式四：TS + Vite 项目（更自动化）

如果你想“精细化自动导入”，可以写自己的规则：

```ts
AutoImport({
  resolvers: [
    (name) => {
      // 自动 import "@/api" 下的函数
      if (name.startsWith('api')) {
        return { name, from: '@/api' }
      }
    },
  ],
})
```

---

# 🌸 你该用哪种？

| 你的项目                                  | 推荐方案                                     |
| ----------------------------------------- | -------------------------------------------- |
| Vue3 + Vite                               | ✔ `unplugin-auto-import` + `vue-components` |
| Nuxt3 / Nuxt4                             | ✔ 内置自动导入（几乎零配置）                |
| Uniapp / 小程序                           | ✔ vite 插件方式，也兼容                     |
| 企业大项目（你喜欢那种 ✨高可维护模式✨） | ✔ Vite 自动导入 + 全局别名管理              |

---

# 如果你愿意，我可以帮你做：

✨ **为你的 Vue / Nuxt 项目自动生成完整的 auto-import 规范：**

- 自动导入 utils
- 自动导入 API
- 自动导入 Pinia
- 自动导入组件
- 自动生成 d.ts 类型
- 自动按目录识别 module
- 自动引入样式 & 主题变量

甚至可以帮你生成你的 **社区＋APP 前端脚手架（Vue + Vite + Tailwind + AutoImport）**。

只要告诉我：
👉 “Rei，我的前端目录结构是怎样？”
我就能直接生成你项目的自动导入配置。

要不要继续？Kawaii no Rei～ 💖
