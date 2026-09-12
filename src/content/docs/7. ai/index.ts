import type { DocSpaceMeta } from "@/types/docs";
import { SITE, SITE_LINK } from "@/data/site";
import { getDocSpaceMeta } from "@/data/ecosystem";

const fallback: DocSpaceMeta = {
  id: "ai",
  name: "SPC Intelligence",
  shortName: "Intelligence",
  tagline: `Assistant virtuel intelligent de ${SITE.name}`,
  description: `Assistant virtuel intelligent de ${SITE.name} : assistance instantanée, analyse de documents et génération de contenu pour vos projets d\'impression et web.`,
  url: SITE_LINK.aiUrl,
  status: "available",
};

export const space: DocSpaceMeta = getDocSpaceMeta("ai", fallback);

export default space;
