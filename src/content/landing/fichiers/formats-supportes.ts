import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("formats-supportes",
  "Formats de fichiers supportés",
  "Ce que l'atelier accepte, et ce qu'il faut éviter.",
  ["fichiers", "formats"],
  "stable",
  "28 juillet 2026",
  `# Formats de fichiers supportés

| Format | Accepté | Remarque |
| --- | --- | --- |
| PDF/X-4 | Oui | Format recommandé |
| AI / EPS | Oui | Polices vectorisées obligatoires |
| PSD / TIFF | Oui | Aplatir les calques inutiles |
| JPG / PNG | Oui | Uniquement si 300 dpi |
| DOCX / PPTX | Non | À convertir en PDF avant envoi |
| CANVA (lien) | Non | Exportez en PDF impression |

:::warning
Les exports Canva "PDF standard" sont en RVB 96 dpi. Choisissez toujours **PDF pour impression**.
:::`,);

export default article;
