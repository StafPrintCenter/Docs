import { Link } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { ThemeToggle } from "@/components/docs/ThemeToggle";

export function SupportDetailHeader() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/support" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg bg-brand text-brand-foreground shadow-sm">
            <Printer className="size-4.5" />
          </span>
          <span className="font-display text-[15px] font-semibold text-foreground">
            Centre d'aide
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}