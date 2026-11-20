import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { PresenceContext } from "framer-motion";
import type { PresenceContextProps } from "framer-motion";

/**
 * Makes build-time HTML and its hydration render agree on framer-motion state.
 *
 * Every public page is rendered to HTML at build time (src/entry-server.tsx).
 * framer-motion normally renders an element's `initial` state — `opacity: 0`,
 * translated 30px — and animates to the target after mount. Shipped as static
 * HTML that would mean a page that is invisible until JavaScript runs, which is
 * exactly the empty-shell problem the server render exists to remove.
 *
 * framer-motion already has a switch for "mount without an entrance animation":
 * a PresenceContext whose `initial` is false (what `<AnimatePresence
 * initial={false}>` provides). Under it, elements render their `animate` target
 * straight away and skip the mount animation. Providing that context during the
 * server render makes the HTML show the finished page, and providing it during
 * hydration makes the browser's first render match that HTML, so nothing jumps.
 *
 * Once the hydrated route has committed, `initial` is lifted, so pages reached
 * by client-side navigation animate exactly as before. Already-mounted elements
 * are unaffected: their target values have not changed, so framer has nothing
 * to animate.
 *
 * This sits inside the route Suspense boundary on purpose. Hydrating a lazy
 * route suspends until its chunk arrives, and React keeps the server HTML in
 * place meanwhile; the effect below runs only once that route has committed.
 *
 * The context is never null. framer-motion's usePresence() returns before its
 * other hooks when the context is null, so switching between an object and
 * null would change the hook order inside every <AnimatePresence> (React error
 * 311). Both values below are complete, present, no-op contexts; they differ
 * only in whether entrance animations are blocked.
 */
const presence = (blockEntrance: boolean): PresenceContextProps => ({
  id: "static-markup",
  isPresent: true,
  initial: blockEntrance ? false : undefined,
  register: () => () => {},
});
const BLOCK_ENTRANCE = presence(true);
const ALLOW_ENTRANCE = presence(false);

interface HydrationGateProps {
  /** True when the markup already exists: the server render, and the browser hydrating it. */
  hydrating: boolean;
  children: ReactNode;
}

const HydrationGate = ({ hydrating, children }: HydrationGateProps) => {
  const [blockEntrance, setBlockEntrance] = useState(hydrating);

  useEffect(() => {
    setBlockEntrance(false);
  }, []);

  // Always render the Provider (only its value changes), so clearing the gate
  // does not remount the route tree and replay every entrance animation.
  return (
    <PresenceContext.Provider value={blockEntrance ? BLOCK_ENTRANCE : ALLOW_ENTRANCE}>
      {children}
    </PresenceContext.Provider>
  );
};

export default HydrationGate;
