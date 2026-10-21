export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent font-display text-sm font-bold text-ink">
        JS
      </span>
      <span className="font-display text-sm font-semibold uppercase leading-tight tracking-[0.14em]">
        JS Property
        <br />
        <span className="text-white/60">Maintenance</span>
      </span>
    </span>
  );
}
