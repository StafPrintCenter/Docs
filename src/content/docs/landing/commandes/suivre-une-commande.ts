import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("suivre-une-commande",
  "Suivre une demande ou commande",
  "Consultez l'état d'avancement de votre demande grâce à votre adresse email et votre numéro de ticket.",
  ["suivi", "livraison"],
  "new",
  "19 août 2026",
  `# Suivre une demande

## Procédure de suivi

1. Rendez-vous sur la page dédiée : **stafprint.com/tools/lookup**.
2. Renseignez l'**adresse email** utilisée lors de la soumission de votre formulaire.
3. Saisissez votre **numéro de ticket** au format **SPC-AAAMMJJ_HHMMSS-XXXX** (reçu après l'envoi de votre message).
4. Validez pour accéder aux détails de votre demande.

## Informations consultables

Une fois validé, l'outil vous affiche :
* Le **statut actuel** du traitement (ex: *En cours de traitement*).
* Le **service concerné** (ex: *Sites internet*, *Impression de bâches*…).
* La **date et l'heure d'envoi** de la demande.
* Le nom de la personne **en charge du dossier**.
* La **date de traitement**.
* L'historique et le **rappel de votre message initial**.

:::tip
Conservez précieusement votre e-mail de confirmation pour retrouver facilement votre numéro de ticket.
:::`,);

export default article;
