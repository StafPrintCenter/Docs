import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { docsRegistry, articleCount } from "@/data/content/docs";
import { SearchModal } from "@/components/docs/SearchModal";
import { DocsHeader, DocsFooter } from "@/components/site";
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
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const totalArticles = docsRegistry.reduce((acc, space) => acc + articleCount(space), 0);

  return (
    <div className="relative min-h-screen bg-background overflow-x-clip">
      {/* Background papier */}
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-50" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <DocsHeader onOpenSearch={() => setSearchOpen(true)} />

        <main className="mx-auto flex-1 max-w-6xl px-4 sm:px-6 w-full">
          <HeroSection totalArticles={totalArticles} />
          <SpacesSection />
        </main>

        <DocsFooter />
      </div>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}