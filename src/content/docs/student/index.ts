import type { DocSpace } from "@/types/docs";
import { group as g0 } from "./inscription";
import { group as g1 } from "./suivi";

export const space: DocSpace = {
  id: "student-hub",
  name: "Student Hub",
  shortName: "Student",
  tagline: "Espace des apprenants",
  description:
    "S'inscrire à une formation, suivre ses cours, rendre ses devoirs et récupérer ses attestations depuis le Student Hub.",
  groups: [g0, g1],
};

export default space;
