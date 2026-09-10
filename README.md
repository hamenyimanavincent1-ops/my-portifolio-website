# HAMENYIMANA Vincent | Software Developer Portfolio

A modern, responsive, professional developer portfolio built with Next.js, TypeScript, React, and Tailwind CSS. Designed to be deployed on Netlify and ready to connect to a future Express + PostgreSQL backend.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- React 19
- Tailwind CSS 4
- Lucide React icons
- Zod (form/validation-ready)

## Project Structure

```text
src/
├── app/                  # pages, layout, metadata, robots, manifest
├── components/
│   ├── layout/           # navbar, footer
│   ├── sections/         # hero, about, skills, projects, experience, education, certifications, services, contact
│   └── ui/               # button, card, section-heading, fade-in, social-links/icons, download-cv
├── data/portfolio.ts     # all portfolio content (edit this to update the site)
├── types/portfolio.ts    # TypeScript interfaces (Profile, Skill, Project, etc.)
├── services/api.ts       # portfolioService abstraction (local data now, REST API later)
└── lib/                  # theme-provider, utils
```

## Editing Portfolio Content

All content lives in `src/data/portfolio.ts`: profile, about, skills, projects, experience, education, certifications, services, social links, and settings (nav links, CV path). Edit this file and rebuild to update the site.

## Connecting the Future Express Backend

The frontend already consumes `portfolioService` in `src/services/api.ts`. Set the backend URL in `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://your-backend.example.com
```

When set, `portfolioService.getProfile()`, `getSkills()`, `getProjects()`, `getExperience()`, `getEducation()`, `getCertifications()`, `getServices()`, `getSocialLinks()`, `getSettings()`, and `getAbout()` will call the REST endpoints (`/api/profile`, `/api/skills`, ...) instead of returning local data. `sendContactMessage()` will `POST /api/contact`. When the variable is empty, the site works fully with local data (contact form shows a demo notice).

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Build

```bash
npm run build
```

## Deploying to Netlify

1. Push this repository to GitHub.
2. In Netlify, choose "Import from Git" and select the repo.
3. Build command: `npm run build` (already in `netlify.toml`).
4. Publish directory: `.next` (handled by `@netlify/plugin-nextjs`).

No backend or environment variable is required for the site to build and run.

## Adding Your CV

Place your PDF at `public/cv/vincent-hamenyimana-cv.pdf`. The "Download CV" button appears automatically once the file exists and is hidden gracefully while it is missing.

## Contact Form

The form validates input, shows loading/success/error states, and is wired to `sendContactMessage()`. Until a backend is configured it runs in demo mode and clearly tells visitors to email you directly — it never pretends a message was sent.