import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("signaler-un-lien-court",
  "Signaler un problème sur un lien court",
  "Formulaire de déclaration d'un lien cassé, désactivé ou d'un contenu inapproprié sur SPC Shortener.",
  ["outil", "lien", "signalement", "support", "erreur"],
  "updated",
  "20 août 2026",
  `# Signaler un problème sur un lien court

Si vous rencontrez un dysfonctionnement sur un lien court (lien désactivé, erreur de redirection ou contenu inapproprié), vous pouvez soumettre un signalement directement depuis la page d'aperçu.

---

## Fonctionnement du formulaire de signalement

Le formulaire s'ouvre sous forme de fenêtre modale sans quitter la page active :

1. **Informations pré-remplies :**
   * **Type de ressource :** Indique automatiquement la catégorie (*Lien court*).
   * **Identifiant du lien court :** L'identifiant unique (UUID) du lien est extrait et pré-rempli automatiquement pour cibler précisément la ressource concernée.
2. **Choix du motif (Obligatoire) :** Sélectionnez la raison de votre alerte dans le menu déroulant :
   * *Lien cassé*
   * *Information incorrecte*
   * *Contenu inapproprié*
   * *Spam*
   * *Autre*
3. **Message explicatif (Optionnel) :** Décrivez brièvement le problème rencontré pour faciliter l'intervention de l'équipe technique.
4. **Adresse email (Optionnelle) :** Renseignez votre adresse e-mail si vous souhaitez être informé du suivi apporté à votre signalement.
5. **Validation :** Cliquez sur **Envoyer le signalement** pour transmettre votre alerte au support STAF PRINT CENTER.

:::tip
L'envoi du signalement directement depuis la page du lien garanti que l'identifiant technique exact est transmis sans erreur d'en-tête.
:::`,);

export default article;