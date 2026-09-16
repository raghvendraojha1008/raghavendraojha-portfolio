import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVisibleProjects, getProjectById } from "@/data/projects";
import { siteConfig } from "@/data/config";
import StatusBadge from "@/components/StatusBadge";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return getVisibleProjects().map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.shortDescription,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const links = [
    { href: project.liveUrl, label: "Live Demo" },
    { href: project.githubUrl, label: "GitHub" },
    { href: project.playStoreUrl, label: "Google Play" },
  ].filter((l): l is { href: string; label: string } => Boolean(l.href));

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/#projects" className="font-mono text-[13px] text-ink-muted hover:text-accent">
          ← Back to projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {project.title}
          </h1>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-3 max-w-2xl text-lg text-ink-muted">{project.shortDescription}</p>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-line bg-surface">
          <Image src={project.image} alt={`${project.title} screenshot`} fill className="object-cover" priority />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1 font-mono text-[12px] text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-ink px-5 py-2.5 text-white transition-colors hover:bg-accent"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}

        <div className="mt-14 grid gap-10">
          {project.overview && (
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Overview</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{project.overview}</p>
            </section>
          )}
          {project.problem && (
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Problem</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{project.problem}</p>
            </section>
          )}
          {project.solution && (
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Solution</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{project.solution}</p>
            </section>
          )}
          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Features</h2>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-ink-muted">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
          )}
          {project.architecture && (
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                Architecture / Technical Details
              </h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{project.architecture}</p>
            </section>
          )}
          {project.screenshots && project.screenshots.length > 0 && (
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Screenshots</h2>
              <div className="mt-3 flex flex-wrap gap-4">
                {project.screenshots.map((src) => (
                  // Plain <img>: screenshots have mixed aspect ratios (portrait Android vs.
                  // landscape web), and object-contain here avoids cropping either kind.
                  <img
                    key={src}
                    src={src}
                    alt={`${project.title} additional screenshot`}
                    className="h-72 max-w-full rounded-lg border border-line bg-surface object-contain"
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
