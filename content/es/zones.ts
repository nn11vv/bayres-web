import { LOCATIONS } from "@/lib/constants";
import type { ZoneContent } from "@/lib/types";

export const zones: ZoneContent[] = LOCATIONS.map((location) => ({
  slug: location.slug,
  name: "",
  description: "",
  coordinates: location.coordinates,
}));
