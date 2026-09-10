import type { DocSpaceMeta } from "@/types/docs";
import { SITE, SITE_LINK } from "@/data/site";
import { getDocSpaceMeta } from "@/data/ecosystem";

const fallback: DocSpaceMeta = {
  id: "instructor",
  name: "Espace Formateur",
  shortName: "Instructor",
  tagline: "Espace des formateurs SPC",
  description: `Préparer, animer et évaluer les sessions de formation : parcours, supports, présence, notation et suivi des apprenants pour ${SITE.name}.`,
  url: SITE_LINK.instructorUrl,
  status: "building",
};

export const space: DocSpaceMeta = getDocSpaceMeta("instructor", fallback);

export default space;
