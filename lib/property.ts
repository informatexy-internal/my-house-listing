// Single source of truth for the listing. Edit this file, nothing else,
// to change what the site says. Replace the placeholder values below.

const monthlyRate = 2300; // the deposit follows it (1 month)

export const property = {
  title: "Modern 3BR Home with Open Kitchen near Downtown Woodstock",
  tagline: "Spacious unfurnished home close to downtown Woodstock. Rent direct from the owner, no platform fees.",
  city: "Canton",
  region: "GA",
  country: "US",
  addressHint: "Close to downtown Woodstock · ZIP 30115", // exact street address is shared only after an inquiry

  // Pricing
  currency: "USD",
  monthlyRate,
  securityDeposit: monthlyRate, // one month's rent
  applicationFee: 100, // application + background check, paid by each applicant, in addition to rent and deposit
  availableFrom: "2026-12-01", // YYYY-MM-DD
  minStayMonths: 12,
  utilitiesIncluded: false, // resident pays all utilities
  petsAllowed: true, // with a pet fee
  backgroundCheckRequired: true,

  // Contact: WhatsApp only. Digits only, with country code (US = 1...).
  brand: "SR Reality",
  whatsapp: "15714618282",

  // Facts
  bedrooms: 3,
  bathrooms: 2.5,
  sqft: 1776,

  description: [
    "Step into a bright, open living space with an open kitchen anchored by a quartz island, stainless steel appliances and white cabinetry. A spacious primary suite with a tray ceiling and walk-in closet leads the three bedrooms and two and a half baths. Unfurnished and ready for you to make your own. Close to downtown Woodstock, with its restaurants, shops and events.",
    "Utilities (electricity, water, gas, internet, trash) are the resident's responsibility.",
  ],

  // Shown to every applicant, same for everyone.
  requirements: [
    "12-month minimum lease",
    "Application & background check for all adult applicants ($100 fee)",
    "Recent paychecks (pay stubs) as proof of income",
    "Security deposit equal to one month's rent",
  ],

  // Seen in the photos; confirm each is still true on move-in day.
  amenities: [
    "Open-concept kitchen with quartz island",
    "Stainless steel appliances",
    "Spacious primary suite with tray ceiling",
    "Walk-in closet",
    "Two-car garage",
    "Laundry room",
    "Luxury vinyl plank flooring",
    "Ceiling fans & recessed lighting",
    "Smart-lock entry",
  ],

  // Photos: drop files into public/images/gallery (e.g. 01-living-room.jpg).
  // They are picked up automatically, see lib/photos.json and scripts/gen-photos.mjs.

  // Add real quotes from past guests; the section hides itself while empty.
  testimonials: [] as { quote: string; name: string; detail: string }[],

  // Straight-line distances (miles) from the neighborhood, via OpenStreetMap. Approximate: drive times differ.
  nearby: [
    { group: "Getting around", icon: "car", items: [
      { name: "I-575 on-ramp (exit 11)", mi: 0.5 },
      { name: "Downtown Woodstock (The Park at City Center)", mi: 3.6 },
      { name: "The Outlet Shoppes at Atlanta", mi: 2.6 },
    ] },
    { group: "Groceries & shopping", icon: "cart", items: [
      { name: "Kroger", mi: 0.9 },
      { name: "Publix", mi: 1.7 },
      { name: "Walmart Supercenter", mi: 2.2 },
      { name: "Sprouts Farmers Market", mi: 3.8 },
      { name: "ALDI", mi: 4.4 },
    ] },
    { group: "Parks & outdoors", icon: "tree", items: [
      { name: "Olde Rope Mill Park", mi: 1.7 },
      { name: "Barrett Park", mi: 2.1 },
      { name: "Blankets Creek trails", mi: 2.9 },
      { name: "J.B. Owens Park", mi: 3.0 },
      { name: "Eagle Watch Golf Club", mi: 3.3 },
    ] },
    { group: "Schools & library", icon: "school", items: [
      { name: "Holly Springs Elementary School", mi: 1.6 },
      { name: "Mill Creek Middle School", mi: 3.0 },
      { name: "River Ridge High School", mi: 3.0 },
      { name: "Woodstock Public Library", mi: 2.9 },
    ], note: "Distance only, not school zoning. Confirm zoning with the Cherokee County School District." },
  ],

  // Live third-party sources. No ratings or crime numbers are copied here: they change yearly and
  // differ by source, so visitors check the current data themselves.
  research: [
    { label: "School ratings (GreatSchools)", href: "https://www.greatschools.org/", icon: "school" },
    { label: "School data by ZIP 30115 (SchoolDigger)", href: "https://www.schooldigger.com/go/GA/zip/30115/search.aspx", icon: "school" },
    { label: "Crime data (FBI Crime Data Explorer)", href: "https://cde.ce.fbi.gov/", icon: "shield" },
    { label: "Local crime map (SpotCrime, Woodstock)", href: "https://spotcrime.com/GA/Woodstock", icon: "shield" },
    { label: "Holly Springs area crime grades (CrimeGrade)", href: "https://crimegrade.org/safest-places-in-holly-springs-ga/", icon: "shield" },
  ],

  faqs: [
    { q: "Are pets allowed?", a: "Yes, pets are welcome with a pet fee. Message me with your pet details and I will send the fee and policy." },
    { q: "Is a background check required?", a: "Yes. All adult applicants must apply and pass a background check before signing a lease. The application and background check fee is $100, in addition to rent and the security deposit." },
    { q: "What is the lease length?", a: "12 months minimum. Shorter terms are not available." },
    { q: "Are utilities included?", a: "No. The resident sets up and pays all utilities: electricity, water, gas, internet and trash." },
    { q: "How does renting work?", a: "Message me on WhatsApp, then each adult applicant submits the application ($100 fee), recent pay stubs and passes a background check. Once approved, we sign the lease and you pay the security deposit directly to me." },
  ],
};

import photosJson from "./photos.json";
export const photos: { src: string; alt: string }[] = photosJson;

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  adsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  adsConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || "",
};

export const money = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: property.currency, maximumFractionDigits: 0 }).format(n);

// Static export does not rewrite plain <img> paths, so prefix manually.
export const asset = (p: string) => `${site.basePath}${p}`;

// Every "contact" button opens WhatsApp with a ready-to-send message.
export const whatsappLink = (text = "Hi, I'm interested in the 3 bed / 2.5 bath home in Canton. Is it still available for Dec 1?") =>
  `https://wa.me/${property.whatsapp}?text=${encodeURIComponent(text)}`;

export const availableLabel = new Date(`${property.availableFrom}T00:00:00Z`).toLocaleDateString("en-US", {
  month: "short", day: "numeric", year: "numeric", timeZone: "UTC",
});
