import { LOCATIONS } from "@/lib/constants";
import type { ZoneContent } from "@/lib/types";

const COPY: Record<string, { name: string; description: string }> = {
  "san-vicente-del-raspeig": {
    // TODO: contenido genérico — reemplazar con detalle local real antes de publicar.
    name: "San Vicente del Raspeig",
    description: "Servicio habitual, muy cerca de nuestra base en Mutxamel.",
  },
  "san-juan-de-alicante": {
    // TODO: contenido genérico — reemplazar con detalle local real antes de publicar.
    name: "San Juan de Alicante",
    description: "Servicio habitual en el municipio, junto a Playa San Juan.",
  },
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
    description: "Aquí tenemos nuestra base desde 2023.",
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
  "coveta-fuma": {
    // TODO: contenido genérico — reemplazar con detalle local real antes de publicar.
    name: "Coveta Fumá",
    description: "Servicio habitual en la zona.",
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
    description: "Municipio pesquero con casco histórico. Servicio habitual.",
  },
};

export const zones: ZoneContent[] = LOCATIONS.map((location) => ({
  slug: location.slug,
  name: COPY[location.slug].name,
  description: COPY[location.slug].description,
  coordinates: location.coordinates,
}));
