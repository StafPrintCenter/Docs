import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("redirection-et-apercu-de-lien",
  "Redirection et aperçu d'un lien court",
  "Décompte de 10 secondes, aperçu du contenu et gestion des accès restreints.",
  `# Redirection et aperçu d'un lien court

## Page d'intermédiaire

Chaque lien court redirige vers une page d'aperçu affichant le titre, l'image et l'URL réelle de destination, accompagnée d'un **compte à rebours de 10 secondes**.

* **Rediriger maintenant :** Permet d'accéder directement au site sans patienter.
* **Annuler :** Interrompt la redirection et vous maintient sur la page.

## États d'accès des liens

* **Lien désactivé :** Redirection bloquée par l'administration.
* **Date d'expiration atteinte :** Le lien n'est plus fonctionnel après la date limite.
* **Programmation :** Le lien s'active uniquement à la date prévue.

:::note
Des statistiques anonymes de clics sont enregistrées pour mesurer la fréquentation des liens.
:::`,
);

export default article;