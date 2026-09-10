"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const { profile, socialLinks } = portfolio;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary)_/_5%,_transparent_50%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
          <FadeIn>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Software Developer
            </p>
          </FadeIn>

          <FadeIn delay={100}>
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

          <FadeIn delay={300}>
            <p className="mt-2 text-sm text-muted-foreground/70">
              {profile.location}
            </p>
          </FadeIn>

          <FadeIn delay={400}>
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

          <FadeIn delay={500}>
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                  aria-label={link.platform}
                >
                  {link.icon === "Github" && <GithubIcon className="h-4 w-4" />}
                  {link.icon === "Linkedin" && (
                    <LinkedinIcon className="h-4 w-4" />
                  )}
                </a>
              ))}
            </div>
          </FadeIn>
          </div>

          {profile.profileImage && (
            <FadeIn delay={150}>
              <div className="hidden lg:block">
                <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-border shadow-xl shadow-primary/10">
                  <Image
                    src={profile.profileImage}
                    alt={`Portrait of ${profile.name}`}
                    fill
                    sizes="256px"
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
