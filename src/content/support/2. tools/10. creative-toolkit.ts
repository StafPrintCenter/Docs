import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("creative-toolkit",
  "Centre de support & assistance technique - SPC Creative Toolkit",
  "Guide d'utilisation, sécurité des données et résolution des problèmes courants.",
  `# Centre de support [SPC Creative Toolkit](https://toolkit.stafprint.com/)

Bienvenue sur le centre d'assistance dédié aux utilitaires prépresse du [SPC Creative Toolkit](https://toolkit.stafprint.com/).

---

## Confidentialité & Sécurité Zéro-Serveur

* **Traitement 100 % local :** Vos images, fichiers PDF et données de projet ne sont **jamais transférés** sur un serveur distant.
* **Moteur WebAssembly & Browser Canvas :** L'ensemble des calculs, conversions et extractions est exécuté directement par le processeur de votre appareil via votre navigateur web.
* **Hors-ligne :** Une fois la page chargée, la majorité des outils restent utilisables même en cas de coupure Internet.

---

## Foire aux questions (FAQ) & Dépannage

* **Pourquoi mon QR Code ne se scanne pas ?**
  Vérifiez que la couleur de premier plan choisie offre un contraste suffisant par rapport au fond blanc de votre support.
* **Comment éviter le maculage à l'impression ?**
  Utilisez le simulateur TAC pour vous assurer que le cumul des encres ne dépasse pas **280 %** pour un papier couché ou **260 %** pour du papier offset.
* **Mon fichier PDF met du temps à se charger dans la boîte à outils PDF :**
  Pour les documents de très grande taille (plus de 200 Mo), assurez-vous d'avoir suffisamment de mémoire RAM disponible sur votre navigateur.
`,);

export default article;