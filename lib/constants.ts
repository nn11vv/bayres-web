import type { BusinessInfo, Locale, Location, Service, ServiceSlug } from "./types";

// Single number for calls and WhatsApp, in both locales — there is no
// separate English line anymore.
export const TELEFONO_ES = "+34 695 266 981";
export const TELEFONO_EN = "+34 695 266 981";

export const WHATSAPP_ES = "https://wa.me/34695266981";
export const WHATSAPP_EN = "https://wa.me/34695266981";

export const DOMAIN = "https://persianasbayres.com";

// Order = Mutxamel-centric coverage order (sede en Mutxamel), also drives
// the home pills (components/home/Zones.tsx) and the "otras zonas
// cercanas" picks on each zone page (app/[locale]/zonas/[zona]/page.tsx).
// Coveta Fumá's position is provisional — placed last pending confirmation
// of where it fits geographically.
export const LOCATIONS: Location[] = [
  {
    slug: "alicante",
    priority: 1,
    extended: false,
    coordinates: { lat: 38.3452, lng: -0.481 },
  },
  {
    // TODO: coordinates are approximate — confirm before relying on them
    // for anything beyond the zone page's generic areaServed schema.
    slug: "san-vicente-del-raspeig",
    priority: 2,
    extended: false,
    coordinates: { lat: 38.3958, lng: -0.5262 },
  },
  {
    // TODO: coordinates are approximate — confirm before relying on them
    // for anything beyond the zone page's generic areaServed schema.
    slug: "san-juan-de-alicante",
    priority: 3,
    extended: false,
    coordinates: { lat: 38.3985, lng: -0.4453 },
  },
  {
    slug: "playa-san-juan",
    priority: 4,
    extended: false,
    coordinates: { lat: 38.3653, lng: -0.4093 },
  },
  {
    slug: "el-campello",
    priority: 5,
    extended: false,
    coordinates: { lat: 38.4272, lng: -0.3908 },
  },
  {
    slug: "mutxamel",
    priority: 6,
    extended: false,
    coordinates: { lat: 38.4089, lng: -0.4744 },
  },
  {
    slug: "bussot",
    priority: 7,
    extended: false,
    coordinates: { lat: 38.4344, lng: -0.4394 },
  },
  {
    slug: "villajoyosa",
    priority: 8,
    extended: false,
    coordinates: { lat: 38.5077, lng: -0.2337 },
  },
  {
    slug: "benidorm",
    priority: 9,
    extended: false,
    coordinates: { lat: 38.5411, lng: -0.1225 },
  },
  {
    // TODO: coordinates are approximate — confirm before relying on them
    // for anything beyond the zone page's generic areaServed schema.
    slug: "coveta-fuma",
    priority: 10,
    extended: false,
    coordinates: { lat: 38.413, lng: -0.3985 },
  },
  {
    slug: "javea",
    priority: 11,
    extended: true,
    coordinates: { lat: 38.7897, lng: 0.1611 },
  },
  {
    slug: "altea",
    priority: 12,
    extended: true,
    coordinates: { lat: 38.5989, lng: -0.0517 },
  },
];

// Service URL slugs are per-locale so /en/servicios/* can carry its own
// English paths (e.g. for Ads landing pages) independent of the Spanish
// ones. `id` stays the stable identifier used to look up content
// (content/{locale}/services.ts etc.) and never changes with locale.
export const SERVICES: Service[] = [
  {
    id: "persianas",
    slug: { es: "persianas", en: "blinds" },
    category: "core",
    available: true,
  },
  {
    id: "mosquiteras",
    slug: { es: "mosquiteras", en: "fly-screens" },
    category: "core",
    available: true,
  },
  {
    id: "aire-acondicionado",
    slug: { es: "aire-acondicionado", en: "air-conditioning" },
    category: "secondary",
    available: false,
  },
  {
    id: "electricidad",
    slug: { es: "electricidad", en: "home-electrics" },
    category: "secondary",
    available: false,
  },
];

// Whether a service can currently be booked — false for services pending
// certification/licensing to advertise under that trade. Drives the
// "coming soon" badge on home cards, the AppointmentForm selector, and the
// /api/citas server-side validator, all from this one flag.
export function isServiceAvailable(id: ServiceSlug): boolean {
  return SERVICES.find((entry) => entry.id === id)?.available ?? false;
}

// Resolves the URL slug for a service, in a given locale, from its
// stable content id (content/{locale}/services.ts `slug` field, which
// stays the Spanish id in both locales).
export function serviceSlugFor(id: ServiceSlug, locale: Locale): string {
  const service = SERVICES.find((entry) => entry.id === id);
  return service ? service.slug[locale] : id;
}

// Resolves a service definition from a locale-specific URL slug — the
// inverse lookup used by app/[locale]/servicios/[slug]/page.tsx.
export function serviceByLocaleSlug(
  locale: Locale,
  slug: string,
): Service | undefined {
  return SERVICES.find((entry) => entry.slug[locale] === slug);
}

export const SITE = {
  domain: DOMAIN,
  name: "Persianas Bayres",
  legalName: "Persianas Bayres",
  founder: "Julián",
  team: ["Julián", "Juan", "Brisa"],
  location: {
    city: "Mutxamel",
    region: "Alicante",
    country: "España",
    countryCode: "ES",
    lat: 38.4354894,
    lng: -0.4322725,
  },
  phones: {
    es: TELEFONO_ES,
    en: TELEFONO_EN,
  },
  whatsapp: {
    es: WHATSAPP_ES,
    en: WHATSAPP_EN,
  },
  email: "persianasbayres@gmail.com",
  social: {
    google: "https://www.google.com/maps/place/Persianas+Bayres",
  },
  reviews: {
    count: 200,
    average: 5.0,
    platform: "Google",
  },
} as const;

export const BUSINESS_INFO: BusinessInfo = {
  name: "Persianas Bayres",
  legalName: "Persianas Bayres",
  address: {
    street: "",
    city: "Mutxamel",
    province: "Alicante",
    postalCode: "03110",
    country: "ES",
  },
  coordinates: { lat: 38.4089, lng: -0.4744 },
  team: ["Julián", "Juan", "Brisa"],
  hours: {
    weekdays: "09:00-14:00, 16:00-19:00",
    saturday: "09:00-13:00",
    sunday: "Cerrado",
  },
  social: {},
  reviews: {
    count: 203,
    rating: 5,
    source: "Google",
  },
};
