import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CreditCard, FileQuestion, LifeBuoy, Lock, Package, Printer, Search, ShieldCheck, UserRound, Wrench } from "lucide-react";
import { ThemeToggle } from "@/components/docs/ThemeToggle";
import {
  articlesByCategory,
  popularSupportArticles,
  supportArticles,
  supportCategories,
} from "@/data/support-center";

export const Route = createFileRoute("/support/")({
  head: () => {
    const title = "Centre d'aide STAF — Support client STAF PRINT CENTER";
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

const ICONS = {
  account: UserRound,
  billing: CreditCard,
  orders: Package,
  privacy: Lock,
  technical: Wrench,
  contact: LifeBuoy,
} as const;

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
      {/* Fond de grille décoratif isolé */}
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-50" />

      {/* Contenu principal surélevé */}
      <div className="relative z-10">
        <header className="border-b border-border bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-lg bg-brand text-brand-foreground shadow-sm">
                <Printer className="size-4.5" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-[15px] font-semibold text-foreground">
                  Centre d'aide
                </span>
                <span className="block text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Staf Print Center
                </span>
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="hidden h-9 items-center rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
              >
                Documentation
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <section className="border-b border-border bg-muted/40 py-14">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Comment pouvons-nous vous aider ?
            </h1>
            <div className="relative mt-6">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-brand" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Décrivez votre problème (ex : facture, retard, mot de passe)"
                className="h-12 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm text-foreground shadow-sm outline-none focus:border-brand/60"
              />
            </div>

            {query.trim() !== "" && (
              <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm">
                {results.length === 0 ? (
                  <p className="px-4 py-5 text-sm text-muted-foreground">
                    Aucun résultat. Essayez un autre mot-clé ou contactez le support.
                  </p>
                ) : (
                  results.map((article) => (
                    <Link
                      key={article.slug}
                      to="/support/$slug"
                      params={{ slug: article.slug }}
                      className="flex items-start gap-3 border-b border-border px-4 py-3 last:border-0 hover:bg-muted"
                    >
                      <FileQuestion className="mt-0.5 size-4 shrink-0 text-brand" />
                      <span>
                        <span className="block text-sm font-medium text-foreground">
                          {article.title}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {article.description}
                        </span>
                      </span>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </section>

        <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-foreground">Parcourir par sujet</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supportCategories.map((category) => {
              const Icon = ICONS[category.icon];
              const count = articlesByCategory(category.id).length;
              const first = articlesByCategory(category.id)[0];
              return (
                <div
                  key={category.id}
                  className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <span className="grid size-9 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-4.5" />
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {articlesByCategory(category.id).map((article) => (
                      <li key={article.slug}>
                        <Link
                          to="/support/$slug"
                          params={{ slug: article.slug }}
                          className="text-sm text-brand hover:underline"
                        >
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {count === 0 && first === undefined && (
                    <p className="mt-3 text-xs text-muted-foreground">Bientôt disponible.</p>
                  )}
                </div>
              );
            })}
          </div>

          <h2 className="mt-14 font-display text-xl font-semibold text-foreground">
            Articles les plus consultés
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {popularSupportArticles.map((article) => (
              <Link
                key={article.slug}
                to="/support/$slug"
                params={{ slug: article.slug }}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-brand/50"
              >
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-foreground">
                    {article.title}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    Lecture {article.readTime}
                  </span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-brand/25 bg-brand/8 p-6">
            <p className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
              <ShieldCheck className="size-5 text-brand" />
              Toujours bloqué ?
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Écrivez à <strong>support@stafprint.com</strong> ou passez à l'atelier de Porto-Novo,
              du lundi au samedi de 8 h à 18 h. Réponse sous 24 h ouvrées.
            </p>
            <Link
              to="/support/$slug"
              params={{ slug: "contacter-le-support" }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-brand-foreground"
            >
              Contacter le support
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
