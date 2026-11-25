import { Plane, Snowflake, MapPin, Luggage, Mountain, Clock } from "lucide-react";
import heroBg from "@/assets/guide-winter-travel.webp";
import type { ServicePageData } from "@/types";

/**
 * Facts checked 2026-11-24:
 *  - GJT to Aspen 128 miles, about 2 h 10 min: aspenchamber.org/plan-trip/get-here/by-air
 *  - Diverted Aspen flights land at Grand Junction: aspenchamber.org/plan-trip/get-here/by-air/inclement-weather
 *  - Aspen airport closed April 4, 2027 11 p.m. to November 19, 2027 7 p.m.: aspenairport.com
 *  - Glenwood Springs to Aspen 41 miles on Highway 82: aspensnowmass.com (driving directions)
 */
const data: ServicePageData = {
  slug: "grand-junction-to-aspen-car-service",
  areaServed: ["Grand Junction", "Aspen", "Snowmass Village"],
  serviceType: "Airport transfer",
  seo: {
    title: "Grand Junction (GJT) to Aspen Car Service",
    description:
      "Private car service between Grand Junction Airport (GJT) and Aspen: 128 miles, about 2 to 2.5 hours. Instant online quote or call (970) 452-6636.",
    keywords:
      "Grand Junction to Aspen car service, GJT to Aspen, Grand Junction airport to Aspen transportation, Grand Junction to Aspen shuttle, GJT airport transfer Aspen, Grand Junction to Snowmass car service, Aspen flight diverted Grand Junction",
    canonicalUrl: "/grand-junction-to-aspen-car-service",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Grand Junction (GJT) to Aspen",
    bgImage: heroBg,
    headline: "Grand Junction to Aspen {{Car Service}}",
    description:
      "Private, door-to-door car service between Grand Junction Regional Airport (GJT) and Aspen or Snowmass Village. About 128 miles and 2 to 2.5 hours on I-70 and Highway 82, in a chauffeured Escalade, Sprinter or Rolls-Royce Cullinan.",
    ctaLabel: "Get an Instant Quote",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "The Western Slope Route into {{Aspen}}",
    body: `<p>Grand Junction Regional Airport (GJT) sits in the Grand Valley, about 128 miles west of Aspen. The Aspen Chamber lists it as an alternate airport for Aspen at roughly 2 hours 10 minutes by road. We plan on 2 to 2.5 hours in normal conditions and longer when it is snowing. VIP Aspen drives the route in both directions at any hour, door to door, with one party per vehicle and no shared stops.</p>
<h3>The route: I-70 and Highway 82</h3>
<p>From the airport the drive runs east on Interstate 70 through De Beque Canyon, past Parachute and Rifle, to Glenwood Springs. There it turns south onto Highway 82 and follows the Roaring Fork River through Carbondale and Basalt into Aspen, the last 41 miles of the trip. Snowmass Village is on the way, at about the same drive time. The whole route stays west of Glenwood Canyon and Vail Pass, the two stretches of I-70 best known for winter closures, so a closure there does not block the drive from Grand Junction.</p>
<h3>When Aspen flights divert</h3>
<p>Aspen's airport (ASE) is at about 7,820 feet with a single runway, and snow, low cloud and wind disrupt flights there every winter. Grand Junction is at roughly 4,860 feet in open country, and it is one of the airports where diverted Aspen flights land, along with Eagle and Denver. If your flight is sent to GJT, call or text <a href="tel:+19704526636">(970) 452-6636</a> as soon as you know and we will get a car to you as quickly as one can reach Grand Junction. Our <a href="/guides/aspen-winter-travel">Aspen winter travel guide</a> covers how diversions work.</p>
<h3>While Aspen airport is closed in 2027</h3>
<p>Aspen/Pitkin County Airport will be closed for runway reconstruction from April 4, 2027 at 11 p.m. until November 19, 2027 at 7 p.m. During those months every visitor arrives by road from another airport: <a href="/eagle-airport-transfer">Eagle (EGE)</a>, Grand Junction (GJT), <a href="/denver-to-aspen-car-service">Denver (DEN)</a>, or <a href="/rifle-airport-transfer">Rifle (RIL)</a> for private aircraft. It is worth comparing flights into GJT with Eagle and Denver for a summer or fall trip, then booking the transfer as soon as you have flight numbers.</p>
<h3>Vehicles for the drive</h3>
<p>The <a href="/cadillac-escalade">Cadillac Escalade</a> seats up to five with luggage and ski bags. The Mercedes <a href="/executive-sprinter">Executive Sprinter</a> seats up to 13 and keeps a group and its gear in one vehicle. The <a href="/rolls-royce-cullinan">Rolls-Royce Cullinan</a> seats three with standard luggage and does not carry ski equipment. VIP Aspen is law enforcement-owned, and every car is driven by a professional, background-checked chauffeur.</p>`,
  },
  features: [
    {
      icon: Plane,
      title: "Timed to Your Flight",
      description:
        "Give us the airline and flight number and we follow the flight, so the car is timed to the actual arrival at GJT and not the schedule.",
    },
    {
      icon: Snowflake,
      title: "Diversion Backup",
      description:
        "When an Aspen flight is sent to Grand Junction, call us and we send a car for the drive up the valley as quickly as one can get there.",
    },
    {
      icon: MapPin,
      title: "Door to Door",
      description:
        "From the terminal or the FBO straight to your hotel, home or rental in Aspen, Snowmass Village, Basalt or Carbondale. One party per vehicle.",
    },
    {
      icon: Luggage,
      title: "Luggage and Ski Gear",
      description:
        "Ski and board bags ride in the Escalade or the Sprinter, loaded by your chauffeur. The Cullinan carries three passengers and standard luggage.",
    },
    {
      icon: Mountain,
      title: "West of the Closures",
      description:
        "The route uses I-70 west of Glenwood Springs, so a Glenwood Canyon or Vail Pass closure does not stand between you and Aspen.",
    },
    {
      icon: Clock,
      title: "Both Directions, 24/7",
      description:
        "Early departures from Aspen to GJT, late arrivals, and round trips, any day of the year.",
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "Get an Instant Quote",
      description:
        "Enter Grand Junction Regional Airport, your Aspen address, the date and your party size in the booking form on this page. The quote is all-inclusive and you see it before you confirm.",
    },
    {
      step: 2,
      title: "Send Your Flight Details",
      description:
        "Add the airline and flight number so we can follow the flight. For a private aircraft, tell us the FBO and your expected arrival time.",
    },
    {
      step: 3,
      title: "Meet Your Chauffeur",
      description:
        "We confirm the meeting point at the Grand Junction terminal before you land. Your chauffeur loads the bags at the vehicle.",
    },
    {
      step: 4,
      title: "Ride to Aspen",
      description:
        "About 2 to 2.5 hours on I-70 and Highway 82, with a stop in Glenwood Springs or Carbondale if you would like one.",
    },
  ],
  faqs: [
    {
      question: "How far is Grand Junction airport from Aspen?",
      answer:
        "Grand Junction Regional Airport (GJT) is about 128 miles from Aspen, a drive of roughly 2 hours 10 minutes to 2.5 hours in normal conditions. Snow on I-70 or Highway 82 adds time, so we build a margin into winter pickups.",
    },
    {
      question: "What route do you take from Grand Junction to Aspen?",
      answer:
        "We take I-70 east to Glenwood Springs, then Highway 82 south through Carbondale and Basalt into Aspen. The route does not pass through Glenwood Canyon or over Vail Pass, so winter closures on those stretches of I-70 do not block it.",
    },
    {
      question: "My Aspen flight was diverted to Grand Junction. Can you pick me up?",
      answer:
        "Yes. Call or text (970) 452-6636 as soon as you know the flight is going to Grand Junction and we will send a car. On a same-day request the vehicle has to reach GJT first, so the earlier you call, the shorter the wait. The drive to Aspen is then about 2 to 2.5 hours.",
    },
    {
      question: "Is Grand Junction a good airport to use while Aspen airport is closed in 2027?",
      answer:
        "Yes, it is one of the practical arrival airports for those months. Aspen/Pitkin County Airport is closed from April 4, 2027 at 11 p.m. to November 19, 2027 at 7 p.m. Eagle (EGE) is closer, at about 70 miles and 90 minutes; Denver (DEN) is farther, at about 220 miles and 3.5 to 4 hours.",
    },
    {
      question: "Where does the chauffeur meet me at Grand Junction airport?",
      answer:
        "Airline passengers are met at the terminal and private aircraft passengers at the FBO. We confirm the exact meeting point before you land, and your chauffeur loads your luggage at the vehicle.",
    },
    {
      question: "Do you drive from Aspen to Grand Junction airport for departures?",
      answer:
        "Yes, we run the route in both directions at any hour. For a departure we set the pickup time from your airline's check-in requirement, allowing 2.5 hours for the drive and more when snow is forecast.",
    },
    {
      question: "How do I get a price for Grand Junction to Aspen?",
      answer:
        "Use the booking form on this page for an instant quote. The quote is all-inclusive and shown before you confirm. You can also call or text (970) 452-6636.",
    },
  ],
  relatedServices: [
    { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer" },
    { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer" },
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "Denver to Aspen Car Service", href: "/denver-to-aspen-car-service" },
    { label: "Glenwood Springs to Aspen", href: "/glenwood-springs-to-aspen-car-service" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
    { label: "ASE vs. Eagle: Which Airport?", href: "/guides/ase-vs-ege-airport" },
  ],
};

export default data;
