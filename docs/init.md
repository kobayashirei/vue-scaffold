# Init vue app

## Actions

### Create Vue App

```bash
pnpm create vue@laster
```

### Default install modules

- pinia
- vue-router

# Custom install modules

## Actions

```bash
pnpm add @vueuse/core
pnpm add @vueuse/shared
```

# Config unplugin-auto-import

## Actions

### Install

```bash
pnpm add -D unplugin-auto-import
```

### Vite config `vite.config.ts`

```ts
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        'vue', // ref, computed, reactive...
        'vue-router',
        'pinia',
        '@vueuse/core',
      ],
      dts: 'types/auto-imports.d.ts', // 自动生成类型声明
      dirs: ['src/utils', 'src/stores'], // 自动导入你的工具 & store
      vueTemplate: true, // 允许模板中使用
    }),
  ],
})
```

# Config unplugin-vue-components

## Actions

### Install

```bash
pnpm add -D unplugin-vue-components
```

### Vite config `vite.config.ts`

```ts
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Components({
      dirs: ['src/components'],
      dts: 'types/components.d.ts',
      deep: true,
    }),
  ],
})
```

# utils

## Actions

- Created `src/utils` directory.
- Implemented `src/utils/singleton.ts`:
  - `singleton`: Class decorator/wrapper for ensuring single instance.
  - `createSingleton`: Factory wrapper for lazy singleton creation.
- Implemented `src/utils/function.ts`:
  - `debounce`: Function debouncing.
  - `throttle`: Function throttling.
  - `sleep`: Async delay helper.
- Implemented `src/utils/object.ts`:
  - `deepClone`: Deep copy of objects (handles Date, Array, Object).
  - `mergeDeep`: Recursive object merge.
  - `isObject`: Type check helper.
- Exported all utilities in `src/utils/index.ts`.

## Implementation Details

- **Singleton**: Uses JS `Proxy` to intercept constructor calls, or a closure to cache the instance for factories.
- **Debounce/Throttle**: Standard implementations using closures and timers.
- **Deep Clone**: Recursive implementation supporting Date objects, not just JSON.parse/stringify.

# Config Pinia & install pinia-plugin-persistedstate

## Actions

### install

```bash
pnpm add pinia-plugin-persistedstate
```

### create src/app/mount/pinia.ts

```ts
import { createPinia, type Pinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export function PiniaApplition(): Pinia {
  const pinia = createPinia()
  // 配置持久化缓存
  pinia.use(piniaPluginPersistedstate)

  pinia.use(({ store }) => {
    store.version = 'v0.1.0'
  })

  return pinia
}
```

### create src/app/mount/index.ts

```ts
import * from './pinia'
```

### setup src/main.ts

```ts
// mount app
import { PiniaApplition } from './app/mount'

app.use(PiniaApplition())
```
