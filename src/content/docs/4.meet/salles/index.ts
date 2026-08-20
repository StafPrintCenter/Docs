import type { DocGroup } from "@/types/docs";
import { article as a0 } from "./gerer-une-salle";
import { article as a1 } from "./partage-ecran";

export const group: DocGroup = {
  id: "salles",
  title: "Salles & participants",
  articles: [a0, a1],
};

export default group;
