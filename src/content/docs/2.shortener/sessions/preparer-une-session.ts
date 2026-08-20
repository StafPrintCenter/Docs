import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("preparer-une-session",
  "Préparer une session de formation",
  "Checklist matérielle et pédagogique avant le jour J.",
  ["formation", "checklist"],
  "stable",
  "06 août 2026",
  `# Préparer une session de formation

## J-7

- Publier le parcours et les prérequis dans l'Instructor Hub.
- Vérifier les inscriptions et la capacité de la salle.

## J-1

- Tester la salle SPC Meet (pour les sessions hybrides).
- Imprimer les supports via l'atelier (délai 24 h).

## Jour J

\`\`\`text~~checklist.txt
[ ] Feuille de présence ouverte
[ ] Enregistrement autorisé par les participants
[ ] Support partagé dans l'espace apprenant
[ ] Quiz de fin activé
\`\`\`

:::tip
Prévoyez une pause de 10 minutes toutes les 50 minutes : la rétention chute nettement au-delà.
:::`,);

export default article;
