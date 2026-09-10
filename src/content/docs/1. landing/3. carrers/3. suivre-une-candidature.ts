import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("suivre-une-candidature",
  "Suivre sa candidature",
  "Consultez l'état d'avancement de votre candidature via le lien sécurisé ou la recherche manuelle.",
  ["recrutement", "candidature", "suivi", "emploi"],
  "stable",
  "20 août 2026",
  `# Suivre sa candidature

Après le dépôt de votre dossier, vous pouvez à tout moment vérifier l'état d'avancement de votre candidature.

---

## Méthodes d'accès au suivi

Vous disposez de deux moyens pour accéder à l'interface de suivi :

1. **Via le lien d'accès direct (Recommandé) :** 
   Dans l'e-mail de confirmation reçu immédiatement après votre postulation, cliquez sur le bouton ou lien **« Suivre ma candidature »**. Ce lien intègre votre clé d'accès sécurisée et vous redirige directement vers votre fiche.
2. **Via la recherche manuelle :** 
   Rendez-vous sur la page **stafprint.com/careers/check-offer** et saisissez votre **Adresse email** ainsi que votre **Clé d'accès / Token** (fourni dans le message d'accusé de réception).

---

## Informations affichées sur la fiche de suivi

L'écran de suivi récapitule l'ensemble des éléments transmis et l'évolution de votre dossier :

* **Statut de la candidature :** Affichage en temps réel du statut (ex: *En cours d'étude*, *Retenue*, *Non retenue*).
* **Rappel du poste :** Intitulé de la mission et détails associés (ex: *Testeur QA - Mission de 30 jours*).
* **Coordonnées du candidat :** Nom complet, adresse email, téléphone et niveau d'études renseignés lors de l'envoi.
* **Historique des dates :** Date de soumission initiale et date de la dernière mise à jour par l'équipe RH.
* **Documents transmis :** Rappel du texte de motivation et aperçu téléchargeable du **CV** et de la **Lettre de motivation**.
`,);

export default article;