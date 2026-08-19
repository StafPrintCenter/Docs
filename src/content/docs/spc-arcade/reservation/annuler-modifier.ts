import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("annuler-modifier",
  "Annuler ou modifier une réservation",
  "Fenêtres d'annulation, remboursement et report de créneau.",
  ["annulation", "remboursement"],
  "new",
  "13 août 2026",
  `# Annuler ou modifier une réservation

## Règles

| Délai avant le créneau | Modification | Remboursement |
| --- | --- | --- |
| > 24 h | Gratuite | 100 % |
| 6 – 24 h | Gratuite | 50 % |
| < 6 h | Non | Aucun |

## Comment faire

Ouvrez l'e-mail de confirmation → **Gérer ma réservation** → *Reporter* ou *Annuler*.

:::tip
Un report vaut mieux qu'une annulation : il conserve 100 % du montant sous forme d'avoir valable 60 jours.
:::`,);

export default article;
