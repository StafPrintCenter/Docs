import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("organiser-un-tournoi",
  "Organiser un tournoi",
  "Privatisation, formats de compétition et affichage des scores.",
  ["tournoi", "événement"],
  "beta",
  "13 août 2026",
  `# Organiser un tournoi

## Formules

| Formule | Postes | Durée | Participants |
| --- | --- | --- | --- |
| Mini-tournoi | 4 | 2 h | 8 |
| Tournoi standard | 8 | 4 h | 16 |
| Privatisation | Tous | Journée | 40+ |

## Déroulé

1. Demande via **arcade.stafprint.com → Événements** (7 jours d'avance minimum).
2. Validation du format (poules, élimination directe, double élimination).
3. Affichage temps réel des scores sur l'écran principal.
4. Remise des lots et impression des diplômes par l'atelier STAF.

:::note
Fonctionnalité en bêta : le bracket en ligne est encore en cours de finalisation.
:::`,);

export default article;
