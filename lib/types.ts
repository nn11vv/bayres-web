export type Locale = "es" | "en";

export type ServiceCategory = "core" | "secondary";

export type ServiceSlug =
  | "persianas"
  | "mosquiteras"
  | "aire-acondicionado"
  | "electricidad";

export interface Service {
  slug: ServiceSlug;
  category: ServiceCategory;
  available: boolean;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export type ZoneSlug =
  | "playa-san-juan"
  | "el-campello"
  | "mutxamel"
  | "alicante"
  | "bussot"
  | "benidorm"
  | "javea"
  | "altea"
  | "villajoyosa";

export interface Location {
  slug: ZoneSlug;
  priority: number;
  extended: boolean;
  coordinates: Coordinates;
}

export interface HomeContent {
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaWhatsApp: string;
    ctaForm: string;
  };
  formPromise: string;
  pills: string[];
}

export interface ServiceContent {
  slug: ServiceSlug;
  title: string;
  description: string;
  icon: string;
  category: ServiceCategory;
}

export interface ReviewContent {
  name: string;
  flag: string;
  stars: number;
  text: string;
  source: string;
}

export interface ZoneContent {
  slug: ZoneSlug;
  name: string;
  description: string;
  coordinates: Coordinates;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BusinessInfo {
  name: string;
  legalName: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  coordinates: Coordinates;
  foundedYear: number;
  team: string[];
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    googleBusiness?: string;
  };
  reviews: {
    count: number;
    rating: number;
    source: string;
  };
}
