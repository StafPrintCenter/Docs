import type { DocSpace } from "@/types/docs";
import { group as g0 } from "./sessions";
import { group as g1 } from "./evaluation";

export const space: DocSpace = {
  id: "instructor",
  name: "Espace Formateur",
  shortName: "Instructor",
  tagline: "Espace des formateurs SPC",
  description:
    "Préparer, animer et évaluer vos sessions de formation : parcours, supports, présence, notation et suivi des apprenants.",
  groups: [g0, g1],
};

export default space;
