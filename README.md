# Raghavendra Ojha — Portfolio

Personal portfolio website for Raghavendra Ojha (Full-Stack Developer | AI/ML | Android),
built with Next.js, TypeScript, and Tailwind CSS. Designed to showcase real, shipped
projects and make it fast to add new ones.

## Tech stack

- **Next.js 16** (App Router, Turbopack) — React framework, static generation for project pages
- **TypeScript** — typed data models and components
- **Tailwind CSS v4** — styling, using CSS variables as design tokens (`src/app/globals.css`)
- **@fontsource** (Inter, Space Grotesk, JetBrains Mono) — self-hosted fonts, no external
  font requests at build or runtime

No backend/database is used. The project data is a static TypeScript file, so the whole
site can be statically generated and deployed anywhere that serves static/Node output
(Vercel is the target platform here).

## Folder structure

```
src/
  app/
    layout.tsx          Root layout: fonts, global <head> metadata
    page.tsx             Home page (composes all sections)
    globals.css          Design tokens (colors, fonts) + base styles
    robots.ts            robots.txt
    sitemap.ts           sitemap.xml (auto-includes every project)
    projects/[id]/
      page.tsx           Project detail page (statically generated per project)
  components/            One component per section (Hero, About, Skills, ...)
  data/
    config.ts            Personal info, social links, resume path, SEO copy
    projects.ts           <-- THE PROJECT DATA. Add new projects here.
    skills.ts             Skills, grouped
    education.ts          Education entries
  types/
    project.ts            TypeScript shape of a Project

public/
  images/projects/<id>/   Screenshots per project (placeholders included)
  resume/                 Drop your resume PDF here
```

## How it works

Nothing in the UI hard-codes a project. `src/components/AllProjects.tsx`,
`FeaturedProjects.tsx`, and `projects/[id]/page.tsx` all read from
`src/data/projects.ts` and render whatever is there — including the category filter
buttons and the automatically generated `/projects/<id>` detail pages
(`generateStaticParams` builds one page per entry).

## Install & run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Build & run in production mode

```bash
npm run build
npm start
```

## How to add a new project

1. Open `src/data/projects.ts` and add an object to the `projects` array, e.g.:

   ```ts
   {
     id: "my-new-app",                 // used in the URL: /projects/my-new-app
     title: "My New App",
     shortDescription: "One-line summary shown on the card.",
     overview: "Longer paragraph for the detail page.",
     problem: "What problem does this solve?",
     solution: "How does the app solve it?",
     features: ["Feature one", "Feature two"],
     category: "Full Stack",            // "Full Stack" | "Android" | "AI/ML" | "Tools" | "Other"
     technologies: ["Next.js", "PostgreSQL"],
     image: "/images/projects/my-new-app/cover.png",
     featured: true,                    // shows in the "Featured" grid at the top
     visible: true,                     // set to false to hide it everywhere (see below)
     status: "Live",                    // "Live" | "Published" | "Ready to Publish" | "In Progress" | "Placeholder"
     liveUrl: "https://example.com",    // omit any of these three if you don't have one
     githubUrl: "https://github.com/you/my-new-app",
     playStoreUrl: undefined,
   }
   ```

2. Add its image (see below).
3. That's it — the card, the filter, and the detail page all pick it up automatically.

Optional link buttons (Live Demo / GitHub / Google Play) only render when the
corresponding URL is set, so it's safe to leave any of them `undefined`.

## How to show/hide a project

Every project has a `visible` field. Set it to `false` to pull that project off
the site entirely — the card, the category filter, the sitemap, and its
`/projects/<id>` detail page (which will 404) — without deleting its data:

```ts
{
  id: "task-scheduler",
  // ...
  visible: false, // hidden everywhere until you flip this back to true
}
```

Leave it as `true` (or omit it — it defaults to visible) to show the project
again. This is the fastest way to keep a project's data in the file while it's
not ready to show recruiters/clients yet.

## How to add project screenshots

Create a folder for the project under `public/images/projects/<id>/` and put images
there, then point `image` (and optionally `screenshots: [...]`) in `projects.ts` at the
file, e.g. `/images/projects/my-new-app/cover.png`.

Placeholder SVG covers are included for every current project
(`public/images/projects/*/cover.svg`) — replace them with real screenshots whenever
you have them; nothing else needs to change.

## How to update personal information

Edit `src/data/config.ts`:

- `name`, `role`, `tagline`, `about.paragraphs` — hero and about copy
- `links.email`, `links.github`, `links.linkedin` — used in the nav, hero, contact
  section, and footer
- `resumePath` — path to your resume file under `public/`
- `seo` — page title/description used for metadata and social previews

## How to add/change social links

Update `links.github` and `links.linkedin` in `src/data/config.ts`. They're used
everywhere a social link appears, so there's only one place to change them.

## How to add the resume

Place your PDF at `public/resume/Raghavendra-Ojha-Resume.pdf` (or update
`resumePath` in `src/data/config.ts` if you use a different file name). The
"Download Resume" buttons link to whatever `resumePath` points to; the site
does not break if the file is missing, it just 404s on that one link until
you add it.

## How to update education

Edit `src/data/education.ts`. Add or edit entries — only real institution names,
degree titles, and durations; no invented CGPA or achievements.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: Next.js (auto-detected). No environment variables are required.
4. Deploy.

## Connecting a custom domain (raghavendraojha.dev)

1. In the Vercel project, go to **Settings → Domains** and add `raghavendraojha.dev`
   (and optionally `www.raghavendraojha.dev`).
2. At your domain registrar, add the DNS records Vercel shows you (typically an `A`
   record for the apex domain and a `CNAME` for `www`).
3. Wait for DNS to propagate and for Vercel to issue an SSL certificate
   automatically.
4. Update `domain` in `src/data/config.ts` if it isn't already
   `https://raghavendraojha.dev`, so metadata/sitemap URLs match.

## Notes

- No fake statistics, users, revenue, employers, or awards are included anywhere —
  placeholder fields are clearly marked as such (in code comments and, where visible,
  in badges like "Placeholder").
- No contact-form backend is included by design; the Contact section uses a `mailto:`
  link. Add a form/backend later if you want one.
