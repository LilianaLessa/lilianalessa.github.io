import { useEffect } from "react";
import type { Locale } from "../i18n/translations";

export function useHCaptchaScript(locale: Locale) {
  useEffect(() => {
    // Remove any existing hCaptcha script and state
    const existing = document.getElementById("hcaptcha-script");
    if (existing) existing.remove();

    // Clean up hCaptcha global so it reinitialises fresh
    delete (window as any).hcaptcha;

    // Inject new script with correct language
    const script = document.createElement("script");
    script.id = "hcaptcha-script";
    script.src = `https://js.hcaptcha.com/1/api.js?hl=${locale === "pt" ? "pt-BR" : "en"}&render=explicit`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      script.remove();
      delete (window as any).hcaptcha;
    };
  }, [locale]);
}
