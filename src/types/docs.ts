export type DocSpaceId = string;

export type ArticleStatus = "new" | "updated" | "beta" | "stable";

export interface DocArticle {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status: ArticleStatus;
  updatedAt: string;
  content: string;
}

export interface DocGroup {
  id: string;
  title: string;
  articles: DocArticle[];
}

/** Un espace = une plateforme (SPC Meet, Site Vitrine, SPC Arcade, …) */
export interface DocSpace {
  id: DocSpaceId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  groups: DocGroup[];
}

export interface SearchHit {
  spaceId: DocSpaceId;
  spaceName: string;
  groupTitle: string;
  article: DocArticle;
  score: number;
}

export interface ArticleFeedback {
  vote: "up" | "down";
  comment?: string;
  at: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}
