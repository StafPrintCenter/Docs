import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("booklet-imposition",
  "Imposition livret piqûre à cheval : ordre des pages et PDF imposé",
  "Calcul de l'ordre des pages, compensation de la chasse (creep) et génération de planches d'impression recto-verso.",
  ["toolkit", "imposition", "livret", "piqure-a-cheval", "chasse", "creep", "pdf", "prepresse"],
  "new",
  "7 octobre 2026",
  `# Imposition livret piqûre à cheval : ordre des pages et PDF imposé

L'outil [Imposition Livret & Piqûre à cheval](https://tools.stafprint.com/booklet-imposition) permet de calculer le chemin de fer et d'imposer un document PDF en planches recto-verso prêtes pour le tirage et la finition agrafée.

---

## Fonctionnalités principales

* **Saisie du document & Chargement PDF :**
  * **Nombre de pages :** Saisie libre du nombre de pages du livret (ex: 8 pages).
  * **Mode simulateur ou import :** Visualisation directe du chemin de fer sans fichier ou glisser-déposer d'un PDF traité à 100 % localement dans le navigateur.
* **Options d'atelier & Réglages de planche :**
  * **Mode d'impression :** Sélection entre *Recto-verso continu* et *Deux passes* (séparation rectos/versos).
  * **Sens de reliure :** Choix entre *Bord long* (format portrait classique) et *Bord court (italienne)*.
  * **Format de planche :** Sélection de la taille de feuille (*Taille naturelle*, *A4*, *A3*, ou *Personnalisé*).
  * **Gouttière centrale :** Ajustement de l'espacement central entre les deux pages en mm.
  * **Compensation de la chasse (creep) :** Activation de la compensation selon le grammage du papier (*80 g*, *115 g*, *135 g*, *170 g*, *250 g*).
  * **Repères techniques :** Option de coche pour intégrer les repères de pliage, d'agrafage et les traits de coupe.
* **Table de montage dynamique :**
  * Calcul automatique du nombre de feuilles et de la taille brute de la planche.
  * Affichage détaillé du placement des pages par feuille et par face (ex: *Feuille 1 Recto : P8 / P1*, *Feuille 1 Verso : P2 / P7*).
  * Indication de la valeur de chasse maximale appliquée (en mm) sur les cahiers intérieurs.
* **Options d'exportation :**
  * **PDF recto-verso :** Fichier unique assemblé prêt pour le tirage direct.
  * **Rectos + Versos (2 PDF) :** Séparation des faces pour les presses ou duplicopieurs à passage unique.
  * **Archive ZIP complète :** Téléchargement de l'ensemble des fichiers de production.
  * **Consigne atelier (.txt) :** Fiche descriptive récapitulant la séquence de montage et les paramètres pour le façonnier.
`,);

export default article;