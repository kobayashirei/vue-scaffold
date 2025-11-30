import { createPinia, type Pinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default (): Pinia => {
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)

  pinia.use(({ store }) => {
    store.version = "v0.1.0"
  })

  return pinia
}
