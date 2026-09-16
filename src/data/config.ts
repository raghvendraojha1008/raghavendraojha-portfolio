/**
 * Central site configuration.
 *
 * Update the values below to change personal info, social links, and the
 * resume path anywhere on the site — nothing else needs to be touched.
 * Anything marked PLACEHOLDER should be replaced with real information.
 */

export const siteConfig = {
  name: "Raghavendra Ojha",
  role: "Full-Stack Developer | AI/ML | Android",
  domain: "https://raghavendraojha.dev",

  // Short line used in <meta name="description"> and the hero.
  tagline:
    "I build and ship real software — Android apps, full-stack web products, and AI/ML tools — as a CSE/AIML student learning by shipping.",

  about: {
    paragraphs: [
      "I'm a Computer Science (AI/ML) student who spends most of my time outside class actually building things: Android apps, full-stack web apps, and small AI/ML tools.",
      "I've published an Android application on Google Play and built multiple full-stack applications that are deployed and usable today. I'm currently looking for software development internships/roles and select freelance projects where I can keep building real, working products.",
    ],
  },

  links: {
    email: "raghavendraojha1008@gmail.com",
    github: "https://github.com/raghvendraojha1008",
    linkedin: "https://www.linkedin.com/in/raghavendra-ojha-472753334",
  },

  // PLACEHOLDER — drop your PDF at public/resume/Raghavendra-Ojha-Resume.pdf
  resumePath: "/resume/Raghavendra-Ojha-Resume.pdf",

  seo: {
    title: "Raghavendra Ojha — Full-Stack Developer | AI/ML | Android",
    description:
      "Portfolio of Raghavendra Ojha: Full-Stack Developer, AI/ML student, and Android developer. Real, shipped Android and web projects.",
    twitterHandle: "", // PLACEHOLDER — add if you have one, e.g. "@yourhandle"
  },
} as const;
