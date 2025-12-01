import type { Plugin } from 'vue'
import { CONFIG_KEY, config } from '@/app/config'

export function ConfigApplication(): Plugin {
  return {
    install(app) {
      app.provide(CONFIG_KEY, config)
        ; (app.config.globalProperties as any).$config = config
    },
  }
}
