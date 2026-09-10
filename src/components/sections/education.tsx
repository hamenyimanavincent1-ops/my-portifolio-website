"use client";

import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { portfolio } from "@/data/portfolio";

export function Education() {
  const { education } = portfolio;

  if (education.length === 0) {
    return (
      <section id="education" className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Education"
            subtitle="Academic background"
          />
          <FadeIn>
            <Card className="mx-auto max-w-2xl text-center">
              <GraduationCap className="mx-auto mb-4 h-10 w-10 text-muted-foreground/30" />
              <p className="text-lg text-muted-foreground">
                Education details coming soon.
              </p>
            </Card>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Education" subtitle="Academic background" />

        <div className="mx-auto grid max-w-3xl gap-4">
          {education.map((edu, index) => (
            <FadeIn key={edu.id} delay={index * 100}>
              <Card hover>
                <h3 className="text-lg font-semibold text-foreground">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {edu.institution}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {edu.startDate} — {edu.endDate || "Present"}
                </p>
                {edu.description && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {edu.description}
                  </p>
                )}
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
