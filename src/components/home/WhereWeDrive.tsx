import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/data/constants";
import { CORSA, driveLinks, mapPlaces, mapRoadLabels } from "@/data/site";
import { PlaneIcon } from "@/components/site/icons";
import map1100 from "@/assets/map-region-1100.webp";
import map1600 from "@/assets/map-region-1600.webp";

/**
 * The regional map (Rifle to Denver) with the airports and towns VIP Aspen
 * serves. The image is square and is cropped top and bottom to its box like a
 * photo; the places are positioned over it in percent. Keep the OpenStreetMap
 * credit: its licence requires it.
 */
const RegionMap = () => (
  <figure className="rmap">
    <div className="rmap__main" style={{ "--ar": "2439/2440" } as CSSProperties}>
      <img
        src={map1100}
        srcSet={`${map1100} 1100w, ${map1600} 1600w`}
        sizes="(min-width: 1200px) 60vw, 100vw"
        width={2439}
        height={2440}
        alt="Map of the Colorado mountains from Rifle to Denver, with Interstate 70, Highway 82 to Aspen and the four airports VIP Aspen serves"
        loading="lazy"
        decoding="async"
      />
      {mapRoadLabels.map((r) => (
        <span
          key={`${r.text}-${r.x}`}
          className="rmap__road is-shide"
          style={{ left: `${r.x}%`, top: `${r.y}%` }}
          aria-hidden="true"
        >
          {r.text}
        </span>
      ))}
      {mapPlaces.map((p) => {
        const cls = [
          "rmap__pt",
          `rmap__pt--${p.kind}`,
          `rmap__pt--${p.pos}`,
          p.phonePos ? `rmap__pt--p-${p.phonePos}` : "",
          p.small === "dot" ? "is-sdot" : "",
          p.small === "hide" ? "is-shide" : "",
          p.phone === "dot" ? "is-pdot" : "",
          p.phone === "hide" ? "is-phide" : "",
        ]
          .filter(Boolean)
          .join(" ");
        return (
          <Link key={p.name} className={cls} style={{ left: `${p.x}%`, top: `${p.y}%` }} to={p.href} aria-label={p.name}>
            <i aria-hidden="true">{p.kind === "airport" && <PlaneIcon />}</i>
            <span aria-hidden="true">
              {p.short ? (
                <>
                  <b className="nm">{p.name}</b>
                  <b className="sh">{p.short}</b>
                </>
              ) : (
                p.name
              )}
            </span>
          </Link>
        );
      })}
    </div>
    <figcaption className="rmap__credit">
      <ul className="rmap__key" aria-label="Map key">
        <li>
          <i className="k-home" />
          Aspen
        </li>
        <li>
          <i className="k-town" />
          Town
        </li>
        <li>
          <i className="k-air">
            <PlaneIcon />
          </i>
          Airport
        </li>
      </ul>
      <span>
        &copy;{" "}
        <a href="https://www.openstreetmap.org/copyright" rel="noopener">
          OpenStreetMap
        </a>{" "}
        contributors &middot; Terrain: USGS, NASA SRTM
      </span>
    </figcaption>
  </figure>
);

/** "Where We Drive": black panel with every airport and route linked, beside the map. */
const WhereWeDrive = () => (
  <section className="wwd" id="areas">
    <div className="wwd__panel">
      <p className="eyebrow">Airport Transfers</p>
      <h2 className="h2">Where We Drive</h2>
      <p>
        No matter which airport you fly into, VIP Aspen provides seamless luxury transfers with flight tracking,
        meet-and-greet service, and door-to-door delivery to your Aspen property.
      </p>
      <div className="wwd__list wwd__list--detail">
        {driveLinks.map((l) => (
          <Link key={l.href + l.label} to={l.href}>
            <span>
              {l.label}
              <small>{l.detail}</small>
            </span>
          </Link>
        ))}
      </div>
      <div className="wwd__else">
        <strong>Looking for a different destination?</strong>
        <p>
          We serve Aspen, Snowmass Village, Basalt, Woody Creek, Carbondale, and the entire Roaring Fork Valley.
          Request a quote online or call {COMPANY.phoneDisplay}.
        </p>
        <a className="btn btn--brass btn--sm" href={CORSA.bookUrl}>
          Get an Instant Quote
        </a>
      </div>
    </div>
    <div className="wwd__map">
      <RegionMap />
    </div>
  </section>
);

export default WhereWeDrive;
