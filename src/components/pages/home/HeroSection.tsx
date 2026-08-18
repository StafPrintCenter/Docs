import { Link } from "@tanstack/react-router";
import { BookOpen, LifeBuoy } from "lucide-react";
import { SITE } from "@/data/site";
import { firstArticleParams } from "@/data/docs-registry";
import { DocPreviewIllustration } from "./DocPreviewIllustration";

interface HeroSectionProps {
  totalArticles: number;
}

export function HeroSection({ totalArticles }: HeroSectionProps) {
  const docUrl = `${SITE.docsUrl}/docs/site-vitrine/demander-un-devis`;

  return (
    <section className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-10">
      <div className="flex flex-col items-start text-left">
        <a
          href={SITE.frontUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <BookOpen className="h-3.5 w-3.5 text-primary" />
          La doc de {SITE.name} · {totalArticles} articles
        </a>

        <h1 className="mt-7 text-balance text-4xl font-extralight leading-[1.08] tracking-tight sm:text-6xl">
          La <span className="text-primary">documentation</span>
          <br />
          de l'écosystème <span className="font-black">{SITE.name}.</span>
        </h1>

        <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          Un espace par plateforme, sans mélange : SPC Meet, Site Vitrine, SPC Arcade, Instructor Hub
          et Student Hub. Et un centre d'aide pour tout le reste.
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

      <DocPreviewIllustration docUrl={docUrl} totalArticles={totalArticles} />
    </section>
  );
}