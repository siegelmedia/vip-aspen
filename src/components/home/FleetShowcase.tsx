import { useState } from "react";
import type { KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { CORSA } from "@/data/site";
import { fleetVehicles } from "@/data/home";
import type { FleetVehicle } from "@/data/home";
import { LuggageIcon, UsersIcon } from "@/components/site/icons";

/** One vehicle's photos: a main frame and a row of thumbnails that switch it. */
const Gallery = ({ vehicle }: { vehicle: FleetVehicle }) => {
  const [shown, setShown] = useState(0);
  return (
    <div className="veh__stage">
      <div className="veh__main">
        {vehicle.images.map((img, i) => (
          <figure key={img.src} className={i === shown ? "is-on" : undefined}>
            <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
      {vehicle.images.length > 1 && (
        <div className="veh__thumbs">
          {vehicle.images.map((img, i) => (
            <button
              key={img.src}
              className={i === shown ? "is-on" : undefined}
              aria-label={`Show photo ${i + 1} of the ${vehicle.name}`}
              onClick={() => setShown(i)}
            >
              <img src={img.src} alt="" loading="lazy" width={160} height={120} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Fleet showcase: a vehicle selector beside the photos. Every vehicle is in the
 * HTML (the hidden ones are only hidden), so each description is readable by
 * crawlers and the build-time render.
 */
const FleetShowcase = () => {
  const [current, setCurrent] = useState(0);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const n = (i + (e.key === "ArrowRight" ? 1 : fleetVehicles.length - 1)) % fleetVehicles.length;
    setCurrent(n);
    document.getElementById(`tab-${fleetVehicles[n].key}`)?.focus();
  };

  return (
    <section className="sec fleet" id="fleet">
      <div className="wrap">
        <div className="sec__head sec__head--split">
          <div>
            <p className="eyebrow">The fleet</p>
            <h2 className="h2">
              Aspen's <em>Exclusive Collection</em>
            </h2>
          </div>
          <p className="lead">
            Our handpicked fleet of luxury vehicles ensures every journey is an experience in itself. Select a vehicle
            to view photos and details.
          </p>
        </div>
        <div className="fleet__body">
          <div className="fleet__pick" role="tablist" aria-label="Vehicles">
            {fleetVehicles.map((v, i) => (
              <button
                key={v.key}
                role="tab"
                id={`tab-${v.key}`}
                aria-controls={`veh-${v.key}`}
                aria-selected={i === current}
                tabIndex={i === current ? 0 : -1}
                className={i === current ? "is-on" : undefined}
                onClick={() => setCurrent(i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <span className="fp__name">
                  {v.name}
                  <small>{v.model}</small>
                </span>
                <span className="fp__cap">
                  <span title="Passengers">
                    <UsersIcon />
                    {v.passengers}
                    <em className="vh"> passengers</em>
                  </span>
                  <span className="fp__bags" title="Bags">
                    <LuggageIcon />
                    {v.bags}
                    <em className="vh"> bags</em>
                  </span>
                </span>
              </button>
            ))}
          </div>
          {fleetVehicles.map((v, i) => (
            <div
              key={v.key}
              className={`veh${i === current ? " is-on" : ""}`}
              id={`veh-${v.key}`}
              role="tabpanel"
              aria-labelledby={`tab-${v.key}`}
              hidden={i !== current}
            >
              <Gallery vehicle={v} />
              <div className="veh__info">
                <p className="veh__class">{v.model}</p>
                <h3>{v.name}</h3>
                <p className="veh__chips">
                  <span className="veh__seats">Up to {v.passengers} passengers</span>
                  <span className="veh__seats">{v.bags} bags</span>
                </p>
                <p>{v.summary}</p>
                <ul className="ticks">
                  {v.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <p className="veh__best">
                  <strong>Best for</strong> {v.bestFor}
                </p>
                <div className="btns">
                  <a className="btn btn--dark" href={CORSA.bookUrl}>
                    Quote this vehicle
                  </a>
                  <Link className="btn btn--text btn--text-dark" to={v.href}>
                    Vehicle details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetShowcase;
