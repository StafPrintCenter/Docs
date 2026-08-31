import { spaces } from "@/content/docs";
import {
  getDocSpaceMeta,
  resolveLocalDocSpaceId,
  type APIEcosystemSite,
} from "@/data/ecosystem";
import type { DocArticle, DocSpace, DocSpaceId, SearchHit } from "@/types/docs";

/**
 * Le contenu vit dans `src/content/docs/<space>/<groupe>/<article>.ts`.
 */
export const docsRegistry: DocSpace[] = spaces;

export function applyDocSpaceApiData(sites: APIEcosystemSite[] = []): void {
  const overrides = new Map<string, Partial<DocSpace>>();

  for (const site of sites) {
    const spaceId = resolveLocalDocSpaceId(site.logoKey);
    if (!spaceId) continue;

    overrides.set(spaceId, {
      id: spaceId,
      name: site.name,
      description: site.description,
      url: site.url,
      status: site.status,
    });
  }

  for (const space of docsRegistry) {
    const override = overrides.get(space.id);
    if (!override) continue;
    Object.assign(space, override);
  }
}

export function getSpace(id: string): DocSpace | undefined {
  const space = docsRegistry.find((s) => s.id === id);
  return space ? getDocSpaceMeta(space.id, space) : undefined;
}

export interface ResolvedArticle {
  space: DocSpace;
  groupTitle: string;
  article: DocArticle;
  prev?: { space: DocSpaceId; slug: string; title: string } | undefined;
  next?: { space: DocSpaceId; slug: string; title: string } | undefined;
}

export function spaceArticles(space: DocSpace): DocArticle[] {
  return space.groups.flatMap((g) => g.articles);
}

export function articleCount(space: DocSpace): number {
  return spaceArticles(space).length;
}

export function resolveArticle(spaceId: string, slug: string): ResolvedArticle | undefined {
  const space = getSpace(spaceId);
  if (!space) return undefined;
  const flat = spaceArticles(space);
  const index = flat.findIndex((art) => art.slug === slug);
  if (index === -1) return undefined;
  const article = flat[index]!;
  const group = space.groups.find((g) => g.articles.some((art) => art.slug === slug))!;
  const prevArticle = flat[index - 1];
  const nextArticle = flat[index + 1];
  return {
    space,
    groupTitle: group.title,
    article,
    prev: prevArticle
      ? { space: space.id, slug: prevArticle.slug, title: prevArticle.title }
      : undefined,
    next: nextArticle
      ? { space: space.id, slug: nextArticle.slug, title: nextArticle.title }
      : undefined,
  };
}

export function firstArticleParams(spaceId: DocSpaceId): { space: string; slug: string } {
  const space = getSpace(spaceId);
  return { space: spaceId, slug: space?.groups[0]?.articles[0]?.slug ?? "" };
}

export const allHits: SearchHit[] = docsRegistry.flatMap((space) =>
  space.groups.flatMap((group) =>
    group.articles.map((article) => ({
      spaceId: space.id,
      spaceName: space.name,
      groupTitle: group.title,
      article,
      score: 0,
    })),
  ),
);

export interface SpaceNavEntry {
  id: DocSpaceId;
  label: string;
  slug: string;
}

export const spaceNav: SpaceNavEntry[] = docsRegistry.flatMap((space) => {
  const slug = space.groups[0]?.articles[0]?.slug;
  return slug ? [{ id: space.id, label: space.name, slug }] : [];
});

export type { DocSpaceId };
