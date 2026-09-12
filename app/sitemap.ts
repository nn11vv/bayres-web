import type { MetadataRoute } from "next";
import { SITE, LOCATIONS, SERVICES, serviceSlugFor } from "@/lib/constants";
import { LOCALES } from "@/lib/i18n";

// Builds the alternates.languages block for a path that's identical across
// locales (e.g. /zonas, /contacto) — pass a function of locale -> path for
// routes whose path differs per locale (e.g. /servicios/{slug}).
function alternatesFor(pathFor: (locale: "es" | "en") => string) {
  return {
    languages: {
      "es-ES": `${SITE.domain}${pathFor("es")}`,
      "en-GB": `${SITE.domain}${pathFor("en")}`,
      "x-default": `${SITE.domain}${pathFor("es")}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const locale of LOCALES) {
    routes.push({
      url: `${SITE.domain}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: alternatesFor((l) => `/${l}`),
    });
  }

  for (const locale of LOCALES) {
    routes.push({
      url: `${SITE.domain}/${locale}/servicios`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: alternatesFor((l) => `/${l}/servicios`),
    });
    for (const service of SERVICES) {
      routes.push({
        url: `${SITE.domain}/${locale}/servicios/${service.slug[locale]}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: alternatesFor(
          (l) => `/${l}/servicios/${serviceSlugFor(service.id, l)}`,
        ),
      });
    }
  }

  for (const locale of LOCALES) {
    routes.push({
      url: `${SITE.domain}/${locale}/zonas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: alternatesFor((l) => `/${l}/zonas`),
    });
    for (const location of LOCATIONS) {
      routes.push({
        url: `${SITE.domain}/${locale}/zonas/${location.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: location.extended ? 0.6 : 0.85,
        alternates: alternatesFor((l) => `/${l}/zonas/${location.slug}`),
      });
    }
  }

  for (const locale of LOCALES) {
    routes.push(
      {
        url: `${SITE.domain}/${locale}/nosotros`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: alternatesFor((l) => `/${l}/nosotros`),
      },
      {
        url: `${SITE.domain}/${locale}/contacto`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: alternatesFor((l) => `/${l}/contacto`),
      },
      {
        url: `${SITE.domain}/${locale}/blog`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6,
        alternates: alternatesFor((l) => `/${l}/blog`),
      },
    );
  }

  return routes;
}
