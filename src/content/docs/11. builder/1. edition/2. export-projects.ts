import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("export-projects",
  "Gestion des projets, modèles et exportation du code",
  "Utilisation des templates de la collection SPC, sauvegarde locale et export de fichiers HTML/ZIP.",
  ["builder", "projets", "modeles", "export", "zip", "html"],
  "new",
  "10 octobre 2026",
  `# Gestion des projets, modèles et exportation du code

[SPC Site Builder](https://builder.stafprint.com/) intègre des outils complets pour structurer, sauvegarder et exporter vos créations web.

---

## Fonctionnalités de gestion

* **Modèles professionnels ([Modèles](https://builder.stafprint.com/templates)) :**
  * Partez de bases préconçues comme l' *Imprimerie complète*, un *Lancement produit*, un *Portfolio graphiste* ou une *Page vierge*.
* **Espace Projets ([Mes projets](https://builder.stafprint.com/projects)) :**
  * Retrouvez toutes vos pages enregistrées localement, avec options d'importation et de réouverture rapide dans l'éditeur.
* **Options d'exportation ([Export du code](https://builder.stafprint.com/export?id=v2gy0kl9)) :**
  * **Code HTML :** Copiez ou téléchargez un fichier \`index.html\` propre intégrant Tailwind CSS et les polices Google Fonts.
  * **Fichier \`.spcbuild\` :** Exportez une sauvegarde portable pour réimporter et modifier votre projet sur un autre appareil.
  * **Archive ZIP :** Récupérez l'ensemble des éléments prêts à être hébergés.
`,);

export default article;