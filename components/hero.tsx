import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative w-full bg-stone">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[80vh]">
        {/* LEFT — content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 pt-24 pb-12 md:pt-28 lg:py-24">
          <Reveal delay={120} y={12}>
            <p className="text-sage text-[10.5px] md:text-[11px] tracking-[0.22em] uppercase">
              ISO 25553 · Smart Multigenerational Neighbourhoods
            </p>
          </Reveal>

          <Reveal delay={220} y={18}>
            <h1
              className="font-serif font-medium text-ink leading-[1.08] tracking-[-0.02em] mt-7 max-w-[15ch]"
              style={{ fontSize: "clamp(33px, 3.7vw, 56px)" }}
            >
              A standard for neighbourhoods where it&apos;s good to grow old.
            </h1>
          </Reveal>

          <Reveal delay={360} y={8}>
            <div className="mt-7 h-[2px] w-11 bg-amber" aria-hidden="true" />
          </Reveal>

          <Reveal delay={460} y={12}>
            <p className="mt-7 max-w-[46ch] text-charcoal/80 text-[15.5px] md:text-[17px] leading-[1.55]">
              ISO 25553 sets out what good looks like. We work with the cities,
              councils and communities turning it into real places.
            </p>
          </Reveal>

          <Reveal delay={600} y={12}>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button
                href="https://agileageing.org/standards/"
                external
                variant="ink"
                size="default"
                className="group"
              >
                <span>Read the standard</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Button>

              <a
                href="#demonstrator"
                className="group text-ink underline underline-offset-[5px] decoration-1 hover:decoration-2 text-[14.5px] font-medium inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-stone rounded-[2px]"
              >
                <span>Explore the demonstrator pathway</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — calm still photograph, lightly graded to the palette */}
        <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-0 bg-cream overflow-hidden">
          <Image
            src="/hero-neighbourhood.jpg"
            alt="Residents of different generations together on a sunlit residential street"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover saturate-[0.92]"
          />
          {/* Soft seam so the photo meets the stone column gently on desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-stone/70 to-transparent"
          />
          {/* Quiet grounding vignette for depth */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/15 to-transparent"
          />
        </div>
      </div>

      {/* Trust strip — one real, verifiable credential, stated once */}
      <div className="border-t border-ink/10 bg-cream">
        <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-4 flex flex-wrap items-center gap-x-5 gap-y-3">
          <span className="inline-flex items-center rounded-[3px] border border-ink/10 bg-white px-2.5 py-1.5">
            <Image
              src="/aaa-logo.png"
              alt="Agile Ageing Alliance with ISO — Ageing Societies, ISO/TC 314"
              width={600}
              height={300}
              className="h-10 md:h-12 w-auto"
            />
          </span>
          <span aria-hidden="true" className="hidden sm:block h-8 w-px bg-ink/15" />
          <span className="text-ink/70 text-[10.5px] md:text-[11px] tracking-[0.14em] uppercase">
            In partnership with UN-Habitat
          </span>
        </div>
      </div>
    </section>
  );
}
