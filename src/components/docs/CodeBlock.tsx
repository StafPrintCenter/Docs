import { useState } from "react";
import { Check, Copy, FileCode2 } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string | undefined;
  filename?: string | undefined;
}

const KEYWORDS =
  /\b(import|from|export|const|let|var|function|return|if|else|for|while|interface|type|extends|implements|new|await|async|class|public|private|as|of|in|try|catch|throw|default|null|undefined|true|false)\b/g;

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function highlight(code: string, language?: string) {
  const escaped = escapeHtml(code);
  const kw = new Set([
    "import","from","export","const","let","var","function","return","if","else","for","while",
    "interface","type","extends","implements","new","await","async","class","public","private",
    "as","of","in","try","catch","throw","default","null","undefined","true","false",
  ]);
  const token =
    /(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;|`[^`]*?`|"[^"]*?"|'[^']*?')|(\/\/[^\n]*|\/\*[\s\S]*?\*\/|#[^\n]*)|\b(\d+(?:\.\d+)?)\b|\b([A-Za-z_$][\w$]*)\b/g;

  return escaped.replace(token, (match, str, comment, num, word) => {
    if (str) return `<span class="tok-str">${str}</span>`;
    if (comment) return `<span class="tok-com">${comment}</span>`;
    if (num) return `<span class="tok-num">${num}</span>`;
    if (word && kw.has(word)) {
      return `<span class="${language === "json" ? "tok-key" : "tok-kw"}">${word}</span>`;
    }
    return match;
  });
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* presse-papiers indisponible */
    }
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border bg-code shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-border/60 bg-code-header px-4 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <FileCode2 className="size-3.5 shrink-0 text-brand" />
          <span className="truncate font-mono text-xs text-code-muted">
            {filename ?? language ?? "code"}
          </span>
        </div>
        <button
          type="button"
          onClick={copy}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border/60 px-2 py-1 font-mono text-[11px] text-code-muted transition-colors hover:border-brand/60 hover:text-brand"
          aria-label="Copier le code"
        >
          {copied ? <Check className="size-3.5 text-emerald" /> : <Copy className="size-3.5" />}
          {copied ? "Copié !" : "Copier"}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-relaxed">
        <code
          className="font-mono text-code-foreground"
          dangerouslySetInnerHTML={{ __html: highlight(code, language) }}
        />
      </pre>
    </div>
  );
}
