import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { DEFAULT_LOCALE, LOCALES, isLocale } from "@/lib/i18n";

// Fallback for requests middleware doesn't catch; middleware.ts handles
// the common case of redirecting "/" based on Accept-Language.
export default async function RootPage() {
  const acceptLanguage = (await headers()).get("accept-language") ?? "";
  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0].trim().split("-")[0].toLowerCase());

  const locale = preferred.find(isLocale) ?? DEFAULT_LOCALE;
  redirect(`/${LOCALES.includes(locale) ? locale : DEFAULT_LOCALE}`);
}
