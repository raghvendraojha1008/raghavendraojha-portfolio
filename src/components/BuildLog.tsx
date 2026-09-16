"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

/**
 * Signature hero element: a quiet "build log" that reveals one line per
 * shipped/in-progress project, echoing a terminal/CI log — grounded in the
 * fact that every project on this site is real, working software.
 */
function statusVerb(status: string) {
  if (status === "Published" || status === "Live") return "shipped";
  if (status === "Ready to Publish") return "packaged";
  if (status === "In Progress") return "building";
  return "queued";
}

const lines = projects.slice(0, 5).map((p) => ({
  id: p.id,
  text: `${statusVerb(p.status)}  ${p.title}`,
  meta: p.technologies.slice(0, 2).join(" · "),
}));

function getInitialVisibleCount() {
  if (typeof window === "undefined") return 0;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return prefersReduced ? lines.length : 0;
}

export default function BuildLog() {
  const [visibleCount, setVisibleCount] = useState(getInitialVisibleCount);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    if (getInitialVisibleCount() >= lines.length) return;

    const interval = setInterval(() => {
      setVisibleCount((c) => {
        if (c >= lines.length) {
          clearInterval(interval);
          return c;
        }
        return c + 1;
      });
    }, 420);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md rounded-xl border border-line bg-surface p-5 font-mono text-[13px] shadow-sm">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-status-proto/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-status-proto/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-status-proto/30" />
        <span className="ml-2 text-[11px] uppercase tracking-wide text-ink-muted">
          build.log
        </span>
      </div>
      <ul className="space-y-2">
        {lines.map((line, i) => (
          <li
            key={line.id}
            className={`flex items-baseline justify-between gap-3 transition-opacity duration-300 ${
              i < visibleCount ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-ink">
              <span className="text-accent">$</span> {line.text}
            </span>
            <span className="shrink-0 text-[11px] text-ink-muted">{line.meta}</span>
          </li>
        ))}
        <li
          className={`text-ink-muted transition-opacity duration-300 ${
            visibleCount >= lines.length ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-accent">$</span> _
        </li>
      </ul>
    </div>
  );
}
