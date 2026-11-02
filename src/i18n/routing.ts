import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  // English lives at "/", Arabic at "/ar".
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

export const rtlLocales: Locale[] = ["ar"];
