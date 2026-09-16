"use client";

import { useMemo, useState } from "react";
import { categories, getVisibleProjects, type CategoryFilter } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function AllProjects() {
  const [active, setActive] = useState<CategoryFilter>("All");
  const visibleProjects = useMemo(() => getVisibleProjects(), []);

  const filtered = useMemo(() => {
    if (active === "All") return visibleProjects;
    return visibleProjects.filter((p) => p.category === active);
  }, [active, visibleProjects]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[13px] uppercase tracking-wide text-ink-muted">
          All Projects
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-[12px] transition-colors ${
                active === category
                  ? "border-accent bg-accent text-white"
                  : "border-line text-ink-muted hover:border-accent hover:text-accent"
              }`}
              aria-pressed={active === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-line p-10 text-center text-sm text-ink-muted">
          No projects in this category yet.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
