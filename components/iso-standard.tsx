import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { GET_INVOLVED_URL } from "@/lib/links";

export function IsoStandard() {
  return (
    <section id="standard" className="bg-cream scroll-mt-24 border-b border-ink/10">
      <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[720px]">
          <Reveal y={8}>
            <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
              The standard
            </p>
          </Reveal>

          <Reveal delay={60} y={8}>
            <h2 className="font-serif text-ink text-[26px] md:text-[34px] leading-[1.22] tracking-[-0.01em] mt-4">
              ISO 25553: Smart Multigenerational Neighbourhoods
            </h2>
          </Reveal>

          <Reveal delay={110} y={8}>
            <p className="mt-3 text-ink/85 text-[16px] md:text-[17.5px] font-medium">
              A New Standard of Living for the AI Age
            </p>
          </Reveal>

          <Reveal delay={160} y={8}>
            <div aria-hidden="true" className="mt-6 h-[3px] w-14 bg-amber" />
          </Reveal>

          <Reveal delay={210} y={8}>
            <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.65] mt-7">
              AAA has led the development of ISO 25553, Smart Multigenerational
              Neighbourhoods (SMNs), a groundbreaking standard designed to
              support people of all ages and abilities to live well together,
              not necessarily under the same roof, but with the right homes,
              services, spaces, technologies and relationships around them.
            </p>
          </Reveal>

          <Reveal delay={260} y={8}>
            <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.65] mt-5">
              SMNs recognise that people&apos;s needs, roles and aspirations
              change across the life course, and that identity, autonomy,
              agency and purpose should not be lost along the way.
            </p>
          </Reveal>

          <Reveal delay={320} y={8}>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4">
              <Button href="/iso-25553" variant="ink">
                About ISO 25553
              </Button>
              <Button href={GET_INVOLVED_URL} external variant="outline">
                Get involved
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
