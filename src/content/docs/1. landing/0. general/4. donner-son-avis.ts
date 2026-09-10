import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("donner-son-avis",
  "Donner et gérer son avis sur un projet",
  "Formulaire dynamique personnalisé après livraison, durée de validité et conditions de modification.",
  ["avis", "temoignage", "projet", "satisfaction"],
  "beta",
  "20 août 2026",
  `# Donner et gérer son avis sur un projet

À la suite de la livraison d'un projet ou d'une prestation, un lien d'évaluation personnalisé vous est transmis par e-mail afin de recueillir votre retour d'expérience.

---

## Fonctionnement du formulaire d'avis

Le formulaire est entièrement dynamique et s'adapte aux spécificités de la prestation réalisée :

* **Informations pré-remplies :** Votre **Nom** et votre **Adresse email** sont automatiquement renseignés à partir des données de votre dossier.
* **Champs sur-mesure :** Selon le projet, le questionnaire peut comporter divers types de questions (champs texte court ou long, échelles de notation, menus déroulants, dépôts de fichiers, etc.), avec des champs obligatoires ou optionnels.
* **Gestion des consentements :**
  * **Politique de confidentialité (Obligatoire) :** L'acceptation des conditions de traitement des données est requise pour valider l'envoi.
  * **Autorisation de publication (Optionnelle) :** Vous choisissez d'autoriser ou non l'affichage public de votre avis sur le site de STAF PRINT CENTER.

---

## Validité et modification de l'avis

* **Expiration :** Le lien d'accès dispose d'une durée de validité limitée (fixée par défaut à **30 jours**, ou précisée directement dans l'e-mail de réception).
* **Nombre de soumissions :** Le nombre de réponses autorisées est restreint par lien.
* **Modification après envoi :** Dès la validation, un e-mail de confirmation vous est envoyé :
  * Si le message contient un lien de modification, vous pouvez mettre à jour votre avis tant que la période de validité n'a pas expiré.
  * En l'absence de lien de modification, la soumission est considérée comme définitive.
`,);

export default article;