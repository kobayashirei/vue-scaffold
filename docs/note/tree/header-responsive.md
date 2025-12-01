# 响应式头部与滚动交互

Date: 2025-12-01 17:50

## Actions

- 重构 `AppHeader` 支持移动端菜单与滚动交互
- 向下滚动隐藏，向上滚动显示，阈值 10px，顶部区域始终显示
- 使用 `@vueuse/core` 的 `useWindowScroll`，无须手动导入（已配置 auto-import）
- 使用全局样式系统变量与过渡：`--transition-normal`、`rei-fade`
- 使用配置中心的应用名称显示与统一类前缀 `rei-`

## 交互细节

- 当 `y < 80` 保持显示；超过后依据滚动方向切换
- 移动端下折叠导航，通过按钮切换 `mobileOpen`

## 结构

- 组件：`src/components/AppHeader.vue`
- 文档约定在 `docs/struct.md` 已登记
