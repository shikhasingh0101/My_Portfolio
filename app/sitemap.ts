import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://shikhasinghportfolio.vercel.app";
  return [
    { url: base, lastModified: new Date() },
    ...projects.map((p) => ({ url: `${base}/work/${p.slug}`, lastModified: new Date() })),
  ];
}
