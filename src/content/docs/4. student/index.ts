import type { DocSpaceMeta } from "@/types/docs";
import { SITE, SITE_LINK } from "@/data/site";
import { getDocSpaceMeta } from "@/data/ecosystem";

const fallback: DocSpaceMeta = {
  id: "student",
  name: "Espace Apprenant",
  shortName: "Student",
  tagline: "Espace des apprenants SPC",
  description: `S'inscrire à une formation, suivre ses cours, rendre ses devoirs et récupérer ses attestations depuis le Student Hub de ${SITE.name}.`,
  url: SITE_LINK.studentUrl,
  status: "building",
};

export const space: DocSpaceMeta = getDocSpaceMeta("student", fallback);

export default space;
