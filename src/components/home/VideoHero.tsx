import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import QuickBook from "@/components/site/QuickBook";
import logo from "@/assets/vip-aspen-logo.webp";
import { heroHighlights } from "@/data/site";
import { HERO_VIDEO, heroImage, heroServices } from "@/data/home";

/**
 * First section of the homepage, laid out like summitblackcar.com: the video
 * (or its still), the highlight line, the logo, the booking card, and the
 * three most requested services along the bottom.
 *
 * The video starts after the page has loaded, uses the smaller file on phones,
 * and is skipped for visitors who ask for reduced motion or data saving; the
 * still photo is always there underneath.
 */
const VideoHero = () => {
  const video = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = video.current;
    if (!el || !HERO_VIDEO) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saver = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduced || saver) return;
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      el.muted = true;
      el.src = window.innerWidth < 760 && HERO_VIDEO?.mp4Small ? HERO_VIDEO.mp4Small : HERO_VIDEO!.mp4;
      el.addEventListener("playing", () => setReady(true), { once: true });
      el.play().catch(() => {});
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start);
    // The page's load event also waits for the booking form, so start after 2.5 s at the latest.
    const timer = setTimeout(start, 2500);
    return () => {
      window.removeEventListener("load", start);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="vhero">
      <div className="vhero__media">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          width={1600}
          height={900}
          decoding="async"
          {...{ fetchpriority: "high" }}
        />
        {HERO_VIDEO && (
          <video
            ref={video}
            className={ready ? "is-ready" : undefined}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
          />
        )}
      </div>
      <div className="wrap vhero__in">
        <div className="vhero__top">
          <ul className="vhero__hl">
            {heroHighlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <p className="vhero__brand vhero__brand--logo">
            <img src={logo} width={305} height={127} alt="VIP Aspen" decoding="async" />
          </p>
        </div>
        <div className="vhero__form">
          <QuickBook />
        </div>
        <nav className="vhero__svc" aria-label="Most requested services">
          {heroServices.map((s) => (
            <Link key={s.href} className="vsvc vsvc--car" to={s.href}>
              <img className="vsvc__car" src={s.car} width={400} height={200} alt="" decoding="async" />
              <span>{s.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default VideoHero;
