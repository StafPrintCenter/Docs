import { Link, useNavigate } from "@tanstack/react-router";
import { Bookmark, LifeBuoy, Menu, Printer, Search } from "lucide-react";
import { spaceNav } from "@/data/docs-registry";
import { ThemeToggle } from "@/components/docs/ThemeToggle";

interface DocsHeaderProps {
  activeSpaceId?: string;
  onOpenSearch: () => void;
  onToggleSidebar?: () => void;
}

export function DocsHeader({ activeSpaceId, onOpenSearch, onToggleSidebar }: DocsHeaderProps) {
  const navigate = useNavigate();

  const goTo = (id: string) => {
    const entry = spaceNav.find((p) => p.id === id);
    if (!entry) return;
    void navigate({ to: "/docs/$space/$slug", params: { space: entry.id, slug: entry.slug } });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-3 px-4 sm:px-6">
        {onToggleSidebar && (
          <button
            type="button"
            onClick={onToggleSidebar}
            className="rounded-md p-2 text-muted-foreground hover:bg-muted lg:hidden"
            aria-label="Ouvrir la navigation"
          >
            <Menu className="size-5" />
          </button>
        )}

        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg bg-brand text-brand-foreground shadow-sm">
            <Printer className="size-4.5" />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-[15px] font-semibold tracking-tight text-foreground">
              STAF Docs
            </span>
            <span className="block text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Staf Print Center
            </span>
          </span>
        </Link>

        <nav
          aria-label="Espaces de documentation"
          className="ml-2 hidden items-center gap-1 rounded-xl border border-border bg-muted/60 p-1 xl:flex"
        >
          {spaceNav.map((entry) => {
            const isActive = entry.id === activeSpaceId;
            return (
              <Link
                key={entry.id}
                to="/docs/$space/$slug"
                params={{ space: entry.id, slug: entry.slug }}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${isActive
                  ? "bg-brand text-brand-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {entry.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Link
            to="/support"
            className="hidden h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground sm:inline-flex"
          >
            <LifeBuoy className="size-4 text-brand" />
            Aide
          </Link>
          <Link
            to="/saves"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
          >
            <Bookmark className="size-4 text-brand" />
            <span className="hidden sm:inline">Enregistrés</span>
          </Link>
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground sm:w-48"
          >
            <Search className="size-4 text-brand" />
            <span className="hidden flex-1 text-left sm:inline">Rechercher…</span>
            <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] sm:inline">
              ⌘K
            </kbd>
          </button>
          <ThemeToggle />
        </div>
      </div>

      <div className="border-t border-border/70 px-4 py-2 xl:hidden">
        <select
          aria-label="Choisir un espace"
          value={activeSpaceId ?? ""}
          onChange={(e) => goTo(e.target.value)}
          className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground"
        >
          <option value="" disabled>
            Choisir un espace
          </option>
          {spaceNav.map((entry) => (
            <option key={entry.id} value={entry.id}>
              {entry.label}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
