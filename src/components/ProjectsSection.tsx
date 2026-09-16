import FeaturedProjects from "./FeaturedProjects";
import AllProjects from "./AllProjects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-10 font-mono text-[13px] uppercase tracking-wide text-ink-muted">
          03 / Projects
        </p>
        <FeaturedProjects />
        <AllProjects />
      </div>
    </section>
  );
}
