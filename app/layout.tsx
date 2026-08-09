import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const DESCRIPTION =
  "Empresa familiar en Alicante con más de 20 años. Reparación, instalación y motorización de persianas y mosquiteras. +200 reseñas ⭐. English spoken.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    template: "%s | Persianas Bayres",
    default:
      "Persianas Bayres — Reparación e instalación de persianas y mosquiteras en Alicante",
  },
  description: DESCRIPTION,
  keywords: [
    "persianista alicante",
    "reparación persianas alicante",
    "mosquiteras alicante",
    "motorización persianas",
    "blind repair alicante",
    "blinds costa blanca",
    "english speaking",
    "fly screens alicante",
    "playa san juan",
    "el campello",
    "mutxamel",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE.domain,
    languages: {
      "es-ES": `${SITE.domain}/es`,
      "en-GB": `${SITE.domain}/en`,
      "x-default": `${SITE.domain}/es`,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_GB",
    url: SITE.domain,
    siteName: SITE.name,
    title: "Persianas Bayres — Servicios para el hogar en Alicante",
    description: DESCRIPTION,
    images: [
      {
        url: "/og-images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Persianas Bayres — Servicios para el hogar en Alicante",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Persianas Bayres — Alicante",
    description:
      "Reparación e instalación de persianas y mosquiteras. +200 reseñas ⭐. English spoken.",
    images: ["/og-images/og-default.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

// lang is set to the default locale here; app/[locale]/layout.tsx corrects
// it client-side per locale (Next's root layout can't read the [locale]
// segment directly — hreflang <link> tags, not this attribute, are what
// search engines use to tell locales apart).
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
