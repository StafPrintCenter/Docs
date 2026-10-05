import { docsRegistry } from "@/data/content/docs";

export interface Promotion {
  id: string;
  sponsor: string;
  category: "STAF" | "Partenaire";
  title: string;
  description: string;
  url: string;
  action: string;
}

// Les espaces STAF reprennent leurs URLs depuis leurs métadonnées de documentation.
const platformCopy: Record<string, { title: string; description: string }> = {
  "landing": {
    title: "Vos projets d’impression commencent ici",
    description: "Explorez le site STAF PRINT CENTER et demandez votre devis.",
  },
  "meet": {
    title: "Réunissez-vous sur SPC Meet",
    description: "Retrouvez vos échanges et vos salles de réunion en ligne.",
  },
  "arcade": {
    title: "Faites une pause à SPC Arcade",
    description: "Découvrez l’espace gaming et préparez votre prochaine session.",
  },
  "instructor-hub": {
    title: "Votre espace formateur",
    description: "Organisez vos sessions et accompagnez vos apprenants.",
  },
  "student-hub": {
    title: "Avancez avec Student Hub",
    description: "Retrouvez votre parcours et vos ressources de formation.",
  },
};

export const promotions: Promotion[] = docsRegistry.flatMap((space) => {
  const copy = platformCopy[space.id];
  if (!space.url || !copy) return [];
  return [{
    id: space.id,
    sponsor: space.name,
    category: "STAF",
    ...copy,
    url: space.url,
    action: `Visiter ${space.shortName}`,
  }];
});