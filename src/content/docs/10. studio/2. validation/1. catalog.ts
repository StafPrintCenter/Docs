import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("bat-viewer",
  "Consultation, validation et partage du Bon À Tirer 3D (B.A.T.)",
  "Validation en ligne du B.A.T. 3D, aperçu interactif et déblocage des options de partage.",
  ["studio", "bat", "validation", "partage", "3d", "bon-a-tirer"],
  "updated",
  "19 septembre 2026",
  `# Consultation, validation et partage du Bon À Tirer 3D (B.A.T.)

L'interface B.A.T. 3D de [SPC 3D Studio](https://studio.stafprint.com/bat/BAT-0GRI9P) permet de visualiser et de valider la mise en situation d'un projet d'impression avant production.

---

## Fonctionnalités principales

* **Visualisation 3D interactive :** Manipulez le modèle sous tous les angles (rotation, zoom et inclinaison) avec affichage du sol et des ombres portées.
* **Informations de commande & B.A.T. :**
  * **Identifiant B.A.T. :** Référence unique du dossier.
  * **Status :** État du bon à tirer (*En attente de validation* ou *B.A.T. Validé*).
  * **Spécifications :** Nom du produit, déclinaisons de dimensions, type de support et finition sélectionnée (mat ou brillant).
* **Validation client :**
  * Bouton d'action **Valider le B.A.T.** pour confirmer la conformité de la maquette.
* **Options de partage (Débloquées après validation) :**
  * Dès que le B.A.T. est **validé**, la section **Partager la vue 3D** et les options d'export/partage deviennent automatiquement accessibles.
  * Génération d'un **QR Code de partage** pour ouvrir la scène 3D sur d'autres supports.
  * Bouton **Copier le lien direct** pour transmettre l'accès au B.A.T. validé aux collaborateurs ou au service d'impression.
`,);

export default article;