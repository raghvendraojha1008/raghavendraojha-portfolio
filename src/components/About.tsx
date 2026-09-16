import { siteConfig } from "@/data/config";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[200px_1fr]">
        <div>
          <p className="font-mono text-[13px] uppercase tracking-wide text-ink-muted">01 / About</p>
        </div>
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-muted">
          {siteConfig.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
