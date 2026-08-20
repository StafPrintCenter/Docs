import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("gerer-la-presence",
  "Gérer la présence et les émargements",
  "Émargement numérique, retards et justificatifs.",
  ["présence", "émargement"],
  "new",
  "14 août 2026",
  `# Gérer la présence et les émargements

## Émargement numérique

Ouvrez la session → **Présence** → un code à 4 chiffres s'affiche, valable 10 minutes. Chaque apprenant le saisit depuis le Student Hub.

## Statuts

| Statut | Conséquence |
| --- | --- |
| Présent | Comptabilisé dans l'attestation |
| Retard (< 15 min) | Présent, mention au dossier |
| Absent justifié | Rattrapage proposé |
| Absent | Module à repasser |

:::warning
Les feuilles d'émargement sont des pièces justificatives : ne modifiez jamais un statut après clôture sans note explicative.
:::`,);

export default article;
