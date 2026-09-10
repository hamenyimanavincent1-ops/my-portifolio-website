"use client";

import { Globe, ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  const { profile, socialLinks, settings } = portfolio;

  const iconMap: Record<string, React.ElementType> = {
    Github: GithubIcon,
    Linkedin: LinkedinIcon,
    Globe,
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-foreground">{profile.name}</p>
            <p className="mt-1 text-sm font-medium text-primary">
              {profile.professionalTitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {settings.siteDescription}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="space-y-2">
              {settings.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || Globe;
                return (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                      {link.platform}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <div className="mt-6">
              <a
                href="#home"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowUp className="h-4 w-4" />
                Back to top
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            {profile.professionalTitle} &middot; Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
