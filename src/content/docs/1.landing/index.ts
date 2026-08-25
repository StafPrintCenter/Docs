import type { DocSpaceMeta } from "@/types/docs";
import { SITE, SITE_LINK } from "@/data/site";

export const space: DocSpaceMeta = {
  id: "landing",
  name: "Site Vitrine",
  shortName: "Vitrine",
  tagline: "Site public, devis et commandes d'impression",
  description: `Le site principal de ${SITE.name} : services, réalisations, formations, blog et contact.`,
  url: SITE_LINK.landingUrl,
  status: "available",
};

export default space;
