import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative w-full bg-stone">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[78vh]">
        {/* LEFT — content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 pt-24 pb-12 md:pt-28 lg:py-24">
          <Reveal delay={100} y={8}>
            <p className="text-sage text-[10.5px] md:text-[11px] tracking-[0.22em] uppercase">
              Agile Ageing Alliance
            </p>
          </Reveal>

          <Reveal delay={180} y={10}>
            <h1
              className="font-serif font-medium text-ink leading-[1.16] tracking-[-0.01em] mt-6 max-w-[20ch]"
              style={{ fontSize: "clamp(27px, 2.9vw, 42px)" }}
            >
              Supporting the implementation of ISO&nbsp;25553 for age-friendly,
              multigenerational neighbourhoods.
            </h1>
          </Reveal>

          <Reveal delay={300} y={8}>
            <p className="mt-6 max-w-[52ch] text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.6]">
              We work with standards bodies, public authorities, universities and
              communities to turn an international standard into practical,
              locally delivered change.
            </p>
          </Reveal>

          <Reveal delay={420} y={8}>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button
                href="https://agileageing.org/standards/"
                external
                variant="ink"
                size="default"
              >
                About ISO 25553
              </Button>

              <a
                href="#demonstrator"
                className="text-ink underline underline-offset-[5px] decoration-1 hover:decoration-2 text-[14.5px] font-medium inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-stone rounded-[2px]"
              >
                <span>The demonstrator pathway</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — calm still photograph, lightly graded to the palette */}
        <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-0 bg-cream overflow-hidden">
          <Image
            src="/hero-neighbourhood.jpg"
            alt="Residents of different generations together on a sunlit residential street"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover saturate-[0.9]"
          />
          {/* Soft seam so the photo meets the stone column gently on desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-stone/70 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
