import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoVariant = "blue" | "black" | "transparent" | "white";
type LogoSize = "sm" | "md" | "lg" | "xl";

type LogoProps = {
  variant?: LogoVariant;
  size?: LogoSize;
  /** Overrides the `size` preset when the layout needs exact intrinsic dimensions. */
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

const LOGO_MAP: Record<LogoVariant, string> = {
  blue: "/logo/PB_Logotipo.png",
  black: "/logo/PB_Logo_BL.png",
  transparent: "/logo/Logo_alternativo.png",
  white: "/logo/PB_Logo_transparent_white.png",
};

const SIZE_MAP: Record<LogoSize, { width: number; height: number }> = {
  sm: { width: 100, height: 100 },
  md: { width: 140, height: 140 },
  lg: { width: 180, height: 180 },
  xl: { width: 240, height: 240 },
};

const ALT_TEXT = "Persianas Bayres — Servicios para el hogar en Alicante";

export default function Logo({
  variant = "blue",
  size = "md",
  width,
  height,
  priority = false,
  className,
}: LogoProps) {
  const preset = SIZE_MAP[size];

  return (
    <Image
      src={LOGO_MAP[variant]}
      alt={ALT_TEXT}
      width={width ?? preset.width}
      height={height ?? preset.height}
      priority={priority}
      className={cn(className)}
    />
  );
}

// The logo files are 504x504 export canvases: the horizontal wordmark sits in
// a centred band and every edge carries an opaque white frame left over from
// the export. Painting one straight onto a coloured bar shows that frame as a
// white box, so the lockup is clipped to the wordmark's measured bounds.
const CANVAS = 504;

const LOCKUP_BOX: Partial<
  Record<LogoVariant, { x: number; y: number; width: number; height: number }>
> = {
  transparent: { x: 18, y: 199, width: 459, height: 119 },
  white: { x: 74, y: 212, width: 349, height: 90 },
};

type LogoLockupProps = {
  variant?: Extract<LogoVariant, "transparent" | "white">;
  /** Rendered height of the wordmark itself, in px. */
  height: number;
  priority?: boolean;
  /** Applied to the image — filters such as `brightness-0 invert` belong here. */
  className?: string;
  /** Applied to the clipping box, e.g. `sm:[--logo-h:52px]` to resize per breakpoint. */
  wrapperClassName?: string;
};

/**
 * Horizontal wordmark cropped out of the square source canvas.
 *
 * Every dimension derives from `--logo-h`, so a caller can resize the whole
 * lockup responsively with a single arbitrary property, e.g.
 * `wrapperClassName="[--logo-h:40px] sm:[--logo-h:52px]"`.
 */
export function LogoLockup({
  variant = "transparent",
  height,
  priority = false,
  className,
  wrapperClassName,
}: LogoLockupProps) {
  const box = LOCKUP_BOX[variant]!;
  const h = `var(--logo-h, ${height}px)`;
  const scaled = (value: number) => `calc(${h} * ${value / box.height})`;

  return (
    <span
      className={cn("relative block overflow-hidden", wrapperClassName)}
      style={{ width: scaled(box.width), height: h }}
    >
      <Image
        src={LOGO_MAP[variant]}
        alt={ALT_TEXT}
        width={CANVAS}
        height={CANVAS}
        priority={priority}
        className={cn("absolute max-w-none", className)}
        style={{
          width: scaled(CANVAS),
          height: scaled(CANVAS),
          left: scaled(-box.x),
          top: scaled(-box.y),
        }}
      />
    </span>
  );
}
