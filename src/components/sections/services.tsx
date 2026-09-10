"use client";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { portfolio } from "@/data/portfolio";
import {
  Globe,
  Layout,
  Server,
  Layers,
  Database,
  Cloud,
  Terminal,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layout,
  Server,
  Layers,
  Database,
  Cloud,
  Terminal,
};

export function Services() {
  const { services } = portfolio;

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Services"
          subtitle="What I can help you build"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Terminal;
            return (
              <FadeIn key={service.id} delay={index * 50}>
                <Card hover className="h-full">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}