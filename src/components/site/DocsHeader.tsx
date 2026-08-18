import { Link } from "@tanstack/react-router";
import { Bookmark, LifeBuoy, Printer, Search } from "lucide-react";
import { ThemeToggle } from "@/components/docs/ThemeToggle";

interface DocsHeaderProps {
  onSearchClick: () => void;
}

export function DocsHeader({ onSearchClick }: DocsHeaderProps) {
  return (
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
            to="/saves"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
          >
            <Bookmark className="size-4 text-brand" />
            <span className="hidden sm:inline">Enregistrés</span>
          </Link>
          <button
            type="button"
            onClick={onSearchClick}
            className="flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground cursor-pointer"
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
  );
}