"use client";

import { Languages, MapPin, Users, Wallet, Wrench, Zap } from "lucide-react";
import { useSpotlightCard } from "@/lib/useSpotlightCard";
import type { HomeContent } from "@/lib/types";

const ICONS: Record<string, typeof Zap> = {
  zap: Zap,
  users: Users,
  wallet: Wallet,
  languages: Languages,
  wrench: Wrench,
  pin: MapPin,
};

export default function PillarCard({
  pillar,
  index,
}: {
  pillar: HomeContent["whyUs"]["pillars"][number];
  index: number;
}) {
  const { wrapperRef, cardRef, handleMouseMove, wrapperClassName, wrapperStyle } =
    useSpotlightCard<HTMLDivElement>(index);
  const Icon = ICONS[pillar.icon];

  return (
    <div ref={wrapperRef} className={wrapperClassName} style={wrapperStyle}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_0_40px_-8px_rgba(20,80,245,0.35)]"
      >
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
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
            {Icon && <Icon className="h-5 w-5 text-primary-soft" aria-hidden />}
          </span>
          <h3 className="mt-4 text-lg font-medium text-white">{pillar.title}</h3>
          <p className="mt-2 text-sm text-white/70">{pillar.description}</p>
        </div>
      </div>
    </div>
  );
}
