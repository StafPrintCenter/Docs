import type { SupportArticle, SupportCategory } from "@/types/support";
import { article as a0 } from "./postuler-a-une-offre-d-emploi";
import { article as a1 } from "./suivre-une-candidature";
import { article as a2 } from "./faire-une-demande-de-stage";
import { article as a3 } from "./brouillons-automatiques-candidature";
import { article as a4 } from "./raccourcir-un-lien";

export const category: SupportCategory = {
  id: "carrer",
  title: "Emploi & stage",
  description: "Postuler et suivre sa candidature.",
  icon: "account",
};

export const articles: SupportArticle[] = [a0, a1, a2, a3, a4];

export default { category, articles };
