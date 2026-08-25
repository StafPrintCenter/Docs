import { Link } from "@tanstack/react-router";
import { ArrowRight, Construction, LifeBuoy } from "lucide-react";
import logos from "@/assets/logos.json";
import { docsRegistry, articleCount, firstArticleParams } from "@/data/content/docs";
import { totalSupportArticlesCount } from "@/data/content/support";

type LogoKeys = keyof typeof logos;

// Récupération dynamique des paires de logos
function getSpaceLogos(spaceId: string) {
  const key = spaceId === "landing" ? "base" : spaceId;
  const darkKey = `${key}W`;

  const lightLogo = (logos as Record<string, string>)[key] ?? logos.base;
  const darkLogo = (logos as Record<string, string>)[darkKey] ?? logos.baseW ?? lightLogo;

  return { lightLogo, darkLogo };
}

export function SpacesSection() {
  const supportCount = totalSupportArticlesCount();

  return (
    <section className="pb-12">
      <h2 className="font-display text-2xl font-semibold text-foreground">Espaces</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {docsRegistry.map((space) => {
          const { lightLogo, darkLogo } = getSpaceLogos(space.id);
          const count = articleCount(space);
          const isBuilding = space.status === "building";

          return (
            <Link
              key={space.id}
              to="/docs/$space/$slug"
              params={firstArticleParams(space.id)}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid size-10 place-items-center overflow-hidden rounded-xl bg-brand/10 p-1.5">
                  {/* Logo Thème Clair */}
                  <img
                    src={lightLogo}
                    alt={space.name}
                    className="size-full object-contain dark:hidden"
                    onError={(e) => {
                      e.currentTarget.src = logos.base;
                    }}
                  />
                  {/* Logo Thème Sombre */}
                  <img
                    src={darkLogo}
                    alt={space.name}
                    className="hidden size-full object-contain dark:block"
                    onError={(e) => {
                      e.currentTarget.src = logos.baseW;
                    }}
                  />
                </span>

                {isBuilding && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                    <Construction size={12} /> En construction
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                {space.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {space.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                {count} {count > 1 ? "articles" : "article"}
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
            Commandes, facturation, compte, confidentialité et problèmes techniques : les réponses de
            l'équipe support.
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
            {supportCount} {supportCount > 1 ? "articles" : "article"} d'aide
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </section>
  );
}