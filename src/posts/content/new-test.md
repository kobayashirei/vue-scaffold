# Markdown 图箱集成

Date: 2025-12-01 17:35

## Actions

- 新增 `ImageLightbox` 组件，实现全屏图片预览
- 更新 `MarkdownRenderer`：渲染后为所有 `<img>` 绑定点击打开图箱
- 在示例 Markdown 中加入图片展示（使用 `/favicon.ico`）
- 在 `docs/struct.md` 登记组件与规范

## 使用

- 在任意 Markdown 内放置图片：`![alt](/favicon.ico)`
- 渲染后点击图片自动进入图箱预览
