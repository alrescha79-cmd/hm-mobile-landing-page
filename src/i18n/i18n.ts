import en from './en.json';
import id from './id.json';

const translations = { en, id } as const;

export type Locale = keyof typeof translations;
export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'id'];

export function t(locale: Locale) {
    return translations[locale] || translations[defaultLocale];
}

export function getLocaleFromUrl(url: URL): Locale {
    const [, lang] = url.pathname.split('/');
    if (lang === 'id') return 'id';
    return 'en';
}

export function getLocalizedPath(locale: Locale, path?: string, hash?: string): string {
    const prefix = locale === 'en' ? '' : '/id';
    const basePath = path ? `${prefix}/${path}` : prefix || '/';
    return hash ? `${basePath}#${hash}` : basePath;
}
