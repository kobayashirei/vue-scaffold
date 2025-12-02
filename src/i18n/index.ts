import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh_CN.json'
import enUS from './locales/en_US.json'
import { useAppConfig } from '@/app/config'

// 默认语言
const defaultLocale = useAppConfig().i18n.defaultLocale

const i18n = createI18n({
  legacy: false, // 使用 Composition API
  locale: defaultLocale,
  fallbackLocale: useAppConfig().i18n.fallbackLocale,
  messages: {
    'zh_CN': zhCN,
    'en_US': enUS,
  },
})

export default i18n
