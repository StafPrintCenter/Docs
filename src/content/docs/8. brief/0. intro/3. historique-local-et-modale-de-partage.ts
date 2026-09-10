import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("partage-et-gestion-des-briefs",
  "Gestion, exportation et partage de la fiche projet",
  "Fonctionnalités de partage WhatsApp, e-mail, PDF et gestion des brouillons.",
  ["brief", "partage", "pdf", "whatsapp", "brouillon"],
  "new",
  "10 septembre 2026",
  `# Gestion, exportation et partage de la fiche projet

Une fois la fiche générée sur [SPC Interactive Brief](https://brief.stafprint.com/), le projet reçoit un identifiant unique (ex: \`SPC-2026-3206\`).

---

## Modes de diffusion et d'exportation

* **a) Téléchargement PDF :** Génère un document PDF complet prêt pour l'archivage ou l'impression.
* **b) Transmettre par WhatsApp :** Envoie directement le résumé textuel pré-formaté au service client STAF PRINT CENTER.
* **c) Expédition par e-mail :** Adresse une copie de la fiche au support technique.
* **d) Soumission par formulaire :** Transmet automatiquement tous les champs pré-remplis pour l'établissement d'un devis officiel sans engagement.

---

## Édition et stockage local

* **Modification :** Il est possible de rééditer n'importe quelle étape depuis la synthèse.
* **Mes briefs :** Les briefs enregistrés et les brouillons en cours sont conservés localement sur le navigateur de l'utilisateur.
`,);

export default article;