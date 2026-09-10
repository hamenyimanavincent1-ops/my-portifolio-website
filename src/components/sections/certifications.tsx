"use client";

import { Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { portfolio } from "@/data/portfolio";

export function Certifications() {
  const { certifications } = portfolio;

  if (certifications.length === 0) {
    return (
<section id="certifications" className="py-24 bg-muted">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Certifications"
            subtitle="Professional certifications and training"
          />
          <FadeIn>
            <Card className="mx-auto max-w-2xl text-center">
              <Award className="mx-auto mb-4 h-10 w-10 text-muted-foreground/30" />
              <p className="text-lg text-muted-foreground">
                Certifications and professional training will be added soon.
              </p>
            </Card>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section id="certifications" className="py-24 bg-muted">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and training"
        />

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <FadeIn key={cert.id} delay={index * 100}>
              <Card hover className="h-full">
                <h3 className="text-lg font-semibold text-foreground">
                  {cert.name}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {cert.institution}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {cert.date}
                </p>
                {cert.description && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                )}
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                  >
                    View Certificate →
                  </a>
                )}
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
