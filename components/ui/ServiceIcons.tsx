import { useId, type JSX } from "react";
import type { ServiceSlug } from "@/lib/types";

type IconProps = { className?: string };

function PersianasIcon({ className }: IconProps) {
  const slats = [0, 1, 2, 3, 4];

  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <rect x="10" y="10" width="36" height="6" rx="2" fill="#1A56C8" />
      {slats.map((i) => (
        <rect
          key={i}
          x="10"
          y={19 + i * 6}
          width="36"
          height="4"
          rx="1.5"
          fill="#3B9EFF"
          className="animate-[slat-sway_2.4s_ease-in-out_infinite]"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
    </svg>
  );
}

function MosquiterasIcon({ className }: IconProps) {
  const cols = [16, 22, 28, 34, 40];
  const rows = [12, 18, 24, 30, 36, 42];

  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <rect x="10" y="8" width="36" height="40" rx="3" fill="none" stroke="#1A56C8" strokeWidth="2" />
      {cols.map((x) => (
        <line key={`c-${x}`} x1={x} y1="10" x2={x} y2="46" stroke="#1A56C8" strokeWidth="0.75" opacity="0.5" />
      ))}
      {rows.map((y) => (
        <line key={`r-${y}`} x1="12" y1={y} x2="44" y2={y} stroke="#1A56C8" strokeWidth="0.75" opacity="0.5" />
      ))}

      <g className="animate-[mosquito-fly_3s_ease-in-out_infinite]">
        <ellipse cx="16" cy="30" rx="3.2" ry="1.6" fill="#3B9EFF" />
        <line x1="13" y1="29" x2="9" y2="27" stroke="#3B9EFF" strokeWidth="1" />
        <g className="animate-[wing-flutter_0.15s_linear_infinite]" style={{ transformOrigin: "16px 28px" }}>
          <ellipse cx="16" cy="27" rx="2.4" ry="1.1" fill="#60C5FF" opacity="0.8" />
        </g>
      </g>
    </svg>
  );
}

function AcIcon({ className }: IconProps) {
  const id = useId();

  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <rect x="8" y="14" width="40" height="14" rx="3" fill="#1A56C8" />
      <line x1="14" y1="21" x2="20" y2="21" stroke="#0B0F1A" strokeWidth="1.5" opacity="0.4" />
      <line x1="24" y1="21" x2="30" y2="21" stroke="#0B0F1A" strokeWidth="1.5" opacity="0.4" />
      <line x1="34" y1="21" x2="40" y2="21" stroke="#0B0F1A" strokeWidth="1.5" opacity="0.4" />

      {[0, 1, 2].map((i) => (
        <path
          key={`${id}-wave-${i}`}
          d={`M14 ${32 + i * 5} q6 -4 12 0 q6 4 12 0 q6 -4 12 0`}
          fill="none"
          stroke="#3B9EFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="animate-[cold-wave_2s_ease-in-out_infinite]"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}

      <g
        className="animate-[snow-spin_6s_linear_infinite]"
        style={{ transformOrigin: "42px 12px" }}
      >
        {[0, 60, 120].map((angle) => (
          <line
            key={angle}
            x1="42"
            y1="8"
            x2="42"
            y2="16"
            stroke="#60C5FF"
            strokeWidth="1.4"
            strokeLinecap="round"
            transform={`rotate(${angle} 42 12)`}
          />
        ))}
      </g>
    </svg>
  );
}

function ElectricidadIcon({ className }: IconProps) {
  const id = useId();

  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <defs>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>

      <path
        d="M30 8 L18 30 H26 L22 48 L40 24 H30 L34 8 Z"
        fill="#3B9EFF"
        opacity="0.5"
        filter={`url(#${id}-glow)`}
        className="animate-[bolt-glow_1.8s_ease-in-out_infinite]"
      />
      <path d="M30 8 L18 30 H26 L22 48 L40 24 H30 L34 8 Z" fill="#3B9EFF" />

      <circle cx="12" cy="18" r="1.6" fill="#60C5FF" className="animate-[spark-flicker_1.6s_ease-in-out_infinite]" style={{ animationDelay: "0.1s" }} />
      <circle cx="44" cy="34" r="1.6" fill="#60C5FF" className="animate-[spark-flicker_1.6s_ease-in-out_infinite]" style={{ animationDelay: "0.6s" }} />
      <circle cx="14" cy="40" r="1.3" fill="#60C5FF" className="animate-[spark-flicker_1.6s_ease-in-out_infinite]" style={{ animationDelay: "1s" }} />
    </svg>
  );
}

const ICONS: Record<ServiceSlug, (props: IconProps) => JSX.Element> = {
  persianas: PersianasIcon,
  mosquiteras: MosquiterasIcon,
  "aire-acondicionado": AcIcon,
  electricidad: ElectricidadIcon,
};

export default function ServiceIcon({
  slug,
  className,
}: {
  slug: ServiceSlug;
  className?: string;
}) {
  const Icon = ICONS[slug];
  return <Icon className={className} />;
}
