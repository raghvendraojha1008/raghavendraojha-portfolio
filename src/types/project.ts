export type ProjectCategory = "Full Stack" | "Android" | "AI/ML" | "Tools" | "Other";

export type ProjectStatus =
  | "Live"
  | "Published"
  | "Ready to Publish"
  | "In Progress"
  | "Placeholder";

export interface Project {
  /** Unique slug used in URLs (/projects/[id]) and as the React key. */
  id: string;
  title: string;
  /** One or two lines shown on project cards. */
  shortDescription: string;
  /** Longer overview shown on the project detail page. */
  overview?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  category: ProjectCategory;
  technologies: string[];
  /** Path under /public used as the card + hero image, e.g. /images/projects/slug/cover.png */
  image: string;
  /** Optional extra screenshots shown on the detail page. */
  screenshots?: string[];
  featured: boolean;
  /**
   * Set to false to hide this project everywhere on the site (cards, filters,
   * sitemap, and its /projects/[id] detail page) without deleting its data.
   * Defaults to true when omitted.
   */
  visible?: boolean;
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  /** Free-form date label, e.g. "2024". Leave undefined until a real date is known. */
  date?: string;
  highlights?: string[];
}
