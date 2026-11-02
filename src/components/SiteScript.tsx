"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { initSite } from "@/lib/site-behaviour";

// Formspree endpoint for the early-registration and waitlist forms. Override with NEXT_PUBLIC_FORMSPREE_ENDPOINT.
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xgaappgp";

declare global {
  interface Window {
    __h1Init?: boolean;
  }
}

/** Boots the site behaviour once after the page has hydrated, with messages in the current language. */
export function SiteScript() {
  const t = useTranslations("script");

  useEffect(() => {
    // Guard against React Strict Mode running effects twice in development.
    if (window.__h1Init) return;
    window.__h1Init = true;
    initSite({
      formEndpoint: FORM_ENDPOINT,
      fillIn: (field) => t("fillIn", { field }),
      pickDivision: t("pickDivision"),
      pickCity: t("pickCity"),
      copied: t("copied"),
      sending: t("sending"),
      error: t("error"),
    });
  }, [t]);

  return null;
}
