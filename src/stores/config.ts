import { siteConfig } from '@/config'

export const useAppConfigureStore = defineStore('appConfigure', (): { siteConfig: SiteConfig } => {

  return {
    siteConfig: siteConfig
  }
}, { persist: true })
