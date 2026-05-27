import { Reveal } from "@/components/reveal";

const AUDIENCES = [
  {
    label: "Health and care systems",
    body: "Prevention and independent living that ease long-term demand.",
  },
  {
    label: "Local government",
    body: "A common standard for planning and commissioning age-friendly places.",
  },
  {
    label: "Universities and investors",
    body: "A shared evidence base and a replicable, standards-based approach.",
  },
];

export function WhyItMatters() {
  return (
    <section id="why-it-matters" className="bg-stone scroll-mt-24">
      <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[680px]">
          <Reveal y={8}>
            <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
              Why this matters
            </p>
          </Reveal>
          <Reveal delay={60} y={8}>
            <h2 className="font-serif text-ink text-[24px] md:text-[32px] leading-[1.25] tracking-[-0.01em] mt-4">
              Why a systems approach matters.
            </h2>
          </Reveal>
          <Reveal delay={120} y={8}>
            <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.65] mt-5">
              By 2050, one in six people worldwide will be over 65. Designing
              neighbourhoods for that reality — rather than retrofitting for it
              later — reduces pressure on health and care systems, supports
              independent living, and helps public funds go further. A shared
              international standard gives institutions a common, evidence-based
              basis for planning, commissioning and investment.
            </p>
          </Reveal>
        </div>

        <Reveal delay={180} y={10}>
          <dl className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {AUDIENCES.map((item) => (
              <div key={item.label} className="bg-stone p-7 md:p-8">
                <dt className="font-serif text-ink text-[17px] md:text-[18px] leading-snug">
                  {item.label}
                </dt>
                <dd className="text-charcoal text-[14.5px] leading-[1.65] mt-3">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
