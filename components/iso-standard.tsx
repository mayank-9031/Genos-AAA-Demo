import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Parallax } from "@/components/parallax";
import { Button } from "@/components/ui/button";
import { GET_INVOLVED_URL } from "@/lib/links";

export function IsoStandard() {
  return (
    <section id="standard" className="bg-cream scroll-mt-24 border-b border-ink/10">
      <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT — the standard */}
          <div className="lg:col-span-6 max-w-[620px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                The standard
              </p>
            </Reveal>

            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[30px] md:text-[40px] leading-[1.14] tracking-[-0.015em] mt-4">
                ISO 25553: Smart Multigenerational Neighbourhoods
              </h2>
            </Reveal>

            <Reveal delay={110} y={8}>
              <p className="mt-4 text-ink/85 text-[17px] md:text-[19px] font-medium">
                A New Standard of Living for the AI Age
              </p>
            </Reveal>

            <Reveal delay={160} y={8}>
              <div aria-hidden="true" className="mt-6 h-[3px] w-14 bg-amber" />
            </Reveal>

            <Reveal delay={210} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68] mt-7">
                AAA has led the development of ISO 25553, Smart Multigenerational
                Neighbourhoods (SMNs), a groundbreaking standard designed to
                support people of all ages and abilities to live well together,
                not necessarily under the same roof, but with the right homes,
                services, spaces, technologies and relationships around them.
              </p>
            </Reveal>

            <Reveal delay={260} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68] mt-5">
                SMNs recognise that people&apos;s needs, roles and aspirations
                change across the life course, and that identity, autonomy,
                agency and purpose should not be lost along the way.
              </p>
            </Reveal>

            <Reveal delay={320} y={8}>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
                <Button href="/iso-25553" variant="ink">
                  About ISO 25553
                </Button>
                <Button href={GET_INVOLVED_URL} external variant="outline">
                  Get involved
                </Button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — large featured image */}
          <div className="lg:col-span-6">
            <Reveal delay={180} y={16} x={28} scale={0.98}>
              <Parallax speed={0.04}>
                <figure>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[4px] border border-ink/15 bg-white shadow-[0_1px_3px_rgba(11,37,69,0.08)]">
                  <Image
                    src="/iso-25553-connected-system.jpg"
                    alt="Infographic: the neighbourhood as a connected system — an integrated ISO 25553 operating model with people and communities at the centre, surrounded by planning and governance, digital infrastructure, social innovation, services and care integration, and built form and environment."
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>
                  <figcaption className="mt-3 text-charcoal/70 text-[12px] tracking-[0.06em]">
                    The neighbourhood as a connected system — the ISO 25553
                    integrated operating model
                  </figcaption>
                </figure>
              </Parallax>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
