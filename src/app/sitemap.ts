import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/process",
  "/services",
  "/reviews",
  "/referrals",
  "/work-with-us",
  "/contact",
  "/request-a-quote",
  "/privacy",
  "/terms",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${site.url}${route}` }));
}
