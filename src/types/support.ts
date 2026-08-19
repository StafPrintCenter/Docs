export interface SupportArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  content: string;
}

export interface SupportCategory {
  id: string;
  title: string;
  description: string;
  icon: "account" | "billing" | "orders" | "privacy" | "technical" | "contact";
}
