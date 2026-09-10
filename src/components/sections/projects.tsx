"use client";

import { ExternalLink, ArrowUpRight, ImageIcon, CheckCircle2, FolderGit2 } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/social-icons";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
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
                  <div className="relative mb-5 aspect-video overflow-hidden rounded-lg border border-border">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      unoptimized
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="mb-5 flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-muted/40">
                    <div className="text-center">
                      <ImageIcon
                        className="mx-auto mb-2 h-8 w-8 text-muted-foreground/40"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-muted-foreground/60">
                        Screenshot coming soon
                      </p>
                    </div>
                  </div>
                )}

                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-foreground">
                    <FolderGit2 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="inline-flex shrink-0 items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Featured
                    </span>
                  )}
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
                    <ul className="grid gap-1.5 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-1.5 text-sm text-muted-foreground"
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
                        className="inline-flex items-center rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      View Live Project
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      Source Code
                    </a>
                  )}
                  {project.caseStudyUrl ? (
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      View Case Study
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span
                      className={cn(
                        "text-sm text-muted-foreground/60",
                        !project.liveUrl && !project.githubUrl && "ml-auto"
                      )}
                    >
                      Case study details coming soon.
                    </span>
                  )}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}