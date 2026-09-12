export interface SupportArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  content: string;
}

export type SupportArticleSource = Omit<SupportArticle, "category" | "readTime">;

export interface SupportCategory {
  id: string;
  title: string;
  description: string;
  icon: "careers" | "tools" | "projects" | "account" | "training" | "services" | "gamepad";
}
