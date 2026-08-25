/**
 * Shown while a route's chunk and page data are in flight.
 *
 * Deliberately tiny and dependency-free — it ships in the main bundle, so it
 * must not pull in framer-motion or icons. Its only job is to hold the dark
 * page background so navigation never flashes white, plus a quiet pulse for
 * anyone on a slow connection.
 */
const RouteFallback = () => (
  <div
    className="min-h-screen bg-background flex items-center justify-center"
    role="status"
    aria-live="polite"
  >
    <span className="sr-only">Loading…</span>
    <span
      className="h-8 w-8 rounded-full border-2 border-primary/25 border-t-primary animate-spin"
      aria-hidden
    />
  </div>
);

export default RouteFallback;
