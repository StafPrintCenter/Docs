import { useCallback, useEffect, useMemo, useState } from "react";
import { allHits } from "@/data/content/docs";
import type { SearchHit } from "@/types/docs";

const HISTORY_KEY = "staf-docs-search-history";

function scoreHit(hit: SearchHit, q: string): number {
  const title = hit.article.title.toLowerCase();
  const desc = hit.article.description.toLowerCase();
  const tags = hit.article.tags.join(" ").toLowerCase();
  const platform = hit.spaceName.toLowerCase();
  let score = 0;
  if (title.startsWith(q)) score += 60;
  if (title.includes(q)) score += 40;
  if (tags.includes(q)) score += 20;
  if (desc.includes(q)) score += 12;
  if (platform.includes(q)) score += 8;
  if (hit.groupTitle.toLowerCase().includes(q)) score += 6;
  return score;
}

export function useDocsSearch(query: string) {
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const terms = q.split(/\s+/);
    return allHits
      .map((hit) => ({
        ...hit,
        score: terms.reduce((acc, term) => acc + scoreHit(hit, term), 0),
      }))
      .filter((hit) => hit.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
  }, [query]);

  return results;
}

export function useSearchHistory() {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    try {
      setHistory(JSON.parse(window.localStorage.getItem(HISTORY_KEY) ?? "[]") as string[]);
    } catch {
      setHistory([]);
    }
  }, []);

  const push = useCallback((term: string) => {
    const clean = term.trim();
    if (!clean) return;
    setHistory((prev) => {
      const next = [clean, ...prev.filter((t) => t !== clean)].slice(0, 6);
      try {
        window.localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
      } catch {
        /* noop */
      }
      return next;
    });
  }, []);

  const clear = useCallback(() => {
    setHistory([]);
    try {
      window.localStorage.removeItem(HISTORY_KEY);
    } catch {
      /* noop */
    }
  }, []);

  return { history, push, clear };
}
