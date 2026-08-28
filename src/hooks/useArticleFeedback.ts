import { useCallback, useEffect, useState } from "react";
import type { ArticleFeedback } from "@/types/docs";

const KEY = "staf-docs-feedback";

type Store = Record<string, ArticleFeedback>;

function read(): Store {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? "{}") as Store;
  } catch {
    return {};
  }
}

/**
 * Sert uniquement de cache local pour l'UI (savoir si l'utilisateur a déjà
 * voté sur cet article, pour ne plus lui montrer les boutons) — la vraie
 * source de vérité du feedback est désormais l'API, ce hook ne fait plus
 * qu'enregistrer le résultat final d'un envoi réussi.
 */
export function useArticleFeedback(articleKey: string) {
  const [feedback, setFeedback] = useState<ArticleFeedback | null>(null);

  useEffect(() => {
    setFeedback(read()[articleKey] ?? null);
  }, [articleKey]);

  const save = useCallback(
    (next: ArticleFeedback) => {
      const store = read();
      store[articleKey] = next;
      try {
        window.localStorage.setItem(KEY, JSON.stringify(store));
      } catch {
        /* stockage indisponible */
      }
      setFeedback(next);
    },
    [articleKey],
  );

  return { feedback, save };
}
