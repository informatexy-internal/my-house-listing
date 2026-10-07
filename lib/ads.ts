import { site } from "./property";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Fire the Google Ads conversion when a visitor taps a WhatsApp button. No-op until the env vars are set.
export function trackConversion(kind: "whatsapp") {
  if (typeof window === "undefined" || !window.gtag || !site.adsId) return;
  if (site.adsConversionLabel) {
    window.gtag("event", "conversion", {
      send_to: `${site.adsId}/${site.adsConversionLabel}`,
    });
  }
  window.gtag("event", "generate_lead", { method: kind });
}
