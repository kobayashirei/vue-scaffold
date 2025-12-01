# Blog Markdown 路由实现

Date: 2025-12-01 17:00

## Actions

- 安装 `markdown-it` 解析器
- 新增 `MarkdownRenderer` 组件渲染 Markdown 字符串
- 创建 `/blog` 列表页面与 `/blog/:slug` 详情页面
- 使用 `import.meta.glob` 映射 `src/posts/content/*.md` 为内容源
- 更新 i18n 文案（blog、posts、notFound）
- 在 `docs/struct.md` 登记目录、组件与扩展规范

## 目录结构

```
src/posts/
└── content/
    ├── hello-world.md
    └── welcome.md
```

## 路由与渲染

- 列表：`src/pages/blog/index.vue` 自动列出所有 Markdown 文件，标题取首个 `#` 行或文件名
- 详情：`src/pages/blog/[slug].vue` 按 `slug` 动态加载对应 Markdown 并渲染

## 规范

- 所有用户可见文本均走 i18n
- 样式类名采用 `rei-` 前缀，过渡命名统一
- Markdown 渲染统一通过 `MarkdownRenderer` 组件
