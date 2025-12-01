import { createPinia, type Pinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export function PiniaApplication(): Pinia {
  const pinia = createPinia()
  // 配置持久化缓存
  pinia.use(piniaPluginPersistedstate)

  pinia.use(({ store }) => {
    store.version = "v0.1.0"
  })

  return pinia
}
