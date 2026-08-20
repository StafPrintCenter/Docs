import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("raccourcir-un-lien",
  "Raccourcir un lien avec SPC Shortener",
  "Générer des liens courts sécurisés vers nos contenus officiels, générer un QR code et suivre leurs statistiques.",
  ["outil", "lien", "raccourcisseur", "qrcode", "partage"],
  "stable",
  "20 août 2026",
  `# Raccourcir un lien avec SPC Shortener

L'outil **SPC Shortener** ([go.stafprint.com](https://go.stafprint.com/)) vous permet de simplifier et de raccourcir les liens vers nos services, formations, articles et réalisations pour faciliter vos partages.

---

## Fonctionnement et règles du service

* **Domaine restreint :** Le service accepte **exclusivement** les liens pointant vers le domaine officiel \`stafprint.com\`. Aucune URL externe à notre écosystème n'est acceptée.
* **Génération automatique de QR Code :** Dès la création du lien court, un **QR code** associé est automatiquement généré.
* **Transparence et sécurité :** Chaque lien court généré intègre une page d'aperçu affichant le titre, l'image et la description du contenu de destination avant la redirection finale.
* **Anonymat total :** La génération de liens s'effectue librement, sans aucune création de compte ou inscription préalable.
* **Suivi des clics :** Un compteur de clics est automatiquement associé à chaque lien pour mesurer l'impact de vos partages.

---

## Étapes pour générer un lien court

1. Rendez-vous sur la plateforme dédiée : **go.stafprint.com**.
2. Cliquez sur le bouton **Raccourcir un lien**.
3. Collez l'URL de la page \`stafprint.com\` que vous souhaitez partager.
4. Validez : le système génère instantanément un lien court unique au format **go.stafprint.com/r/XXXXXX**.
5. **Copie et QR Code :**
   * Cliquez sur **Copier** pour partager directement votre lien court.
   * Téléchargez le **QR Code** généré.

:::warning
Le QR code est disponible au téléchargement uniquement pendant les **20 secondes** suivant la création du lien. Passé ce délai, l'image du QR code disparaît de l'écran.
:::`,);

export default article;