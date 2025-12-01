# 全局样式管理系统

Date: 2025-12-01 17:40

## Actions

- 创建 `src/styles/` 目录，统一全局样式管理
- 新增 `tokens.css`：颜色、间距、圆角、阴影、过渡令牌
- 新增 `theme.css`：暗色主题与容器类 `rei-container`
- 新增 `utilities.css`：常用工具类（`rei-flex-center`、`rei-card`、`rei-btn` 等）
- 新增 `index.css` 汇总导入，并在 `src/main.ts` 全局引入
- 在 `docs/struct.md` 登记样式系统规范

## 使用

- 在页面使用工具类，如：`<div class="rei-card">...</div>`
- 颜色与间距统一通过 CSS 变量：`var(--color-text)`, `var(--space-5)`
