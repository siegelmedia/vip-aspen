import { useEffect, useRef, useState } from "react";
import { CORSA } from "@/data/site";

/**
 * The Corsa booking form in a frame, with this site doing the sizing.
 *
 * Loading. The frame is written with the form's address in `data-corsa-form`
 * and no `src`, as Corsa's embed script expects (index.html loads that script
 * with data-track-only): on a page's first load the script gives the frame its
 * address plus the ad or link that brought the visitor, so the booking shows
 * its source in Corsa. The script only looks once, when the page is read, so a
 * frame that appears later (moving between pages inside the site) is loaded
 * here instead, with the same remembered source. If the script is blocked or
 * slow, the plain form loads after two seconds so booking never waits on it.
 *
 * Talking with the form (the same messages Corsa's own embed script handles):
 * the form posts {corsa:'height'} with its height, {corsa:'step'} when another
 * step shows and {corsa:'reveal'} when a list or pop-up opens. This component
 * reports the height to its parent, brings the top of the form back into view
 * on a new step, scrolls just enough to show a pop-up, and tells the form
 * which part of the frame is on screen ({corsa:'viewport'}).
 *
 * Corsa itself is not changed by any of this.
 */

const SOURCE_KEYS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid", "fbclid",
  "msclkid", "gad_source", "gad_campaignid", "campaign_id", "adset_id", "ad_id", "utm_ad", "matchtype", "device",
  "network", "placement", "GeoLoc", "ref", "page",
];
const SOURCE_STORE = "corsa_source";
const SOURCE_KEEP_MS = 90 * 24 * 60 * 60 * 1000;
const GAP = 16;
const BOOKING_EVENTS = ["booking_submitted", "quote_requested", "quote_emailed"];

/** The first-touch source Corsa's script saved, if any. */
function savedSource(): Record<string, string> {
  try {
    const saved = JSON.parse(localStorage.getItem(SOURCE_STORE) || "null");
    if (!saved || typeof saved.t !== "number" || Date.now() - saved.t > SOURCE_KEEP_MS) return {};
    const out: Record<string, string> = {};
    for (const key of SOURCE_KEYS) {
      const value = saved.v && typeof saved.v[key] === "string" ? saved.v[key].trim().slice(0, 500) : "";
      if (value) out[key] = value;
    }
    return out;
  } catch {
    return {};
  }
}

function formAddress(): string {
  const url = new URL(CORSA.embedUrl);
  const source = savedSource();
  if (!source.page) source.page = window.location.origin + window.location.pathname;
  for (const [key, value] of Object.entries(source)) {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  }
  return url.href;
}

/** How far down the fixed menu bar reaches. */
const pinned = () => {
  const hdr = document.getElementById("hdr");
  return hdr ? Math.max(0, hdr.getBoundingClientRect().bottom) : 0;
};

const smooth = (): ScrollBehavior =>
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

interface CorsaFrameProps {
  title?: string;
  /** The form's own height in px, each time it changes. */
  onHeight?: (height: number) => void;
  /**
   * False while the frame is only a small window onto the form (the closed
   * homepage card): the page then leaves scrolling alone.
   */
  sized?: () => boolean;
  /** Gives the parent the frame element (to notice focus moving into it). */
  frameRef?: React.MutableRefObject<HTMLIFrameElement | null>;
  /** A changing value asks the frame to report its visible part again. */
  viewKey?: unknown;
}

const CorsaFrame = ({
  title = "VIP Aspen instant quote and booking form",
  onHeight,
  sized,
  frameRef,
  viewKey,
}: CorsaFrameProps) => {
  const ref = useRef<HTMLIFrameElement | null>(null);
  const live = useRef(false);
  const [loaded, setLoaded] = useState(false);
  const onHeightRef = useRef(onHeight);
  const sizedRef = useRef(sized);
  onHeightRef.current = onHeight;
  sizedRef.current = sized;

  const sendView = () => {
    const frame = ref.current;
    if (!frame || !live.current || !frame.contentWindow) return;
    if (sizedRef.current && !sizedRef.current()) return;
    const box = frame.getBoundingClientRect();
    const clip = (frame.parentElement || frame).getBoundingClientRect();
    const top = Math.max(box.top, clip.top, pinned());
    const bottom = Math.min(box.bottom, clip.bottom, window.innerHeight);
    frame.contentWindow.postMessage(
      { corsa: "viewport", top: Math.round(top - box.top), height: Math.max(0, Math.round(bottom - top)) },
      CORSA.origin,
    );
  };

  useEffect(() => {
    const frame = ref.current;
    if (!frame) return;
    if (frameRef) frameRef.current = frame;

    // Load the form if Corsa's script will not (see the note at the top).
    const load = () => {
      if (!frame.getAttribute("src")) frame.src = formAddress();
    };
    const scriptRan = (window as unknown as { corsaLinks?: boolean }).corsaLinks === true;
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (scriptRan && document.readyState !== "loading") load();
    else timer = setTimeout(load, 2000);

    const isSized = () => !sizedRef.current || sizedRef.current();

    const onMessage = (e: MessageEvent) => {
      if (e.origin !== CORSA.origin || e.source !== frame.contentWindow) return;
      const m = e.data as { corsa?: string; height?: number; top?: number; bottom?: number; name?: string } & Record<string, unknown>;
      if (!m || typeof m !== "object") return;
      live.current = true;
      setLoaded(true);
      const num = (v: unknown): v is number => typeof v === "number" && isFinite(v);
      if (m.corsa === "height" && num(m.height) && m.height >= 300) {
        onHeightRef.current?.(Math.min(Math.ceil(m.height), 6000));
        sendView();
      } else if (m.corsa === "step") {
        if (!isSized()) return;
        const room = pinned() + GAP;
        const top = (frame.parentElement || frame).getBoundingClientRect().top;
        if (top < room) window.scrollBy({ top: top - room, behavior: smooth() });
      } else if (m.corsa === "reveal" && num(m.top) && num(m.bottom)) {
        if (!isSized()) return;
        const box = frame.getBoundingClientRect();
        const above = box.top + m.top - pinned() - GAP;
        const below = box.top + m.bottom + GAP - window.innerHeight;
        const by = above < 0 ? above : Math.max(0, Math.min(below, above));
        if (by) window.scrollBy({ top: by, behavior: smooth() });
      } else if (m.corsa === "event" && typeof m.name === "string" && BOOKING_EVENTS.includes(m.name)) {
        // Corsa's script reports the frames it loaded itself; a frame loaded here is reported the same way.
        if (frame.getAttribute("data-corsa") === "on") return;
        const detail = {
          name: m.name,
          value: num(m.value) ? m.value : null,
          currency: "USD",
          number: num(m.number) ? m.number : null,
          service: typeof m.service === "string" ? m.service : "",
          vehicle: typeof m.vehicle === "string" ? m.vehicle : "",
        };
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "corsa_" + detail.name,
          corsa_value: detail.value,
          corsa_currency: detail.currency,
          corsa_number: detail.number,
          corsa_service: detail.service,
          corsa_vehicle: detail.vehicle,
        });
        window.dispatchEvent(new CustomEvent("corsa:" + detail.name, { detail }));
      }
    };

    let queued = false;
    const moved = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        sendView();
      });
    };

    window.addEventListener("message", onMessage);
    window.addEventListener("scroll", moved, { passive: true, capture: true });
    window.addEventListener("resize", moved);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("message", onMessage);
      window.removeEventListener("scroll", moved, { capture: true });
      window.removeEventListener("resize", moved);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // After the card around the frame has finished growing or shrinking.
  useEffect(() => {
    const t = setTimeout(sendView, 600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewKey]);

  return (
    <>
      {!loaded && (
        <div className="book__skel" aria-hidden="true">
          <span />
          <span />
          <span />
          <em>Loading the booking form</em>
        </div>
      )}
      <iframe
        ref={ref}
        title={title}
        data-corsa-form={CORSA.embedUrl}
        allow="payment"
        onLoad={() => setLoaded(true)}
        suppressHydrationWarning
      />
      <noscript>
        <p className="book__noscript">
          <a className="btn btn--dark" href={CORSA.bookUrl}>
            Open the booking form
          </a>
        </p>
      </noscript>
    </>
  );
};

export default CorsaFrame;
