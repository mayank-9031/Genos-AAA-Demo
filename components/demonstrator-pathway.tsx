import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    label: "Assess",
    body: "Establish local needs and readiness against the standard.",
  },
  {
    label: "Implement",
    body: "Apply ISO 25553 across housing, services and infrastructure.",
  },
  {
    label: "Evidence",
    body: "Measure outcomes and share what works, openly.",
  },
];

export function DemonstratorPathway() {
  return (
    <section id="demonstrator" className="bg-cream scroll-mt-24 border-t border-ink/10">
      <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[680px]">
          <Reveal y={8}>
            <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
              Implementation
            </p>
          </Reveal>
          <Reveal delay={60} y={8}>
            <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
              The demonstrator pathway
            </h2>
          </Reveal>
          <Reveal delay={120} y={8}>
            <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.6] mt-5">
              Standards are proven in practice. The Alliance works with local
              authorities, health systems, developers, universities and community
              organisations to apply ISO 25553 in real places — building the
              evidence base for wider adoption.
            </p>
          </Reveal>
        </div>

        <ol className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.label}
              as="li"
              delay={i * 120}
              y={12}
              className="bg-cream p-7 md:p-8"
            >
              <span className="block text-sage text-[10.5px] tracking-[0.18em] uppercase">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <span className="block font-serif text-ink text-[18px] md:text-[19px] mt-3">
                {step.label}
              </span>
              <span className="block text-charcoal text-[14.5px] leading-[1.6] mt-3">
                {step.body}
              </span>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={240} y={8}>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button
              href="https://agileageing.org/iso-discussion-contact-form/"
              external
              variant="ink"
            >
              Discuss a demonstrator
            </Button>
            <a
              href="https://agileageing.org/standards/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline underline-offset-[5px] decoration-1 hover:decoration-2 text-[14.5px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-[2px]"
            >
              About ISO 25553
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
