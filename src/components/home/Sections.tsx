import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/data/constants";
import { TEL_HREF } from "@/data/site";
import { aboutImage, seoImages, serviceTiles, standards, steps, team, teamImage } from "@/data/home";

/** Intro with the outlined "VIP" watermark behind the display line, and the page's H1. */
export const Intro = () => (
  <section className="sec sec--intro">
    <div className="wrap intro">
      <div className="intro__disp">
        <p className="disp">Elevate Your Aspen Experience</p>
      </div>
      <div className="intro__text">
        <h1>Luxury Car Service &amp; VIP Concierge in Aspen, Colorado</h1>
        <p>
          Chauffeured <Link to="/rolls-royce-cullinan">Rolls-Royce Cullinan</Link>,{" "}
          <Link to="/cadillac-escalade">Cadillac Escalade</Link> &amp;{" "}
          <Link to="/executive-sprinter">Executive Sprinter</Link>. Airport transfers, private ski transfers, and
          executive protection — for Aspen's most discerning clients. Transportation, security, and concierge — all
          under one roof. Select your vehicle, date, and route — confirmed in minutes. No surge pricing, available
          24/7. To reserve, call <a href={TEL_HREF}>{COMPANY.phoneDisplay}</a> or{" "}
          <a href="#booking">get an instant quote online</a>.
        </p>
      </div>
    </div>
  </section>
);

/** "Our Services" photo tiles. The heading stays for screen readers and search only. */
export const ServiceTiles = () => (
  <section id="services" aria-labelledby="services-h">
    <h2 className="vh" id="services-h">
      Our Services
    </h2>
    <div className="tiles">
      {serviceTiles.map((s) => (
        <Link key={s.href} className="tile" to={s.href}>
          <img src={s.image} alt={s.alt} loading="lazy" decoding="async" />
          <div className="tile__cap">
            <h3>{s.title}</h3>
            <p>{s.blurb}</p>
            <span className="go">
              Explore <i aria-hidden="true">&rarr;</i>
            </span>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

/**
 * "Why VIP Aspen" on black: the list on the left drives the photo on the right
 * and advances by itself until the visitor picks a line.
 */
export const Standards = () => {
  const [current, setCurrent] = useState(0);
  const touched = useRef(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(
      (entries) => {
        clearInterval(timer);
        if (entries[0].isIntersecting && !touched.current) {
          timer = setInterval(() => {
            if (touched.current) return clearInterval(timer);
            setCurrent((c) => (c + 1) % standards.length);
          }, 4500);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      clearInterval(timer);
      io.disconnect();
    };
  }, []);

  return (
    <section className="sec sec--ink std" id="standards">
      <div className="wrap">
        <div className="std__head">
          <p className="eyebrow">Why VIP Aspen</p>
          <h2 className="h2">
            Aspen's Only <em>Full-Service Luxury Concierge</em>
          </h2>
          <p className="lead">
            VIP Aspen is the only luxury car service in Aspen, Colorado that combines private chauffeur
            transportation, VIP nightlife access, and executive protection under one roof. While other services offer
            a single vehicle or a simple airport ride, we've built a complete luxury concierge experience — from the
            moment your wheels touch the tarmac to the moment you step through the velvet rope.
          </p>
        </div>
        <div className="std__grid" ref={box}>
          <div className="std__list" role="tablist" aria-label="Our standards">
            {standards.map((s, i) => (
              <button
                key={s.title}
                className={`std__item${i === current ? " is-on" : ""}`}
                role="tab"
                aria-selected={i === current}
                onClick={() => {
                  touched.current = true;
                  setCurrent(i);
                }}
              >
                <span className="std__t">{s.title}</span>
                <span className="std__x">{s.text}</span>
              </button>
            ))}
          </div>
          <div className="std__media">
            {standards.map((s, i) => (
              <figure key={s.title} className={i === current ? "is-on" : undefined}>
                <img src={s.image} alt={s.alt} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </div>
        <div className="btns">
          <Link className="btn btn--brass" to="/executive-protection">
            Executive protection
          </Link>
          <Link className="btn btn--line" to="/about">
            Our story
          </Link>
        </div>
      </div>
    </section>
  );
};

/** Three numbered steps under a photo band. */
export const WhatToExpect = () => (
  <section className="wte" id="what-to-expect">
    <div className="wte__band">
      <img src={steps.image} alt={steps.alt} loading="lazy" decoding="async" />
      <h2 className="h2">Booked in Three Steps</h2>
    </div>
    <div className="wrap">
      <ol className="wte__steps">
        {steps.items.map((s, i) => (
          <li key={s.title}>
            <span className="wte__n">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

/** The people behind the wheel: photo beside the company's standards, then the leadership cards. */
export const Team = () => (
  <section className="sec sec--paper" id="team">
    <div className="wrap">
      <div className="sec__head sec__head--split">
        <div>
          <p className="eyebrow">The people behind the wheel</p>
          <h2 className="h2">
            A security company <em>first</em>
          </h2>
        </div>
        <p className="lead">
          Chauffeurs are background-checked and trained, discretion is standard, and one local team coordinates every
          ride.
        </p>
      </div>
      <div className="duo">
        <figure className="duo__img">
          <img src={teamImage.src} alt={teamImage.alt} loading="lazy" decoding="async" />
        </figure>
        <div className="duo__copy">
          <h3 className="h3">Vetting, discretion, and planning on every ride.</h3>
          <p>
            VIP Aspen is operated by Aspen Security LLC, a Colorado-licensed security firm with veteran and law
            enforcement ownership. Vetting, discretion, and planning are built into every ride, not added on. Our team
            lives and works in the Roaring Fork Valley and knows every hotel entrance, FBO gate, valet stand, and
            mountain road in every season.
          </p>
          <ul className="ticks ticks--dark">
            <li>Veteran and law enforcement-owned</li>
            <li>Colorado-licensed security company</li>
            <li>Aspen local knowledge</li>
            <li>One call, around the clock</li>
          </ul>
          <Link className="btn btn--dark" to="/about">
            About VIP Aspen
          </Link>
        </div>
      </div>
      <div className="crew crew--2">
        {team.map((p) => (
          <article className="crew__card" key={p.id}>
            <div className="crew__photo">
              <img
                src={p.photo}
                width={p.width}
                height={p.height}
                alt={`Headshot of ${p.name}, ${p.role}`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="crew__body">
              <h3>{p.name}</h3>
              <p className="crew__role">{p.role}</p>
              <p className="crew__bio">
                <b className="crew__who">{p.name}</b> {p.bio}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/** About band over a black-and-white photo of the fleet. */
export const AboutBand = () => (
  <section className="about">
    <div className="about__media">
      <img src={aboutImage.src} alt={aboutImage.alt} loading="lazy" decoding="async" />
    </div>
    <div className="wrap">
      <div className="about__in">
        <h2 className="h2">About VIP Aspen</h2>
        <p>
          <strong>Transportation, Access &amp; Protection. One Aspen Team.</strong>
        </p>
        <p>
          VIP Aspen is a veteran and law-enforcement owned company built for the way people actually visit Aspen:
          arriving by jet, moving between mountains and dinners, and expecting every detail to be handled quietly.
        </p>
        <div className="btns">
          <Link className="btn btn--brass" to="/about">
            About us
          </Link>
          <Link className="btn btn--line" to="/membership">
            Membership
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/** Three-photo collage and two columns of text. */
export const SeoBlock = () => (
  <section className="seo">
    <div className="seo__pics">
      {seoImages.map((img) => (
        <figure key={img.src}>
          <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
        </figure>
      ))}
    </div>
    <div className="seo__text">
      <h2 className="h2">
        Airport Transfers from <em>Every Airport Serving Aspen</em>
      </h2>
      <div className="seo__cols">
        <p>
          <strong>Our fleet is unlike anything else in the Roaring Fork Valley.</strong> The centerpiece is our{" "}
          <Link to="/rolls-royce-cullinan">Rolls Royce Cullinan</Link> with a bespoke Mandarin interior — the only one
          of its kind available for hire in Aspen. Alongside it, a fleet of late-model Cadillac Escalades and a
          13-passenger Executive Sprinter ensure we have the perfect vehicle for every occasion. We specialize in{" "}
          <Link to="/aspen-airport-transfer">airport transfers</Link> from all four airports serving Aspen: ASE (5
          minutes to downtown), Eagle/EGE (90 minutes), Rifle/RIL (60 minutes for private jets), and Denver/DEN (a
          3.5-hour scenic mountain transfer).
        </p>
        <p>
          Our private chauffeur service extends across Aspen, Snowmass Village, Basalt, Woody Creek, Carbondale, and
          the entire Roaring Fork Valley. Clients who want the full Aspen experience can join our{" "}
          <Link to="/membership">membership program</Link> — complimentary airport transfers, discounted hourly rates,
          priority booking, and exclusive club access. Whatever the occasion, VIP Aspen is the one call that covers
          it all.
        </p>
      </div>
    </div>
  </section>
);
