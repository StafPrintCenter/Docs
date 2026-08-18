import type { ReactNode } from "react";
import { AlertTriangle, Info, Lightbulb, OctagonAlert } from "lucide-react";

export type CalloutKind = "note" | "tip" | "warning" | "danger";

const CONFIG: Record<
  CalloutKind,
  { label: string; icon: typeof Info; wrapper: string; accent: string }
> = {
  note: {
    label: "Note",
    icon: Info,
    wrapper: "border-info/35 bg-info/8",
    accent: "text-info",
  },
  tip: {
    label: "Astuce",
    icon: Lightbulb,
    wrapper: "border-emerald/35 bg-emerald/8",
    accent: "text-emerald",
  },
  warning: {
    label: "Attention",
    icon: AlertTriangle,
    wrapper: "border-amber/40 bg-amber/8",
    accent: "text-amber",
  },
  danger: {
    label: "Avertissement",
    icon: OctagonAlert,
    wrapper: "border-coral/35 bg-coral/8",
    accent: "text-coral",
  },
};

export function Callout({ kind, children }: { kind: CalloutKind; children: ReactNode }) {
  const config = CONFIG[kind];
  const Icon = config.icon;
  return (
    <aside className={`my-6 rounded-xl border px-4 py-3.5 ${config.wrapper}`}>
      <div className={`mb-1.5 flex items-center gap-2 text-sm font-semibold ${config.accent}`}>
        <Icon className="size-4" />
        {config.label}
      </div>
      <div className="callout-body text-[15px] leading-relaxed text-foreground/90">{children}</div>
    </aside>
  );
}
