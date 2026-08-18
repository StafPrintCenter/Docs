import { useCallback, useEffect, useState } from "react";

export interface SavedArticle {
  key: string;
  title: string;
  description: string;
  spaceId: string;
  spaceName: string;
  slug: string;
  savedAt: number;
}

const STORAGE_KEY = "staf-docs:saved-articles";
export const RETENTION_DAYS = 90;
const RETENTION_MS = RETENTION_DAYS * 24 * 60 * 60 * 1000;
const EVENT = "staf-docs:saved-changed";

function read(): SavedArticle[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SavedArticle[];
    const now = Date.now();
    const fresh = parsed.filter((item) => now - item.savedAt < RETENTION_MS);
    if (fresh.length !== parsed.length) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    }
    return fresh;
  } catch {
    return [];
  }
}

function write(items: SavedArticle[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(EVENT));
}

export function expiresAt(item: SavedArticle) {
  return new Date(item.savedAt + RETENTION_MS);
}

export function useSavedArticles() {
  const [items, setItems] = useState<SavedArticle[]>([]);

  useEffect(() => {
    const sync = () => setItems(read());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const save = useCallback((item: Omit<SavedArticle, "savedAt">) => {
    const next = read().filter((i) => i.key !== item.key);
    write([{ ...item, savedAt: Date.now() }, ...next]);
  }, []);

  const remove = useCallback((key: string) => {
    write(read().filter((i) => i.key !== key));
  }, []);

  const clear = useCallback(() => write([]), []);

  const isSaved = useCallback((key: string) => items.some((i) => i.key === key), [items]);

  return { items, save, remove, clear, isSaved };
}
