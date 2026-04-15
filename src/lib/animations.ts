/** Fade in from below — used for hero content, section headers */
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
} as const;

/** Fade in from below — used for hero content that appears immediately */
export const fadeInUpAnimate = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
} as const;

/** Staggered child animation for grid items */
export const staggerChild = (index: number, baseDelay = 0) =>
  ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: baseDelay + index * 0.1 },
  }) as const;

/** Fade in from left */
export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
} as const;

/** Fade in from right */
export const fadeInRight = (delay = 0.2) =>
  ({
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay },
  }) as const;

/** Hero image — delayed fade up */
export const heroImage = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.15 },
} as const;
