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

/** Métadonnées d'un groupe */
export interface DocGroupMeta {
  id: string;
  title: string;
}

export interface DocGroup extends DocGroupMeta {
  articles: DocArticle[];
}

/** Métadonnées d'un espace */
export interface DocSpaceMeta {
  id: DocSpaceId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url?: string;
  status?: "available" | "building";
}

export interface DocSpace extends DocSpaceMeta {
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
