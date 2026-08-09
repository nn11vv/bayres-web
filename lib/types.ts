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
    headlineAccent: string;
    subheadline: string;
    ctaWhatsApp: string;
    ctaForm: string;
    trustPills: string[];
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    secondaryLabel: string;
  };
  whyUs: {
    label: string;
    title: string;
    subtitle: string;
    pillars: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  reviews: {
    label: string;
    title: string;
    subtitle: string;
    ctaViewAll: string;
  };
  zones: {
    label: string;
    title: string;
    subtitle: string;
    extendedNote: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    formTitle: string;
    formSubtitle: string;
  };
}

export interface ServiceContent {
  slug: ServiceSlug;
  icon: string;
  category: ServiceCategory;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
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

export interface NavContent {
  menu: NavItem[];
  footer: {
    privacyPolicy: string;
    terms: string;
  };
  social: {
    facebook: string;
    instagram: string;
  };
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
