import sv from "./sv";

const translations = { sv } as const;

export type Locale = keyof typeof translations;
export const defaultLocale: Locale = "sv";
export const locales: Locale[] = ["sv"];

export function t(locale: Locale = defaultLocale) {
  return translations[locale] ?? translations[defaultLocale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang && locales.includes(lang as Locale)) {
    return lang as Locale;
  }
  return defaultLocale;
}

export function localePath(path: string, locale: Locale = defaultLocale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}
