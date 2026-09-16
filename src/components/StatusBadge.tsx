import type { ProjectStatus } from "@/types/project";

const STATUS_STYLES: Record<ProjectStatus, { dot: string; label: string }> = {
  Live: { dot: "bg-status-shipped", label: "Live" },
  Published: { dot: "bg-status-shipped", label: "Published" },
  "Ready to Publish": { dot: "bg-status-progress", label: "Ready to Publish" },
  "In Progress": { dot: "bg-status-progress", label: "In Progress" },
  Placeholder: { dot: "bg-status-proto", label: "Placeholder" },
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const style = STATUS_STYLES[status];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} aria-hidden />
      {style.label}
    </span>
  );
}
