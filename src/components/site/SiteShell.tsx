import { useEffect } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** What fades up as it scrolls into view (the same list as the Summit site). */
const REVEAL =
  ".sec__head, .tile, .intro > *, .std__head, .std__grid, .veh.is-on, .wte__steps li, .town, .gcard, .svc__card, .duo > *, .about__in, .seo__text, .wwd__panel, .glance, .overview__intro, .why__grid > *, .cta__in, .crew__card, .price, .bookband__grid > *";

/**
 * Reveal on scroll. The classes are added here, after the page is on screen,
 * so the build-time HTML and a visitor without JavaScript always have the
 * content visible. Anything already in view when the page opens is left alone.
 */
function useReveal(key: string) {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const seen: HTMLElement[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    // Wait a moment so a lazily loaded page has drawn its sections.
    const timer = setTimeout(() => {
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>(REVEAL).forEach((el, i) => {
        if (el.getBoundingClientRect().top < vh) return;
        el.classList.add("rv");
        el.style.transitionDelay = `${(i % 3) * 70}ms`;
        io.observe(el);
        seen.push(el);
      });
    }, 60);
    return () => {
      clearTimeout(timer);
      io.disconnect();
      seen.forEach((el) => {
        el.classList.remove("rv", "in");
        el.style.transitionDelay = "";
      });
    };
  }, [key]);
}

/**
 * The frame every page sits in: header (with the menu drawer), the page itself
 * in <main id="main">, then the footer and the phone action bar.
 */
const SiteShell = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  useReveal(pathname);
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

export default SiteShell;
