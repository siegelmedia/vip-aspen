const areas = [
  "Aspen",
  "Snowmass Village",
  "Basalt",
  "Woody Creek",
  "Carbondale",
  "Glenwood Springs",
  "Vail",
  "Beaver Creek",
  "Aspen Airport (ASE)",
  "Eagle Airport (EGE)",
  "Rifle Airport (RIL)",
  "Denver (DEN)",
];

/** Infinite marquee strip of service areas — duplicated list scrolls -50% for a seamless loop */
const AreasMarquee = () => {
  return (
    <div
      className="relative overflow-hidden border-y border-border/40 bg-navy-light py-4 pause-on-hover"
      aria-label="Service areas"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {areas.map((area) => (
              <span
                key={`${copy}-${area}`}
                className="flex items-center gap-6 px-6 font-mono text-xs uppercase tracking-[0.22em] text-foreground/50 whitespace-nowrap"
              >
                {area}
                <span className="h-1 w-1 bg-primary/60 rotate-45" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasMarquee;
