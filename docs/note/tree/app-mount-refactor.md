# App Mount 架构重构

Date: 2025-12-01 00:30

## Actions

重构了应用的启动挂载逻辑，强制实施了统一的挂载点规范。

### 1. 核心原则

- **集中管理**: 所有全局应用（Plugins）的初始化逻辑必须封装在 `src/app/mount/` 目录下。
- **统一入口**: 必须通过 `src/app/mount/index.ts` 统一导出挂载函数。
- **Main 瘦身**: `src/main.ts` 只负责创建 App 实例和调用挂载函数，不应包含具体的插件配置逻辑。

### 2. 目录结构变更

```
src/app/mount/
├── index.ts          # 统一导出入口
├── pinia.ts          # Pinia 状态管理挂载 (PiniaApplication)
├── router.ts         # 路由挂载 (RouterApplication)
└── i18n.ts           # 国际化挂载 (I18nApplication)
```

### 3. 代码变更

**src/app/mount/index.ts**:
```typescript
export * from './pinia'
export * from './router'
export * from './i18n'
```

**src/main.ts**:
```typescript
// mount app
import { PiniaApplication, RouterApplication, I18nApplication } from './app/mount'

const app = createApp(App)

app.use(PiniaApplication())
app.use(I18nApplication())
app.use(RouterApplication())

app.mount('#app')
```

### 4. 规范更新

已更新 `docs/struct.md`，新增了 **"应用挂载 (App Mount)"** 核心原则，并更新了架构图。
