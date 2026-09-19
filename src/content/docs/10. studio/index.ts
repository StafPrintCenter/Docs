import type { DocSpaceMeta } from "@/types/docs";
import { SITE_LINK } from "@/data/site";
import { getDocSpaceMeta } from "@/data/ecosystem";

const fallback: DocSpaceMeta = {
  id: "tools",
  name: "SPC Creative Toolkit",
  shortName: "Toolkit",
  tagline: "Boîte à outils prépresse, impression & façonnage",
  description: "10 utilitaires prépresse zéro-serveur s'exécutant à 100 % dans votre navigateur.",
  url: SITE_LINK.toolkitUrl,
  status: "available",
};

export const space: DocSpaceMeta = getDocSpaceMeta("toolkit", fallback);

export default space;
