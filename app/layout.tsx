import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DOMAIN } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const DESCRIPTION =
  "Reparación, instalación y motorización de persianas y mosquiteras en Alicante. Empresa familiar con más de 20 años y 177 reseñas ⭐";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    template: "%s | Persianas Bayres",
    default: "Persianas Bayres — Servicios para el hogar en Alicante",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Persianas Bayres — Servicios para el hogar en Alicante",
    description: DESCRIPTION,
    url: DOMAIN,
    siteName: "Persianas Bayres",
    images: [
      {
        url: "/logo/logo-persianas-bayres-color.svg",
        width: 480,
        height: 130,
        alt: "Persianas Bayres",
      },
    ],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

// lang is set to the default locale here; app/[locale]/layout.tsx owns
// the actual per-locale content and metadata.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
