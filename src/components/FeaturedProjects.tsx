import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();
  if (featured.length === 0) return null;

  return (
    <div className="mb-16">
      <p className="mb-6 font-mono text-[13px] uppercase tracking-wide text-ink-muted">
        Featured
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
