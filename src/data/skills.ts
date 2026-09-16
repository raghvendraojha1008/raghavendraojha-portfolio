export interface SkillGroup {
  label: string;
  items: string[];
}

/**
 * Grouped skills shown in the Skills section.
 * Edit freely — add/remove groups or items without touching any component.
 */
export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    label: "Database / Cloud",
    items: ["Firebase", "Supabase", "SQL"],
  },
  {
    label: "Mobile",
    items: ["Android", "Kotlin", "Jetpack Compose"],
  },
  {
    label: "AI / ML",
    items: ["Python", "Machine Learning", "AI APIs"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Vercel", "Android Studio", "VS Code"],
  },
];
