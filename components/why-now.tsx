import { Reveal } from "@/components/reveal";

type Panel = {
  label: string;
  pullQuote: string;
  body: string;
};

const PANELS: Panel[] = [
  {
    label: "The old model",
    pullQuote: "People want real communities, not facilities.",
    body:
      "Care homes, retirement villages, “later-life housing.” For thirty years the industry designed around the moment people leave a community — not the decades they live inside one. The institutional model is no longer what people want, and the demographics no longer support building only for the exit.",
  },
  {
    label: "What changed",
    pullQuote: "Defining the new normal.",
    body:
      "After a decade of convening — across health, housing, planning, technology and policy — ISO 25553 was published in 2026 and endorsed by twenty national standards bodies. For the first time there is a global, ratified agreement on what a neighbourhood designed for every life stage actually is.",
  },
  {
    label: "What we’re building",
    pullQuote: "Design for life. One size does not fit all.",
    body:
      "Smart Multigenerational Neighbourhoods — mixed tenure, mixed generation, technologically enabled, affordable, plural. Places where young and old, disabled and able, share the same streets and the same standard. The work moves from paper into place, one demonstrator at a time.",
  },
];

export function WhyNow() {
  return (
    <section className="bg-stone scroll-mt-24" id="why-now">
      <div className="mx-auto max-w-container px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <p className="text-sage text-[11px] tracking-[0.18em] uppercase text-center">
            Why this work, now
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="font-serif text-ink text-center text-[30px] md:text-[44px] leading-[1.15] tracking-[-0.01em] mt-5 max-w-[760px] mx-auto">
            For thirty years we treated ageing as a building type.
            <span className="text-sage italic"> It was always a neighbourhood problem.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto max-w-[62ch] text-center text-charcoal/80 text-[15.5px] md:text-[16.5px] leading-relaxed mt-6">
            By 2050, one in six people on Earth will be over sixty-five. The
            neighbourhoods most of us live in were not designed for that. They
            were designed for someone else, for a moment that has already passed.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-sage/30 border border-sage/30">
            {PANELS.map((panel, i) => (
              <article
                key={panel.label}
                className="group relative bg-stone p-7 md:p-9 flex flex-col transition-colors duration-200 ease-out hover:bg-cream/60 cursor-default"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-0 h-[2px] bg-amber origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <p className="text-sage text-[10.5px] tracking-[0.2em] uppercase transition-colors duration-200 group-hover:text-ink">
                  {String(i + 1).padStart(2, "0")}  ·  {panel.label}
                </p>
                <blockquote className="font-serif text-ink text-[20px] md:text-[22px] leading-[1.25] mt-5 italic">
                  “{panel.pullQuote}”
                </blockquote>
                <p className="text-charcoal/85 text-[14.5px] leading-[1.6] mt-5">
                  {panel.body}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-14 md:mt-20 mx-auto max-w-[680px] text-center">
            <p className="font-serif text-ink text-[20px] md:text-[24px] leading-[1.35]">
              Knowing what’s right is not the same as delivery.
            </p>
            <p className="text-charcoal/80 text-[15px] md:text-[16px] leading-relaxed mt-4">
              The Demonstrator Pathway is how a city, council or developer turns the
              standard from a document into a street. It’s where the next decade of
              this work actually happens.
            </p>
            <a
              href="#demonstrator"
              className="inline-flex items-center gap-2 mt-6 text-ink underline underline-offset-4 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-stone rounded-[2px] text-[15px]"
            >
              See the pathway
              <span aria-hidden="true">→</span>
            </a>
            <div className="mx-auto w-12 h-px bg-amber mt-10" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
