import type { DocSpaceMeta } from "@/types/docs";
import { SITE, SITE_LINK } from "@/data/site";
import { getDocSpaceMeta } from "@/data/ecosystem";

const fallback: DocSpaceMeta = {
  id: "arcade",
  name: "SPC Arcade",
  shortName: "Arcade",
  tagline: "La créativité passe en mode Arcade.",
  description: `Un hub de défis ludiques autour du design, du web, de l'impression et de la créativité pour se divertir tout en développant ses compétences techniques ; propulsé par ${SITE.name}.`,
  url: SITE_LINK.arcadeUrl,
  status: "available",
};

export const space: DocSpaceMeta = getDocSpaceMeta("arcade", fallback);

export default space;
