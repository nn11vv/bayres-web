import type { ServiceContent } from "@/lib/types";

export const services: ServiceContent[] = [
  {
    slug: "persianas",
    icon: "🪟",
    category: "core",
    title: "Persianas",
    shortDescription:
      "Reparación, instalación y motorización de persianas para el hogar.",
    longDescription:
      "Reparamos, instalamos y motorizamos persianas de PVC y aluminio para viviendas particulares. Ya sea una cinta rota, un motor que falla o una persiana nueva, tenemos la experiencia de 20 años haciéndolo.",
    features: [
      "Reparación de cintas, correas y ejes",
      "Instalación de persianas nuevas",
      "Motorización de persianas existentes",
      "PVC y aluminio, todos los tamaños",
    ],
  },
  {
    slug: "mosquiteras",
    icon: "🦟",
    category: "core",
    title: "Mosquiteras",
    shortDescription: "Instalación de mosquiteras a medida para ventanas y puertas.",
    longDescription:
      "Fabricamos e instalamos mosquiteras hechas a medida. Plisadas, enrollables o fijas: te ayudamos a elegir la que mejor se adapta a tu ventana y a tu presupuesto.",
    features: [
      "Mosquiteras plisadas",
      "Mosquiteras enrollables",
      "Mosquiteras fijas a medida",
      "Instalación rápida en zonas core",
    ],
  },
  {
    slug: "aire-acondicionado",
    icon: "❄️",
    category: "secondary",
    title: "Aire Acondicionado",
    shortDescription: "Instalación de sistemas de aire acondicionado para el hogar.",
    longDescription:
      "Instalamos equipos de aire acondicionado tipo split, ducted y cassette. Nos encargamos del montaje completo. Si necesitas mantenimiento posterior, te recomendamos un servicio técnico especializado.",
    features: [
      "Instalación de splits",
      "Sistemas ducted (por conductos)",
      "Sistemas cassette (empotrados)",
      "Asesoramiento previo sin compromiso",
    ],
  },
  {
    slug: "electricidad",
    icon: "⚡",
    category: "secondary",
    title: "Electricidad doméstica",
    shortDescription: "Pequeños trabajos eléctricos en el hogar.",
    longDescription:
      "Nos encargamos de instalaciones eléctricas domésticas pequeñas: cambio de luces, instalación de ventiladores de techo, vitrocerámicas, enchufes, arreglos menores. Para obras grandes recomendamos electricistas especializados.",
    features: [
      "Instalación de luces y lámparas",
      "Ventiladores de techo",
      "Vitrocerámicas y hornos",
      "Enchufes y pequeños arreglos",
    ],
  },
];
