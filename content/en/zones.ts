import { LOCATIONS } from "@/lib/constants";
import type { ZoneContent } from "@/lib/types";

const COPY: Record<string, { name: string; description: string }> = {
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
    description: "Our home base, for over 20 years.",
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
    description: "Extended area: ask about availability, no obligation.",
  },
};

export const zones: ZoneContent[] = LOCATIONS.map((location) => ({
  slug: location.slug,
  name: COPY[location.slug].name,
  description: COPY[location.slug].description,
  coordinates: location.coordinates,
}));
