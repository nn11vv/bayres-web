import type { HomeContent } from "@/lib/types";

export const home: HomeContent = {
  hero: {
    badge: "+200 reseñas · 5 estrellas en Google",
    headline: "Persianas, mosquiteras y más.",
    headlineAccent: "Con la confianza de 3 generaciones.",
    subheadline:
      "Más de 30 años de experiencia en reparación, instalación y motorización de persianas. Trabajo confiable y seguro. Cuidamos tu hogar.",
    ctaWhatsApp: "Consulta por WhatsApp",
    ctaForm: "Pedir presupuesto",
    trustPills: [
      "Priorizamos urgencias",
      "Presupuesto sin compromiso",
      "English spoken",
      "Alicante y Costa Blanca",
    ],
  },
  stats: [
    { value: 200, suffix: "+", label: "Reseñas en Google" },
    { value: 5, decimals: 1, suffix: "", label: "Valoración media" },
    { value: 30, suffix: "+", label: "Años de oficio" },
    { value: 3, suffix: "", label: "Generaciones" },
  ],
  services: {
    label: "Lo que hacemos",
    title: "Servicios que ofrecemos",
    subtitle: "Todo lo que tu hogar necesita, con un solo equipo de confianza.",
    secondaryLabel: "También hacemos",
  },
  whyUs: {
    label: "Por qué elegirnos",
    title: "Lo que dicen +200 clientes",
    subtitle: "No es marketing. Son las palabras de quienes ya nos eligieron.",
    pillars: [
      {
        icon: "zap",
        title: "Respuesta rápida cuando urge",
        description:
          "Cuando algo no puede esperar, lo sabemos. Priorizamos las urgencias y hacemos lo posible por llegar en el día o al siguiente.",
      },
      {
        icon: "users",
        title: "3 generaciones de oficio",
        description:
          "Julián, Juan y Brisa. Empresa familiar donde cada trabajo lleva el apellido detrás. El trabajo bien hecho no es un eslogan, es una tradición.",
      },
      {
        icon: "wallet",
        title: "Presupuesto claro, sin sorpresas",
        description:
          "Antes de empezar, te explicamos qué hay que hacer y cuánto cuesta. Sin cobros ocultos. Sin extras al final.",
      },
      {
        icon: "languages",
        title: "Hablamos inglés",
        description:
          "Sabemos que muchos vecinos de la Costa Blanca no hablan español. Atendemos en inglés, mismo número: +34 695 266 981.",
      },
      {
        icon: "wrench",
        title: "Primero revisamos, después recomendamos",
        description:
          "No recomendamos cambiar lo que se puede reparar. Vemos el problema, te explicamos las opciones, y tú decides.",
      },
      {
        icon: "pin",
        title: "Alicante y Costa Blanca",
        description:
          "Alicante, San Vicente del Raspeig, San Juan de Alicante, Playa San Juan, El Campello, Mutxamel, Bussot, Villajoyosa, Benidorm y Coveta Fumá. Tu barrio, nuestra zona.",
      },
    ],
  },
  reviews: {
    label: "Reseñas reales",
    title: "+200 opiniones. 5 estrellas de promedio.",
    subtitle: "Testimonios reales de clientes reales en Google.",
    ctaViewAll: "Ver todas las reseñas en Google",
  },
  zones: {
    label: "Dónde trabajamos",
    title: "Cobertura en Alicante y Costa Blanca",
    subtitle: "Zonas donde vamos habitualmente. Fuera de estas, consulta sin compromiso.",
    extendedNote: "También atendemos, bajo consulta: Jávea y Altea.",
  },
  contact: {
    label: "Contacto",
    title: "Hablemos",
    subtitle: "Lo más rápido: WhatsApp. Te respondemos en minutos.",
    formTitle: "Cuéntanos qué necesitas",
    formSubtitle: "Te contactamos por WhatsApp para confirmar la visita.",
  },
};
