import { Button } from "@/components/ui/button";
import { PipelineBlock } from "@/components/pipeline-block";
import { Reveal } from "@/components/reveal";

const blocks = [
  {
    label: "01  ·  THE ALLIANCE",
    heading: "Agile Ageing Alliance",
    role: "The convener.",
    body: "Founded in 2015, AAA is an international network of more than 2,000 experts across health, housing, planning, technology, and policy. We bring sectors together that rarely talk to each other — and turn that conversation into shared standards, tools, and action.",
  },
  {
    label: "02  ·  THE STANDARD",
    heading: "ISO 25553 — Smart Multigenerational Neighbourhoods",
    role: "The global framework.",
    body: "In 2020, ISO invited AAA to convene a new international standard for how neighbourhoods can be designed to support every life stage. Endorsed by twenty national standards bodies and published in 2026, ISO 25553 sets the framework for housing, services, and infrastructure that work across generations.",
    connector: "Once the conversation existed,",
  },
  {
    label: "03  ·  THE INFRASTRUCTURE",
    heading: "NOHA — Neighbourhood Open Health Architecture",
    role: "The operating layer.",
    body: "A standard is only as useful as the infrastructure beneath it. NOHA translates ISO 25553 into open tools, shared data, and intelligent infrastructure — the practical layer that lets neighbourhoods adopt the framework at scale, with privacy, autonomy, and accountability built in.",
    connector: "Once the standard existed,",
  },
  {
    label: "04  ·  THE PATHWAY",
    heading: "Demonstrators",
    role: "Real places, real adoption.",
    body: "Standards prove themselves on the ground. We work with cities, councils, developers, and community groups to put ISO 25553 into practice — sharing what works, refining what doesn't, and building the evidence base for the next decade of ageing well in place.",
    connector: "Once the infrastructure was open,",
  },
];

export function Pipeline() {
  return (
    <section className="bg-stone scroll-mt-24" id="pipeline">
      <div className="mx-auto max-w-container px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <p className="text-sage text-[11px] tracking-[0.18em] uppercase text-center">
            The narrative architecture
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="font-serif text-ink text-center text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.01em] mt-4">
            From standard to neighbourhood.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto max-w-[60ch] text-center text-charcoal text-[17px] md:text-[19px] leading-relaxed mt-6">
            Four chapters. Ten years of work. One connected piece — vision,
            standard, infrastructure, and adoption. Read them as one story, not
            four categories.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-16 md:mt-20 border border-sage/30 bg-stone">
            <div className="grid grid-cols-1 lg:grid-cols-4">
              {blocks.map((b, i) => (
                <PipelineBlock
                  key={b.label}
                  {...b}
                  isLast={i === blocks.length - 1}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Editorial pull quote */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <div className="mx-auto w-12 h-px bg-amber" aria-hidden="true" />
          </Reveal>
          <Reveal delay={80}>
            <blockquote className="mx-auto max-w-[760px] mt-10 text-center">
              <p className="font-serif text-ink text-[24px] md:text-[32px] leading-[1.3] italic">
                &ldquo;Ageing well at home is not a lifestyle choice. It is
                where most of us will spend our last decades. The only question
                is whether we design for it — or keep pretending we won&apos;t
                have to.&rdquo;
              </p>
              <footer className="mt-6 text-sage text-[12.5px] tracking-[0.14em] uppercase">
                Ian Spero  ·  Founder, Agile Ageing Alliance
              </footer>
            </blockquote>
          </Reveal>
        </div>

        {/* Closing invitation */}
        <div
          id="demonstrator"
          className="mt-24 md:mt-32 text-center scroll-mt-24"
        >
          <Reveal>
            <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
              The pathway opens here
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h3 className="font-serif text-ink text-[28px] md:text-[36px] leading-tight mt-4">
              Bring a place. We&apos;ll bring the standard.
            </h3>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto max-w-[58ch] text-charcoal text-[17px] leading-relaxed mt-5">
              We&apos;re looking for cities, councils, developers, and
              community groups ready to host the first wave of ISO 25553
              demonstrators. If that sounds like the work you already do,
              we&apos;d like to talk.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-9 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              <Button
                href="https://agileageing.org/iso-discussion-contact-form/"
                external
              >
                Become a demonstrator partner →
              </Button>
              <a
                href="https://agileageing.org/standards/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-4 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-stone rounded-[2px]"
              >
                Or read the standard first
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
