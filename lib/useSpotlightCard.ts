"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Shared state/behavior behind the spotlight-hover cards (ServiceCard,
 * WhyUs pillars): staggered scroll-reveal + cursor-tracked spotlight
 * position, both skipped under prefers-reduced-motion. Each caller keeps
 * its own JSX/markup — this only owns the tricky bits (refs, timing,
 * mouse tracking) so they aren't re-derived per card type.
 */
export function useSpotlightCard<CardEl extends HTMLElement>(index: number) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<CardEl>(null);
  const [revealed, setRevealed] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const showRevealed = reducedMotion || revealed;

  function handleMouseMove(event: MouseEvent<CardEl>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }

  const wrapperClassName = reducedMotion
    ? "opacity-100"
    : `transition-[opacity,transform] duration-500 ease-out ${
        showRevealed ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`;

  const wrapperStyle = reducedMotion
    ? undefined
    : { transitionDelay: showRevealed ? `${index * 90}ms` : "0ms" };

  return { wrapperRef, cardRef, handleMouseMove, wrapperClassName, wrapperStyle, reducedMotion };
}
