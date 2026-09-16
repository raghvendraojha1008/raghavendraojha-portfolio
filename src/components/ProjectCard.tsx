import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import StatusBadge from "./StatusBadge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent/60">
      <Link href={`/projects/${project.id}`} className="block">
        <div className="relative aspect-[8/5] w-full overflow-hidden border-b border-line bg-bg">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <Link href={`/projects/${project.id}`}>
            <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent">
              {project.title}
            </h3>
          </Link>
          <StatusBadge status={project.status} />
        </div>
        <p className="text-sm leading-relaxed text-ink-muted">{project.shortDescription}</p>
        <ul className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-bg px-2.5 py-1 font-mono text-[11px] text-ink-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-4 pt-3 font-mono text-[13px]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
            >
              Live Demo ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
            >
              GitHub ↗
            </a>
          )}
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
            >
              Google Play ↗
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="ml-auto text-ink-muted hover:text-accent"
          >
            Details →
          </Link>
        </div>
      </div>
    </article>
  );
}
