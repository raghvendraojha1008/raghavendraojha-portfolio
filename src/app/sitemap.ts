import type { MetadataRoute } from "next";
import { getVisibleProjects } from "@/data/projects";
import { siteConfig } from "@/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = getVisibleProjects().map((p) => ({
    url: `${siteConfig.domain}/projects/${p.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: siteConfig.domain,
      lastModified: new Date(),
    },
    ...projectRoutes,
  ];
}
