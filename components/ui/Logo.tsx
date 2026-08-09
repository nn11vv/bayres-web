import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoVariant = "blue" | "black" | "transparent";
type LogoSize = "sm" | "md" | "lg" | "xl";

type LogoProps = {
  variant?: LogoVariant;
  size?: LogoSize;
  priority?: boolean;
  className?: string;
};

const LOGO_MAP: Record<LogoVariant, string> = {
  blue: "/logo/PB_Logotipo.png",
  black: "/logo/PB_Logo_BL.png",
  transparent: "/logo/Logo_alternativo.png",
};

const SIZE_MAP: Record<LogoSize, { width: number; height: number }> = {
  sm: { width: 120, height: 120 },
  md: { width: 160, height: 160 },
  lg: { width: 220, height: 220 },
  xl: { width: 300, height: 300 },
};

const ALT_TEXT = "Persianas Bayres — Servicios para el hogar en Alicante";

export default function Logo({
  variant = "blue",
  size = "md",
  priority = false,
  className,
}: LogoProps) {
  const { width, height } = SIZE_MAP[size];

  return (
    <Image
      src={LOGO_MAP[variant]}
      alt={ALT_TEXT}
      width={width}
      height={height}
      priority={priority}
      className={cn(className)}
    />
  );
}
