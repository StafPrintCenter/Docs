import type { DocSpace } from "@/types/docs";
import { group as g0 } from "./reservation";
import { group as g1 } from "./sur-place";

export const space: DocSpace = {
  id: "arcade",
  name: "SPC Arcade",
  shortName: "Arcade",
  tagline: "Espace gaming & réservations",
  description: "Réserver une session, comprendre les tarifs, respecter le règlement intérieur et organiser un tournoi à SPC Arcade, Porto-Novo.",
  groups: [g0, g1],
};

export default space;
