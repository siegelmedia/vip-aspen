import { useEffect, useRef, useState } from "react";

/**
 * BookRidesOnline reservation widget, hosted in a same-origin iframe.
 *
 * The widget bootstraps AngularJS 1.6 on the page it loads into. Angular's
 * $location service treats any URL change it did not make as an error and
 * pushes the URL it booted on back onto the history stack during its next
 * digest — so with the widget inline, every React Router navigation was
 * reverted to "/" in the address bar a few milliseconds later (page content
 * stayed correct, but deep links, sharing, the back button, and GA4 page
 * paths were all wrong). Giving Angular its own window via /booking-widget.html
 * keeps it away from the parent's history entirely.
 *
 * The frame reports its content height via postMessage; the fallback height
 * covers the interval before the first message arrives.
 */
const WIDGET_SRC = "/booking-widget.html";
const FALLBACK_HEIGHT = 620;

const BookingWidget = () => {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(FALLBACK_HEIGHT);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.source !== frameRef.current?.contentWindow) return;
      const data = event.data as { type?: string; height?: number } | null;
      if (data?.type === "vip-booking-height" && typeof data.height === "number" && data.height > 0) {
        setHeight(Math.ceil(data.height));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-sm p-6 border border-border/50">
      <iframe
        ref={frameRef}
        src={WIDGET_SRC}
        title="Reserve your VIP Aspen ride"
        loading="lazy"
        scrolling="no"
        className="block w-full border-0"
        style={{ height, overflow: "hidden", colorScheme: "dark" }}
      />
    </div>
  );
};

export default BookingWidget;
