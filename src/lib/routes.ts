import { posts } from "./posts";
import { products } from "./products";

type Entry = { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly"; lastModified?: string };

/** Every public URL on the site. Sitemap and llms.txt both read from here. */
export function allRoutes(): Entry[] {
  return [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/products", priority: 0.9, changeFrequency: "monthly" },
    ...products.map((p) => ({ path: `/products/${p.slug}`, priority: 0.8, changeFrequency: "monthly" as const })),
    { path: "/how-latex-balloons-are-made", priority: 0.7, changeFrequency: "yearly" },
    { path: "/resources", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/resources/blog", priority: 0.6, changeFrequency: "weekly" },
    ...posts.map((p) => ({ path: `/resources/blog/${p.slug}`, priority: 0.6, changeFrequency: "yearly" as const, lastModified: p.date })),
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  ];
}
