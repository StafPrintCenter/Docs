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

  const vote = useCallback(
    (value: "up" | "down") => save({ vote: value, at: new Date().toISOString() }),
    [save],
  );

  const addComment = useCallback(
    (comment: string) =>
      save({ vote: feedback?.vote ?? "down", comment, at: new Date().toISOString() }),
    [feedback?.vote, save],
  );

  return { feedback, vote, addComment };
}
