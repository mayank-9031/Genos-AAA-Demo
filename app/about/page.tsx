import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { EnlargeableImage } from "@/components/enlargeable-image";
import { VideoEmbed } from "@/components/video-embed";
import { GET_INVOLVED_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "About — Agile Ageing Alliance",
  description:
    "Agile Ageing Alliance works at the edge of systemic change. For more than a decade, AAA has brought together public agencies, global brands, researchers, SMEs, practitioners and civic leaders to rethink how longer lives can be supported.",
};

const INITIATIVES = [
  {
    name: "Long Term Care Revolution",
    note: "Opening long-term care to disruptive innovation.",
  },
  {
    name: "Neighbourhoods of the Future",
    note: "Reimagining homes and neighbourhoods for longer lives.",
  },
  {
    name: "SHAPES",
    note: "A pan-European platform for healthy, active ageing at home.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ——— Hero banner — heading over the community montage ——— */}
      <section
        data-dark-hero
        className="relative w-full min-h-[58vh] md:min-h-[66vh] flex items-end overflow-hidden bg-ink"
      >
        <Image
          src="/community-montage.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark scrim — heavier at the base for heading legibility, and at the
            very top so the transparent navbar's light text stays readable. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/55"
        />
        <div className="relative mx-auto w-full max-w-container px-6 md:px-10 pt-32 pb-12 md:pb-16">
          <div className="max-w-[820px]">
            <Reveal y={8}>
              <p className="text-stone/80 text-[10.5px] md:text-[11px] tracking-[0.22em] uppercase">
                About
              </p>
            </Reveal>
            <Reveal delay={80} y={10}>
              <h1
                className="font-serif font-medium text-white leading-[1.1] tracking-[-0.015em] mt-5"
                style={{ fontSize: "clamp(34px, 4.4vw, 58px)" }}
              >
                About Agile Ageing Alliance
              </h1>
            </Reveal>
            <Reveal delay={140} y={8}>
              <div aria-hidden="true" className="mt-7 h-[3px] w-14 bg-amber" />
            </Reveal>
            <Reveal delay={200} y={8}>
              <p className="mt-6 max-w-[62ch] text-stone/90 text-[17px] md:text-[19px] leading-[1.55]">
                Working at the edge of systemic change to shape healthier, more
                connected and resilient neighbourhoods.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— Section 1 — Working at the edge of systemic change ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 max-w-[620px]">
              <Reveal y={8}>
                <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                  Who we are
                </p>
              </Reveal>
              <Reveal delay={60} y={8}>
                <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
                  Working at the edge of systemic change.
                </h2>
              </Reveal>
              <div className="mt-7 space-y-5">
                <Reveal delay={120} y={8}>
                  <p className="text-ink text-[16.5px] md:text-[17.5px] leading-[1.62]">
                    Agile Ageing Alliance works at the edge of systemic change.
                  </p>
                </Reveal>
                <Reveal delay={170} y={8}>
                  <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68]">
                    For more than a decade, AAA has brought together public
                    agencies, global brands, researchers, SMEs, practitioners and
                    civic leaders to rethink how longer lives can be supported
                    with greater dignity, independence, connection and purpose.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={140} y={16} x={28} scale={0.98}>
                <VideoEmbed
                  id="ekUpzSxbg2Q"
                  title="Neighbourhoods of the Future"
                  caption="A two-minute introduction, filmed at the European Commission"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Section 2 — Rethinking the systems around everyday life ——— */}
      <section className="bg-cream border-y border-ink/10">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7 max-w-[680px]">
              <Reveal y={8}>
                <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                  Our approach
                </p>
              </Reveal>
              <Reveal delay={60} y={8}>
                <h2 className="font-serif text-ink text-[26px] md:text-[34px] leading-[1.2] tracking-[-0.015em] mt-4">
                  Rethinking the systems around everyday life.
                </h2>
              </Reveal>
              <div className="mt-7 space-y-5">
                <Reveal delay={120} y={8}>
                  <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68]">
                    Our work has never been confined to ageing as a sector. It
                    has focused on the wider systems that shape daily life:
                    homes, neighbourhoods, health and care networks, digital
                    infrastructure, public services, social connection and
                    trust.
                  </p>
                </Reveal>
                <Reveal delay={170} y={8}>
                  <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68]">
                    Through pioneering initiatives such as the Long Term Care
                    Revolution, Neighbourhoods of the Future and SHAPES, AAA has
                    helped open complex public challenges to innovators from far
                    beyond the usual boundaries of health and care.
                  </p>
                </Reveal>
                <Reveal delay={220} y={8}>
                  <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68]">
                    This approach has consistently asked a harder question: how
                    can technology, design, services, data, governance and
                    community life work together to support better lives in real
                    places?
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Right — the three initiatives */}
            <div className="lg:col-span-5">
              <Reveal delay={140} y={10}>
                <p className="text-sage text-[10.5px] tracking-[0.18em] uppercase">
                  Pioneering initiatives
                </p>
              </Reveal>
              <div className="mt-5 space-y-4">
                {INITIATIVES.map((item, i) => (
                  <Reveal key={item.name} delay={200 + i * 90} y={8} x={26}>
                    <div className="rounded-[4px] border border-ink/12 bg-white p-6">
                      <span
                        aria-hidden="true"
                        className="block h-[2px] w-8 bg-amber"
                      />
                      <h3 className="font-serif text-ink text-[18px] md:text-[19px] leading-snug mt-4">
                        {item.name}
                      </h3>
                      <p className="text-charcoal text-[14px] leading-[1.6] mt-2">
                        {item.note}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Section 3 — ISO 25553 (light section with the infographic) ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <Reveal y={12}>
                <EnlargeableImage
                  src="/iso-25553-smn-wheel.jpg"
                  alt="ISO 25553 Smart Multigenerational Neighbourhoods infographic — a wheel showing the interconnected domains of the standard around people and communities."
                  aspect="1/1"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  caption="ISO 25553 — the Smart Multigenerational Neighbourhood (click to enlarge)"
                />
              </Reveal>
            </div>

            <div className="lg:col-span-6 max-w-[620px]">
              <Reveal y={8}>
                <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                  ISO 25553
                </p>
              </Reveal>
              <Reveal delay={60} y={8}>
                <h2 className="font-serif text-ink text-[26px] md:text-[34px] leading-[1.2] tracking-[-0.015em] mt-4">
                  The standard behind the question.
                </h2>
              </Reveal>
              <div className="mt-7 space-y-5">
                <Reveal delay={120} y={8}>
                  <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68]">
                    That question now sits behind ISO 25553: Smart
                    Multigenerational Neighbourhoods, the international standard
                    led by AAA to help define how neighbourhoods can support
                    dignity, inclusion, autonomy, participation and wellbeing
                    for people of all ages and abilities.
                  </p>
                </Reveal>
                <Reveal delay={170} y={8}>
                  <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68]">
                    The standard combines clear requirements with practical
                    recommendations, creating a shared framework for action
                    while allowing different places, partners and systems to
                    adapt to local needs.
                  </p>
                </Reveal>
                <Reveal delay={220} y={8}>
                  <div className="pt-1">
                    <Button href="/iso-25553" variant="ink">
                      About ISO 25553
                    </Button>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Section 4 — From framework to implementation ——— */}
      <section className="bg-cream border-y border-ink/10">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[760px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                Where we are now
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
                From framework to implementation.
              </h2>
            </Reveal>
            <Reveal delay={120} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68] mt-7">
                Today, AAA&apos;s work is moving from framework to
                implementation: AI-enabled operating models, trusted
                infrastructure, demonstrators, evaluation and best practice for
                neighbourhoods that can support prevention, care closer to home,
                community participation and measurable outcomes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— Section 5 — AAA's role (centred closing statement) ——— */}
      <section className="bg-ink text-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-20 md:py-28">
          <div className="mx-auto max-w-[820px] text-center">
            <Reveal y={8}>
              <p className="text-stone/60 text-[11px] tracking-[0.18em] uppercase">
                AAA&apos;s role
              </p>
            </Reveal>
            <Reveal delay={80} y={14} scale={0.97}>
              <p className="font-serif text-stone text-[26px] md:text-[38px] leading-[1.3] tracking-[-0.01em] mt-6">
                AAA&apos;s role is to convene the right expertise, translate
                complexity into common ground, and help shape the practical
                conditions for change.
              </p>
            </Reveal>
            <Reveal delay={200} y={8}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-4">
                <Button href="/iso-25553" variant="cream">
                  About ISO 25553
                </Button>
                <Button href={GET_INVOLVED_URL} external variant="ghost-light">
                  Get involved
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
