import { MapPin, Home, Clock, Wine, Snowflake, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/guide-getting-around.webp";
import type { ServicePageData } from "@/types";

/**
 * Drive times from downtown Aspen, checked 2026-11-24 (clear-road figures):
 *  - Glenwood Springs 41 miles: aspensnowmass.com driving directions; under an hour: aspenchamber.org
 *  - Basalt 18 miles / 24 min, Carbondale 29 miles / 38 min, Woody Creek 8 miles / 12 min,
 *    Snowmass Village 8 to 10 miles / 16 min: rome2rio.com; Woody Creek "10 miles": aspenchamber.org
 *  - Red Mountain 3 to 10 min, Starwood about 5 miles / 10 to 15 min: property listings (approximate)
 */
const data: ServicePageData = {
  slug: "roaring-fork-valley-car-service",
  areaServed: ["Aspen", "Snowmass Village", "Woody Creek", "Basalt", "Carbondale", "Glenwood Springs"],
  serviceType: "Chauffeured car service",
  seo: {
    title: "Roaring Fork Valley Car Service & Chauffeurs",
    description:
      "Car service across the Roaring Fork Valley: Aspen, Snowmass, Woody Creek, Basalt, Carbondale and Glenwood Springs. Instant quote or (970) 452-6636.",
    keywords:
      "Roaring Fork Valley car service, Basalt car service, Carbondale car service, Woody Creek car service, Aspen to Basalt car service, Aspen to Carbondale transportation, Red Mountain Aspen car service, Starwood Aspen chauffeur, Snowmass Village car service",
    canonicalUrl: "/roaring-fork-valley-car-service",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Roaring Fork Valley",
    bgImage: heroBg,
    headline: "Roaring Fork Valley {{Car Service}}",
    description:
      "Chauffeured rides between Aspen, Snowmass Village, Woody Creek, Basalt, Carbondale and Glenwood Springs, and up to homes on Red Mountain and in Starwood. Point to point or by the hour, 24/7.",
    ctaLabel: "Get an Instant Quote",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "One Valley, One Road, {{Door to Door}}",
    body: `<p>The Roaring Fork Valley runs about 41 miles from Aspen down to Glenwood Springs, and nearly everything in it sits along one road, Highway 82. VIP Aspen drives the whole of it: a dinner in Woody Creek, a house on Red Mountain, a meeting in Basalt, a train to meet in Glenwood Springs. Every ride is private and door to door, in a Cadillac Escalade, a Mercedes Executive Sprinter or the Rolls-Royce Cullinan.</p>
<h3>Drive times from downtown Aspen</h3>
<ul>
<li><strong>Red Mountain:</strong> 3 to 10 minutes, depending on how far up the road the house is</li>
<li><strong>Starwood:</strong> about 5 miles, 10 to 15 minutes by way of McLain Flats Road</li>
<li><strong>Woody Creek:</strong> about 8 to 10 miles, 12 to 20 minutes</li>
<li><strong>Snowmass Village:</strong> about 8 to 10 miles, 15 to 20 minutes</li>
<li><strong>Basalt:</strong> about 18 miles, 25 to 30 minutes</li>
<li><strong>Carbondale:</strong> about 30 miles, 40 to 45 minutes</li>
<li><strong>Glenwood Springs:</strong> about 41 miles, 50 to 60 minutes</li>
</ul>
<p>These are clear-road times. Highway 82 slows toward Aspen on weekday mornings and away from Aspen in the late afternoon, and snow adds to every figure. We set pickup times with both in mind.</p>
<h3>Aspen neighborhoods and private roads</h3>
<p>Much of Aspen's best real estate is above town, on roads a visitor would rather not learn in the dark. Red Mountain climbs straight up from the north side of town. Starwood is a gated community on the bench above McLain Flats; give us the address and the gate arrangements when you book and your chauffeur arrives with them. We also serve the West End, the east side of town, and homes up the Castle Creek and Maroon Creek valleys. In winter these roads call for four-wheel drive and winter tires, which is how our fleet is equipped.</p>
<h3>Down valley: Woody Creek, Basalt, Carbondale, Glenwood Springs</h3>
<p>The towns below Aspen each have their own restaurants, and none of them is a comfortable drive home after wine. Book the car <a href="/hourly-chauffeur">by the hour</a> and your chauffeur waits while you eat. Basalt, with Willits and El Jebel just beyond it, and Carbondale are everyday trips for us, in both directions. Glenwood Springs has the hot springs and the valley's Amtrak station; that run has its own page, <a href="/glenwood-springs-to-aspen-car-service">Glenwood Springs to Aspen car service</a>. For the resort next door, see <a href="/snowmass-village-transfer">Snowmass Village transfers</a>.</p>
<h3>Vehicles</h3>
<p>The <a href="/cadillac-escalade">Cadillac Escalade</a> seats up to five and carries luggage and ski gear. The Mercedes <a href="/executive-sprinter">Executive Sprinter</a> seats up to 13. The <a href="/rolls-royce-cullinan">Rolls-Royce Cullinan</a> seats three with standard luggage and does not carry ski equipment. VIP Aspen is law enforcement-owned, and every car is driven by a professional, background-checked chauffeur. For a full list of what we do, start with <a href="/black-car-service">Aspen black car service</a>.</p>`,
  },
  features: [
    {
      icon: MapPin,
      title: "Every Town on Highway 82",
      description:
        "Aspen, Snowmass Village, Woody Creek, Basalt, Willits, El Jebel, Carbondale and Glenwood Springs, in either direction.",
    },
    {
      icon: Home,
      title: "Private Roads and Gated Homes",
      description:
        "Red Mountain, Starwood, McLain Flats and the creek valleys. Give us the address and gate details and the chauffeur comes to the door.",
    },
    {
      icon: Clock,
      title: "By the Hour",
      description:
        "Keep one car and one chauffeur for an evening or a day of stops up and down the valley, on your timing.",
    },
    {
      icon: Wine,
      title: "Dinner Down Valley",
      description:
        "Woody Creek, Basalt or Carbondale for dinner, with nobody in your party driving home afterward.",
    },
    {
      icon: Snowflake,
      title: "Ready for Winter",
      description:
        "Four-wheel-drive vehicles on winter tires, driven by chauffeurs who are on Highway 82 and the hill roads all season.",
    },
    {
      icon: ShieldCheck,
      title: "Professional Chauffeurs",
      description:
        "Law enforcement-owned, with background-checked chauffeurs, available 24 hours a day, every day of the year.",
    },
  ],
  faqs: [
    {
      question: "Which towns do you serve in the Roaring Fork Valley?",
      answer:
        "All of them along Highway 82: Aspen, Snowmass Village, Woody Creek, Basalt, Willits, El Jebel, Carbondale and Glenwood Springs. We also drive to homes above Aspen on Red Mountain, in Starwood and along McLain Flats, and up the Castle Creek and Maroon Creek valleys.",
    },
    {
      question: "How long is the drive from Aspen to Basalt and Carbondale?",
      answer:
        "Basalt is about 18 miles and 25 to 30 minutes from downtown Aspen, and Carbondale is about 30 miles and 40 to 45 minutes. Both are on Highway 82, which is slower toward Aspen on weekday mornings and away from Aspen in the late afternoon.",
    },
    {
      question: "How long does it take to get from Aspen to Snowmass Village?",
      answer:
        "About 15 to 20 minutes, a drive of roughly 8 to 10 miles depending on where in the village you are going. Allow more time in snow and at the start and end of the ski day.",
    },
    {
      question: "Do you pick up at homes on Red Mountain and in Starwood?",
      answer:
        "Yes. Red Mountain is 3 to 10 minutes from downtown Aspen depending on how high the house sits, and Starwood is about 5 miles and 10 to 15 minutes away. Starwood is gated, so include the address and gate arrangements when you book.",
    },
    {
      question: "Can you take us to dinner in Woody Creek or Basalt and bring us back?",
      answer:
        "Yes. Book the car by the hour and your chauffeur waits while you eat, or book a transfer each way if you know your times. Woody Creek is 12 to 20 minutes from downtown Aspen and Basalt is 25 to 30 minutes.",
    },
    {
      question: "Do you drive between Glenwood Springs and Aspen?",
      answer:
        "Yes, in both directions. Glenwood Springs is about 41 miles from Aspen, a drive of 50 to 60 minutes on Highway 82, and we pick up at hotels, the hot springs and the Amtrak station.",
    },
    {
      question: "Which vehicles can I book for rides in the valley?",
      answer:
        "Three: the Cadillac Escalade, which seats up to five with luggage and ski gear; the Mercedes Executive Sprinter, which seats up to 13; and the Rolls-Royce Cullinan, which seats three with standard luggage and does not carry ski equipment.",
    },
    {
      question: "How do I get a price for a ride in the Roaring Fork Valley?",
      answer:
        "Use the booking form on this page for an instant quote. Enter the pickup, the destination, the date and your party size; the quote is all-inclusive and confirmed when you book. You can also call or text (970) 452-6636, 24 hours a day.",
    },
  ],
  relatedServices: [
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
    { label: "Glenwood Springs to Aspen", href: "/glenwood-springs-to-aspen-car-service" },
    { label: "Private Ski Transfers", href: "/private-ski-transfers" },
    { label: "Multi-Day Chauffeur", href: "/multi-day-chauffeur" },
    { label: "Getting Around Aspen", href: "/guides/getting-around-aspen" },
  ],
};

export default data;
