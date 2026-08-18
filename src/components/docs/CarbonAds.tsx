export function CarbonAds() {
  return (
    <aside
      aria-label="Publicité"
      className="mt-8 rounded-xl border border-dashed border-border bg-card p-4 text-xs"
    >
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        Sponsorisé — Carbon Ads
      </p>
      <div id="carbonads" className="space-y-2">
        <a
          href="https://www.carbonads.net/"
          target="_blank"
          rel="noreferrer sponsored"
          className="block rounded-lg bg-muted p-3 leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="block font-medium text-foreground">
            Votre marque ici, devant les développeurs STAF.
          </span>
          <span className="block">Emplacement Carbon Ads réservé à la documentation.</span>
        </a>
      </div>
    </aside>
  );
}
