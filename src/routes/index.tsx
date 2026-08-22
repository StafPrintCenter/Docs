import { createFileRoute } from "@tanstack/react-router";
import { docsRegistry, articleCount } from "@/data/content/docs";
import { DocsShell } from "@/components/site/DocsShell";
import { HeroSection, SpacesSection } from "@/components/pages/home";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `SPC Docs - Documentation de ${SITE.name}` },
      { name: "description", content: `Documentation officielle de l'écosystème ${SITE.name}.` },
      { property: "og:title", content: `SPC Docs - Documentation de ${SITE.name}` },
      { property: "og:description", content: "Cinq espaces de documentation et un centre d'aide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DocsHome,
});

function DocsHome() {
  const totalArticles = docsRegistry.reduce((acc, space) => acc + articleCount(space), 0);

  return (
    <DocsShell>
      <main className="mx-auto flex-1 max-w-6xl px-4 sm:px-6 w-full">
        <HeroSection totalArticles={totalArticles} />
        <SpacesSection />
      </main>
    </DocsShell>
  );
}