import type { DocSpaceMeta } from "@/types/docs";
import { SITE_LINK } from "@/data/site";
import { getDocSpaceMeta } from "@/data/ecosystem";

const fallback: DocSpaceMeta = {
  id: "builder",
  name: "SPC Site Builder",
  shortName: "Site Builder",
  tagline: "Créez votre landing page sans coder",
  description: "Éditeur visuel zéro-serveur pour assembler des blocs, personnaliser votre design et exporter vos pages web.",
  url: SITE_LINK.builderUrl,
  status: "available",
};

export const space: DocSpaceMeta = getDocSpaceMeta("builder", fallback);

export default space;