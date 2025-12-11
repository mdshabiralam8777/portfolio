"use client";

import dynamic from "next/dynamic";

// Lazy load Three.js particle background for better initial load performance
const ParticleBackgroundComponent = dynamic(
  () =>
    import("@/components/effects/ParticleBackground").then((mod) => ({
      default: mod.ParticleBackground,
    })),
  { ssr: false }
);

export function LazyParticleBackground() {
  return <ParticleBackgroundComponent />;
}
