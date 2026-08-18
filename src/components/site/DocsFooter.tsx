import { SITE } from "@/data/site";

export function DocsFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-background/50 py-8 backdrop-blur-xs">
      <p className="mx-auto max-w-6xl px-4 text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} {SITE.name} · Documentation interne et publique.
      </p>
    </footer>
  );
}