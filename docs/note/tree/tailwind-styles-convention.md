# 原子化 CSS 与全局样式系统约定

Date: 2025-12-01 17:45

## 目标

- 使用原子化 CSS（Tailwind）提升研发效率
- 以 `src/styles` 为项目核心样式源，统一令牌/主题/工具类
- 两者协同：保证快速开发与外观一致性并存

## 约定

1. 设计令牌唯一源：颜色、间距、圆角、阴影、过渡等在 `src/styles/tokens.css` 定义；Tailwind 配置需映射这些令牌。
2. 使用策略：
   - 布局/间距/排版优先使用 Tailwind 工具类（如 `flex`, `grid`, `p-4`）
   - 项目专有语义（如卡片、按钮、容器）使用 `src/styles/utilities.css` 的 `rei-` 前缀类（如 `rei-card`, `rei-btn`）
3. 暗色模式：以 `src/styles/theme.css` 为核心；Tailwind 的 `dark` 行为需与之保持一致（媒体查询或类选择器策略一致）。
4. 禁止硬编码：不允许在组件内直接写颜色/尺寸魔法数，统一用 CSS 变量或 Tailwind 映射值。
5. 混合使用：允许 Tailwind 与 `rei-` 工具类同时存在，前者负责快速结构，后者负责项目视觉语义与统一。

## 示例

- 组件结构：

  ```html
  <div class="rei-card flex items-center gap-4">
    <button class="rei-btn">OK</button>
  </div>
  ```

- 令牌引用：
  ```css
  .rei-card {
    box-shadow: var(--shadow-sm);
  }
  ```

## 启用说明（当使用 Tailwind 时）

- 需要在 `tailwind.config.*` 中将 `tokens.css` 映射到主题（colors/spacing/radius/shadows/transition）。
- 与 Vite/PostCSS 集成后，在全局入口引入 Tailwind 基础（不替代 `src/styles/index.css`）。
