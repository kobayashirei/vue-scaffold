# i18n 国际化配置

Date: 2025-12-01 00:15

## Actions

完成了项目的国际化（i18n）基础配置。

### 1. 安装依赖

```bash
pnpm add vue-i18n
pnpm add -D @intlify/unplugin-vue-i18n
```

### 2. 目录结构

创建了 `src/i18n` 目录用于存放配置和语言包：

```
src/i18n/
├── index.ts          # i18n 实例配置
└── locales/          # 语言包目录
    ├── zh-CN.json    # 中文语言包
    └── en-US.json    # 英文语言包
```

### 3. 配置 Vite 插件

在 `vite.config.ts` 中配置 `VueI18nPlugin`，以支持 i18n 资源预编译和热更新：

```typescript
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineConfig({
  plugins: [
    // ...
    VueI18nPlugin({
      include: [fileURLToPath(new URL('./src/i18n/locales/**', import.meta.url))],
    }),
  ],
})
```

### 4. 注册实例

在 `src/main.ts` 中注册 i18n 实例：

```typescript
import i18n from './i18n'
app.use(i18n)
```

### 5. 使用示例

- **Template**: `$t('common.welcome')`
- **Script**: `const { t } = useI18n()` -> `t('common.welcome')`

### 6. 语言包示例

`src/i18n/locales/zh-CN.json`:

```json
{
  "common": {
    "welcome": "欢迎来到 Rei"
  }
}
```
