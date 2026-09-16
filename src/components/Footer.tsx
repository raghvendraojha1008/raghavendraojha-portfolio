import { siteConfig } from "@/data/config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-ink-muted sm:flex-row">
        <p>
          © {year} {siteConfig.name}
        </p>
        <div className="flex gap-5 font-mono text-[13px]">
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.links.email}`} className="hover:text-ink">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
