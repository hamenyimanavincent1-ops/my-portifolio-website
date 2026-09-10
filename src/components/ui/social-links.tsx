"use client";

import { Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types/portfolio";

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Globe,
};

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((link) => {
        const Icon = iconMap[link.icon] || Globe;
        if (!link.url) return null;
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            aria-label={link.platform}
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
