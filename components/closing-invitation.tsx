import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function ClosingInvitation() {
  return (
    <section id="demonstrator" className="bg-stone scroll-mt-24">
      <div className="mx-auto max-w-container px-6 md:px-10 pt-10 md:pt-14 pb-16 md:pb-24">
        <div className="mx-auto max-w-[640px] text-center">
          <Reveal>
            <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
              The demonstrator pathway
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-serif text-ink text-[28px] md:text-[40px] leading-[1.15] tracking-[-0.01em] mt-4">
              Bring a place. We&apos;ll bring the standard.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto max-w-[56ch] text-charcoal/80 text-[15.5px] md:text-[16.5px] leading-relaxed mt-6">
              We work with cities, councils, developers and community groups
              ready to host the first ISO 25553 demonstrators. If that sounds
              like the work you already do, we&apos;d like to talk.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-9 flex flex-wrap justify-center items-center gap-x-7 gap-y-4">
              <Button
                href="https://agileageing.org/iso-discussion-contact-form/"
                external
                variant="ink"
                className="group"
              >
                <span>Become a demonstrator partner</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Button>
              <a
                href="https://agileageing.org/standards/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-[5px] decoration-1 hover:decoration-2 text-[14.5px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-stone rounded-[2px]"
              >
                Or read the standard first
              </a>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mx-auto w-12 h-px bg-amber mt-14" aria-hidden="true" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
