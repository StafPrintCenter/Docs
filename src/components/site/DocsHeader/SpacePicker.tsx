import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { spaceNav } from "@/data/content/docs";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface SpacePickerProps {
  activeSpaceId?: string;
  onSelectSpace: (id: string) => void;
  mobile?: boolean;
}

export function SpacePicker({ activeSpaceId, onSelectSpace, mobile = false }: SpacePickerProps) {
  const [open, setOpen] = useState(false);
  const activeSpaceLabel = spaceNav.find((e) => e.id === activeSpaceId)?.label ?? "Choisir un espace";

  // Version Mobile
  if (mobile) {
    return (
      <div className="border-t border-border/70 px-4 py-3 xl:hidden flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
          Espace :
        </span>
        <select
          aria-label="Choisir un espace"
          value={activeSpaceId ?? ""}
          onChange={(e) => onSelectSpace(e.target.value)}
          className="w-full flex-1 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground"
        >
          <option value="" disabled>
            Choisir un espace
          </option>
          {spaceNav.map((entry) => (
            <option key={entry.id} value={entry.id}>
              {entry.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // Version Desktop
  return (
    <div className="ml-4 hidden shrink-0 items-center gap-2 xl:flex">
      <span className="text-sm font-medium text-muted-foreground">
        Espace :
      </span>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-border bg-muted/60 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-brand/50"
          >
            <span className="max-w-44 truncate">{activeSpaceLabel}</span>
            <ChevronsUpDown className="size-3.5 text-muted-foreground" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-64 p-0">
          <Command>
            <CommandInput placeholder="Rechercher un espace…" />
            <CommandList>
              <CommandEmpty>Aucun espace trouvé.</CommandEmpty>
              <CommandGroup>
                {spaceNav.map((entry) => {
                  const isActive = entry.id === activeSpaceId;
                  return (
                    <CommandItem
                      key={entry.id}
                      value={entry.label}
                      onSelect={() => {
                        onSelectSpace(entry.id);
                        setOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      <Check className={`mr-2 size-4 ${isActive ? "opacity-100" : "opacity-0"}`} />
                      {entry.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}