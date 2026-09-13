import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("pdf-tools",
  "Boîte à outils PDF Express zéro-serveur",
  "Fusion, extraction de pages et conversion en niveaux de gris directement dans le navigateur.",
  ["toolkit", "pdf", "fusion", "extraction", "niveaudegris", "prepresse"],
  "updated",
  "13 septembre 2026",
  `# Boîte à outils PDF Express zéro-serveur

La [Boîte à Outils PDF Express](http://localhost:3001/pdf-tools) effectue vos opérations prépresse sur fichiers PDF sans aucun transfert serveur.

---

## Fonctionnalités principales

* **Fusion de PDF :** Assemblez plusieurs fichiers PDF en un seul document dans l'ordre de votre choix.
* **Extraction & Suppression de pages :** Saisissez les numéros ou plages de pages à isoler ou à retirer de votre document.
* **Conversion Niveaux de Gris :** Convertissez la totalité du document PDF en noir et blanc pour l'impression économique.
* **Sécurité & Exécution locale :** Traitement 100 % local dans votre navigateur via WebAssembly (aucun document n'est envoyé sur Internet).
`,);

export default article;