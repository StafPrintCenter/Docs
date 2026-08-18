# STAF Docs Hub

# PROMPT : DEVELOPPEMENT DE "STAF DOCS" (LA PLATEFORME DE DOCUMENTATION MULTI-ESPACES DE STAF PRINT CENTER)



Tu es un développeur Full-Stack Senior & Lead Technical Writer Expert React / TypeScript / Markdown.

Tu dois construire une application web de documentation moderne, ultra-rapide, responsive et production-ready nommée **STAF Docs** (accessible via `docs.stafprint.com` ou `/docs`), la plateforme officielle de documentation pour l'écosystème **STAF PRINT CENTER** (Porto-Novo, Bénin).



---



## 🎨 1. DESIGN SYSTEM & CHARTE GRAPHIQUE (STRICTE)



L'interface doit s'aligner rigoureusement sur le design system de STAF PRINT CENTER avec un rendu SaaS Premium :

- **Palette de Couleurs :**

  - **Background :** Off-white chaud (`#fcfbf9`) / Slate très clair avec grille fine (Paper Grid style) pour le mode clair, Slate profond (`#0f172a` / `#1e293b`) pour le mode sombre.

  - **Accent STAF PRINT :** Orange Vibrant / Ambre signature (`#f97316` / `#ea580c`) pour la navigation active, les liens, la recherche et les badges.

  - **Callouts & Alertes :**

    - ℹ️ **Note :** Bleu doux (`#0284c7`)

    - 💡 **Astuce :** Vert émeraude (`#059669`)

    - ⚠️ **Attention :** Orange Ambre (`#d97706`)

    - 🚨 **Avertissement :** Rouge Corail (`#dc2626`)

- **Typographies :**

  - **Fraunces** (`--font-display`) pour les grands titres (`H1`, `H2`), noms de plateformes et en-têtes.

  - **Inter Tight** pour le corps du texte, la barre latérale, les tableaux et l'interface.

  - **JetBrains Mono / Fira Code** pour les blocs de code et extraits techniques.



---



## 🧱 2. ARCHITECTURE DE DOCUMENTATION A 3 ESPACES



La plateforme est découpée en **3 Piliers (Espaces)** bien distincts, accessibles depuis un commutateur principal en haut de l'interface (Header Switcher) :



1. **User Docs (Utilisateurs & Visiteurs) :** Guides simples, FAQ, tutoriels pas-à-pas pour les clients et apprenants.

2. **Dev Docs (Développeurs & Tech) :** Architecture, contrats d'API mockés, composants UI, schémas de données, extraits de code React/TS.

3. **Support & Staff Docs (Équipe Interne) :** Procédures de modération, gestion des annulations, guides pour les formateurs et l'équipe administrative.



### Structure Hiérarchique Strictement Respectée :

> **Espace** ➔ **Plateforme** (ex: *SPC Meet*, *SPC Arcade*, *Espace Formateur*, *Site Vitrine*) ➔ **Groupe/Catégorie** (ex: *Authentification*, *Configuration*, *Salles*) ➔ **Article Markdown**.



---



## ⚙️ 3. FONCTIONNALITES ET COMPOSANTS TECH CLÉS



### A. Rendu Markdown Enrichi (`react-markdown` ou équivalent)

- Support complet du Markdown GFM (GitHub Flavored Markdown) : Titres, listes, tableaux, citations.

- **Blocs de code interactifs (Zone Dev) :**

  - Coloration syntaxique automatique (TypeScript, JSON, CSS, Bash).

  - En-tête de bloc de code avec nom du fichier et bouton **"Copier le code"** (Copy to clipboard) avec animation de succès.

- **Composants Callouts / Callout Boxes :** Blocs d'avertissement stylisés (`:::note`, `:::warning`, `:::tip`).



### B. Recherche Globale Intelligente (Style Algolia / `Cmd + K`)

- Raccourci clavier `Cmd + K` (Mac) ou `Ctrl + K` (Windows).

- Modale de recherche avec filtrage instantané par mots-clés sur tous les titres, descriptions et tags d'articles des 3 espaces.

- Historique des recherches récentes.



### C. Module de Feedback Utilisateur (Vote d'Utilité)

- En bas de chaque article :

  > **Cet article vous a-t-il été utile ?** `[ 👍 Oui ]` `[ 👎 Non ]`

- Gestion de l'état du vote en `localStorage` pour éviter le vote multiple :

  - Si *Oui* : Affichage d'un message "Merci pour votre retour !".

  - Si *Non* : Ouverture d'une sous-zone de texte facultative ("Comment pouvons-nous améliorer cet article ?").



### D. Navigation Double (Sidebar + On-This-Page)

- **Sidebar Gauche (Arborescence) :** Triée par Plateforme ➔ Groupe ➔ Article avec statut (Nouveau, Mis à jour, Bêta).

- **Table des matières Droite (On-This-Page) :** Générée automatiquement à partir des titres `H2` et `H3` du document Markdown en cours de lecture, avec suivi du défilement (Scrollspy).



---



## 📂 4. ARCHITECTURE DES FICHIERS ET MOCK DATA



```text

src/

├── components/

│   ├── ui/                    # Composants UI (shadcn/ui personnalisés aux couleurs STAF PRINT)

│   ├── docs/

│   │   ├── DocsHeader.tsx     # Commutateur d'espaces (User / Dev / Support) + Cmd+K

│   │   ├── DocsSidebar.tsx    # Navigation hiérarchique (Plateforme > Groupe > Article)

│   │   ├── TableOfContents.tsx# Sommaire dynamique H2/H3 (Scrollspy)

│   │   ├── MarkdownRenderer.tsx# Dynamic MDX / Markdown parser + Syntax Highlighting

│   │   ├── CodeBlock.tsx      # Bloc de code avec bouton copier

│   │   ├── Callout.tsx        # Blocs d'information (Note, Tip, Warning)

│   │   ├── ArticleFeedback.tsx# Module de vote 👍 / 👎 avec LocalStorage

│   │   └── SearchModal.tsx    # Recherche globale Cmd + K

├── data/

│   └── docs-registry.ts       # Base de données mockée de tous les articles, espaces et plateformes

├── hooks/

│   ├── useDocsSearch.ts       # Logique du moteur de recherche

│   └── useArticleFeedback.ts  # Sauvegarde locale des votes

├── pages/

│   └── DocsViewer.tsx         # Page principale d'affichage de la documentation

└── types/

    └── 

docs.ts                # Typage strict (DocSpace, Platform, Group, DocArticle, Feedback)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3a0c7b49-052a-4800-9a03-babc0962cdf0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
