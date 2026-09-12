import type { DocSpaceMeta } from "@/types/docs";
import { SITE_LINK } from "@/data/site";
import { getDocSpaceMeta } from "@/data/ecosystem";

const fallback: DocSpaceMeta = {
  id: "brief",
  name: "SPC Interactive Brief",
  shortName: "Brief",
  tagline: "Cadrage interactif & qualification de projet",
  description: "Cadrage de projet en 6 étapes, estimation des besoins, exportation PDF et envoi de fiches.",
  url: SITE_LINK.briefUrl,
  status: "available",
};

export const space: DocSpaceMeta = getDocSpaceMeta("brief", fallback);

export default space;
