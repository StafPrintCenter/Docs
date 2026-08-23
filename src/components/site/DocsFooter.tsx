import { SITE } from "@/data/site";

export function DocsFooter() {
  return (
    <footer className="mt-auto mx-auto border-t border-border bg-background/50 py-8 backdrop-blur-xs">
      <p className="mx-auto max-w-6xl px-4 text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} SPC Docs · Documentation de {" "}
        <a
          href={SITE.frontUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-4 hover:text-foreground transition-colors cursor-pointer"
        >
          {SITE.name}
        </a>.
      </p>
    </footer>
  );
}