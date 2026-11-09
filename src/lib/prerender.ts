import { MotionGlobalConfig } from "framer-motion";

/**
 * Snapshot mode for the Prerender.io renderer.
 *
 * Bots (Googlebot, Bingbot, AI search crawlers) are served HTML captured by a
 * headless browser. That browser never scrolls and never waits for staged
 * entrance animations, so without this every framer-motion block was captured
 * frozen at `opacity: 0` — 21 hidden elements per page, including the homepage
 * H1. Two changes make the capture equal the final rendered page:
 *
 *  1. framer-motion's global skipAnimations flag jumps every animation straight
 *     to its target state.
 *  2. IntersectionObserver is replaced with one that reports every observed
 *     element as visible, so `whileInView` blocks below the fold also resolve.
 *
 * Triggered by the Prerender user agent, or `?__prerender=1` for local checks.
 */
export const isPrerender =
  typeof navigator !== "undefined" &&
  (/prerender/i.test(navigator.userAgent) || new URLSearchParams(window.location.search).has("__prerender"));

class AlwaysVisibleObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin = "0px";
  readonly thresholds: ReadonlyArray<number> = [0];
  private readonly callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  observe(target: Element): void {
    queueMicrotask(() => {
      const rect = target.getBoundingClientRect();
      const entry = {
        isIntersecting: true,
        intersectionRatio: 1,
        target,
        time: performance.now(),
        boundingClientRect: rect,
        intersectionRect: rect,
        rootBounds: null,
      } as IntersectionObserverEntry;
      this.callback([entry], this);
    });
  }

  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

export function configurePrerender(): void {
  if (!isPrerender) return;
  document.documentElement.classList.add("prerender");
  // motion-dom checks instantAnimations on the value-animation path and
  // skipAnimations on the legacy path; set both so every animation resolves
  // to its target on the first frame.
  MotionGlobalConfig.instantAnimations = true;
  MotionGlobalConfig.skipAnimations = true;
  window.IntersectionObserver = AlwaysVisibleObserver as unknown as typeof IntersectionObserver;
}
