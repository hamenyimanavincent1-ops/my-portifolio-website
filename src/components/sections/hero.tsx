"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const { profile, skills, socialLinks } = portfolio;
  const techBadges = skills
    .flatMap((category) => category.skills.map((skill) => skill.name))
    .filter((name) =>
      ["JavaScript", "TypeScript", "React.js", "Node.js", "Express.js", "Tailwind CSS"].includes(name)
    );

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary)_/_6%,_transparent_50%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Open to opportunities
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
                {profile.professionalTitle}
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {profile.name.split(" ").map((word, i) => (
                  <span key={i}>
                    {i === 0 ? (
                      <span className="text-primary">{word}</span>
                    ) : (
                      <> </>
                    )}
                    {i > 0 ? word : ""}
                  </span>
                ))}
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {profile.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={250}>
              <p className="mt-2 text-sm text-muted-foreground/70">
                {profile.location}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects">
                  <Button size="lg">
                    View My Projects
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" size="lg">
                    Contact Me
                  </Button>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="mt-10">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                  Technologies I work with
                </p>
                <div className="flex flex-wrap gap-2">
                  {techBadges.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="mt-8 flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground hover:shadow-md"
                    aria-label={link.platform}
                  >
                    {link.icon === "Github" && (
                      <GithubIcon className="h-4 w-4" />
                    )}
                    {link.icon === "Linkedin" && (
                      <LinkedinIcon className="h-4 w-4" />
                    )}
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {profile.profileImage && (
            <FadeIn delay={200}>
              <div className="flex justify-center">
                <div className="relative h-48 w-48 overflow-hidden rounded-2xl border border-border shadow-xl shadow-primary/10 sm:h-56 sm:w-56 lg:h-72 lg:w-72">
                  <Image
                    src={profile.profileImage}
                    alt={`Portrait of ${profile.name}`}
                    fill
                    priority
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 288px"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}