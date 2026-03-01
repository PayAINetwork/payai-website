"use client";

import { createContext, useContext, useMemo } from "react";
import projects from "@/data/projects.json";

const ShuffledLogosContext = createContext([]);

export function ShuffledLogosProvider({ children }) {
  const logos = useMemo(() => {
    return [...projects].sort(() => Math.random() - 0.5).slice(0, 5);
  }, []);

  return (
    <ShuffledLogosContext.Provider value={logos}>
      {children}
    </ShuffledLogosContext.Provider>
  );
}

export function useShuffledLogos() {
  return useContext(ShuffledLogosContext);
}
