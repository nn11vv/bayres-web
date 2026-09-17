import { LOCATIONS } from "@/lib/constants";
import type { ZoneContent } from "@/lib/types";

const COPY: Record<string, { name: string; description: string }> = {
  "san-vicente-del-raspeig": {
    // TODO: generic content — replace with real local detail before publishing.
    name: "San Vicente del Raspeig",
    description: "Regular service, just next to our Mutxamel base.",
  },
  "san-juan-de-alicante": {
    // TODO: generic content — replace with real local detail before publishing.
    name: "San Juan de Alicante",
    description: "Regular service in the municipality, next to Playa San Juan.",
  },
  "playa-san-juan": {
    name: "Playa San Juan",
    description: "Our busiest area, just minutes from Mutxamel.",
  },
  "el-campello": {
    name: "El Campello",
    description: "Blinds, fly screens and more for homes and apartments.",
  },
  mutxamel: {
    name: "Mutxamel",
    description: "Our home base since 2023.",
  },
  alicante: {
    name: "Alicante",
    description: "Coverage across the whole city and its neighbourhoods.",
  },
  bussot: {
    name: "Bussot",
    description: "Regular service in the village and surrounding area.",
  },
  benidorm: {
    name: "Benidorm",
    description: "We cover homes and communities in the area.",
  },
  "coveta-fuma": {
    // TODO: generic content — replace with real local detail before publishing.
    name: "Coveta Fumá",
    description: "Regular service in the area.",
  },
  javea: {
    name: "Jávea",
    description: "Extended area: ask about availability, no obligation.",
  },
  altea: {
    name: "Altea",
    description: "Extended area: ask about availability, no obligation.",
  },
  villajoyosa: {
    name: "Villajoyosa",
    description: "Fishing town with a historic old quarter. Regular service.",
  },
};

export const zones: ZoneContent[] = LOCATIONS.map((location) => ({
  slug: location.slug,
  name: COPY[location.slug].name,
  description: COPY[location.slug].description,
  coordinates: location.coordinates,
}));
