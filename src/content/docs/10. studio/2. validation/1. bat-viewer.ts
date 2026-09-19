import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("bat-viewer",
  "Consultation, validation et partage du Bon À Tirer 3D (B.A.T.)",
  "Validation en ligne du B.A.T. 3D, consultation de la fiche technique et options de transmission.",
  ["studio", "bat", "validation", "partage", "3d", "bon-a-tirer"],
  "updated",
  "19 septembre 2026",
  `# Consultation, validation et partage du Bon À Tirer 3D (B.A.T.)

L'interface de consultation [B.A.T. 3D](https://studio.stafprint.com/bat/BAT-04F2AS) de SPC 3D Studio permet de contrôler la mise en situation d'un projet avant sa mise en fabrication.

---

## Fonctionnalités principales

* **Visualisation 3D interactive :** Inspection du modèle sous tous les angles (rotation, zoom et inclinaison) avec rendu des ombres et de l'environnement.
* **Fiche technique & Spécifications :**
  * **Informations produit :** Intitulé du projet (ex: Kakemono Pitchlab), dimensions (Largeur, Hauteur, Profondeur) et type de support.
  * **Rendu & Finitions :** Définition du visuel, type de pelliculage (*Mat* ou *Brillant*) et date de création.
* **Validation du B.A.T. :**
  * Bouton d'action pour valider le B.A.T. (passe au statut **BAT déjà validé** une fois la confirmation enregistrée).
  * Accès direct au bouton **Voir en réalité augmentée** pour basculer vers la projection AR.
* **Options de partage du B.A.T. validé :**
  Dès la validation effective du projet, la section **Partager le BAT validé** débloque 4 options de diffusion :
  1. **Partager le fichier .studio3d :** Télécharge le fichier source 3D du projet complet.
  2. **WhatsApp :** Transmet les détails du B.A.T. et sa référence directement au service client STAF PRINT CENTER.
  3. **E-mail :** Ouvre un courriel pré-rempli à destination de l'équipe STAF PRINT CENTER.
  4. **Télécharger seulement :** Exporte les éléments et spécifications de la fiche pour archivage.
`,);

export default article;