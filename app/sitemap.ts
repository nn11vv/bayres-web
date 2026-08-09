import type { MetadataRoute } from "next";
import { SITE, LOCATIONS, SERVICES } from "@/lib/constants";
import { LOCALES } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const locale of LOCALES) {
    routes.push({
      url: `${SITE.domain}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "es-ES": `${SITE.domain}/es`,
          "en-GB": `${SITE.domain}/en`,
        },
      },
    });
  }

  for (const locale of LOCALES) {
    routes.push({
      url: `${SITE.domain}/${locale}/servicios`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    });
    for (const service of SERVICES) {
      routes.push({
        url: `${SITE.domain}/${locale}/servicios/${service.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  for (const locale of LOCALES) {
    routes.push({
      url: `${SITE.domain}/${locale}/zonas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    });
    for (const location of LOCATIONS) {
      routes.push({
        url: `${SITE.domain}/${locale}/zonas/${location.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: location.extended ? 0.6 : 0.85,
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
      },
      {
        url: `${SITE.domain}/${locale}/contacto`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${SITE.domain}/${locale}/blog`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6,
      },
    );
  }

  return routes;
}
