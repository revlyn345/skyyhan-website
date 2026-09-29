import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

// AI / answer-engine crawlers are allowed on purpose, so ChatGPT, Claude,
// Perplexity, Gemini and Copilot can find and cite Skyyhan (GEO / AEO).
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: aiCrawlers, allow: "/", disallow: ["/api/"] },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: site.url,
  };
}
