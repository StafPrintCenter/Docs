import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpDown, Construction, ExternalLink, LifeBuoy, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEcosystemSitesStore } from "@/stores/useEcosystemSitesStore";
import { getSpace, articleCount, firstArticleParams, resolveDocSpaceIdForSite } from "@/data/content/docs";
import { totalSupportArticlesCount } from "@/data/content/support";
import { filterPublicEcosystemSites, type APIEcosystemSite } from "@/data/ecosystem";
import { SpacesSectionSkeleton } from "./Skeleton";

export function SpacesSection() {
  const { sites = [], isLoading } = useEcosystemSitesStore();
  const supportCount = totalSupportArticlesCount();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | APIEcosystemSite["status"]>("all");
  const [sortOrder, setSortOrder] = useState<"articles-desc" | "articles-asc" | "name">(
    "articles-desc",
  );

  const visibleSites = filterPublicEcosystemSites(sites).filter((site) => {
    const normalizedSearch = search.trim().toLocaleLowerCase();
    const matchesSearch =
      !normalizedSearch ||
      `${site.name} ${site.description}`.toLocaleLowerCase().includes(normalizedSearch);
    const matchesStatus = statusFilter === "all" || site.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const sortedSites = [...visibleSites].sort((a, b) => {
    const aArticleCount = getSiteArticleCount(a);
    const bArticleCount = getSiteArticleCount(b);

    if (sortOrder === "articles-asc") return aArticleCount - bArticleCount;
    if (sortOrder === "name") return a.name.localeCompare(b.name, "fr");
    return bArticleCount - aArticleCount;
  });

  const renderSiteCard = (site: APIEcosystemSite) => {
    const spaceId = resolveDocSpaceIdForSite(site);

    // Récupérer l'espace local pour compter les articles
    const localSpace = spaceId ? getSpace(spaceId) : null;
    const articleCountValue = localSpace ? articleCount(localSpace) : 0;

    // Condition pour déterminer si on pointe vers la doc interne
    const hasLocalDocs = Boolean(localSpace && articleCountValue > 0);

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

        <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{site.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {site.description}
        </p>

        {hasLocalDocs ? (
          /* Option 1: Espace local + présence d'articles */
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
            {articleCountValue} {articleCountValue > 1 ? "articles" : "article"}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        ) : (
          /* Option 2: Site externe OU espace local sans article -> "Visiter" */
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
            Visiter
            <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        )}
      </>
    );

    // Redirection vers la doc interne uniquement si des articles sont présents
    if (hasLocalDocs) {
      return (
        <Link
          key={site.id}
          to="/docs/$space/$slug"
          params={firstArticleParams(spaceId!)}
          className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lg"
        >
          {cardContent}
        </Link>
      );
    }

    // Redirection vers le site externe (site non local ou espace local à 0 article)
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

  function getSiteArticleCount(site: APIEcosystemSite): number {
    const spaceId = resolveDocSpaceIdForSite(site);
    const localSpace = spaceId ? getSpace(spaceId) : undefined;
    return localSpace ? articleCount(localSpace) : 0;
  }

  return (
    <section className="pb-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Espaces ({isLoading ? "..." : sortedSites.length})
        </h2>
        <div className="grid gap-3 sm:grid-cols-[minmax(14rem,1fr)_auto_auto]">
          <label className="relative block">
            <span className="sr-only">Rechercher un espace</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Rechercher un espace"
              className="pl-9 bg-card"
            />
          </label>
          <label>
            <span className="sr-only">Filtrer par statut</span>
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value as typeof statusFilter)}
              className="h-10 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground"
            >
              <option value="all">Tous les statuts</option>
              <option value="available">Disponible</option>
              <option value="building">Bientôt</option>
            </select>
          </label>
          <label>
            <span className="sr-only">Trier les espaces</span>
            <span className="relative block">
              <ArrowUpDown className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value as typeof sortOrder)}
                className="h-10 w-full rounded-md border border-input bg-card pl-9 pr-3 text-sm text-foreground"
              >
                <option value="articles-desc">Plus d'articles</option>
                <option value="articles-asc">Moins d'articles</option>
                <option value="name">Nom</option>
              </select>
            </span>
          </label>
        </div>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {isLoading ? <SpacesSectionSkeleton /> : sortedSites.map(renderSiteCard)}

        <Link
          to="/support"
          className="group flex flex-col rounded-2xl border border-brand/30 bg-brand/8 p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-brand text-brand-foreground">
            <LifeBuoy className="size-5" />
          </span>
          <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Centre d'aide</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            Commandes, facturation, compte, confidentialité et problèmes techniques : les réponses
            de l'équipe support.
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
