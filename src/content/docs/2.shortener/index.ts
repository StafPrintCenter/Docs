import type { DocSpaceMeta } from "@/types/docs";
import { SITE, SITE_LINK } from "@/data/site";

export const space: DocSpaceMeta = {
  id: "shortener",
  name: "SPC Shortener",
  shortName: "Shortener",
  tagline: "Plateforme de raccourciement de lien SPC",
  description: `Raccourcisseur de liens officiel, réservé exclusivement aux contenus de ${SITE.name}.`,
  url: SITE_LINK.shortUrl,
};

export default space;
