import type { DocSpaceMeta } from "@/types/docs";
import { SITE, SITE_LINK } from "@/data/site";

export const space: DocSpaceMeta = {
  id: "student",
  name: "Espace Apprenant",
  shortName: "Student",
  tagline: "Espace des apprenants SPC",
  description: `S'inscrire à une formation, suivre ses cours, rendre ses devoirs et récupérer ses attestations depuis le Student Hub de ${SITE.name}.`,
  url: SITE_LINK.studentUrl,
};

export default space;
