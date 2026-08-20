import type { DocGroup } from "@/types/docs";
import { article as a0 } from "./consulter-une-offre-d-emploi";
import { article as a1 } from "./postuler-a-une-offre-d-emploi";

export const group: DocGroup = {
  id: "carrer",
  title: "Emploi & stage",
  articles: [a0, a1],
};

export default group;
