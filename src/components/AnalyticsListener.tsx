import { useEffect } from "react";
import { classifyLink, trackEvent } from "@/lib/analytics";

/**
 * One delegated click listener for the whole app. Any anchor that represents
 * intent (tel:, mailto:, WhatsApp, "#booking" CTAs) is reported to GA4 the
 * moment it is clicked, whichever component rendered it. Renders nothing.
 */
const AnalyticsListener = () => {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const intent = classifyLink(anchor);
      if (intent) trackEvent(intent.name, intent.params);
    };
    // Capture phase so the event is recorded even if a handler stops propagation.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
};

export default AnalyticsListener;
