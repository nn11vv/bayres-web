"use client";

import { useEffect, useRef, useState } from "react";
import type { HomeContent } from "@/lib/types";

type Stat = HomeContent["stats"][number];

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, active: boolean, duration = 1200): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let raf: number;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setValue(target * easeOutCubic(progress));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function StatItem({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const value = useCountUp(stat.value, inView);

  return (
    <div ref={ref} className="text-center">
      <p className="bg-gradient-to-r from-soft to-bright bg-clip-text text-4xl font-medium tracking-[-0.02em] text-transparent sm:text-5xl">
        {value.toFixed(stat.decimals ?? 0)}
        {stat.suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-wide text-white/50 sm:text-sm">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsBandClient({ stats }: { stats: Stat[] }) {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} />
      ))}
    </div>
  );
}
