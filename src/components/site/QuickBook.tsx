import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import CorsaFrame from "./CorsaFrame";
import { CORSA } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

/**
 * Compact booking card for the homepage video hero: the real Corsa form in a
 * small window, shown from its own top (nothing covers or crops it), that grows
 * to the full form when the visitor starts using it.
 *
 * Phones (under 700 px): the card is closed behind an "Instant Quote" button
 * and opens to the whole form, as tall as Corsa says it is, so nothing scrolls
 * inside it. "Show less" under the form closes it again.
 *
 * The card carries id="booking", the address every "Book" link on the site
 * points at; on phones following such a link opens the form.
 */
const QuickBook = () => {
  const [open, setOpen] = useState(false);
  const [full, setFull] = useState<number>(CORSA.height);
  // Phones keep the form closed, so the booking app is not loaded until the card is opened.
  const [armed, setArmed] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const frame = useRef<HTMLIFrameElement | null>(null);
  const openRef = useRef(open);
  openRef.current = open;

  const isPhone = () => typeof window !== "undefined" && window.matchMedia("(max-width: 699px)").matches;

  useEffect(() => {
    if (open || !isPhone()) setArmed(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    // A click or tap inside the (cross-origin) form moves focus into the frame, which blurs this window.
    const grow = () => {
      if (document.activeElement === frame.current && !openRef.current) setOpen(true);
    };
    const onBlur = () => setTimeout(grow, 0);
    window.addEventListener("blur", onBlur);
    const poll = setInterval(grow, 400); // some browsers do not fire blur when focus moves into a frame

    // Phones: links to #booking open the form.
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href$="#booking"]');
      if (link && isPhone()) setOpen(true);
    };
    document.addEventListener("click", onClick);
    if (window.location.hash === "#booking" && isPhone()) setOpen(true);

    return () => {
      window.removeEventListener("blur", onBlur);
      clearInterval(poll);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const onMore = () => {
    const next = !open;
    // Phones: closed from the foot of the long form, so first jump back to the Instant Quote button (a smooth
    // scroll would be cut short by the page getting shorter as the form folds away).
    if (!next && isPhone() && toggle.current) {
      const hdr = document.getElementById("hdr");
      const pinned = hdr ? Math.max(0, hdr.getBoundingClientRect().bottom) : 0;
      const dy = toggle.current.getBoundingClientRect().top - pinned - 32;
      if (dy < 0) {
        const style = document.documentElement.style;
        style.scrollBehavior = "auto";
        window.scrollBy(0, dy);
        style.scrollBehavior = "";
      }
    }
    setOpen(next);
  };

  const onToggle = () => {
    if (!open) trackEvent("quote_form_open", { link_location: "homepage" });
    setOpen(!open);
  };

  return (
    <div
      ref={box}
      className={`qb${open ? " is-open" : ""}`}
      id="booking"
      style={{ "--crop": "0px", "--full": `${full}px` } as CSSProperties}
    >
      <button
        ref={toggle}
        className="qb__toggle"
        type="button"
        aria-expanded={open}
        aria-controls="qb-form"
        onClick={onToggle}
      >
        <span>Instant Quote</span>
        <i aria-hidden="true" />
      </button>
      <div className="qb__body book__frame" id="qb-form">
        <CorsaFrame onHeight={setFull} sized={() => openRef.current} frameRef={frame} viewKey={open} manual active={armed} />
      </div>
      <div className="qb__foot">
        <button className="qb__more" type="button" aria-expanded={open} aria-controls="booking" onClick={onMore}>
          <span>{open ? "Show less" : "Show full form"}</span>
          <i aria-hidden="true" />
        </button>
        <a className="qb__page" href={CORSA.bookUrl} aria-label="Open the booking form on its own page">
          Full page
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default QuickBook;
