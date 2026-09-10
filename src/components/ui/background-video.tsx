"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface BackgroundVideoProps {
  src?: string;
  poster?: string;
  className?: string;
}

export function BackgroundVideo({ src, poster, className }: BackgroundVideoProps) {
  const [ready, setReady] = useState(false);

  if (!src) return null;

  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onCanPlay={() => setReady(true)}
      onError={() => setReady(false)}
      aria-hidden="true"
      tabIndex={-1}
      className={cn(
        "bg-video pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
        ready ? "opacity-100" : "opacity-0",
        className
      )}
    />
  );
}