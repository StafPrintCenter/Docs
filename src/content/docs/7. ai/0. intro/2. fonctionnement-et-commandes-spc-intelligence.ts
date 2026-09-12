import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("quotas-publics-et-connexion-espace",
  "Quotas d'utilisation publique et statut de connexion",
  "Gestion du quota anonyme de 3 messages/jour et restriction d'accès aux espaces.",
  ["ai", "quotas", "connexion", "beta", "login"],
  "new",
  "12 septembre 2026",
  `# Quotas d'utilisation publique et statut de connexion

L'accès à [SPC Intelligence](https://ai.stafprint.com/) s'effectue selon deux modes : le chat public anonyme et les espaces membres authentifiés.

---

## 1. Quota du chat public

* **3 messages par jour :** Les visiteurs anonymes disposent d'un crédit quotidien de 3 interactions sur la plateforme public.
* **Limitations techniques :** Le mode anonyme ne permet pas le téléversement de fichiers joints.
* **Stockage local :** Les conversations sont enregistrées localement dans le navigateur de l'utilisateur (**localStorage**).

---

## 2. Page de connexion et Bêta Fermée

* **Portail d'accès (\`/login\`) :** Conçu pour orienter les utilisateurs vers leurs espaces réservés (*Client*, *Apprenant*, *Formateur*).
* **Statut Bêta Fermée :** Les connexions sont désactivées durant la phase de test. Seul le chat public reste opérationnel avec son quota quotidien.
`,);

export default article;