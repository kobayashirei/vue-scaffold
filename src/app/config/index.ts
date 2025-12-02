import type { AppConfig } from '@/types/config'
import type { InjectionKey } from 'vue'

const APP_NAME = typeof __APP_NAME__ !== 'undefined' ? __APP_NAME__ : 'Rei'
const APP_VERSION = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.0.0'
const CSS_PREFIX = typeof __APP_CSS_PREFIX__ !== 'undefined' ? __APP_CSS_PREFIX__ : 'rei'

export const config: AppConfig = {
  app: {
    name: APP_NAME,
    version: APP_VERSION,
  },
  ui: {
    cssPrefix: CSS_PREFIX,
    transitions: {
      page: `${CSS_PREFIX}-page`,
      fade: `${CSS_PREFIX}-fade`,
    },
  },
  i18n: {
    defaultLocale: 'zh_CN',
    fallbackLocale: 'en_US',
  },
  route: {
    names: {
      home: 'home',
      about: 'about',
      blog: 'blog',
    },
  },
  build: {
    baseUrl: import.meta.env.BASE_URL,
    mode: import.meta.env.MODE,
  },
}

export const CONFIG_KEY: InjectionKey<AppConfig> = Symbol('app-config')

export function useAppConfig(): Readonly<AppConfig> {
  const provided = inject(CONFIG_KEY, null)
  return provided ?? config
}
