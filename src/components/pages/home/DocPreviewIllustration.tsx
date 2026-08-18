import { Search } from "lucide-react";

interface DocPreviewIllustrationProps {
  docUrl: string;
  totalArticles: number;
}

export function DocPreviewIllustration({ docUrl, totalArticles }: DocPreviewIllustrationProps) {
  return (
    <div className="relative mx-auto w-full max-w-md min-w-0 lg:mx-0 lg:max-w-none">
      <div className="absolute -inset-10 -z-10 rounded-full bg-primary/10 blur-3xl" />

      <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
        {/* Barre navigateur */}
        <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-coral shrink-0" />
          <span className="size-2.5 rounded-full bg-amber shrink-0" />
          <span className="size-2.5 rounded-full bg-emerald shrink-0" />
          <span className="ml-3 min-w-0 flex-1 truncate rounded-md bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground block">
            {docUrl}
          </span>
        </div>

        {/* Layout intérieur */}
        <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-[110px_1fr] md:grid-cols-[130px_1fr_90px]">
          {/* Sommaire gauche */}
          <aside className="hidden space-y-2 rounded-xl bg-muted/70 p-3 sm:block">
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

          {/* Contenu principal */}
          <div className="min-w-0 space-y-2.5">
            <div className="h-3.5 w-4/5 rounded bg-foreground/80" />
            <div className="h-2 w-full rounded bg-border" />
            <div className="h-2 w-11/12 rounded bg-border" />
            <div className="rounded-lg border border-info/30 bg-info/10 p-2.5">
              <div className="h-2 w-1/3 rounded bg-info/60" />
              <div className="mt-1.5 h-2 w-4/5 rounded bg-info/25" />
            </div>
            <div className="rounded-lg bg-code p-2.5">
              <div className="h-2 w-2/3 rounded bg-brand/50" />
              <div className="mt-1.5 h-2 w-1/2 rounded bg-emerald/50" />
              <div className="mt-1.5 h-2 w-3/5 rounded bg-white/20" />
            </div>
            <div className="h-2 w-full rounded bg-border" />
            <div className="h-2 w-3/4 rounded bg-border" />
          </div>

          {/* Sommaire droit */}
          <aside className="hidden space-y-2 md:block">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
              Sur cette page
            </p>
            <div className="h-2 w-full rounded bg-brand/40" />
            <div className="h-2 w-4/5 rounded bg-border" />
            <div className="h-2 w-3/5 rounded bg-border" />
          </aside>
        </div>
      </div>

      {/* Badge flottant */}
      <div className="absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 shadow-lg sm:flex">
        <Search className="size-4 text-brand" />
        <span className="text-xs text-muted-foreground">
          Recherche ⌘K sur {totalArticles} articles
        </span>
      </div>
    </div>
  );
}