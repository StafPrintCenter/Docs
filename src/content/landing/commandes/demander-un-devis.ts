import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("demander-un-devis",
  "Demander un devis d'impression",
  "Le parcours complet du formulaire de devis jusqu'à la validation du BAT.",
  ["devis", "commande"],
  "new",
  "14 août 2026",
  `# Demander un devis d'impression

## Étapes

1. Rendez-vous sur **stafprint.com → Demander un devis**.
2. Choisissez la famille de produit (affiche, flyer, bâche, textile…).
3. Renseignez le format, le support, la quantité et la finition.
4. Déposez vos fichiers (PDF, AI, PSD — 200 Mo max).
5. Validez : un numéro de dossier **DVS-XXXXXX** vous est attribué.

## Délais de réponse

| Type de projet | Délai de devis |
| --- | --- |
| Standard catalogue | 2 h ouvrées |
| Grand format | 4 h ouvrées |
| Sur-mesure / façonnage | 24 h ouvrées |

:::note
Le devis reste valable 30 jours. Passé ce délai, les prix matière sont recalculés.
:::`,);

export default article;
