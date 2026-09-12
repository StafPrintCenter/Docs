import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("limites-du-chat-public-et-connexion",
  "Quotas du chat public et état des accès membres",
  "Limitation quotidienne à 3 messages en mode visiteur et statut de la bêta fermée.",
  `# Quotas du chat public et état des accès membres

## Limite de messages en mode public

En accès anonyme (sans connexion), l'utilisation de [SPC Intelligence](https://ai.stafprint.com/) est soumise aux règles suivantes :
* **Quota :** Un compteur autorise **3 messages gratuits par jour**.
* **Fichiers :** L'envoi et l'analyse de fichiers joints ne sont pas disponibles en mode visiteur.
* **Historique :** Vos discussions sont enregistrées localement dans votre navigateur (**localStorage**).

## Accès aux Espaces et Bêta Fermée

La page de connexion ([ai.stafprint.com/login](https://ai.stafprint.com/login)) permet de basculer vers les espaces *Client*, *Apprenant* ou *Formateur*.

:::note Bêta fermée
Les connexions aux espaces membres sont temporairement désactivées pendant la phase de test. Le chat public reste 100 % accessible dans la limite des 3 messages quotidiens.
:::`,
);

export default article;