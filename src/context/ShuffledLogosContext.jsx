"use client";

import { createContext, useContext, useMemo } from "react";
import projects from "@/data/projects.json";

const ShuffledLogosContext = createContext({ logos: [], featured: [] });

export function ShuffledLogosProvider({ children }) {
  const value = useMemo(() => {
    const shuffled = [...projects].sort(() => Math.random() - 0.5);
    const withTestimonial = shuffled.filter((p) => p.testimonial);
    const without = shuffled.filter((p) => !p.testimonial);

    // Prefer projects with testimonials for featured slots, backfill with others
    const featured = [...withTestimonial, ...without].slice(0, 2);
    const featuredSet = new Set(featured.map((p) => p.name));
    const logos = shuffled.filter((p) => !featuredSet.has(p.name)).slice(0, 5);

    return { logos, featured };
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
