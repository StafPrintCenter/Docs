import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { supportArticles } from "@/data/support-center";
import {
  SupportHomePopularAndContact,
  SupportHomeCategories,
  SupportHomeHeader,
  SupportHomeSearchHero,
} from "@/components/pages/support/home";

export const Route = createFileRoute("/support/")({
  head: () => {
    const title = "Centre d'aide STAF - Support client STAF PRINT CENTER";
    const description =
      "Trouvez des réponses sur les commandes, la facturation, les comptes, la confidentialité et les problèmes techniques, ou contactez l'équipe support STAF.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SupportHome,
});

function SupportHome() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return supportArticles
      .filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.content.toLowerCase().includes(q),
      )
      .slice(0, 8);
  }, [query]);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-50" />

      <div className="relative z-10">
        <SupportHomeHeader />

        <SupportHomeSearchHero
          query={query}
          onQueryChange={setQuery}
          results={results}
        />

        <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <SupportHomeCategories />
          <SupportHomePopularAndContact />
        </main>
      </div>
    </div>
  );
}
