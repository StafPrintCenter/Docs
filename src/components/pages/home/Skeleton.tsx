export function SpacesSectionSkeleton() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 animate-pulse"
        >
          <div>
            <div className="flex items-center justify-between gap-3">
              <div className="size-10 rounded-xl bg-muted" />
              <div className="h-5 w-24 rounded-full bg-muted" />
            </div>

            <div className="mt-4 h-6 w-1/2 rounded bg-muted" />
            <div className="mt-3 space-y-2">
              <div className="h-4 w-full rounded bg-muted" />
              <div className="h-4 w-4/5 rounded bg-muted" />
            </div>
          </div>

          <div className="mt-6 h-4 w-28 rounded bg-muted" />
        </div>
      ))}
    </>
  );
}