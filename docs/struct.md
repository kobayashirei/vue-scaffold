# 结构文档 (Structure.md) & 全栈开发蓝图

> 本文档是项目 `rei` 的**中枢神经系统**。
> 它不仅定义了目录结构，还编织了组件、状态、路由与配置之间的关系网。
> AI 助手必须严格遵循 **DDMS (Document-Driven AI Development System)** 体系，将其作为开发的唯一导航图。

---

# 🌏 一、全景架构 (Architecture)

```mermaid
graph TD
    User((User)) --> App[App.vue]
    App --> Layouts[Layout System]

    subgraph "Presentation Layer (View & Components)"
        Layouts --> Pages[Pages / Views]
        Pages --> BizComps[Business Components]
        Pages --> BaseComps[Base UI Components]
    end

    subgraph "Logic Layer (Composables & Utils)"
        Pages -.-> Hooks[Composables (Hooks)]
        BizComps -.-> Hooks
        Hooks --> Utils[Utils / Helpers]
    end

    subgraph "Data Layer (Store & API)"
        Pages -.-> Store[Pinia Stores]
        Store -.-> API[API Services]
        Store -- Persist --> LocalStorage[(LocalStorage)]
    end

    subgraph "Configuration & Core"
        Main[main.ts] --> App
        Main --> Router[Vue Router]
        Main --> Pinia[Pinia Instance]
        Vite[Vite Config] --> Main
    end
```

---

# � 二、核心原则 (DDMS)

1.  **唯一真实源**：一切架构变更必须先在 `docs/struct.md` 登记，再在代码中实现。
2.  **交织开发 (Interwoven Development)**：
    - **组件化**：不写巨型组件，UI 与逻辑分离，通用 UI 沉淀到 `src/components`。
    - **工具化**：重复逻辑必须提取为 `src/utils` 或 `src/composables`。
    - **配置化**：魔法值、全局开关应提取到 `src/app` 或环境变量。
3.  **工作流 (Workflow)**：
    - **Check**: 检查本蓝图，寻找可复用的组件/逻辑。
    - **Plan**: 确定新功能涉及的层级（View? Store? Component?）。
    - **Implement**: 编写代码。
    - **Register**: 将新产生的“积木”登记回本蓝图。

---

# 📁 三、项目目录映射 (Directory Map)

| 路径               | 层级     | 职责说明                                | 关键文件/模式                   |
| :----------------- | :------- | :-------------------------------------- | :------------------------------ |
| `src/app/`         | Core     | 应用核心配置、挂载逻辑、全局常量        | `mount/`, `config.ts`           |
| `src/assets/`      | Resource | 静态资源、全局样式                      | `main.css`, `base.css`          |
| `src/components/`  | UI       | **展示型组件** (无业务逻辑，只负责渲染) | `BaseButton.vue`, `Icon*.vue`   |
| `src/composables/` | Logic    | **组合式函数** (Vue Hooks)              | `useTheme.ts`, `useFetch.ts`    |
| `src/layouts/`     | Layout   | 页面布局结构                            | `DefaultLayout.vue`             |
| `src/router/`      | Routing  | 路由定义与守卫                          | `index.ts`, `guards.ts`         |
| `src/stores/`      | State    | 全局状态管理                            | `counter.ts` (Setup Store)      |
| `src/utils/`       | Infra    | 纯 JS/TS 工具函数 (无 Vue 依赖)         | `singleton.ts`, `http.ts`       |
| `src/views/`       | Page     | **页面容器** (组合组件与逻辑)           | `HomeView.vue`, `AboutView.vue` |
| `src/types/`       | Type     | 全局 TypeScript 类型定义                | `api.d.ts`, `store.d.ts`        |

---

# 🧩 四、组件与页面注册表 (Component & View Registry)

## 1. 页面视图 (Views)

| 页面名    | 路由路径 | 文件路径                  | 说明                 | 状态依赖     |
| :-------- | :------- | :------------------------ | :------------------- | :----------- |
| **Home**  | `/`      | `src/views/HomeView.vue`  | 首页，展示欢迎信息   | -            |
| **About** | `/about` | `src/views/AboutView.vue` | 关于页，展示项目信息 | CounterStore |

## 2. 通用组件 (Components)

| 组件名          | 路径                             | 功能描述     | Props/Emits       |
| :-------------- | :------------------------------- | :----------- | :---------------- |
| **HelloWorld**  | `src/components/HelloWorld.vue`  | 欢迎标语组件 | `msg: string`     |
| **TheWelcome**  | `src/components/TheWelcome.vue`  | 欢迎列表容器 | -                 |
| **WelcomeItem** | `src/components/WelcomeItem.vue` | 欢迎列表单项 | `icon`, `heading` |

---

# 🧠 五、逻辑与状态注册表 (Logic & State Registry)

## 1. 状态管理 (Pinia Stores)

| Store ID    | 文件路径                | 功能       | 持久化            |
| :---------- | :---------------------- | :--------- | :---------------- |
| **counter** | `src/stores/counter.ts` | 计数器示例 | ✅ (localStorage) |

## 2. 组合式函数 (Composables)

_(暂无，待开发)_

## 3. 通用工具 (Utils)

| 工具名                | 路径                     | 说明           |
| :-------------------- | :----------------------- | :------------- |
| **singleton**         | `src/utils/singleton.ts` | 单例模式包装器 |
| **debounce/throttle** | `src/utils/function.ts`  | 防抖与节流     |
| **deepClone**         | `src/utils/object.ts`    | 对象深拷贝     |

---

# ⚙️ 六、配置与环境 (Configuration)

- **Vite Config**: `vite.config.ts` (配置了 Alias `@`, Vue 插件)
- **TypeScript**: `tsconfig.app.json` (严格模式)
- **Pinia Plugin**: `pinia-plugin-persistedstate` (已在 `main.ts` 全局注册)
- **Vue Router**: History 模式

---

# 🚀 七、开发指令 (Development Protocol)

当你接收到任务时，请按照 **"Locate -> Analyze -> Implement -> Update"** 的循环进行：

1.  **Locate (定位)**: 在本文档中找到相关层级（是改页面？还是改工具？）。
2.  **Analyze (分析)**: 检查是否有现成的组件/工具可复用，避免重复造轮子。
3.  **Implement (实现)**: 编写代码，保持代码风格一致。
4.  **Update (更新)**: **这是最重要的一步！** 任务完成后，必须更新 `docs/struct.md`，将新增加的页面、组件、Store 或工具登记到上述表格中。

---

_Last Updated: 2025-11-30_
