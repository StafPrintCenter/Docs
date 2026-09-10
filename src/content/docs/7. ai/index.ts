import type { DocSpaceMeta } from "@/types/docs";
import { SITE, SITE_LINK } from "@/data/site";
import { getDocSpaceMeta } from "@/data/ecosystem";

const fallback: DocSpaceMeta = {
  id: "ai",
  name: "SPC Intelligence",
  shortName: "Intelligence",
  tagline: "***Visioconférence & salles de réunion",
  description: `***Plateforme de visioconférence pour les réunions et sessions à distance de ${SITE.name}.`,
  url: SITE_LINK.meetUrl,
  status: "available",
};

export const space: DocSpaceMeta = getDocSpaceMeta("meet", fallback);

export default space;
