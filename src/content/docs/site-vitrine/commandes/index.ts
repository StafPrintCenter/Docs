import type { DocGroup } from "@/types/docs";
import { article as a0 } from "./demander-un-devis";
import { article as a1 } from "./suivre-une-commande";

export const group: DocGroup = {
  id: "commandes",
  title: "Commandes & devis",
  articles: [a0, a1],
};

export default group;
