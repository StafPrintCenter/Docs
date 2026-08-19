import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("demander-un-devis",
  "Demander un devis d'impression",
  "Le parcours complet de la demande de devis via le formulaire de contact jusqu'à la réception de votre ticket.",
  ["devis", "commande"],
  "new",
  "19 août 2026",
  `# Demander un devis d'impression

## Étapes

1. Rendez-vous sur **stafprint.com → Demander un devis** (ou directement au bloc Contact).
2. Renseignez vos informations de contact (**Prénoms & Nom**, **Email**).
3. Sélectionnez le **Service souhaité** dans le menu déroulant (ex: *Impression de bâches*, *Cartes de visite*, *Sites internet*…).
4. Décrivez précisément votre besoin dans le champ **Message** (format, quantité, finitions, etc.).
5. Validez en cliquant sur **Envoyer la demande** : un numéro de ticket au format **SPC-AAAMMJJ_HHMMSS-XXXX** vous est automatiquement attribué pour le suivi.

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
