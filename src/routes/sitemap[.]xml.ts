import { createFileRoute } from "@tanstack/react-router";
import type { } from "@tanstack/react-start";
import { docsRegistry, spaceArticles } from "@/data/content/docs";
import { supportArticles } from "@/data/content/support";

const RAW_URL = import.meta.env.VITE_DOCS_URL || "https://docs.stafprint.com";
const BASE_URL = RAW_URL.replace(/\/$/, "");

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/support", changefreq: "weekly", priority: "0.9" },
          { path: "/saves", changefreq: "monthly", priority: "0.3" },
        ];

        for (const space of docsRegistry) {
          for (const article of spaceArticles(space)) {
            entries.push({
              path: `/docs/${space.id}/${article.slug}`,
              changefreq: "monthly",
              priority: "0.8",
            });
          }
        }

        for (const article of supportArticles) {
          entries.push({
            path: `/support/${article.slug}`,
            changefreq: "monthly",
            priority: "0.7",
          });
        }

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
