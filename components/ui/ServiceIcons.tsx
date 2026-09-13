import { useId, type JSX } from "react";
import type { ServiceSlug } from "@/lib/types";

type IconProps = { className?: string; animate: boolean };

// Returns the animation classes only when `active` — used to fully omit
// the infinite loop (and its hover speedup) under prefers-reduced-motion,
// rather than just pausing it.
function animateClass(active: boolean, classes: string): string | undefined {
  return active ? classes : undefined;
}

function PersianasIcon({ className, animate }: IconProps) {
  const slats = [0, 1, 2, 3, 4];

  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <rect x="10" y="10" width="36" height="6" rx="2" fill="#0F12D2" />
      {slats.map((i) => (
        <rect
          key={i}
          x="10"
          y={19 + i * 6}
          width="36"
          height="4"
          rx="1.5"
          fill="#1450F5"
          className={animateClass(
            animate,
            "icon-anim-slat transition-[transform,opacity] duration-[650ms] ease-out",
          )}
          style={{ animationDelay: `${i * 140}ms` }}
        />
      ))}

      {/* Lateral gear — stands in for the blind's lift mechanism, spins in
          sync with the slats dropping. Kept as its own <g> so it can be
          swapped for a pulley later without touching the slats above. */}
      <g
        className={animateClass(animate, "icon-anim-gear transition-transform duration-[650ms] ease-out")}
        style={{ transformOrigin: "50px 14px" }}
      >
        <circle cx="50" cy="14" r="4" fill="none" stroke="#5F88E7" strokeWidth="1.5" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <line
            key={angle}
            x1="50"
            y1="8.5"
            x2="50"
            y2="10.5"
            stroke="#5F88E7"
            strokeWidth="1.5"
            strokeLinecap="round"
            transform={`rotate(${angle} 50 14)`}
          />
        ))}
      </g>
    </svg>
  );
}

function MosquiterasIcon({ className, animate }: IconProps) {
  const cols = [16, 22, 28, 34, 40];
  const rows = [12, 18, 24, 30, 36, 42];

  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <rect x="10" y="8" width="36" height="40" rx="3" fill="none" stroke="#0F12D2" strokeWidth="2" />
      {cols.map((x) => (
        <line key={`c-${x}`} x1={x} y1="10" x2={x} y2="46" stroke="#0F12D2" strokeWidth="0.75" opacity="0.5" />
      ))}
      {rows.map((y) => (
        <line key={`r-${y}`} x1="12" y1={y} x2="44" y2={y} stroke="#0F12D2" strokeWidth="0.75" opacity="0.5" />
      ))}

      {/* Impact flash — an expanding ring right where the mosquito hits
          the mesh. Naturally invisible once settled (its own 100% frame
          is opacity 0), so no reduced-motion special-casing needed. */}
      <circle
        cx="16"
        cy="30"
        r="3"
        fill="none"
        stroke="#5F88E7"
        strokeWidth="1.2"
        opacity="0"
        style={{ transformOrigin: "16px 30px" }}
        className={animateClass(animate, "icon-anim-mosquito-flash")}
      />

      {/* Mosquito — flies in from outside the mesh and hits it once, then
          stays stunned in place. Under reduced motion it's just shown
          already settled at the mesh, not mid-flight outside it. */}
      <g
        className={animateClass(
          animate,
          "icon-anim-mosquito-approach transition-[transform,opacity] duration-[500ms] ease-out",
        )}
        style={
          animate
            ? { transform: "translateX(-14px)", opacity: 0.4 }
            : { transform: "translateX(-1px)", opacity: 0.85 }
        }
      >
        <ellipse cx="16" cy="30" rx="3.2" ry="1.6" fill="#1450F5" />
        <line x1="13" y1="29" x2="9" y2="27" stroke="#1450F5" strokeWidth="1" />
        <g
          className={animateClass(animate, "icon-anim-mosquito-wing")}
          style={{ transformOrigin: "16px 28px" }}
        >
          <ellipse cx="16" cy="27" rx="2.4" ry="1.1" fill="#5F88E7" opacity="0.8" />
        </g>
      </g>
    </svg>
  );
}

function AcIcon({ className, animate }: IconProps) {
  const id = useId();

  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <rect x="8" y="14" width="40" height="14" rx="3" fill="#0F12D2" />
      <line x1="14" y1="21" x2="20" y2="21" stroke="#0B0F1A" strokeWidth="1.5" opacity="0.4" />
      <line x1="24" y1="21" x2="30" y2="21" stroke="#0B0F1A" strokeWidth="1.5" opacity="0.4" />
      <line x1="34" y1="21" x2="40" y2="21" stroke="#0B0F1A" strokeWidth="1.5" opacity="0.4" />

      {/* Power LED — dim at rest so hover reads as "turning on"; under
          reduced motion it just shows lit (the settled end state), never
          the idle/off look. */}
      <circle
        cx="43"
        cy="21"
        r="1.6"
        fill="#5F88E7"
        opacity={animate ? 0 : 0.7}
        className={animateClass(animate, "icon-anim-ac-led transition-opacity duration-[650ms] ease-out")}
      />

      {/* Air curls — dim/idle at rest, puff outward one after another once
          the unit "turns on". Each keeps its curved (non-straight) path.
          Under reduced motion they're just shown fully visible, static. */}
      {[0, 1, 2].map((i) => (
        <path
          key={`${id}-wave-${i}`}
          d={`M14 ${32 + i * 5} q6 -4 12 0 q6 4 12 0 q6 -4 12 0`}
          fill="none"
          stroke="#1450F5"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={animate ? 0.25 : 1}
          className={animateClass(
            animate,
            "icon-anim-ac-air transition-[transform,opacity] duration-[650ms] ease-out",
          )}
          style={{ animationDelay: `${150 + i * 90}ms` }}
        />
      ))}

      {/* Cold indicator — pulses once the air starts flowing. Under
          reduced motion it's shown at full size, not the idle/shrunk look. */}
      <g
        className={animateClass(
          animate,
          "icon-anim-ac-snow transition-[transform,opacity] duration-[650ms] ease-out",
        )}
        style={
          animate
            ? { transformOrigin: "42px 12px", transform: "scale(0.75)", opacity: 0.25 }
            : { transformOrigin: "42px 12px", transform: "scale(1)", opacity: 1 }
        }
      >
        {[0, 60, 120].map((angle) => (
          <line
            key={angle}
            x1="42"
            y1="8"
            x2="42"
            y2="16"
            stroke="#5F88E7"
            strokeWidth="1.4"
            strokeLinecap="round"
            transform={`rotate(${angle} 42 12)`}
          />
        ))}
      </g>
    </svg>
  );
}

function ElectricidadIcon({ className, animate }: IconProps) {
  const id = useId();

  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <defs>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>

      {/* Wire feeding the bolt — always faintly present; the traveling
          pulse is what animates, not the wire itself. */}
      <line x1="6" y1="50" x2="20" y2="34" stroke="#5F88E7" strokeWidth="1.2" opacity="0.3" />
      <circle
        cx="6"
        cy="50"
        r="1.4"
        fill="#5F88E7"
        opacity="0"
        className={animateClass(animate, "icon-anim-wire-pulse")}
      />

      {/* Glow — dim/off at rest, flashes once the current arrives and
          settles lit. Under reduced motion it's shown already lit. */}
      <path
        d="M30 8 L18 30 H26 L22 48 L40 24 H30 L34 8 Z"
        fill="#1450F5"
        filter={`url(#${id}-glow)`}
        className={animateClass(
          animate,
          "icon-anim-bolt transition-[transform,opacity] duration-[500ms] ease-out",
        )}
        style={
          animate
            ? { transformOrigin: "29px 28px", transform: "scale(0.92)", opacity: 0.25 }
            : { transformOrigin: "29px 28px", transform: "scale(1)", opacity: 0.6 }
        }
      />
      <path d="M30 8 L18 30 H26 L22 48 L40 24 H30 L34 8 Z" fill="#1450F5" />

      {/* Single spark accent synced with the flash — one pop, not a
          continuous shower like before. */}
      <circle
        cx="40"
        cy="20"
        r="1.5"
        fill="#5F88E7"
        opacity="0"
        style={{ transformOrigin: "40px 20px" }}
        className={animateClass(animate, "icon-anim-spark")}
      />
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
  animate = true,
}: {
  slug: ServiceSlug;
  className?: string;
  /** Set false (e.g. from useReducedMotion) to render a static frame. */
  animate?: boolean;
}) {
  const Icon = ICONS[slug];
  return <Icon className={className} animate={animate} />;
}
