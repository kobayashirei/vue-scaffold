# 全局配置中心 (Config Center)

Date: 2025-12-01 17:20

## Actions

- 新增 `src/app/config/index.ts`，集中管理应用配置，避免魔法字符串
- 在 `vite.config.ts` 定义构建常量：`__APP_NAME__`、`__APP_VERSION__`、`__APP_CSS_PREFIX__`
- 更新 i18n 默认语言与回退语言，引用配置中心
- 更新 `AppHeader` 展示应用名称，`App.vue` 使用配置的过渡名
- 在 `docs/struct.md` 登记配置中心规范

## 配置结构

```ts
interface AppConfig {
  app: { name: string; version: string }
  ui: { cssPrefix: string; transitions: { page: string; fade: string } }
  i18n: { defaultLocale: string; fallbackLocale: string }
  route: { names: { home: string; about: string; blog: string } }
  build: { baseUrl: string; mode: string }
}
```

## 使用示例

```ts
import { useAppConfig } from '@/app/config'
const ui = useAppConfig().ui
```
