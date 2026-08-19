import type { DocSpace } from "@/types/docs";
import { group as g0 } from "./sessions";
import { group as g1 } from "./evaluation";

export const space: DocSpace = {
  id: "instructor-hub",
  name: "Instructor Hub",
  shortName: "Instructor",
  tagline: "Espace des formateurs STAF",
  description:
    "Préparer, animer et évaluer vos sessions de formation : parcours, supports, présence, notation et suivi des apprenants.",
  groups: [g0, g1],
};

export default space;
