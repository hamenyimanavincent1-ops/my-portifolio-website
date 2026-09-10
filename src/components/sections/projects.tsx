"use client";

import { ExternalLink, ArrowUpRight, ImageIcon } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/social-icons";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { portfolio } from "@/data/portfolio";

export function Projects() {
  const { projects } = portfolio;

  if (projects.length === 0) {
    return (
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Projects"
            subtitle="Work I have built and contributed to"
          />
          <p className="text-center text-muted-foreground">
            Projects will be showcased here soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Projects"
          subtitle="Work I have built and contributed to"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 100}>
              <Card hover className="group flex h-full flex-col">
                {project.image ? (
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-lg border border-border">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      unoptimized
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-muted/40">
                    <div className="text-center">
                      <ImageIcon className="mx-auto mb-2 h-8 w-8 text-muted-foreground/40" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground/60">
                        Screenshot coming soon
                      </p>
                    </div>
                  </div>
                )}

                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                        aria-label={`GitHub repository of ${project.title}`}
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.problem && (
                  <p className="mb-4 text-sm text-muted-foreground/80">
                    <span className="font-medium text-foreground/80">
                      Problem:{" "}
                    </span>
                    {project.problem}
                  </p>
                )}

                {project.features.length > 0 && (
                  <div className="mb-4">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                      Key Features
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center rounded bg-primary/5 px-2 py-1 text-xs text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-2">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    View Live Project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}

                {project.caseStudyUrl ? (
                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    View Case Study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <p className="mt-4 text-xs text-muted-foreground/60">
                    Case study details coming soon.
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
