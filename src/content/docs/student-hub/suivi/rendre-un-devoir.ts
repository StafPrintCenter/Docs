import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("rendre-un-devoir",
  "Rendre un devoir",
  "Formats acceptés, dépôt, retard et retour du formateur.",
  ["devoir", "évaluation"],
  "new",
  "13 août 2026",
  `# Rendre un devoir

## Déposer

**Ma session → Devoirs → Déposer**. Formats acceptés : PDF, PNG, JPG, ZIP (50 Mo max).

## Retards

| Retard | Pénalité |
| --- | --- |
| < 24 h | -10 % |
| 24 – 72 h | -25 % |
| > 72 h | Non noté |

## Retour du formateur

La note et les commentaires apparaissent dans **Devoirs → Corrigés**, généralement sous 5 jours ouvrés.

:::tip
Nommez votre fichier \`NOM_Prenom_Module.pdf\` : les dépôts mal nommés retardent la correction.
:::`,);

export default article;
