import type { DocSpace } from "@/types/docs";
import { group as g0 } from "./commandes";
import { group as g1 } from "./fichiers";
import { group as g2 } from "./compte-client";

export const space: DocSpace = {
  id: "landing",
  name: "Site Vitrine",
  shortName: "Vitrine",
  tagline: "Site public, devis et commandes d'impression",
  description: "Le site public de STAF PRINT CENTER : demander un devis, suivre une commande, préparer des fichiers d'impression conformes et gérer votre compte client.",
  groups: [g0, g1, g2],
};

export default space;
