import { SITE } from "@/lib/constants";
import type { Locale } from "@/lib/types";

type Props = {
  locale: Locale;
  areaServed?: string[];
};

const DEFAULT_AREA = [
  "Alicante",
  "Playa San Juan",
  "El Campello",
  "Mutxamel",
  "Bussot",
  "Benidorm",
];

export default function SchemaLocalBusiness({ locale, areaServed }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.domain}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    description:
      locale === "es"
        ? "Empresa familiar en Alicante especializada en reparación e instalación de persianas y mosquiteras. Más de 30 años de oficio desde Buenos Aires, en Alicante desde 2023."
        : "Family-run business in Alicante specialising in blind and fly screen repair and installation. Over 30 years of craft from Buenos Aires, in Alicante since 2023.",
    url: `${SITE.domain}/${locale}`,
    telephone: locale === "es" ? SITE.phones.es : SITE.phones.en,
    email: SITE.email,
    priceRange: "€€",
    image: `${SITE.domain}/og-images/og-default.png`,
    logo: `${SITE.domain}/logo/Logo_alternativo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.location.lat,
      longitude: SITE.location.lng,
    },
    areaServed: (areaServed ?? DEFAULT_AREA).map((name) => ({
      "@type": "City",
      name,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.reviews.average,
      reviewCount: SITE.reviews.count,
      bestRating: 5,
      worstRating: 1,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [SITE.social.google],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
