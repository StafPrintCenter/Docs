import type { DocSpace } from "@/types/docs";
import { group as g0 } from "./demarrage";
import { group as g1 } from "./salles";
import { group as g2 } from "./depannage-meet";

export const space: DocSpace = {
  id: "spc-meet",
  name: "SPC Meet",
  shortName: "Meet",
  tagline: "Visioconférence & salles de réunion",
  description:
    "Tout pour organiser, animer et sécuriser vos réunions en ligne sur SPC Meet : connexion, salles, participants, qualité audio/vidéo et dépannage.",
  groups: [g0, g1, g2],
};

export default space;
