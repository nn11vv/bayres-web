import type { BusinessInfo, Location, Service } from "./types";

export const TELEFONO_ES = "+34 695 266 981";
export const TELEFONO_EN = "+34 663 208 814";

export const WHATSAPP_ES = "https://wa.me/34695266981";
export const WHATSAPP_EN = "https://wa.me/34663208814";

export const DOMAIN = "https://persianasbayres.com";

export const LOCATIONS: Location[] = [
  {
    slug: "playa-san-juan",
    priority: 1,
    extended: false,
    coordinates: { lat: 38.3653, lng: -0.4093 },
  },
  {
    slug: "el-campello",
    priority: 2,
    extended: false,
    coordinates: { lat: 38.4272, lng: -0.3908 },
  },
  {
    slug: "mutxamel",
    priority: 3,
    extended: false,
    coordinates: { lat: 38.4089, lng: -0.4744 },
  },
  {
    slug: "alicante",
    priority: 4,
    extended: false,
    coordinates: { lat: 38.3452, lng: -0.481 },
  },
  {
    slug: "bussot",
    priority: 5,
    extended: false,
    coordinates: { lat: 38.4344, lng: -0.4394 },
  },
  {
    slug: "benidorm",
    priority: 6,
    extended: false,
    coordinates: { lat: 38.5411, lng: -0.1225 },
  },
  {
    slug: "javea",
    priority: 7,
    extended: true,
    coordinates: { lat: 38.7897, lng: 0.1611 },
  },
  {
    slug: "altea",
    priority: 8,
    extended: true,
    coordinates: { lat: 38.5989, lng: -0.0517 },
  },
  {
    slug: "villajoyosa",
    priority: 9,
    extended: true,
    coordinates: { lat: 38.5077, lng: -0.2337 },
  },
];

export const SERVICES: Service[] = [
  { slug: "persianas", category: "core", available: true },
  { slug: "mosquiteras", category: "core", available: true },
  { slug: "aire-acondicionado", category: "secondary", available: true },
  { slug: "electricidad", category: "secondary", available: true },
];

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
  foundedYear: 2004,
  team: ["Julián", "Juan", "Valentín"],
  hours: {
    weekdays: "09:00-14:00, 16:00-19:00",
    saturday: "09:00-13:00",
    sunday: "Cerrado",
  },
  social: {},
  reviews: {
    count: 177,
    rating: 5,
    source: "Google",
  },
};
