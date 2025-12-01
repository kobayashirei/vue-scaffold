# Pinia PersistedState 类型扩展

Date: 2025-12-01 17:10

## Actions

- 在 `src/types/pinia-plugin-persistedstate.d.ts` 中为 Pinia 扩展 `persist` 选项类型
- 更新 ESLint 配置，对 `*.d.ts` 文件关闭未使用变量规则，避免泛型参数报错
- 更新 `tsconfig.app.json` 与 `tsconfig.vitest.json`，包含 `types/**/*.d.ts`

## 说明

- `pinia-plugin-persistedstate` 需要通过模块声明合并为 `DefineStoreOptionsBase` 增加 `persist` 字段
- 泛型参数在 `.d.ts` 中可能触发 lint 提示，已通过 ESLint override 关闭
