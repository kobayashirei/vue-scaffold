# 构建常量类型声明

Date: 2025-12-01 17:25

## Actions

- 在 `vite.config.ts` 使用 `define` 注入 `__APP_NAME__`、`__APP_VERSION__`、`__APP_CSS_PREFIX__`
- 在 `env.d.ts` 声明对应类型，解决 TS “找不到名称” 提示
- 在 `docs/struct.md` 记录 Build Constants 约定

## 示例

```ts
// env.d.ts
declare const __APP_NAME__: string
declare const __APP_VERSION__: string
declare const __APP_CSS_PREFIX__: string
```

```ts
// src/app/config/index.ts
const APP_NAME = typeof __APP_NAME__ !== 'undefined' ? __APP_NAME__ : 'Rei'
```
