import type { Locale } from "./types";

export const LOCALES: Locale[] = ["es", "en"];
export const DEFAULT_LOCALE: Locale = "es";

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getLocaleFromPath(path: string): Locale {
  const segment = path.split("/").filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : DEFAULT_LOCALE;
}

// content/[locale]/[section].ts modules are loaded lazily so adding a
// section doesn't require touching this file.
const contentLoaders: Record<string, (locale: Locale) => Promise<unknown>> = {
  home: (locale) => import(`../content/${locale}/home`).then((m) => m.home),
  services: (locale) =>
    import(`../content/${locale}/services`).then((m) => m.services),
  reviews: (locale) =>
    import(`../content/${locale}/reviews`).then((m) => m.reviews),
  zones: (locale) => import(`../content/${locale}/zones`).then((m) => m.zones),
  nav: (locale) => import(`../content/${locale}/nav`).then((m) => m.nav),
};

export async function getContent<T = unknown>(
  locale: Locale,
  section: keyof typeof contentLoaders,
): Promise<T> {
  const loader = contentLoaders[section];
  if (!loader) {
    throw new Error(`Unknown content section: ${section}`);
  }
  return loader(locale) as Promise<T>;
}
