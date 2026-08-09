import { LOCATIONS } from "@/lib/constants";
import type { ZoneContent } from "@/lib/types";

const COPY: Record<string, { name: string; description: string }> = {
  "playa-san-juan": {
    name: "Playa San Juan",
    description: "Nuestra zona de mayor actividad, a minutos de Mutxamel.",
  },
  "el-campello": {
    name: "El Campello",
    description: "Persianas, mosquiteras y más para viviendas y apartamentos.",
  },
  mutxamel: {
    name: "Mutxamel",
    description: "Aquí tenemos nuestra base, desde hace más de 20 años.",
  },
  alicante: {
    name: "Alicante",
    description: "Cobertura en toda la ciudad y sus barrios.",
  },
  bussot: {
    name: "Bussot",
    description: "Servicio habitual en el pueblo y alrededores.",
  },
  benidorm: {
    name: "Benidorm",
    description: "Atendemos viviendas y comunidades de la zona.",
  },
  javea: {
    name: "Jávea",
    description: "Zona ampliada: consulta disponibilidad sin compromiso.",
  },
  altea: {
    name: "Altea",
    description: "Zona ampliada: consulta disponibilidad sin compromiso.",
  },
  villajoyosa: {
    name: "Villajoyosa",
    description: "Zona ampliada: consulta disponibilidad sin compromiso.",
  },
};

export const zones: ZoneContent[] = LOCATIONS.map((location) => ({
  slug: location.slug,
  name: COPY[location.slug].name,
  description: COPY[location.slug].description,
  coordinates: location.coordinates,
}));
