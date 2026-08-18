import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DocsHeader } from "@/components/docs/DocsHeader";
import { SearchModal } from "@/components/docs/SearchModal";
import { useSavedArticles } from "@/hooks/useSavedArticles";
import {
  SavedArticlesList,
  SavedEmptyState,
  SavedPrivacyBanner,
} from "@/components/pages/saves";

export const Route = createFileRoute("/saves")({
  head: () => {
    const title = "Pages enregistrées — STAF Docs";
    const description =
      "Retrouvez les articles STAF Docs que vous avez enregistrés localement pour une consultation rapide.";
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
  component: SavedPage,
});

function SavedPage() {
  const { items, remove, clear } = useSavedArticles();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-50" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <DocsHeader onOpenSearch={() => setSearchOpen(true)} />

        <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
              Pages enregistrées
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Vos articles favoris, disponibles pour une consultation rapide.
            </p>

            <SavedPrivacyBanner />

            {items.length === 0 ? (
              <SavedEmptyState />
            ) : (
              <SavedArticlesList
                items={items}
                onRemove={remove}
                onClear={clear}
              />
            )}
          </div>
        </main>
      </div>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
