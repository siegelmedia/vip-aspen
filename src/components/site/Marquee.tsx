import { marqueeItems } from "@/data/site";

/** Scrolling strip under the headers: the list twice, sliding by half its width for a seamless loop. */
const Marquee = () => (
  <div className="marquee" aria-label="VIP Aspen at a glance">
    <div className="marquee__track">
      {[0, 1].map((copy) => (
        <ul key={copy} aria-hidden={copy === 1 ? true : undefined}>
          {marqueeItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default Marquee;
