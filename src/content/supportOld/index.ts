import type { SupportArticle, SupportCategory } from "@/types/support";
import { category as c6, articles as c6a } from "./compte";
import { category as c0, articles as c0a } from "./carrers";
import { category as c1, articles as c1a } from "./paiement";
import { category as c2, articles as c2a } from "./commandes";
import { category as c3, articles as c3a } from "./confidentialite";
import { category as c4, articles as c4a } from "./technique";
import { category as c5, articles as c5a } from "./contact";

export const categories: SupportCategory[] = [c0, c1, c2, c3, c4, c5, c6];

export const articles: SupportArticle[] = [
  ...c0a,
  ...c1a,
  ...c2a,
  ...c3a,
  ...c4a,
  ...c5a,
  ...c6a,
];
