"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void): () => void {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot(): boolean {
  return false;
}

/**
 * Tracks the user's OS-level reduced-motion preference so components can
 * skip infinite loops, hover-triggered speedups, and scroll-reveal
 * animations. Built on useSyncExternalStore (not useEffect+setState) so it
 * stays correct under React's strict effect rules and never mismatches
 * server-rendered markup — the server snapshot is always `false`.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
