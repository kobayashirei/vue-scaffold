# ESLint 配置更新

Date: 2025-12-01 00:05

## Actions

调整了 ESLint 配置，针对页面和布局文件关闭了 `vue/multi-word-component-names` 规则。

### 1. 问题背景

Vue 推荐组件名使用多个单词（如 `UserList`），以避免与 HTML 标签冲突。但在文件系统路由（File-based Routing）中，`src/pages` 下的文件名直接对应 URL 路径（如 `about.vue` -> `/about`），强制使用多单词命名会导致 URL 变得复杂（如 `/about-page`）或需要额外配置。

### 2. 修改内容

在 `eslint.config.ts` 中添加了特定目录的规则覆盖：

```typescript
{
  files: ['src/pages/**/*.vue', 'src/layouts/**/*.vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
```

### 3. 影响范围

- `src/pages/` 和 `src/layouts/` 下的 `.vue` 文件不再强制要求多单词命名。
- `src/components/` 下的通用组件依然受该规则约束，保持良好的命名规范。
