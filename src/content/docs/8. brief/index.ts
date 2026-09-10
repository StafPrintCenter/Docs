import type { DocSpaceMeta } from "@/types/docs";
import { SITE, SITE_LINK } from "@/data/site";
import { getDocSpaceMeta } from "@/data/ecosystem";

const fallback: DocSpaceMeta = {
  id: "brief",
  name: "SPC Interactive Brief",
  shortName: "Intelligence",
  tagline: "***Visioconférence & salles de réunion",
  description: `Cadrage de projet en 6 étapes, estimation des besoins, exportation PDF et envoi de fiches.`,
  url: SITE_LINK.briefUrl,
  status: "available",
};

export const space: DocSpaceMeta = getDocSpaceMeta("meet", fallback);

export default space;
