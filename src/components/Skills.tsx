import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-10 font-mono text-[13px] uppercase tracking-wide text-ink-muted">
          02 / Skills
        </p>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 font-display text-base font-semibold text-ink">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[12px] text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
