import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Callout, type CalloutKind } from "./Callout";
import { CodeBlock } from "./CodeBlock";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function textOf(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  const el = node as { props?: { children?: ReactNode } };
  return el.props ? textOf(el.props.children) : "";
}

const markdownComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="mb-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      {...props}
    />
  ),
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2
      id={slugify(textOf(children))}
      className="mt-12 scroll-mt-28 border-b border-border pb-2 font-display text-2xl font-semibold tracking-tight text-foreground"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3
      id={slugify(textOf(children))}
      className="mt-8 scroll-mt-28 font-display text-lg font-semibold text-foreground"
      {...props}
    >
      {children}
    </h3>
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="my-4 text-[15px] leading-7 text-foreground/85" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a className="font-medium text-brand underline underline-offset-4 hover:text-brand-strong" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-4 list-disc space-y-2 pl-6 text-[15px] leading-7 text-foreground/85" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="my-4 list-decimal space-y-2 pl-6 text-[15px] leading-7 text-foreground/85" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="pl-1" {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-6 border-l-3 border-brand/60 bg-muted/50 py-2 pl-4 text-[15px] italic text-muted-foreground"
      {...props}
    />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<"thead">) => <thead className="bg-muted/70" {...props} />,
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="border-b border-border px-4 py-2.5 text-left font-semibold text-foreground"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="border-b border-border/60 px-4 py-2.5 align-top text-foreground/85" {...props} />
  ),
  hr: () => <hr className="my-10 border-border" />,
  code: ({ className, children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const isBlock = typeof className === "string" && className.includes("language-");
    if (isBlock) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code className="rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-brand-strong">
        {children}
      </code>
    );
  },
  pre: ({ children }: ComponentPropsWithoutRef<"pre">) => {
    const child = (Array.isArray(children) ? children[0] : children) as
      | { props?: { className?: string; children?: ReactNode } }
      | undefined;
    const className = child?.props?.className ?? "";
    const meta = /language-([\w-]+)/.exec(className)?.[1];
    const raw = textOf(child?.props?.children).replace(/\n$/, "");
    return <CodeBlock code={raw} language={meta} />;
  },
};

interface Segment {
  kind: "markdown" | CalloutKind;
  value: string;
  filename?: string;
}

const FILENAME_RE = /^```([\w-]*)\s+filename="([^"]+)"\s*$/gm;

const SEP = "~~";

function splitSegments(content: string): Segment[] {
  const segments: Segment[] = [];
  const regex = /:::(note|tip|warning|danger)\n([\s\S]*?):::/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    if (match.index > last) {
      segments.push({ kind: "markdown", value: content.slice(last, match.index) });
    }
    segments.push({ kind: match[1] as CalloutKind, value: match[2] ?? "" });
    last = match.index + match[0].length;
  }
  if (last < content.length) segments.push({ kind: "markdown", value: content.slice(last) });
  return segments;
}

/** Encode `filename="..."` dans l'info-string de la fence (langue~~fichier). */
function encodeFilenames(content: string) {
  return content.replace(
    FILENAME_RE,
    (_m, lang: string, name: string) =>
      "```" + (lang || "text") + SEP + name.replace(/[^\w./-]/g, ""),
  );
}

export function MarkdownRenderer({ content }: { content: string }) {
  const segments = splitSegments(encodeFilenames(content));

  const components = {
    ...markdownComponents,
    pre: ({ children }: ComponentPropsWithoutRef<"pre">) => {
      const child = (Array.isArray(children) ? children[0] : children) as
        | { props?: { className?: string; children?: ReactNode } }
        | undefined;
      const className = child?.props?.className ?? "";
      const info = /language-([^\s"]+)/.exec(className)?.[1] ?? "";
      const [lang, filename] = info.split(SEP);
      const raw = textOf(child?.props?.children).replace(/\n$/, "");
      return <CodeBlock code={raw} language={lang} filename={filename} />;
    },
  };

  return (
    <div className="docs-prose">
      {segments.map((segment, index) =>
        segment.kind === "markdown" ? (
          <ReactMarkdown key={index} remarkPlugins={[remarkGfm]} components={components}>
            {segment.value}
          </ReactMarkdown>
        ) : (
          <Callout key={index} kind={segment.kind}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
              {segment.value}
            </ReactMarkdown>
          </Callout>
        ),
      )}
    </div>
  );
}

export function extractToc(content: string) {
  const items: { id: string; text: string; level: 2 | 3 }[] = [];
  const lines = content.split("\n");
  let inFence = false;
  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = /^(#{2,3})\s+(.*)$/.exec(line.trim());
    if (match) {
      const text = (match[2] ?? "").replace(/[`*_]/g, "").trim();
      items.push({ id: slugify(text), text, level: (match[1] ?? "##").length as 2 | 3 });
    }
  }
  return items;
}
