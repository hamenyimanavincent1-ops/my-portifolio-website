"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { portfolio } from "@/data/portfolio";

export function DownloadCvButton({ className }: { className?: string }) {
  const [available, setAvailable] = useState<boolean | null>(null);
  const label = "Download CV";

  useEffect(() => {
    let cancelled = false;
    const cvPath = portfolio.settings.cvPath;
    fetch(cvPath, { method: "HEAD" })
      .then((res) => {
        if (cancelled) return;
        setAvailable(res.ok);
      })
      .catch(() => {
        if (!cancelled) setAvailable(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (available === null) {
    return (
      <Button
        variant="outline"
        size="sm"
        disabled
        aria-busy="true"
        className={cn("h-8", className)}
      >
        <Download className="h-4 w-4" />
        {label}
      </Button>
    );
  }

  if (!available) {
    return (
      <span
        title="CV will be added soon"
        aria-disabled="true"
        className={cn(
          "inline-flex h-8 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-border px-3 text-sm font-medium text-muted-foreground/60",
          className
        )}
      >
        <Download className="h-4 w-4" />
        {label}
      </span>
    );
  }

  return (
    <a href={portfolio.settings.cvPath} download className={className}>
      <Button variant="outline" size="sm" className="w-full">
        <Download className="h-4 w-4" />
        {label}
      </Button>
    </a>
  );
}