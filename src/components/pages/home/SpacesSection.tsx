import { Link } from "@tanstack/react-router";
import { ArrowRight, Construction, ExternalLink, LifeBuoy } from "lucide-react";
import { useEcosystemSitesStore } from "@/stores/useEcosystemSitesStore";
import { getSpace, articleCount, firstArticleParams } from "@/data/content/docs";
import { totalSupportArticlesCount } from "@/data/content/support";
import {
  filterPublicEcosystemSites,
  isLocalDocSpace,
  resolveLocalDocSpaceId,
  type APIEcosystemSite,
  LOCAL_DOC_SPACE_IDS,
} from "@/data/ecosystem";
import { SpacesSectionSkeleton } from "./Skeleton";

export function SpacesSection() {
  const { sites = [], isLoading } = useEcosystemSitesStore();
  const supportCount = totalSupportArticlesCount();

  const filteredSites = filterPublicEcosystemSites(sites);

  const sortedSites = [...filteredSites].sort((a, b) => {
    const aIsLocal = isLocalDocSpace(a);
    const bIsLocal = isLocalDocSpace(b);
    return Number(bIsLocal) - Number(aIsLocal);
  });

  const renderSiteCard = (site: APIEcosystemSite) => {
    const spaceId = resolveLocalDocSpaceId(site.logoKey);
    const isLocalSpace = Boolean(spaceId && LOCAL_DOC_SPACE_IDS.includes(spaceId));

    // Récupérer l'espace local pour compter les articles
    const localSpace = isLocalSpace ? getSpace(spaceId!) : null;
    const articleCountValue = localSpace ? articleCount(localSpace) : 0;

    // Définition des URLs des variants avec fallback
    const logoMc = site.logoVariants?.mc || site.logoUrl;
    const logoMw = site.logoVariants?.mw || logoMc;

    const cardContent = (
      <>
        <div className="flex items-center justify-between gap-3">
          <span className="grid size-10 place-items-center overflow-hidden rounded-xl bg-brand/10 p-1.5">
            {/* Logo pour Thème Clair (MC) */}
            <img
              src={logoMc}
              alt={site.name}
              className="size-full object-contain dark:hidden"
              onError={(e) => {
                e.currentTarget.src = site.logoUrl;
              }}
            />
            {/* Logo pour Thème Sombre (MW) */}
            <img
              src={logoMw}
              alt={site.name}
              className="hidden size-full object-contain dark:block"
              onError={(e) => {
                e.currentTarget.src = site.logoUrl;
              }}
            />
          </span>

          {site.status === "building" && (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
              <Construction size={12} /> En construction
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
          {site.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {site.description}
        </p>

        {isLocalSpace && articleCountValue > 0 ? (
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
            {articleCountValue} {articleCountValue > 1 ? "articles" : "article"}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        ) : !isLocalSpace ? (
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
            Visiter
            <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        ) : null}
      </>
    );

    // Les espaces de docs locaux ont un lien vers la documentation
    if (isLocalSpace && localSpace) {
      return (
        <Link
          key={site.id}
          to="/docs/$space/$slug"
          params={firstArticleParams(spaceId as any)}
          className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lg"
        >
          {cardContent}
        </Link>
      );
    }

    // Les autres sites pointent directement vers leur URL
    return (
      <a
        key={site.id}
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lg"
      >
        {cardContent}
      </a>
    );
  };

  return (
    <section className="pb-12">
      <h2 className="font-display text-2xl font-semibold text-foreground">Espaces</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {isLoading ? <SpacesSectionSkeleton /> : sortedSites.map(renderSiteCard)}

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