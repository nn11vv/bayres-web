"use client";

import Link from "next/link";
import ServiceIcon from "@/components/ui/ServiceIcons";
import { serviceSlugFor } from "@/lib/constants";
import { useSpotlightCard } from "@/lib/useSpotlightCard";
import type { Locale, ServiceContent } from "@/lib/types";

const EXPLORE_LABEL: Record<Locale, string> = {
  es: "Explorar servicio",
  en: "Explore service",
};

export default function ServiceCard({
  service,
  locale,
  index,
}: {
  service: ServiceContent;
  locale: Locale;
  index: number;
}) {
  const { wrapperRef, cardRef, handleMouseMove, wrapperClassName, wrapperStyle, reducedMotion } =
    useSpotlightCard<HTMLAnchorElement>(index);

  return (
    <div ref={wrapperRef} className={wrapperClassName} style={wrapperStyle}>
      <Link
        ref={cardRef}
        href={`/${locale}/servicios/${serviceSlugFor(service.slug, locale)}`}
        onMouseMove={handleMouseMove}
        className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_0_40px_-8px_rgba(20,80,245,0.35)]"
      >
        {/* Spotlight — clipped to the card's own rounded corners, kept off
            the outer element so the hover box-shadow above isn't clipped too. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(250px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(20,80,245,0.15), transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col">
          <ServiceIcon
            slug={service.slug}
            className="h-14 w-14"
            animate={!reducedMotion}
          />
          <h3 className="mt-4 font-heading text-xl text-white">{service.title}</h3>
          <p className="mt-2 text-sm text-white/70">{service.shortDescription}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-soft/60 transition-colors duration-200 group-hover:text-primary-soft">
            {EXPLORE_LABEL[locale]}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </div>
  );
}
