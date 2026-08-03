/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_WEB3FORMS_KEY: string;
  readonly GITHUB_TOKEN: string;
  readonly PUBLIC_GSC_VERIFICATION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    __hmThemeInit?: boolean;
    __hmPreserveScroll?: number;
    __revealInit?: boolean;
    __hmHeroFetch?: boolean;
    __hmStatsFetch?: boolean;
    __hmDownloadFetch?: boolean;
    __hmReleasesFetch?: boolean;
    __releaseBodies?: Record<string, string>;
  }
}
export {};
