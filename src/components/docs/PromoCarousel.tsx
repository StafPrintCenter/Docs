import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { promotions } from "@/data/promotions";

export function PromoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = promotions[index];

  useEffect(() => {
    if (paused || promotions.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((previous) => (previous + 1) % promotions.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused]);

  if (!current) return null;

  const goTo = (position: number) => setIndex((position + promotions.length) % promotions.length);

  return (
    <section
      aria-label="À découvrir dans l’écosystème STAF"
      aria-roledescription="carrousel"
      className="mt-6 min-w-0 border-t border-border pt-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-semibold uppercase text-muted-foreground">À découvrir</p>
        <span className="text-[11px] tabular-nums text-muted-foreground">
          {index + 1} / {promotions.length}
        </span>
      </div>

      <div className="mt-3 min-h-44 border-l-2 border-brand bg-muted/60 p-4" aria-live="off">
        <p className="text-[11px] font-medium uppercase text-brand-strong">
          {current.category === "Partenaire" ? "Partenaire · " : "STAF · "}{current.sponsor}
        </p>
        <h3 className="mt-3 font-display text-base font-semibold leading-snug text-foreground">
          {current.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{current.description}</p>
        <a
          href={current.url}
          target="_blank"
          rel={`noopener noreferrer${current.category === "Partenaire" ? " sponsored" : ""}`}
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-strong hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {current.action} <ArrowUpRight className="size-3.5" aria-hidden="true" />
          <span className="sr-only">(nouvel onglet)</span>
        </a>
      </div>

      {promotions.length > 1 && (
        <div className="mt-3 flex items-center justify-between gap-1">
          <Button variant="ghost" size="icon" className="size-8" onClick={() => goTo(index - 1)} aria-label="Annonce précédente" title="Annonce précédente">
            <ChevronLeft aria-hidden="true" />
          </Button>
          <div className="flex items-center gap-1" aria-label="Choisir une annonce">
            {promotions.map((promotion, position) => (
              <Button
                key={promotion.id}
                variant="ghost"
                size="icon"
                className="size-7"
                onClick={() => goTo(position)}
                aria-label={`Afficher l’annonce ${promotion.sponsor}`}
                aria-current={index === position ? "true" : undefined}
                title={promotion.sponsor}
              >
                <span className={`size-1.5 rounded-full ${index === position ? "bg-brand" : "bg-muted-foreground/50"}`} />
              </Button>
            ))}
          </div>
          <Button variant="ghost" size="icon" className="size-8" onClick={() => goTo(index + 1)} aria-label="Annonce suivante" title="Annonce suivante">
            <ChevronRight aria-hidden="true" />
          </Button>
        </div>
      )}
    </section>
  );
}
