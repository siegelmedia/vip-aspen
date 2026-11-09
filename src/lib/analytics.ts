/**
 * GA4 conversion tracking.
 *
 * gtag.js is loaded in index.html with pageview collection only. Everything a
 * visitor can do that signals intent — tapping the phone number, emailing,
 * opening WhatsApp, hitting a "Book" CTA, interacting with the reservation
 * widget, or submitting a form — funnels through trackEvent() so it shows up
 * in GA4 as an event that can be marked as a conversion.
 *
 * Event names follow GA4's recommended vocabulary where one exists
 * (`generate_lead` for a successful form submission) and plain snake_case
 * otherwise.
 */

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  const payload: EventParams = { ...params, page_path: window.location.pathname };
  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  } else if (import.meta.env.DEV) {
    console.debug("[analytics]", name, payload);
  }
}

/** Where on the page a link lives — header, footer, or the nearest section id. */
function linkLocation(el: Element): string {
  const region = el.closest("header, footer, section, nav");
  if (!region) return "page";
  if (region.id) return region.id;
  return region.tagName.toLowerCase();
}

/**
 * Maps an anchor to the intent event it represents, or null for ordinary
 * navigation. Used by a single delegated click listener so every tel:/mailto:/
 * WhatsApp/booking CTA across the site is covered without per-component wiring.
 */
export function classifyLink(anchor: HTMLAnchorElement): { name: string; params: EventParams } | null {
  const href = anchor.getAttribute("href") || "";
  const text = (anchor.textContent || "").trim().replace(/\s+/g, " ").slice(0, 60);
  const base: EventParams = { link_text: text, link_location: linkLocation(anchor) };

  if (href.startsWith("tel:")) return { name: "phone_click", params: { ...base, phone: href.slice(4) } };
  if (href.startsWith("mailto:")) return { name: "email_click", params: base };
  if (href.includes("wa.me/") || href.includes("whatsapp.com")) return { name: "whatsapp_click", params: base };
  if (href === "#booking" || href.endsWith("#booking")) return { name: "book_cta_click", params: base };
  return null;
}
