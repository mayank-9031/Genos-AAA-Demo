import { Reveal } from "@/components/reveal";

type Panel = {
  label: string;
  body: string;
};

const PANELS: Panel[] = [
  {
    label: "The old model",
    body:
      "For thirty years the industry built around the moment people leave a community — not the decades they live inside one. The demographics no longer support designing only for the exit.",
  },
  {
    label: "What changed",
    body:
      "A decade of work — across health, housing, planning, technology and policy — produced ISO 25553, an international standard, developed within ISO/TC 314, for neighbourhoods designed to support every life stage.",
  },
  {
    label: "What we build",
    body:
      "Multigenerational neighbourhoods — mixed tenure, mixed generation, affordable and plural. Young and old share the same streets and the same standard, one demonstrator at a time.",
  },
];

export function WhyNow() {
  return (
    <section className="bg-stone scroll-mt-24" id="why-now">
      <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
        <Reveal>
          <p className="text-sage text-[11px] tracking-[0.18em] uppercase text-center">
            Why this work, now
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="font-serif text-ink text-center text-[28px] md:text-[42px] leading-[1.18] tracking-[-0.01em] mt-5 max-w-[20ch] mx-auto">
            The way we age is changing faster than the places we live.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto max-w-[62ch] text-center text-charcoal/80 text-[15.5px] md:text-[16.5px] leading-relaxed mt-6">
            By 2050, one in six people on Earth will be over sixty-five. Most of
            our neighbourhoods were designed for a different population, at a
            different time. ISO 25553 is a shared, international agreement on how
            to design for the one we actually have.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {PANELS.map((panel, i) => (
              <article
                key={panel.label}
                className="bg-stone p-7 md:p-9 flex flex-col"
              >
                <p className="text-sage text-[10.5px] tracking-[0.2em] uppercase">
                  {String(i + 1).padStart(2, "0")}  ·  {panel.label}
                </p>
                <p className="text-charcoal/85 text-[15px] leading-[1.65] mt-4">
                  {panel.body}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
