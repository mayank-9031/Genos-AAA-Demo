const REFERENCES = [
  "ISO 25553",
  "ISO/TC 314 — Ageing Societies",
  "UN-Habitat",
  "Innovate UK",
  "UCL Bartlett",
];

export function TrustBand() {
  return (
    <section aria-label="Standards-led collaboration" className="bg-cream border-y border-ink/10">
      <div className="mx-auto max-w-container px-6 md:px-10 py-5 flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
        <p className="text-sage text-[10px] md:text-[10.5px] tracking-[0.2em] uppercase shrink-0">
          Standards-led collaboration
        </p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
          {REFERENCES.map((ref, i) => (
            <li key={ref} className="flex items-center">
              {i > 0 && (
                <span aria-hidden="true" className="text-ink/25 mr-5 hidden sm:inline">
                  ·
                </span>
              )}
              <span className="text-ink/70 text-[11px] md:text-[12px] tracking-[0.05em]">
                {ref}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
