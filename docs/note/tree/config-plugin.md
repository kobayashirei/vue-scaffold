# 全局配置插件

Date: 2025-12-01 17:30

## Actions

- 创建 `src/app/mount/config.ts` 注入全局配置为 Vue 插件
- 更新 `src/main.ts` 统一挂载配置插件
- 扩展 `useAppConfig` 先尝试注入读取，再回退到模块配置
- 在 `docs/struct.md` 登记配置插件与目录规范

## 使用

```ts
import { useAppConfig } from '@/app/config'
const cfg = useAppConfig()
```

插件自动注入到 `app.provide` 与 `$config`，组件可通过 `inject` 或 `this.$config` 使用。
