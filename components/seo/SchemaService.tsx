import { SITE } from "@/lib/constants";
import type { Locale } from "@/lib/types";

type Props = {
  locale: Locale;
  serviceName: string;
  description: string;
  slug: string;
};

export default function SchemaService({
  locale,
  serviceName,
  description,
  slug,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.domain}/${locale}/servicios/${slug}#service`,
    name: serviceName,
    description,
    serviceType: serviceName,
    url: `${SITE.domain}/${locale}/servicios/${slug}`,
    areaServed: {
      "@type": "State",
      name: "Alicante",
    },
    provider: {
      "@id": `${SITE.domain}/#business`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
