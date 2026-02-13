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

export function getLocalizedPath(locale: Locale, hash?: string): string {
    const base = locale === 'en' ? '/' : '/id/';
    return hash ? `${base}#${hash}` : base;
}
