import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[200px_1fr]">
        <p className="font-mono text-[13px] uppercase tracking-wide text-ink-muted">
          04 / Education
        </p>
        <div className="max-w-2xl space-y-6">
          {education.map((entry) => (
            <div key={entry.institution} className="border-l-2 border-line pl-5">
              <h3 className="font-display text-lg font-semibold text-ink">
                {entry.institution}
              </h3>
              <p className="mt-1 text-ink-muted">{entry.degree}</p>
              <p className="mt-1 font-mono text-[13px] text-ink-muted">{entry.duration}</p>
              {entry.details && <p className="mt-2 text-sm text-ink-muted">{entry.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
