import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DocsShell } from "@/components/site/DocsShell";
import { supportArticles } from "@/data/content/support";
import {
  SupportHomePopularAndContact,
  SupportHomeCategories,
  SupportHomeSearchHero,
} from "@/components/pages/support/home";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/support/")({
  head: () => {
    const title = `Centre d'aide | ${SITE.name}`;
    const description = "Trouvez des réponses sur les commandes, la facturation, les comptes, la confidentialité et les problèmes techniques, ou contactez l'équipe support STAF.";
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
    <DocsShell>
      <SupportHomeSearchHero
        query={query}
        onQueryChange={setQuery}
        results={results}
      />

      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <SupportHomeCategories />
        <SupportHomePopularAndContact />
      </main>
    </DocsShell>
  );
}
