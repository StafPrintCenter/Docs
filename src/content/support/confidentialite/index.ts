import type { SupportArticle, SupportCategory } from "@/types/support";
import { article as a0 } from "./donnees-personnelles";

export const category: SupportCategory = {
  id: "confidentialite",
  title: "Confidentialité et données",
  description: "Données collectées, stockage local, suppression de compte.",
  icon: "privacy",
};

export const articles: SupportArticle[] = [a0];

export default { category, articles };
