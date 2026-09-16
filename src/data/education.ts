export interface EducationEntry {
  institution: string;
  degree: string;
  duration: string;
  details?: string;
}

export const education: EducationEntry[] = [
  {
    institution: "Chandigarh University",
    degree: "B.E. Computer Science Engineering (AI/ML)",
    duration: "2024-2028",
  },
];
