export type SummitDriver = {
  slug: string;
  name: string;
  location: string;
  photo: string;
  bio: string;
};

const PLACEHOLDER_PHOTO = "/placeholder.svg";

export const summitDrivers: SummitDriver[] = [
  {
    slug: "andrew-siegel",
    name: "Andrew Siegel",
    location: "Dillon, Colorado",
    photo: "/andrewheadshot.jpg",
    bio: "Andrew Siegel is the Founder and CEO of Summit Black Car. A former Colorado State Trooper and current Reserve Colorado Ranger, Andrew is certified in dignitary protection and has experience supporting high-profile motorcades, executive travel, and VIP movements throughout Colorado. His background in law enforcement, mountain operations, and executive protection helped shape Summit Black Car's focus on safety, discretion, and luxury service.",
  },
  {
    slug: "austin-dvorak",
    name: "Austin Dvorak",
    location: "Dillon, Colorado",
    photo: "/austinheadshot.jpg",
    bio: "Austin Dvorak is the COO of Aspen Security and brings a background in Special Operations, executive protection, and high-risk operational planning. He has completed advanced training through multiple nationally recognized executive protection academies, with specialized experience in threat assessment, surveillance detection, emergency response, fleet logistics, and secure transportation. Austin helps oversee operational standards, training, and VIP service execution, bringing a disciplined, protection-focused mindset to every client movement.",
  },
  {
    slug: "logan-vanduzer",
    name: "Logan VanDuzer",
    location: "Silverthorne, Colorado",
    photo: PLACEHOLDER_PHOTO,
    bio: "Logan VanDuzer is a 15-plus-year law enforcement veteran with extensive experience in patrol operations, SWAT, emergency response, training, and tactical instruction. His background includes service as a Patrol Sergeant, SWAT Operator and Breacher, and Commander of a Municipal Emergency Response Team. Logan is also a Colorado P.O.S.T. instructor and has completed more than 1,450 hours of documented professional training, bringing a high level of safety, professionalism, and situational awareness to every client movement.",
  },
  {
    slug: "tony-maurina",
    name: "Tony Maurina",
    location: "Denver, Colorado",
    photo: PLACEHOLDER_PHOTO,
    bio: "Tony Maurina is a highly trained security and emergency response professional with more than 10 years of experience in tactical medicine, emergency services, and high-risk environments. His background includes work as a firefighter and paramedic, SWAT medic, Army Reserve medic, Search and Rescue medic, and Tactical Combat Casualty Care instructor. Tony brings advanced medical knowledge, calm decision-making, and protective operations experience to Summit Black Car clients.",
  },
  {
    slug: "esteban-ortega",
    name: "Esteban Ortega",
    location: "Keystone, Colorado",
    photo: PLACEHOLDER_PHOTO,
    bio: "Esteban Ortega is a Sergeant with the Breckenridge Police Department and has more than 15 years of law enforcement experience. His background includes patrol supervision, public safety operations, emergency response, community policing, and working in Colorado's mountain environment. Esteban brings professionalism, local knowledge, and a strong safety-focused mindset to every Summit Black Car client experience.",
  },
];

export const getSummitDriverBySlug = (slug: string): SummitDriver | undefined =>
  summitDrivers.find((d) => d.slug === slug);
