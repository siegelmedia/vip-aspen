import { MapPin, Clock, Users, Snowflake, Plane, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/guide-events.webp";
import type { ServicePageData } from "@/types";

/**
 * Event facts checked 2026-11-24 on xgames.com/events/aspen-2027 and
 * aspensnowmass.com/visit/events/x-games-aspen: dates, venue, disciplines,
 * free daytime access with ticketed evenings, no parking at Buttermilk, the
 * taxi and ride-share area off Owl Creek Road and E. Buttermilk Road, the
 * accessible drop-off, the Rubey Park shuttle. The two sites give different
 * cut-off hours for free access, so no hour is stated here. Re-check every
 * year before the event.
 */
const data: ServicePageData = {
  slug: "x-games-aspen-transportation",
  areaServed: ["Aspen", "Snowmass Village"],
  serviceType: "Event transportation",
  seo: {
    title: "X Games Aspen Transportation & Car Service",
    description:
      "Private car service to X Games Aspen at Buttermilk, where there is no event parking. Escalade, Sprinter and Rolls-Royce. Instant quote or (970) 452-6636.",
    keywords:
      "X Games Aspen transportation, X Games car service, X Games Aspen shuttle, Buttermilk X Games drop off, X Games Aspen parking, X Games private car, X Games Aspen chauffeur, X Games Aspen 2027 transportation",
    canonicalUrl: "/x-games-aspen-transportation",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "X Games Aspen",
    bgImage: heroBg,
    headline: "X Games Aspen {{Transportation}}",
    description:
      "Private car service for X Games Aspen at Buttermilk, January 29 to 31, 2027. There is no parking at the venue, so arrive by chauffeured Escalade, Sprinter or Rolls-Royce Cullinan and leave when you are ready.",
    ctaLabel: "Reserve Your Car",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Getting to {{Buttermilk}} During X Games",
    body: `<p>X Games Aspen returns to Buttermilk on January 29 to 31, 2027, which Aspen Snowmass counts as the event's 26th consecutive year at the mountain. Skiers and snowboarders compete in Superpipe, Big Air, Slopestyle and Knuckle Huck, and the evenings add concerts. Daytime access is free; evening competitions and concerts need a ticket, sold as three-day passes. Dates, schedules and ticket rules belong to the organizers and can change, so confirm them on <a href="https://www.xgames.com/events/aspen-2027/" rel="noopener">the official X Games Aspen page</a> before you plan your day.</p>
<h3>No parking at the venue</h3>
<p>The organizers state it plainly: there is no parking at Buttermilk during X Games. Spectators are pointed to RFTA park-and-ride lots down the valley and to a shuttle from Rubey Park in downtown Aspen, and a pick-up and drop-off area for taxis and ride-share is set up off Owl Creek Road and East Buttermilk Road. Buttermilk sits on Highway 82 a few miles west of downtown Aspen, next to the airport, and that one road carries the whole event crowd. Plan for a normally short drive to take longer on competition evenings.</p>
<h3>What a private car changes</h3>
<p>With VIP Aspen your chauffeur collects you at your hotel, home or rental, follows the event traffic plan, and drops you at the closest point open to private vehicles. When you are finished, whether that is after the last Superpipe run or the end of the concert, the same car comes back for you. Book a transfer each way, or book <a href="/hourly-chauffeur">by the hour</a> so the car and chauffeur stay with you through dinner and the rest of the night. The Aspen Chamber itself notes that Uber and Lyft are not dependable in the Aspen area, and event weekends do not make them more so.</p>
<h3>Vehicles for X Games week</h3>
<p>Buttermilk stays open for skiing during the event, so many guests ski by day and watch at night. Skis and boards ride in the <a href="/cadillac-escalade">Cadillac Escalade</a>, which seats up to five, or the Mercedes <a href="/executive-sprinter">Executive Sprinter</a>, which seats up to 13 and suits groups, teams and sponsor parties. The <a href="/rolls-royce-cullinan">Rolls-Royce Cullinan</a> seats three and does not carry ski equipment; it is the car for dinner and an evening arrival. VIP Aspen is law enforcement-owned, with professional, background-checked chauffeurs available 24/7.</p>
<h3>Flying in for the weekend</h3>
<p>Aspen airport (ASE) is next to Buttermilk. Airport rules keep drivers with their vehicles, so your chauffeur meets you in the Ground Transportation Circle outside baggage claim; see <a href="/aspen-airport-transfer">Aspen airport transfers</a>. We also drive from <a href="/eagle-airport-transfer">Eagle (EGE)</a>, <a href="/rifle-airport-transfer">Rifle (RIL)</a>, <a href="/grand-junction-to-aspen-car-service">Grand Junction (GJT)</a> and <a href="/denver-to-aspen-car-service">Denver (DEN)</a> when Aspen flights are full or weather sends them elsewhere.</p>`,
  },
  features: [
    {
      icon: MapPin,
      title: "Door to Venue",
      description:
        "Picked up at your door and dropped at the closest point open to private vehicles under the event traffic plan.",
    },
    {
      icon: Clock,
      title: "On Call All Evening",
      description:
        "Book by the hour and the same car and chauffeur stay nearby, ready when the last run or the concert ends.",
    },
    {
      icon: Users,
      title: "Groups in One Vehicle",
      description:
        "The Mercedes Executive Sprinter seats up to 13, so a group, a team or a sponsor party arrives and leaves together.",
    },
    {
      icon: Snowflake,
      title: "Ski Days Too",
      description:
        "Buttermilk stays open for skiing during X Games. Skis and boards ride in the Escalade or the Sprinter, loaded by your chauffeur.",
    },
    {
      icon: Plane,
      title: "Airport Transfers",
      description:
        "Arrivals and departures at Aspen (ASE), Eagle (EGE), Rifle (RIL), Grand Junction (GJT) and Denver (DEN), timed to your flight.",
    },
    {
      icon: ShieldCheck,
      title: "Professional Chauffeurs",
      description:
        "Law enforcement-owned, with background-checked chauffeurs who drive Highway 82 and the Buttermilk approach all winter.",
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "Get an Instant Quote",
      description:
        "Enter your pickup address, Buttermilk, the date and your party size in the booking form on this page. The quote is all-inclusive and shown before you confirm.",
    },
    {
      step: 2,
      title: "Choose Transfer or Hourly",
      description:
        "A transfer each way suits a set schedule. Hourly service keeps the car with you when you do not know how long you will stay.",
    },
    {
      step: 3,
      title: "Ride to Buttermilk",
      description:
        "Your chauffeur follows the event traffic plan and tells you exactly where the car will be waiting for the ride home.",
    },
    {
      step: 4,
      title: "Leave When You Are Ready",
      description:
        "Back to your hotel, on to dinner in Aspen, or over to Snowmass Village, without waiting for a shuttle.",
    },
  ],
  faqs: [
    {
      question: "When and where is X Games Aspen 2027?",
      answer:
        "X Games Aspen 2027 is scheduled for January 29 to 31, 2027 at Buttermilk, a few miles west of downtown Aspen on Highway 82. Competition times can change, so check the schedule on xgames.com before you go.",
    },
    {
      question: "Is there parking at Buttermilk during X Games?",
      answer:
        "No. The organizers state that there is no parking at Buttermilk during the event. Spectators either park at an RFTA park-and-ride and take a bus, ride the shuttle from Rubey Park in downtown Aspen, or are dropped off by a car service, taxi or ride-share.",
    },
    {
      question: "Where can a private car drop us off at X Games?",
      answer:
        "At the closest point the event traffic plan allows on the day. The organizers publish a pick-up and drop-off area for taxis and ride-share off Owl Creek Road and East Buttermilk Road, plus an accessible drop-off at the base of Buttermilk. Your chauffeur confirms the meeting point for the ride home before you step out.",
    },
    {
      question: "Do I need a ticket for X Games Aspen?",
      answer:
        "Daytime access is free, and evening events need a ticket. According to xgames.com, evening competitions and concerts are sold as three-day passes that are likely to sell out, and the 2027 concerts announced are Zhu on Friday and Marshmello on Saturday. VIP Aspen does not sell event tickets; buy them through the official site.",
    },
    {
      question: "How early should I book a car for X Games?",
      answer:
        "Book as soon as you have your dates, ideally when you book lodging. X Games is one of the busiest weekends of the winter in Aspen and vehicles are reserved first come, first served.",
    },
    {
      question: "Can the driver wait and take us to dinner afterward?",
      answer:
        "Yes. Book hourly service and the same car and chauffeur stay with you for the evening, from Buttermilk to dinner in Aspen or Snowmass Village and back to your door.",
    },
    {
      question: "How do I get a price for X Games transportation?",
      answer:
        "Use the booking form on this page for an instant quote. The quote is all-inclusive and confirmed when you book. You can also call or text (970) 452-6636.",
    },
  ],
  relatedServices: [
    { label: "Event Transportation", href: "/special-event-transportation" },
    { label: "Aspen Events Calendar", href: "/guides/aspen-events-calendar" },
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
    { label: "Private Ski Transfers", href: "/private-ski-transfers" },
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
    { label: "Food & Wine Classic", href: "/aspen-food-and-wine-transportation" },
  ],
};

export default data;
