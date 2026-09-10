import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("prepresse-et-impression",
  "Prépresse et d'impression : Printing Master et Studio Manager",
  "Règles et objectifs des jeux d'inspection de fichiers et de gestion d'agence.",
  ["arcade", "prepresse", "impression", "simulation"],
  "new",
  "23 août 2026",
  `# Jeux de prépresse et d'impression : Printing Master et Studio Manager

Les mini-jeux de cette catégorie testent votre rigueur technique en matière de contrôle de fichiers et votre vision stratégique d'un atelier d'impression sur [SPC Arcade](https://arcade.stafprint.com/).

---

## 1. Printing & Prepress Master (Niveau Moyen)

Incarnez le responsable prépresse et inspectez les fichiers transmis par les clients avant le lancement en machine :

* **Objectif :** Détecter les erreurs courantes (fonds perdus manquants, résolution < 300 DPI, mode RVB au lieu de CMJN, polices non vectorisées).
* **Manière de jouer :** Validez le BAT s'il est conforme ou rejetez-le en spécifiant le motif de l'erreur.
* **Calcul des points :** Valider un BAT sans pénalité attribue le badge **BAT Impeccable**.

---

## 2. STAF Studio Manager (Niveau Difficile)

Prenez les commandes de l'agence STAF PRINT CENTER sur une simulation de 30 jours calendaires :

* **Gestion quotidienne :** Acceptez les contrats clients, gérez la charge de travail de l'équipe, surveillez la trésorerie et la réputation de l'atelier.
* **Objectifs de performance :**
  * Dépasser **2 000 000 FCFA** de chiffre d'affaires pour obtenir le badge **Trésorier**.
  * Maintenir une réputation supérieure à **80/100** pour débloquer le badge **Directeur d'Agence**.
`,);

export default article;