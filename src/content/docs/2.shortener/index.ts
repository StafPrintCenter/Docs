import type { DocSpaceMeta } from "@/types/docs";
import { SITE, SITE_LINK } from "@/data/site";
import { getDocSpaceMeta } from "@/data/ecosystem";

const fallback: DocSpaceMeta = {
  id: "shortener",
  name: "SPC Shortener",
  shortName: "Shortener",
  tagline: "Plateforme de raccourciement de lien SPC",
  description: `Raccourcisseur de liens officiel, réservé exclusivement aux contenus de ${SITE.name}.`,
  url: SITE_LINK.shortUrl,
  status: "available",
};

export const space: DocSpaceMeta = getDocSpaceMeta("shortener", fallback);

export default space;
