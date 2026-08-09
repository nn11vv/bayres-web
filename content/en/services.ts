import type { ServiceContent } from "@/lib/types";

export const services: ServiceContent[] = [
  {
    slug: "persianas",
    icon: "🪟",
    category: "core",
    title: "Blinds",
    shortDescription: "Repair, installation and motorisation of home blinds.",
    longDescription:
      "We repair, install and motorise PVC and aluminium blinds for private homes. A broken strap, a failing motor, or a brand new blind — we've been doing this for 20 years.",
    features: [
      "Repair of straps, cords and axles",
      "Installation of new blinds",
      "Motorisation of existing blinds",
      "PVC and aluminium, all sizes",
    ],
  },
  {
    slug: "mosquiteras",
    icon: "🦟",
    category: "core",
    title: "Fly Screens",
    shortDescription: "Made-to-measure fly screen installation for windows and doors.",
    longDescription:
      "We make and install fly screens to measure. Pleated, roller or fixed: we help you choose the one that best fits your window and your budget.",
    features: [
      "Pleated fly screens",
      "Roller fly screens",
      "Fixed, made-to-measure screens",
      "Fast installation in core areas",
    ],
  },
  {
    slug: "aire-acondicionado",
    icon: "❄️",
    category: "secondary",
    title: "Air Conditioning",
    shortDescription: "Installation of home air conditioning systems.",
    longDescription:
      "We install split, ducted and cassette air conditioning units, handling the full setup. For ongoing maintenance afterwards, we recommend a specialised technical service.",
    features: [
      "Split unit installation",
      "Ducted systems",
      "Cassette (recessed) systems",
      "No-obligation advice beforehand",
    ],
  },
  {
    slug: "electricidad",
    icon: "⚡",
    category: "secondary",
    title: "Home Electrics",
    shortDescription: "Small domestic electrical jobs.",
    longDescription:
      "We handle small domestic electrical jobs: light fittings, ceiling fans, hobs, sockets, minor repairs. For larger electrical works we recommend a specialised electrician.",
    features: [
      "Lights and light fittings",
      "Ceiling fans",
      "Hobs and ovens",
      "Sockets and minor repairs",
    ],
  },
];
