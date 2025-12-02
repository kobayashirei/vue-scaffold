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

// config

export type SiteConfig = {
  test_num: number
  title: string;
  subtitle: string;

  lang:
  | "zh_CN"
  | "en_US"
  | "ja";

  themeColor: {
    hue: number;
    fixed: boolean;
  };
  banner: {
    enable: boolean;
    src: string;
    position?: "top" | "center" | "bottom";
    credit: {
      enable: boolean;
      text: string;
      url?: string;
    };
  };
  toc: {
    enable: boolean;
    depth: 1 | 2 | 3;
  };

  favicon: Favicon[];
};

export type Favicon = {
  src: string;
  theme?: "light" | "dark";
  sizes?: string;
};

export interface SiteConfig2 {
  title: string
  subtitle: string
  lang: string
  themeColor: {
    hue: number
    fixed: boolean
  }
  banner: {
    enable: boolean
    src: string
    position: string
    credit: {
      enable: boolean
      text: string
      url: string
    }

  }
  toc: {
    enable: boolean
    depth: number
  }
  favicon: Array<{
    src: string
    theme: string
    sizes: string
  }>
}
