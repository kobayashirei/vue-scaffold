# Pages 路由自动注册

Date: 2025-12-01 00:00

## Actions

实现了基于文件系统的路由自动注册功能。

### 1. 安装依赖

安装了 `vite-plugin-pages` 插件：

```bash
pnpm add -D vite-plugin-pages
```

### 2. 配置 Vite

在 `vite.config.ts` 中引入并配置插件：

```typescript
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    // ...
    Pages({
      dirs: 'src/pages',
      exclude: ['**/components/*.vue'],
    }),
  ],
})
```

### 3. 类型定义

在 `env.d.ts` 中添加类型定义支持：

```typescript
/// <reference types="vite-plugin-pages/client" />
```

### 4. 路由配置

更新 `src/router/index.ts` 使用自动生成的路由：

```typescript
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
```

### 5. 目录结构调整

将 `src/views` 下的视图文件移动到 `src/pages` 目录：
- `src/views/HomeView.vue` -> `src/pages/index.vue` (路由: `/`)
- `src/views/AboutView.vue` -> `src/pages/about.vue` (路由: `/about`)

现在，在 `src/pages` 目录下创建 `.vue` 文件将自动注册为路由。
