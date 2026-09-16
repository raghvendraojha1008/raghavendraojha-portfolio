import { siteConfig } from "@/data/config";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[200px_1fr]">
        <p className="font-mono text-[13px] uppercase tracking-wide text-ink-muted">
          05 / Contact
        </p>
        <div className="max-w-xl">
          <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Open to internships, roles, and freelance work.
          </h3>
          <p className="mt-3 text-ink-muted">
            The fastest way to reach me is email — I read every message.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="rounded-full bg-ink px-5 py-2.5 font-mono text-sm text-white transition-colors hover:bg-accent"
            >
              {siteConfig.links.email}
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn ↗
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
