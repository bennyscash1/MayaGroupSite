import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/seo";
import { topics } from "@/content/software/shared";

export const dynamic = "force-static";

/** All statically exported pages (incl. the software hub and its four topic pages). */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/construction", "/construction/kish-23", "/investments", "/fund", "/software", ...topics.map((t) => t.href)];
  return paths.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
