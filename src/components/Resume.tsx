import { siteConfig } from "@/data/config";

export default function Resume() {
  return (
    <section id="resume" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-line p-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-wide text-ink-muted">Resume</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-ink">
              Get the full breakdown of my experience
            </h3>
          </div>
          <a
            href={siteConfig.resumePath}
            download
            className="shrink-0 rounded-full bg-ink px-5 py-2.5 font-mono text-sm text-white transition-colors hover:bg-accent"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
