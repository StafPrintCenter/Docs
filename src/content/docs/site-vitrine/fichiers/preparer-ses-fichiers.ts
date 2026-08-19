import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("preparer-ses-fichiers",
  "Préparer un fichier prêt à imprimer",
  "Fonds perdus, colorimétrie, résolution et polices vectorisées.",
  ["prépresse", "pdf"],
  "updated",
  "11 août 2026",
  `# Préparer un fichier prêt à imprimer

## Règles de base

- **Fonds perdus** : 3 mm pour le petit format, 10 mm pour le grand format.
- **Zone de sécurité** : gardez 5 mm entre le texte et la coupe.
- **Résolution** : 300 dpi (petit format), 150 dpi (grand format), 72 dpi (bâche géante).
- **Colorimétrie** : CMJN, profil *Coated FOGRA39*.
- **Polices** : vectorisées ou incorporées.

## Export PDF recommandé

\`\`\`text~~export-pdf.txt
Norme        : PDF/X-4
Compression  : ZIP (sans perte)
Repères      : traits de coupe + fonds perdus
Transparence : conservée
\`\`\`

:::danger
Un fichier RVB sera converti automatiquement : les couleurs vives (bleus, verts fluo) peuvent se ternir. Fournissez toujours du CMJN.
:::`,);

export default article;
