import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("historique-local-et-modale-de-partage",
  "Historique local et modale de partage du brief",
  "Consultation des fiches enregistrées, reprise des brouillons et options d'envoi.",
  ["brief", "historique", "partage", "pdf", "whatsapp"],
  "new",
  "10 septembre 2026",
  `# Historique local et modale de partage du brief

Toutes vos saisies réalisées sur [SPC Interactive Brief](https://brief.stafprint.com/) sont centralisées dans l'espace [Mes briefs](https://brief.stafprint.com/history).

---

## Gestion de l'historique local

Les fiches sont conservées localement dans la mémoire de votre navigateur (**localStorage**) :

* **Fiches en *Brouillon* :** Projets interrompus en cours de saisie. Le bouton **Reprendre** vous réoriente vers la dernière étape complétée pour poursuivre le formulaire.
* **Fiches *Validées* :** Projets finalisés. Le bouton **Consulter** affiche le document récapitulatif structuré.
* **Suppression :** Permet de supprimer définitivement la fiche de l'appareil via le bouton corbeille.

---

## Options de la modale de partage

Le bouton **Partager** déclenche une modale d'exportation avec 5 canaux de diffusion :

* **Envoyer sur WhatsApp :** Ouvre l'application avec un message pré-rédigé contenant la référence du brief et la synthèse de vos besoins.
* **Envoyer par e-mail :** Prépare un courriel destiné à \`contact@stafprint.com\` avec les informations du projet.
* **Envoyer via le formulaire du site :** Bascule vers le formulaire de contact officiel du site \`stafprint.com\` avec l'ensemble des données pré-remplies.
* **Télécharger en PDF :** Exporte un document PDF propre et structuré, prêt pour l'impression ou l'archivage.
* **Copier le lien du brief :** Place le lien de consultation directe de la fiche dans votre presse-papier.
`,);

export default article;