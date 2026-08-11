/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly GITHUB_TOKEN: string;
  readonly PUBLIC_GSC_VERIFICATION: string;
  readonly FEEDBACK_APPS_SCRIPT_URL: string;
  readonly FEEDBACK_APPS_SCRIPT_SECRET: string;
  readonly FEEDBACK_RECIPIENT: string;
  readonly FEEDBACK_TEST_MODE: string;
  readonly KV_REST_API_URL: string;
  readonly KV_REST_API_TOKEN: string;
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
