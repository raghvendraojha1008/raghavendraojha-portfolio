import { siteConfig } from "@/data/config";
import BuildLog from "./BuildLog";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
        <div>
          <p className="mb-5 font-mono text-[13px] uppercase tracking-wide text-accent">
            {siteConfig.role}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-ink px-5 py-2.5 font-mono text-sm text-white transition-colors hover:bg-accent"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
            <a
              href={siteConfig.resumePath}
              className="rounded-full border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Download Resume
            </a>
          </div>
          <div className="mt-8 flex gap-5 font-mono text-[13px] text-ink-muted">
            <a href={siteConfig.links.github} className="hover:text-ink" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={siteConfig.links.linkedin} className="hover:text-ink" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
        <div className="flex justify-start md:justify-end">
          <BuildLog />
        </div>
      </div>
    </section>
  );
}
