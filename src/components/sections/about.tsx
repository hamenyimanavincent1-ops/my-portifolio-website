"use client";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { Target, Code, BookOpen, Search, Lightbulb } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Target,
  Code,
  BookOpen,
  Search,
  Lightbulb,
};

export function About() {
  const { about } = portfolio;

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="About Me"
          subtitle="A Rwandan software developer focused on building practical digital solutions"
        />

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {about.introduction}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Lightbulb;
            return (
              <FadeIn key={item.title} delay={index * 100}>
                <Card hover className="h-full">
                  <Icon className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
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