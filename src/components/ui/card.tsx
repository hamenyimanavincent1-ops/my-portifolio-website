"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6 text-card-foreground",
        hover &&
          "transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      {children}
    </div>
  );
}
