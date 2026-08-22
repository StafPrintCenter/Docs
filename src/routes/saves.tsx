import { createFileRoute } from "@tanstack/react-router";
import { DocsShell } from "@/components/site/DocsShell";
import { useSavedArticles } from "@/hooks/useSavedArticles";
import {
  SavedArticlesList,
  SavedEmptyState,
  SavedPrivacyBanner,
} from "@/components/pages/saves";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/saves")({
  head: () => {
    const title = `Pages enregistrées | ${SITE.name}`;
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

  return (
    <DocsShell variant="docs" maxWidthClass="max-w-[1600px]">
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
    </DocsShell>
  );
}