import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("uv-mapping",
  "Plaquage de visuel et transformation UV",
  "Importation de fichiers graphiques, ajustements d'échelle, de position et de répétition.",
  ["studio", "uv", "plaquage", "visuel", "echelle", "rotation"],
  "new",
  "19 septembre 2026",
  `# Plaquage de visuel et transformation UV

L'inspecteur de [SPC 3D Studio](https://studio.stafprint.com/) permet d'ajuster le placage de votre création sur la surface 3D.

---

## Options de transformation

* **Importation :** Glissez-déposez un fichier (PNG, JPG, WebP ou SVG) directement sur la scène ou via la zone d'importation.
* **Ajustements UV :**
  * **Échelle :** Agrandissez ou réduisez la taille du motif.
  * **Position X & Position Y :** Ajustez le calage du visuel sur les axes horizontal et vertical.
  * **Rotation :** Pivotez l'image de $0^\circ$ à $360^\circ$.
  * **Tile X & Tile Y :** Réglez la répétition du motif sur les axes $X$ et $Y$.
* **Réinitialiser UV :** Restaurez le positionnement et l'échelle par défaut en un clic.
`,);

export default article;