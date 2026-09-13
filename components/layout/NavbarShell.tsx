"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function NavbarShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/[0.06] backdrop-blur-xl transition-all duration-300",
        scrolled
          ? "bg-background/90 py-2"
          : "bg-gradient-to-b from-background to-transparent py-3",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {children}
      </div>
    </header>
  );
}
