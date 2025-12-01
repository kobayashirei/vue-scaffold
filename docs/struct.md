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

    subgraph "Core & Mount"
        Main[main.ts] --> Mount[src/app/mount]
        Mount --> Router[Router]
        Mount --> Pinia[Pinia]
        Mount --> I18n[i18n]
        Mount --> App
    end

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
        Main[main.ts] --> Mount
        Vite[Vite Config] --> Main
    end
```

---

# 二、核心原则 (DDMS)

1.  **唯一真实源**：一切架构变更必须先在 `docs/struct.md` 登记，再在代码中实现。
2.  **应用挂载 (App Mount)**：所有全局插件（Router, Pinia, i18n等）必须在 `src/app/mount/` 下封装，并通过 `src/app/mount/index.ts` 统一导出，禁止在 `main.ts` 直接导入原始配置。
3.  **交织开发 (Interwoven Development)**：
    - **组件化**：不写巨型组件，UI 与逻辑分离，通用 UI 沉淀到 `src/components`。
    - **工具化**：重复逻辑必须提取为 `src/utils` 或 `src/composables`。
    - **配置化**：魔法值、全局开关应提取到 `src/app` 或环境变量。
4.  **工作流 (Workflow)**：
    - **Check**: 检查本蓝图，寻找可复用的组件/逻辑。
    - **Plan**: 确定新功能涉及的层级（View? Store? Component?）。
    - **Implement**: 编写代码。
    - **Register**: 将新产生的“积木”登记回本蓝图。

---

# 📁 三、项目目录映射 (Directory Map)

| 路径               | 层级     | 职责说明                                | 关键文件/模式                                           |
| :----------------- | :------- | :-------------------------------------- | :------------------------------------------------------ |
| `src/app/`         | Core     | 应用核心配置、挂载逻辑、全局常量        | `mount/`, `config.ts`                                   |
| `src/assets/`      | Resource | 静态资源、全局样式                      | `main.css`, `base.css`                                  |
| `src/styles/`      | Style    | 全局样式系统（令牌/主题/工具类）        | `index.css`, `tokens.css`, `theme.css`, `utilities.css` |
| `src/components/`  | UI       | **展示型组件** (无业务逻辑，只负责渲染) | `BaseButton.vue`, `Icon*.vue`                           |
| `src/composables/` | Logic    | **组合式函数** (Vue Hooks)              | `useTheme.ts`, `useFetch.ts`                            |
| `src/layouts/`     | Layout   | 页面布局结构                            | `DefaultLayout.vue`                                     |
| `src/router/`      | Routing  | 路由定义与守卫                          | `index.ts`, `guards.ts`                                 |
| `src/stores/`      | State    | 全局状态管理                            | `counter.ts` (Setup Store)                              |
| `src/utils/`       | Infra    | 纯 JS/TS 工具函数 (无 Vue 依赖)         | `singleton.ts`, `http.ts`                               |
| `src/i18n/`        | Config   | **国际化配置** (Locales & Setup)        | `index.ts`, `locales/*.json`                            |
| `src/pages/`       | Page     | **页面容器** (基于文件系统的路由页面)   | `index.vue`, `about.vue`                                |
| `src/types/`       | Type     | 全局 TypeScript 类型定义                | `api.d.ts`, `store.d.ts`                                |
| `src/posts/`       | Content  | Markdown 内容源                         | `content/*.md`                                          |
| `src/app/config/`  | Core     | 全局配置中心与插件                      | `index.ts`, `../mount/config.ts`                        |

---

# 🧩 四、组件与页面注册表 (Component & View Registry)

## 1. 页面视图 (Pages)

| 页面名    | 路由路径 | 文件路径              | 说明                 | 状态依赖     |
| :-------- | :------- | :-------------------- | :------------------- | :----------- |
| **Home**  | `/`      | `src/pages/index.vue` | 首页，展示欢迎信息   | -            |
| **About** | `/about` | `src/pages/about.vue` | 关于页，展示项目信息 | CounterStore |

## 2. 通用组件 (Components)

| 组件名               | 路径                                  | 功能描述        | Props/Emits        |
| :------------------- | :------------------------------------ | :-------------- | :----------------- |
| **AppHeader**        | `src/components/AppHeader.vue`        | 全局顶部导航    | -                  |
| **AppFooter**        | `src/components/AppFooter.vue`        | 全局底部页脚    | -                  |
| **AppLoading**       | `src/components/AppLoading.vue`       | 全局加载遮罩    | `loading: boolean` |
| **MarkdownRenderer** | `src/components/MarkdownRenderer.vue` | Markdown 渲染器 | `content: string`  |
| **ImageLightbox**    | `src/components/ImageLightbox.vue`    | 图片预览图箱    | `src, visible`     |

---

# 🧠 五、逻辑与状态注册表 (Logic & State Registry)

## 1. 状态管理 (Pinia Stores)

| Store ID    | 文件路径                | 功能         | 持久化            |
| :---------- | :---------------------- | :----------- | :---------------- |
| **counter** | `src/stores/counter.ts` | 计数器示例   | ✅ (localStorage) |
| **loading** | `src/stores/loading.ts` | 全局加载状态 | ❌                |

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
  - Include: `types/**/*.d.ts`（自动导入与模块扩展的类型声明）
- **Pinia Plugin**: `pinia-plugin-persistedstate` (已在 `main.ts` 全局注册)
- **Vue Router**: History 模式 + `vite-plugin-pages` (文件系统路由)
- **Auto Import**: `unplugin-auto-import` (自动导入 API)
- **ESLint**: `eslint.config.ts` (关闭了 `src/pages` 和 `src/layouts` 的 `vue/multi-word-component-names` 规则)
- **i18n**: `vue-i18n` + `@intlify/unplugin-vue-i18n` (支持 json 热更新)
- **CSS**: 全局样式命名统一使用前缀 `rei-`（例如：`rei-header`, `rei-footer`, `rei-loading`）
- **Styles System**: 在 `src/styles` 定义样式令牌、暗色主题和工具类，统一通过 `styles/index.css` 引入
- **Markdown**: `markdown-it` 解析，并通过 `import.meta.glob` 映射内容
- **Config Center**: `src/app/config` 统一导出应用元数据、UI、i18n、路由名与构建信息
- **Build Constants**: 通过 `vite.config.ts` 的 `define` 注入常量（如 `__APP_NAME__`），并在 `env.d.ts` 中声明类型避免 TS 报错
- **Atomic CSS (Tailwind)**: 项目默认采用原子化 CSS 提升开发效率；当启用 Tailwind 时要求：
  1.  颜色/间距等语义统一以 `src/styles/tokens.css` 为源；Tailwind 配置需映射到同名设计令牌
  2.  布局与快速开发优先使用 Tailwind 工具类；项目特有语义与跨页面复用采用 `src/styles/utilities.css` 的 `rei-` 前缀类
  3.  避免直接硬编码颜色值/魔法数；统一通过 CSS 变量或 Tailwind 映射后的主题值
  4.  允许“Tailwind + rei-工具类”混用：Tailwind 负责通用结构，`rei-` 负责项目语义和外观一致性
  5.  暗色模式与主题切换以 `theme.css` 为核心，Tailwind 应与该机制保持一致（如 `dark` 媒体查询）
- **Config Plugin**: 在 `src/app/mount/config.ts` 以插件形式注入全局配置，并在 `main.ts` 挂载

---

# 🚀 七、开发指令 (Development Protocol)

当你接收到任务时，请按照 **"Locate -> Analyze -> Implement -> Update"** 的循环进行：

1.  **Locate (定位)**: 在本文档中找到相关层级（是改页面？还是改工具？）。
2.  **Analyze (分析)**: 检查是否有现成的组件/工具可复用，避免重复造轮子。
3.  **Implement (实现)**: 编写代码，保持代码风格一致。
4.  **Update (更新)**: **这是最重要的一步！** 任务完成后，必须更新 `docs/struct.md`，将新增加的页面、组件、Store 或工具登记到上述表格中。

---

# 📐 八、开发约定 (Conventions)

> 在开始实现任何功能前，必须先确认项目结构与跨领域约束，否则严禁动手编码。

## 1. 组件实现前置检查 (Pre-flight Checklist)

- 是否属于 `Pages` 还是通用 `Components`，对应目录是否正确（`src/pages` / `src/components`）。
- 是否需要全局插件支持（Router/Pinia/i18n 等），如需则通过 `src/app/mount/*` 封装并在 `main.ts` 挂载。
- 是否存在复用逻辑应沉淀为 `src/utils` 或 `src/composables`，避免在组件内重复实现。
- 是否涉及样式与命名规范（CSS 前缀 `rei-`、变量 `var(--color-*)`、暗色模式适配）。

## 2. i18n 使用规范

- 所有对用户可见的文本，必须使用 i18n：模板用 `$t('path.key')`，脚本用 `useI18n().t('path.key')`。
- 语言包文件存放于 `src/i18n/locales/*.json`，键名按域组织：`common.*`、`button.*`、`page.*`。
- 禁止在组件中硬编码文案；缺失文案优先补齐语言包，再进行实现。
- 组件对外暴露的 Props 若需默认文案，也应走 i18n（可通过 `fallbackLocale` 保证回退）。

## 3. 页面与路由规范

- 路由采用文件系统自动注册（`src/pages` + `vite-plugin-pages`）。
- 路由守卫与全局交互逻辑统一在 `src/app/mount/router.ts` 中实现（如全局 Loading）。
- 若页面需要特定进入/离开行为，优先使用路由 `meta` 或组合式函数封装，避免在页面中散落副作用。
- 博客内容映射：`/blog` 与 `/blog/:slug` 映射 `src/posts/content/*.md`，渲染采用 `MarkdownRenderer`
- Markdown 图像交互：自动为 Markdown 内 `<img>` 添加图箱点击预览

## 4. 状态与交互规范

- 全局状态统一由 Pinia 管理（`src/stores`），并在 `src/app/mount/pinia.ts` 配置插件与通用扩展。
- 全局交互（如 Loading、Toast 等）应具备可计数/可回退机制，避免竞态导致的异常遮挡。
- 组件内的局部状态仅限于展示相关，业务状态需抽离到 Store 或 Composables。

## 5. 样式与命名规范

- 样式类名统一使用前缀 `rei-`：如 `rei-header`、`rei-footer`、`rei-loading`、`rei-page`。
- 使用 CSS 变量与语义化颜色：`var(--color-text)`、`var(--color-border)`，适配暗色模式。
- 页面过渡统一命名：`rei-page`；通用过渡统一命名：`rei-fade`。

## 6. 可复用逻辑沉淀

- 重复出现的逻辑必须沉淀到 `src/utils`（与 Vue 无关的纯函数）或 `src/composables`（组合式函数）。
- 沉淀后在 `vite.config.ts` 的 `AutoImport` 范围内自动导入，避免在业务代码中散落 import。

## 7. 提交与文档登记

- 每次完成实现后，必须同步更新本结构文档的相应表格/章节。
- 与实现过程相关的记录，如被要求，统一写入 `docs/note/tree/*` 并在 `docs/note/time_line.md` 登记。
- 未经文档登记的结构/规范变更，视为未完成的实现。

# 🔌 九、工具与扩展统一规范 (Tools & Extensions)

> 面向全局复用的库/插件/工具，必须遵循统一接入流程与登记规范。

## 1. 接入流程 (Integration Flow)

- 安装依赖：使用 `pnpm add` 或 `pnpm add -D` 引入。
- Vite 配置：在 `vite.config.ts` 中统一注册插件（如 `unplugin-*`、`vite-plugin-*`）。
- 应用挂载：若工具需要以插件形式使用（如 Router/Pinia/i18n/DevTools 等），需在 `src/app/mount/*` 下封装，并在 `main.ts` 通过挂载函数统一启用。
- 类型支持：如需类型声明，统一在 `env.d.ts` 或自定义 `types/*.d.ts` 中补充。
- 自动导入：公共 API（hooks、stores、utils）需加入 `unplugin-auto-import` 的 `imports` 与 `dirs` 范围，实现无处不在的可用性。
- i18n 约束：所有对用户可见的交互文本（提示、错误、按钮）需走 i18n。
- CSS 约束：新增组件或扩展的样式统一前缀 `rei-`，并使用 CSS 变量。
- 文档登记：接入完成后，必须在 `docs/struct.md` 登记，并在 `docs/note/time_line.md` 记录实施说明。

## 2. 扩展登记表 (Extensions Registry)

| 扩展名称                     | 类别     | 登记位置                              | 说明                                    |
| :--------------------------- | :------- | :------------------------------------ | :-------------------------------------- |
| `vite-plugin-pages`          | Routing  | `vite.config.ts`                      | 文件系统路由，`virtual:generated-pages` |
| `unplugin-auto-import`       | DX       | `vite.config.ts`                      | 自动导入 Vue/Router/Pinia/Utils         |
| `@intlify/unplugin-vue-i18n` | i18n     | `vite.config.ts`                      | i18n 资源预编译，支持热更新             |
| `vite-plugin-vue-devtools`   | DevTools | `vite.config.ts`                      | 开发工具增强                            |
| 全局 Loading store           | UX       | `src/stores/loading.ts`               | 计数式加载遮罩，与路由守卫联动          |
| 路由守卫 (Loading)           | UX       | `src/app/mount/router.ts`             | 进入显示、离开关闭、异常回退            |
| `markdown-it`                | Content  | `src/components/MarkdownRenderer.vue` | Markdown 解析引擎                       |
| 配置中心插件                 | Core     | `src/app/mount/config.ts`             | 全局配置注入与统一访问                  |
| Tailwind CSS（原子化）       | Style    | `tailwind.config.*`（启用时）         | 映射 `src/styles/tokens.css` 以统一主题 |

> 新增扩展时，参考以上登记表结构，完成接入与文档登记。

## 3. 统一约束 (Unified Constraints)

- 禁止在单个组件中直接初始化全局工具；必须封装到 `src/app/mount/*` 或 `src/composables/*`。
- 所有扩展产生的公共 API，需纳入自动导入范围，避免散落的 `import`。
- 用户可见的交互必须 i18n 化；错误与提示文案不可硬编码。
- 样式遵循 `rei-` 前缀与 CSS 变量；过渡命名遵循 `rei-page` / `rei-fade`。

_Last Updated: 2025-12-01_
| `src/app/config/` | Core | 全局配置与常量中心 | `index.ts` |

- 头部交互规范：页面向下滚动隐藏、向上滚动显示；移动端提供折叠菜单；使用 `@vueuse/core` 滚动监听与 `src/styles` 过渡变量。
