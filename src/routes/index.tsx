import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Bookmark,
  Gamepad2,
  GraduationCap,
  LifeBuoy,
  Printer,
  Search,
  Users,
  Video,
} from "lucide-react";
import { docsRegistry, articleCount, firstArticleParams } from "@/data/docs-registry";
import { SearchModal } from "@/components/docs/SearchModal";
import { ThemeToggle } from "@/components/docs/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STAF Docs — Documentation de STAF PRINT CENTER" },
      {
        name: "description",
        content:
          "Documentation officielle de l'écosystème STAF PRINT CENTER : SPC Meet, Site Vitrine, SPC Arcade, Instructor Hub et Student Hub, plus un centre d'aide complet.",
      },
      { property: "og:title", content: "STAF Docs — Documentation de STAF PRINT CENTER" },
      {
        property: "og:description",
        content:
          "Cinq espaces de documentation et un centre d'aide. Recherche instantanée avec ⌘K.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DocsHome,
});

const SPACE_ICON: Record<string, typeof BookOpen> = {
  "spc-meet": Video,
  "site-vitrine": Printer,
  "spc-arcade": Gamepad2,
  "instructor-hub": GraduationCap,
  "student-hub": Users,
};

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

  const total = docsRegistry.reduce((acc, space) => acc + articleCount(space), 0);

  return (
    <div className="min-h-screen bg-background paper-grid">
      <header className="border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-lg bg-brand text-brand-foreground shadow-sm">
              <Printer className="size-4.5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-semibold tracking-tight text-foreground">
                STAF Docs
              </span>
              <span className="block text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Staf Print Center
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/support"
              className="hidden h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground sm:inline-flex"
            >
              <LifeBuoy className="size-4 text-brand" />
              Centre d'aide
            </Link>
            <Link
              to="/enregistrements"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
            >
              <Bookmark className="size-4 text-brand" />
              <span className="hidden sm:inline">Enregistrés</span>
            </Link>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
            >
              <Search className="size-4 text-brand" />
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
                ⌘K
              </kbd>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero deux colonnes */}
        <section className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-24">
          <div className="flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-3.5 py-1.5 text-xs font-medium text-brand-strong">
              <BookOpen className="size-3.5" />
              Porto-Novo, Bénin · {total} articles
            </span>

            <h1 className="mt-7 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
              La documentation de <br />
              l'écosystème <span className="text-brand">STAF</span>.
            </h1>

            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              Un espace par plateforme, sans mélange : SPC Meet, Site Vitrine, SPC Arcade,
              Instructor Hub et Student Hub. Et un centre d'aide pour tout le reste.
            </p>

            <div className="mt-8 flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link
                to="/docs/$space/$slug"
                params={firstArticleParams("spc-meet")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-brand-foreground shadow-sm transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <BookOpen className="size-4" />
                Ouvrir la documentation
              </Link>
              <Link
                to="/support"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand/50 sm:w-auto"
              >
                <LifeBuoy className="size-4 text-brand" />
                Centre d'aide
              </Link>
            </div>
          </div>

          {/* Simulation d'une page de documentation */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2.5">
                <span className="size-2.5 rounded-full bg-coral" />
                <span className="size-2.5 rounded-full bg-amber" />
                <span className="size-2.5 rounded-full bg-emerald" />
                <span className="ml-3 truncate rounded-md bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  docs.stafprint.com/docs/spc-meet/premiere-connexion
                </span>
              </div>

              <div className="grid grid-cols-[110px_1fr] gap-3 p-4 sm:grid-cols-[130px_1fr_90px]">
                <aside className="space-y-2 rounded-xl bg-muted/70 p-3">
                  <p className="text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Sommaire
                  </p>
                  <div className="h-2 w-4/5 rounded bg-brand/40" />
                  <div className="h-2 w-3/5 rounded bg-border" />
                  <div className="h-2 w-full rounded bg-border" />
                  <div className="h-2 w-2/3 rounded bg-border" />
                  <div className="mt-3 h-2 w-1/2 rounded bg-border" />
                  <div className="h-2 w-4/5 rounded bg-border" />
                </aside>

                <div className="space-y-2.5">
                  <div className="h-3.5 w-4/5 rounded bg-foreground/80" />
                  <div className="h-2 w-full rounded bg-border" />
                  <div className="h-2 w-11/12 rounded bg-border" />
                  <div className="rounded-lg border border-info/30 bg-info/10 p-2.5">
                    <div className="h-2 w-1/3 rounded bg-info/60" />
                    <div className="mt-1.5 h-2 w-4/5 rounded bg-info/25" />
                  </div>
                  <div className="rounded-lg bg-[var(--code-bg)] p-2.5">
                    <div className="h-2 w-2/3 rounded bg-brand/50" />
                    <div className="mt-1.5 h-2 w-1/2 rounded bg-emerald/50" />
                    <div className="mt-1.5 h-2 w-3/5 rounded bg-white/20" />
                  </div>
                  <div className="h-2 w-full rounded bg-border" />
                  <div className="h-2 w-3/4 rounded bg-border" />
                </div>

                <aside className="hidden space-y-2 sm:block">
                  <p className="text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Sur cette page
                  </p>
                  <div className="h-2 w-full rounded bg-brand/40" />
                  <div className="h-2 w-4/5 rounded bg-border" />
                  <div className="h-2 w-3/5 rounded bg-border" />
                </aside>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 shadow-lg sm:flex">
              <Search className="size-4 text-brand" />
              <span className="text-xs text-muted-foreground">Recherche ⌘K sur {total} articles</span>
            </div>
          </div>
        </section>

        <section className="pb-6">
          <h2 className="font-display text-2xl font-semibold text-foreground">Espaces</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {docsRegistry.map((space) => {
              const Icon = SPACE_ICON[space.id] ?? BookOpen;
              return (
                <Link
                  key={space.id}
                  to="/docs/$space/$slug"
                  params={firstArticleParams(space.id)}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lg"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                    {space.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {space.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    {articleCount(space)} articles
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}

            <Link
              to="/support"
              className="group flex flex-col rounded-2xl border border-brand/30 bg-brand/8 p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-brand text-brand-foreground">
                <LifeBuoy className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                Centre d'aide
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Commandes, facturation, compte, confidentialité et problèmes techniques : les
                réponses de l'équipe support.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                Obtenir de l'aide
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-border py-8">
        <p className="mx-auto max-w-6xl px-4 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} STAF PRINT CENTER — Porto-Novo, Bénin. Documentation interne
          et publique.
        </p>
      </footer>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
