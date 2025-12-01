# 布局组件与全局 Loading

Date: 2025-12-01 00:45

## Actions

实现了应用的全局布局结构和加载状态管理。

### 1. 新增组件

- **AppHeader**: 顶部导航栏，包含 Logo、导航链接（Home/About）。
- **AppFooter**: 底部页脚，展示版权信息。
- **AppLoading**: 全局加载遮罩层，支持淡入淡出动画。

### 2. 状态管理 (Store)

新增 `loading` store (`src/stores/loading.ts`)：

- **State**: `isLoading` (boolean), `requestCount` (number)
- **Actions**:
  - `show()`: 增加请求计数，若为 0 则显示 Loading。
  - `hide()`: 减少请求计数，若归零则隐藏 Loading。

### 3. 布局集成

修改 `App.vue`，构建了 Flex 布局结构：

```vue
<template>
  <div class="app-layout">
    <AppLoading :loading="loadingStore.isLoading" />
    <AppHeader />

    <main class="app-content">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <AppFooter />
  </div>
</template>
```

### 4. 样式特性

- **Sticky Header**: 顶部导航栏固定。
- **Sticky Footer**: 内容不足一屏时，Footer 自动沉底。
- **Dark Mode**: 初步适配了 Loading 组件的暗色模式。
- **Transition**: 添加了页面切换动画 (`page`) 和 Loading 显示动画 (`fade`)。
