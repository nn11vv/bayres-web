import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoVariant = "color" | "white";
type LogoType = "full" | "icon";
type LogoSize = "sm" | "md" | "lg" | "xl";

type LogoProps = {
  variant?: LogoVariant;
  type?: LogoType;
  size?: LogoSize;
  priority?: boolean;
  className?: string;
};

const SIZES: Record<LogoType, Record<LogoSize, { width: number; height: number }>> = {
  full: {
    sm: { width: 120, height: 33 },
    md: { width: 180, height: 49 },
    lg: { width: 240, height: 65 },
    xl: { width: 320, height: 87 },
  },
  icon: {
    sm: { width: 24, height: 25 },
    md: { width: 36, height: 37 },
    lg: { width: 48, height: 49 },
    xl: { width: 64, height: 66 },
  },
};

const FILE_SUFFIX: Record<LogoType, Record<LogoVariant, string>> = {
  full: {
    color: "logo-persianas-bayres-color.svg",
    white: "logo-persianas-bayres-white.svg",
  },
  icon: {
    color: "logo-persianas-bayres-isotipo.svg",
    white: "logo-persianas-bayres-isotipo-white.svg",
  },
};

const ALT_TEXT = "Persianas Bayres — Servicios para el hogar en Alicante";

export default function Logo({
  variant = "color",
  type = "full",
  size = "md",
  priority = false,
  className,
}: LogoProps) {
  const { width, height } = SIZES[type][size];
  const src = `/logo/${FILE_SUFFIX[type][variant]}`;

  return (
    <Image
      src={src}
      alt={ALT_TEXT}
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto", className)}
    />
  );
}
