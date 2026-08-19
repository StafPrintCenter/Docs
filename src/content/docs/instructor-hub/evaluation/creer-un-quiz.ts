import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("creer-un-quiz",
  "Créer un quiz d'évaluation",
  "Types de questions, barème, tentative unique et correction automatique.",
  ["quiz", "évaluation"],
  "updated",
  "09 août 2026",
  `# Créer un quiz d'évaluation

## Types de questions

- Choix unique / choix multiple
- Vrai-Faux
- Réponse courte (correction manuelle)
- Association

## Barème

Le barème par défaut est 1 point par question. Activez **Pénalité** pour retirer 0,25 point par mauvaise réponse en QCM.

## Paramètres recommandés

\`\`\`text~~quiz.txt
Tentatives      : 1
Durée           : 20 min
Mélange         : questions + réponses
Correction      : affichée après clôture
Seuil de réussite : 60 %
\`\`\`

:::note
La correction automatique s'applique à tous les types sauf la réponse courte.
:::`,);

export default article;
