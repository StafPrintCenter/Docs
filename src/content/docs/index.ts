import type { DocArticle, DocGroup, DocGroupMeta, DocSpace, DocSpaceMeta } from "@/types/docs";

/**
 * Découverte automatique du contenu (façon Docusaurus).
 *
 * Arborescence :
 *   src/content/docs/<espace>/index.ts                      → métadonnées de l'espace
 *   src/content/docs/<espace>/<N. groupe>/index.ts          → métadonnées du groupe
 *   src/content/docs/<espace>/<N. groupe>/<N. article>.ts   → article
 *
 * Le préfixe numérique (« 1. », « 2. » …) définit l'ordre d'affichage
 * et n'apparaît jamais dans les URLs.
 */

const spaceModules = import.meta.glob<{ space: DocSpaceMeta }>("./*/index.ts", { eager: true });
const groupModules = import.meta.glob<{ group: DocGroupMeta }>("./*/*/index.ts", { eager: true });
const articleModules = import.meta.glob<{ article: DocArticle }>("./*/*/*.ts", { eager: true });

/** Extrait le préfixe numérique d'un segment (« 2. salles » → 2). */
function orderOf(segment: string): number {
  const match = /^(\d+)\s*\.\s*/.exec(segment);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function segments(path: string): string[] {
  return path.replace(/^\.\//, "").replace(/\.ts$/, "").split("/");
}

interface GroupBucket {
  order: number;
  meta: DocGroupMeta;
  articles: { order: number; article: DocArticle }[];
}

const bySpace = new Map<string, Map<string, GroupBucket>>();

for (const [path, mod] of Object.entries(groupModules)) {
  const [spaceDir, groupDir] = segments(path);
  if (!spaceDir || !groupDir) continue;
  const groups = bySpace.get(spaceDir) ?? new Map<string, GroupBucket>();
  groups.set(groupDir, { order: orderOf(groupDir), meta: mod.group, articles: [] });
  bySpace.set(spaceDir, groups);
}

for (const [path, mod] of Object.entries(articleModules)) {
  const parts = segments(path);
  if (parts.length !== 3) continue;
  const [spaceDir, groupDir, fileName] = parts;
  if (!spaceDir || !groupDir || !fileName || fileName === "index") continue;
  const bucket = bySpace.get(spaceDir)?.get(groupDir);
  if (!bucket || !mod.article) continue;
  bucket.articles.push({ order: orderOf(fileName), article: mod.article });
}

export const spaces: DocSpace[] = Object.entries(spaceModules)
  .map(([path, mod]) => {
    const spaceDir = segments(path)[0]!;
    const groups: DocGroup[] = [...(bySpace.get(spaceDir)?.values() ?? [])]
      .sort((a, b) => a.order - b.order)
      .map((bucket) => ({
        ...bucket.meta,
        articles: bucket.articles.sort((a, b) => a.order - b.order).map((a) => a.article),
      }));
    return { dir: spaceDir, space: { ...mod.space, groups } };
  })
  .sort((a, b) => orderOf(a.dir) - orderOf(b.dir) || a.dir.localeCompare(b.dir))
  .map((entry) => entry.space);

export default spaces;
