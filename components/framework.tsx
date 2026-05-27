import { Reveal } from "@/components/reveal";

type Item = {
  term: string;
  definition: string;
};

const ITEMS: Item[] = [
  {
    term: "Agile Ageing Alliance",
    definition:
      "A cross-sector alliance working across health, housing, planning, technology and policy. It convenes expertise to help develop shared standards and support their adoption by public bodies and partners.",
  },
  {
    term: "ISO 25553",
    definition:
      "An international standard, developed within ISO/TC 314 (Ageing Societies), setting out how neighbourhoods can be designed to support people at every stage of life — across housing, services and infrastructure.",
  },
  {
    term: "NOHA — Neighbourhood Open Health Architecture",
    definition:
      "An open framework for putting the standard into practice: connecting local services, data and infrastructure, with privacy and accountability built in. Currently moving towards launch.",
  },
];

export function Framework() {
  return (
    <section id="framework" className="bg-stone scroll-mt-24">
      <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[680px]">
          <Reveal y={8}>
            <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
              What we do
            </p>
          </Reveal>
          <Reveal delay={60} y={8}>
            <h2 className="font-serif text-ink text-[24px] md:text-[32px] leading-[1.25] tracking-[-0.01em] mt-4">
              An international standard, and the means to implement it.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120} y={10}>
          <dl className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {ITEMS.map((item, i) => (
              <div key={item.term} className="bg-stone p-7 md:p-8">
                <dt>
                  <span className="block text-sage text-[10.5px] tracking-[0.18em] uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block font-serif text-ink text-[18px] md:text-[19px] leading-snug mt-3">
                    {item.term}
                  </span>
                </dt>
                <dd className="text-charcoal text-[14.5px] leading-[1.65] mt-4">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
