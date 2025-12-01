export interface AppMetaConfig {
  name: string
  version: string
}

export interface UiConfig {
  cssPrefix: string
  transitions: {
    page: string
    fade: string
  }
}

export interface I18nConfig {
  defaultLocale: string
  fallbackLocale: string
}

export interface RouteConfig {
  names: {
    home: string
    about: string
    blog: string
  }
}

export interface BuildConfig {
  baseUrl: string
  mode: string
}

export interface AppConfig {
  app: AppMetaConfig
  ui: UiConfig
  i18n: I18nConfig
  route: RouteConfig
  build: BuildConfig
}
