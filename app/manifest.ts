import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Persianas Bayres",
    short_name: "Bayres",
    description:
      "Reparación e instalación de persianas y mosquiteras en Alicante",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0F1A",
    theme_color: "#0F12D2",
    icons: [
      {
        src: "/logo/Logo_alternativo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
