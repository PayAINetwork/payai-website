"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import projects from "@/data/projects.json";

const ShuffledLogosContext = createContext({ logos: [], featured: [] });

/**
 * Deterministic ranking used for SSR and the first client render.
 *
 * Critical: the server and the client's first render MUST produce the same
 * markup, otherwise React throws a hydration mismatch. We pick the order from
 * projects.json (which is stable) and only re-shuffle after mount, when React
 * is past hydration and any state update is allowed to change the DOM.
 */
function pickStable(items) {
  const withTestimonial = items.filter((p) => p.testimonial);
  const without = items.filter((p) => !p.testimonial);
  const featured = [...withTestimonial, ...without].slice(0, 2);
  const featuredSet = new Set(featured.map((p) => p.name));
  const logos = items.filter((p) => !featuredSet.has(p.name)).slice(0, 5);
  return { logos, featured };
}

/**
 * Client-only Fisher–Yates shuffle. Math.random() is non-deterministic, so we
 * must never call this during SSR or the first render — only inside useEffect.
 */
function pickShuffled(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return pickStable(shuffled);
}

export function ShuffledLogosProvider({ children }) {
  // Stable order for SSR + first client render — guarantees hydration match.
  const stableValue = useMemo(() => pickStable(projects), []);
  const [value, setValue] = useState(stableValue);

  // After mount, randomize. This runs only on the client, after hydration,
  // so the state update is safe and triggers a normal re-render.
  useEffect(() => {
    setValue(pickShuffled(projects));
  }, []);

  return (
    <ShuffledLogosContext.Provider value={value}>
      {children}
    </ShuffledLogosContext.Provider>
  );
}

export function useShuffledLogos() {
  return useContext(ShuffledLogosContext).logos;
}

export function useFeaturedProjects() {
  return useContext(ShuffledLogosContext).featured;
}
