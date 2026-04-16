import { Clock, Car, MapPin, Users, Shield, Snowflake } from "lucide-react";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "hourly-chauffeur",
  seo: {
    title: "Hourly Chauffeur Service Aspen | As-Directed Private Driver",
    description:
      "Dedicated SUV and private chauffeur by the hour in Aspen. Families, ski groups & VIPs — your driver, your schedule. Call (970) 452-6636.",
    keywords:
      "hourly car service Aspen, as-directed chauffeur Aspen, private driver Aspen by the hour, dedicated SUV Aspen, Aspen family car service, hourly luxury transportation Aspen",
    canonicalUrl: "/hourly-chauffeur",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Hourly Chauffeur",
    headline: "Your Own Private Driver, {{By the Hour}}",
    description:
      "No fixed routes. No shared rides. Just your chauffeur, your vehicle, and your schedule. Book a dedicated luxury SUV by the hour for families, ski groups, shopping trips, and multi-stop Aspen itineraries.",
    ctaLabel: "Book Now",
    ctaLink: "#booking",
    secondaryCta: { label: "Call (970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "The Smartest Way to {{Move Around Aspen}}",
    body: `<p>Aspen is a compact mountain town, but its destinations are spread across a sprawling valley that stretches from the base of Aspen Mountain to the village of Snowmass and everywhere in between. Ride-share services like Uber and Lyft are notoriously unreliable in mountain towns \u2014 drivers are scarce, wait times are unpredictable, and surge pricing during events like the Food & Wine Classic or X Games can triple the fare for a five-minute ride. Parking in downtown Aspen is limited and expensive, and navigating icy winter roads in an unfamiliar rental car is stressful at best and dangerous at worst. A dedicated hourly chauffeur eliminates every one of these problems. Your SUV waits while you ski, dine, shop, and explore \u2014 warm, ready, and right where you left it.</p>
<p>For families visiting Aspen, the hourly chauffeur service is a game changer. Traveling with children means car seats, ski gear, snacks, extra layers, and the unpredictable schedule that comes with nap times and tired legs. Having the same driver and vehicle all day eliminates the stress of rebooking rides, reinstalling car seats, and explaining your itinerary to a new driver every time. Your chauffeur holds boots and jackets in the vehicle, keeps the cabin warm while you're on the slopes, and is standing by at the base of the mountain the moment your family is ready to leave. For full-day ski coverage with door-to-door service at every resort, pair this with our <a href="/black-car-service">black car service</a> for a seamless mountain experience.</p>
<p>The hourly service is available in every vehicle in our fleet. Choose the <a href="/cadillac-escalade">Cadillac Escalade</a> for groups of up to 5 passengers \u2014 the most popular option for families and small groups. The <a href="/executive-sprinter">Executive Sprinter</a> seats up to 13 and is ideal for larger families, multi-family trips, or groups who want to travel together. For special occasions \u2014 anniversaries, proposals, or simply making an impression \u2014 the <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> delivers an experience that elevates every moment of the day. <a href="/membership">VIP Members</a> receive discounted hourly rates and priority booking during peak season, ensuring your vehicle is guaranteed even when Aspen is at its busiest.</p>`,
  },
  features: [
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Your driver works on your schedule. No fixed routes, no timetables. Go where you want, when you want, for as long as you need.",
    },
    {
      icon: Users,
      title: "Family-Friendly",
      description:
        "Car seats available on request. Your driver holds gear, keeps the vehicle warm, and handles the logistics so you can focus on your family.",
    },
    {
      icon: MapPin,
      title: "Local Knowledge",
      description:
        "Our chauffeurs know every restaurant, trailhead, and back road in the valley. Ask for recommendations \u2014 they're better than any guidebook.",
    },
    {
      icon: Shield,
      title: "Same Driver All Day",
      description:
        "No random pickups. Your assigned chauffeur stays with you from start to finish. Build rapport, skip the introductions, and ride in comfort.",
    },
    {
      icon: Snowflake,
      title: "Ski Day Ready",
      description:
        "Your driver drops you at the lift, holds your apr\u00e8s-ski gear, and picks you up at the base. Switch mountains mid-day without missing a run.",
    },
    {
      icon: Car,
      title: "Premium Fleet",
      description:
        "Choose from Cadillac Escalade, Executive Sprinter, or Rolls Royce Cullinan. Every vehicle is detailed, climate-controlled, and stocked with water.",
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "Book Your Hours",
      description:
        "Call or book online with your preferred vehicle, date, and estimated hours. Minimum 2-hour booking.",
    },
    {
      step: 2,
      title: "Driver Assigned",
      description:
        "A professional chauffeur is assigned to you. Same driver for your entire booking \u2014 no hand-offs.",
    },
    {
      step: 3,
      title: "Ride All Day",
      description:
        "Your driver picks you up and goes wherever you need. Ski resorts, restaurants, shops, events \u2014 it's your schedule.",
    },
    {
      step: 4,
      title: "Flexible Overtime",
      description:
        "Need more time? Extend on the spot. No rebooking, no surge pricing. Just let your driver know.",
    },
  ],
  pricing: [
    {
      category: "Hourly Rates",
      note: "All rates include a professional chauffeur, fuel, and vehicle. 2-hour minimum. VIP Members receive discounted rates.",
      items: [
        {
          name: "Cadillac Escalade",
          detail: "Up to 5 passengers",
          price: "From $200/hr",
          features: [
            "4WD luxury SUV",
            "Room for ski gear and luggage",
            "Rear entertainment screens",
            "Wi-Fi and USB charging",
          ],
          featured: true,
        },
        {
          name: "Executive Sprinter",
          detail: "Up to 13 passengers",
          price: "From $300/hr",
          features: [
            "Conference-style seating",
            "Premium entertainment system",
            "Ideal for groups and families",
            "Maximum luggage capacity",
          ],
        },
        {
          name: "Rolls Royce Cullinan",
          detail: "Up to 3 passengers",
          price: "From $400/hr",
          features: [
            "Bespoke Mandarin interior",
            "Champagne cooler",
            "The ultimate luxury statement",
            "Perfect for special occasions",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is the minimum booking?",
      answer:
        "The minimum hourly booking is 2 hours. Most families and ski groups book 4-8 hour blocks for a full day of activities.",
    },
    {
      question: "Can I extend my booking on the spot?",
      answer:
        "Yes. If you need more time, simply tell your driver. Extensions are billed at the same hourly rate with no surge or rebooking fees.",
    },
    {
      question: "Do you provide car seats for children?",
      answer:
        "Yes, car seats and booster seats are available on request at no additional charge. Let us know your children's ages when booking.",
    },
    {
      question: "Is gratuity included?",
      answer:
        "Gratuity is not included in the hourly rate. Tips are appreciated and go directly to your chauffeur. Standard gratuity is 15-20%.",
    },
    {
      question: "What if I don't use all my booked hours?",
      answer:
        "You are billed for the hours booked, not hours used. We recommend estimating conservatively \u2014 extending is easy, but unused hours are non-refundable.",
    },
    {
      question: "Can my driver make recommendations?",
      answer:
        "Absolutely. Our chauffeurs are Aspen locals who know every restaurant, trail, ski run, and hidden gem in the valley. Just ask.",
    },
  ],
  relatedServices: [
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Event Transportation", href: "/special-event-transportation" },
    { label: "Airport Transfers", href: "/aspen-airport-transfer" },
    { label: "VIP Membership", href: "/membership" },
  ],
};

export default data;
