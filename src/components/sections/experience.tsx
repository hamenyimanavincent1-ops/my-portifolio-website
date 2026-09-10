"use client";

import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { portfolio } from "@/data/portfolio";

export function Experience() {
  const { experience } = portfolio;

  if (experience.length === 0) {
    return (
<section id="experience" className="py-24 bg-muted">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Experience"
            subtitle="Professional work history"
          />
          <FadeIn>
            <Card className="mx-auto max-w-2xl text-center">
              <Briefcase className="mx-auto mb-4 h-10 w-10 text-muted-foreground/30" />
              <p className="text-lg text-muted-foreground">
                Building practical experience through software projects,
                training, and continuous development.
              </p>
              <p className="mt-2 text-sm text-muted-foreground/60">
                Professional experience details will be added soon.
              </p>
            </Card>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-24 bg-muted">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Experience"
          subtitle="Professional work history"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />

          {experience.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 100}>
              <div
                className={`relative mb-8 ml-8 md:ml-0 ${
                  index % 2 === 0
                    ? "md:mr-[calc(50%+1.5rem)] md:text-right"
                    : "md:ml-[calc(50%+1.5rem)]"
                }`}
              >
                <div className="absolute -left-[2.1rem] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-auto md:right-auto" />
                <Card hover>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.position}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {exp.company}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {exp.startDate} — {exp.endDate || "Present"} • {exp.location}
                  </p>
                  {exp.description && (
                    <p className="mt-3 text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                  )}
                  {exp.technologies.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
