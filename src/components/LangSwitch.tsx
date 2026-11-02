"use client";

import { useLocale, useTranslations } from "next-intl";

/**
 * "EN / ع" switcher from the approved design, now working.
 * Keeps the current page (hash) when switching, and remembers the choice in the
 * NEXT_LOCALE cookie so language detection doesn't switch it back.
 */
export function LangSwitch({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const locale = useLocale();
  const t = useTranslations("langSwitch");

  function go(target: "en" | "ar") {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (target === locale) return;
      document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000; samesite=lax`;
      window.location.href = (target === "en" ? "/" : "/ar") + window.location.hash;
    };
  }

  // The design positions this with margin-left:auto; use the logical property so it also works right-to-left.
  const { marginLeft, ...rest } = style ?? {};
  const logical: React.CSSProperties = marginLeft !== undefined ? { ...rest, marginInlineStart: marginLeft } : rest;

  return (
    <span className={className} style={logical} role="group" aria-label={t("label")}>
      <a href="/" lang="en" hrefLang="en" aria-label={t("switchToEn")} aria-current={locale === "en" ? "true" : undefined} onClick={go("en")}>
        {t("en")}
      </a>
      {" / "}
      <a href="/ar" lang="ar" hrefLang="ar" aria-label={t("switchToAr")} aria-current={locale === "ar" ? "true" : undefined} onClick={go("ar")}>
        {t("ar")}
      </a>
    </span>
  );
}
