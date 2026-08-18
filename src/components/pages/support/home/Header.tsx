import { Link } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { ThemeToggle } from "@/components/docs/ThemeToggle";

export function SupportHeader() {
  return (
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
  );
}