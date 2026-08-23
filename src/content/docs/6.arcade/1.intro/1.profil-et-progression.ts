import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("profil-et-progression",
  "Profil joueur, XP et progression dans SPC Arcade",
  "Gestion du profil local, calcul de l'XP, attribution des grades et respect de la confidentialité.",
  ["arcade", "profil", "xp", "grades"],
  "new",
  "23 août 2026",
  `# Profil joueur, XP et progression dans SPC Arcade

La plateforme [SPC Arcade](https://arcade.stafprint.com/) intègre un système de gamification permettant de développer ses compétences graphiques et prépresse tout en accumulant des points d'expérience (XP).

---

## Gestion du profil local

* **Pseudonyme & Ville :** Personnalisables à tout moment depuis l'en-tête de la plateforme.
* **Confidentialité des données :** Aucune donnée personnelle n'est envoyée vers nos serveurs. L'ensemble des scores, badges et niveaux est conservé en local dans le navigateur (**localStorage**).
* **Réinitialisation :** Un bouton **Réinitialiser** permet de remettre à zéro le compteur d'XP, les badges débloqués et l'historique des sessions.

---

## Système de Grades et XP

Chaque partie jouée attribue des points d'XP en fonction du score obtenu. La progression s'effectue sur 7 niveaux distincts :

| Niveau | Titre du Grade | XP Requis |
| --- | --- | --- |
| **Niveau 1** | Stagiaire Studio | 0 XP |
| **Niveau 2** | Assistant PAO | 150 XP |
| **Niveau 3** | Technicien PAO | 400 XP |
| **Niveau 4** | Infographiste Senior | 800 XP |
| **Niveau 5** | Chef de Fabrication | 1 400 XP |
| **Niveau 6** | Directeur Artistique | 2 200 XP |
| **Niveau 7** | Légende STAF | 3 200 XP |
`,);

export default article;