import { services, siteConfig } from "@/data/site";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/services", "/contact"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: service.slug === "hard-rock-control-blasting" ? 0.9 : 0.7
  }));

  return [...staticRoutes, ...serviceRoutes];
}


