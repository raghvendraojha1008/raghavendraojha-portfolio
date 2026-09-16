import type { Project } from "@/types/project";

/**
 * Centralized project data.
 *
 * To add a new project:
 *   1. Add an entry to this array.
 *   2. Drop its images in public/images/projects/<id>/ (see README).
 *   3. Nothing else needs to change — cards, filters, and the detail page
 *      all render from this file automatically.
 */
export const projects: Project[] = [
  {
    id: "shopledger",
    title: "ShopLedger",
    shortDescription:
      "Billing and stock management Android app for small shops — published on Google Play.",
    overview:
      "ShopLedger is a billing and stock management application for small businesses, built to replace pen-and-paper ledgers with a fast, offline-friendly Android app.",
    problem:
      "Small shop owners often track billing and inventory manually, which is slow and error-prone and makes it hard to know stock levels at a glance.",
    solution:
      "A focused Android app that lets a shop owner record bills and keep stock counts in sync, without needing constant internet access.",
    features: [
      "Create and track bills",
      "Stock/inventory tracking",
      "Designed for day-to-day shop use",
    ],
    category: "Android",
    technologies: ["Kotlin", "Jetpack Compose", "Android"],
    image: "/images/projects/shopledger/cover.webp",
    screenshots: ["/images/projects/shopledger/playstore.webp"],
    featured: true,
    visible: true, // set to false to hide this project everywhere
    status: "Published",
    liveUrl: undefined,
    githubUrl: undefined,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.shopledger.india&pcampaignid=web_share",
    highlights: ["Published Android application"],
  },
  {
    id: "task-scheduler",
    title: "Task Scheduler",
    shortDescription:
      "Android task and reminder scheduling app, ready for Play Store publication.",
    overview:
      "Task Scheduler helps users plan tasks and get reminded at the right time, built with a focus on a simple, reliable scheduling flow.",
    problem:
      "Generic to-do apps are often cluttered; a lot of people just want a lightweight way to schedule a task and get reminded.",
    solution:
      "A dedicated task + reminder scheduler with a minimal interface focused on the create-task-and-get-reminded loop.",
    features: ["Task scheduling", "Reminders/notifications", "Simple, focused UI"],
    category: "Android",
    technologies: ["Kotlin", "Jetpack Compose", "Android"],
    image: "/images/projects/task-scheduler/cover.svg",
    featured: true,
    visible: false, // set to false to hide this project everywhere
    status: "Ready to Publish",
    liveUrl: undefined,
    githubUrl: undefined,
    playStoreUrl: undefined,
    highlights: ["Ready for Play Store publication"],
  },
  {
    id: "local-share",
    title: "Local Share",
    shortDescription:
      "Community marketplace web app for listing items to sell, rent, or donate within a local group.",
    overview:
      "Local Share is a community marketplace where members of a group (e.g. a college community) can list items to sell, rent, or donate, browse by category, and favorite listings they're interested in.",
    problem:
      "Sharing or exchanging items within a local community (a college, hostel, or neighbourhood) usually happens through scattered chat messages with no easy way to browse or search what's available.",
    solution:
      "A dedicated web app where members list items under Sell / Rent / Donate, browse by category, and message each other directly about a listing.",
    features: [
      "List items as Sell, Rent, or Donate",
      "Browse and filter listings by category (Electronics, Books, Furniture, Sports, Clothing, etc.)",
      "Favorite listings and message other members",
      "Community-level stats (members, active items, completed exchanges)",
    ],
    category: "Full Stack",
    // NOTE: exact tech stack not yet confirmed — update once verified.
    technologies: ["React", "Node.js"],
    image: "/images/projects/local-share/cover.webp",
    featured: false,
    visible: true, // set to false to hide this project everywhere
    status: "Live",
    liveUrl: "https://local-share-nu.vercel.app/",
    githubUrl: undefined,
  },
  {
    id: "land-registry",
    title: "Land Registry",
    shortDescription:
      "Map-based property search platform with price, area, and type filters.",
    overview:
      "Land Registry is a full-stack web app for browsing land and property listings on an interactive map, with filtering by type, price, and area, plus separate User and Admin views.",
    problem:
      "Property listings are often hard to explore spatially — most listing sites give you a flat list with no easy way to see where properties actually are relative to each other.",
    solution:
      "An interactive map (built on Leaflet/OpenStreetMap) that plots every listing as a pin, with a filter panel for property type (Residential / Commercial / Agricultural), price range, area range, and sort order.",
    features: [
      "Interactive map view with property pin markers",
      "Filter by type, price range, and area (sq ft)",
      "Sort listings (e.g. newest first)",
      "Separate User and Admin views, plus a dashboard",
    ],
    category: "Full Stack",
    technologies: ["React", "Leaflet", "OpenStreetMap", "Node.js"],
    image: "/images/projects/land-registry/cover.webp",
    featured: true,
    visible: true, // set to false to hide this project everywhere
    status: "Live",
    liveUrl: "https://land-dealing.vercel.app/",
    githubUrl: undefined,
  },
  {
    id: "image-color-inverter",
    title: "Image Color Inverter",
    shortDescription: "Web tool that inverts the colors of an uploaded image, right in the browser.",
    overview:
      "Image Color Inverter is a browser-based tool for inverting the colors of an image — upload an image and get an inverted version back, with no server-side processing required.",
    problem:
      "Doing a quick color inversion on an image usually means opening a full image editor for a one-step operation.",
    solution:
      "A single-purpose web tool that inverts image colors directly in the browser, so there's nothing to install and no upload to a server.",
    features: ["Upload an image and invert its colors", "Runs entirely in the browser"],
    category: "Tools",
    technologies: ["React", "JavaScript"],
    image: "/images/projects/image-color-inverter/cover.webp",
    featured: false,
    visible: true, // set to false to hide this project everywhere
    status: "Live",
    liveUrl: "https://image-color-inverter.vercel.app/",
    githubUrl: undefined,
  },
  {
    id: "fullstack-project-one",
    title: "Full-Stack Project (Add Title)",
    shortDescription: "PLACEHOLDER — replace with a real full-stack project.",
    overview: "PLACEHOLDER — add an overview once this project is filled in.",
    category: "Full Stack",
    technologies: ["React", "Node.js"],
    image: "/images/projects/fullstack-one/cover.svg",
    featured: false,
    visible: false, // set to false to hide this project everywhere
    status: "Placeholder",
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: "fullstack-project-two",
    title: "Full-Stack Project (Add Title)",
    shortDescription: "PLACEHOLDER — replace with a real full-stack project.",
    overview: "PLACEHOLDER — add an overview once this project is filled in.",
    category: "AI/ML",
    technologies: ["Python", "React"],
    image: "/images/projects/fullstack-two/cover.webp",
    featured: false,
    visible: false, // set to false to hide this project everywhere
    status: "Placeholder",
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: "civicvoice",
    title: "CivicVoice",
    shortDescription:
      "Civic issue reporting platform — report a pothole or broken streetlight and track it on a live map.",
    overview:
      "CivicVoice lets residents report civic issues (potholes, broken streetlights, burst pipes, etc.) with a location pin, then track each report's status — from Pending through Verified, In Progress, and Resolved — on a public live map.",
    problem:
      "Civic issues are often reported informally (calls, scattered complaints) with no visibility into whether anything is actually being done about them.",
    solution:
      "A reporting platform with a structured verification flow and a public map so anyone can see what's been reported nearby and how it's progressing.",
    features: [
      "Report an issue with a category, description, and map pin",
      "5-step verification flow, from Pending to Resolved",
      "Live public issue map (built on Leaflet/OpenStreetMap) with status color-coding",
      "\"My Issues\" view to track reports you've submitted",
    ],
    category: "Full Stack",
    // NOTE: exact backend stack not yet confirmed — update once verified.
    technologies: ["React", "Leaflet", "OpenStreetMap", "Node.js"],
    image: "/images/projects/civicvoice/cover.webp",
    screenshots: ["/images/projects/civicvoice/map.webp"],
    featured: true,
    visible: true,
    status: "Live",
    liveUrl: "https://civic-voice-iota.vercel.app/",
    githubUrl: undefined,
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    shortDescription: "Classic two-player Tic Tac Toe, playable in the browser.",
    overview:
      "A browser-based Tic Tac Toe game for two players, with win detection and a one-click reset.",
    features: ["Two-player local play", "Win detection with a highlighted winning line", "Reset game button"],
    category: "Other",
    // NOTE: exact stack not yet confirmed — update once verified.
    technologies: ["JavaScript"],
    image: "/images/projects/tic-tac-toe/cover.webp",
    featured: false,
    visible: true,
    status: "Live",
    liveUrl: "https://tic-tac-teo-nu.vercel.app/",
    githubUrl: undefined,
  },
  {
    id: "typeflow",
    title: "TypeFlow",
    shortDescription:
      "Typing speed test — type time/words/quote modes and get live WPM, accuracy, and a consistency graph.",
    overview:
      "TypeFlow is a typing speed test in the style of MonkeyType: pick a mode (time, words, or quote) and a length, then type the prompt and get live WPM, accuracy, and a per-second speed graph when you finish.",
    problem:
      "Practicing typing speed benefits from immediate, detailed feedback (WPM over time, accuracy, consistency) rather than just a single end-of-test number.",
    solution:
      "A focused typing test with selectable modes/lengths (time: 15/30/60/120, words, quote, with optional punctuation/numbers) and a results screen that graphs WPM over the course of the test.",
    features: [
      "Time, Words, and Quote test modes",
      "Live WPM and accuracy while typing",
      "Post-test graph of WPM over time, plus raw speed, consistency, and character breakdown",
      "Punctuation and numbers toggles",
    ],
    category: "Tools",
    // NOTE: exact stack not yet confirmed — update once verified.
    technologies: ["React", "TypeScript"],
    image: "/images/projects/typeflow/cover.webp",
    featured: false,
    visible: true,
    status: "Live",
    liveUrl: "https://monkey-typing.vercel.app/",
    githubUrl: undefined,
  },
  {
    id: "bg-timer",
    title: "Ambient Clock",
    shortDescription: "Full-screen clock/timer/stopwatch that shifts its background color as time passes.",
    overview:
      "A full-screen clock app with clock, stopwatch, and timer modes, built around a large, easy-to-read time display and a gradient background that changes color over time.",
    features: [
      "Clock, stopwatch, and timer modes",
      "Large, high-contrast time display with the current date",
      "Ambient background gradient that shifts color",
      "Settings panel to configure the display",
    ],
    category: "Tools",
    // NOTE: exact stack not yet confirmed — update once verified.
    technologies: ["React", "JavaScript"],
    image: "/images/projects/bg-timer/cover.webp",
    screenshots: ["/images/projects/bg-timer/variant-blue.webp"],
    featured: false,
    visible: true,
    status: "Live",
    liveUrl: "https://timer-background-web-page.vercel.app/",
    githubUrl: undefined,
  },
];

export const categories = ["All", "Full Stack", "Android", "AI/ML", "Tools", "Other"] as const;
export type CategoryFilter = (typeof categories)[number];

/** All projects with `visible` not explicitly set to false. Use this everywhere the site renders projects. */
export function getVisibleProjects(): Project[] {
  return projects.filter((p) => p.visible !== false);
}

export function getFeaturedProjects(): Project[] {
  return getVisibleProjects().filter((p) => p.featured);
}

/** Only returns a project if it exists AND is visible, so hidden projects 404 on their detail page too. */
export function getProjectById(id: string): Project | undefined {
  return getVisibleProjects().find((p) => p.id === id);
}
