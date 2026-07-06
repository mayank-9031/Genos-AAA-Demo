import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { GET_INVOLVED_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "About — Agile Ageing Alliance",
  description:
    "Agile Ageing Alliance works at the edge of systemic change. For more than a decade, AAA has brought together public agencies, global brands, researchers, SMEs, practitioners and civic leaders to rethink how longer lives can be supported.",
};

export default function AboutPage() {
  return (
    <main>
      {/* ——— Header ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 pt-28 md:pt-36 pb-14 md:pb-16">
          <Reveal y={8}>
            <p className="text-sage text-[10.5px] md:text-[11px] tracking-[0.22em] uppercase">
              About
            </p>
          </Reveal>

          <Reveal delay={80} y={10}>
            <h1
              className="font-serif font-medium text-ink leading-[1.16] tracking-[-0.01em] mt-6 max-w-[22ch]"
              style={{ fontSize: "clamp(29px, 3.2vw, 46px)" }}
            >
              Agile Ageing Alliance works at the edge of systemic change.
            </h1>
          </Reveal>

          <Reveal delay={160} y={8}>
            <div aria-hidden="true" className="mt-7 h-[3px] w-14 bg-amber" />
          </Reveal>
        </div>
      </section>

      {/* ——— The story ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 pb-16 md:pb-24">
          <div className="max-w-[66ch] space-y-5">
            <Reveal y={8}>
              <p className="text-ink text-[16.5px] md:text-[17.5px] leading-[1.62]">
                For more than a decade, AAA has brought together public
                agencies, global brands, researchers, SMEs, practitioners and
                civic leaders to rethink how longer lives can be supported with
                greater dignity, independence, connection and purpose.
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16px] leading-[1.65]">
                Our work has never been confined to ageing as a sector. It has
                focused on the wider systems that shape daily life: homes,
                neighbourhoods, health and care networks, digital
                infrastructure, public services, social connection and trust.
              </p>
            </Reveal>
            <Reveal delay={120} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16px] leading-[1.65]">
                Through pioneering initiatives such as the Long Term Care
                Revolution, Neighbourhoods of the Future and SHAPES, AAA has
                helped open complex public challenges to innovators from far
                beyond the usual boundaries of health and care.
              </p>
            </Reveal>
          </div>

          {/* The harder question — the page's one set-piece */}
          <Reveal delay={160} y={10}>
            <div className="max-w-[720px] my-12 md:my-16 border-l-[3px] border-amber pl-6 md:pl-8">
              <p className="text-charcoal/80 text-[13px] tracking-[0.14em] uppercase">
                This approach has consistently asked a harder question
              </p>
              <p className="font-serif text-ink text-[21px] md:text-[26px] leading-[1.35] tracking-[-0.01em] mt-3">
                How can technology, design, services, data, governance and
                community life work together to support better lives in real
                places?
              </p>
            </div>
          </Reveal>

          <div className="max-w-[66ch] space-y-5">
            <Reveal y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16px] leading-[1.65]">
                That question now sits behind ISO 25553: Smart
                Multigenerational Neighbourhoods, the international standard
                led by AAA to help define how neighbourhoods can support
                dignity, inclusion, autonomy, participation and wellbeing for
                people of all ages and abilities.
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16px] leading-[1.65]">
                The standard combines clear requirements with practical
                recommendations, creating a shared framework for action while
                allowing different places, partners and systems to adapt to
                local needs.
              </p>
            </Reveal>
            <Reveal delay={120} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16px] leading-[1.65]">
                Today, AAA&apos;s work is moving from framework to
                implementation: AI-enabled operating models, trusted
                infrastructure, demonstrators, evaluation and best practice for
                neighbourhoods that can support prevention, care closer to
                home, community participation and measurable outcomes.
              </p>
            </Reveal>
            <Reveal delay={180} y={8}>
              <p className="text-ink text-[15.5px] md:text-[16.5px] leading-[1.65] font-medium">
                AAA&apos;s role is to convene the right expertise, translate
                complexity into common ground, and help shape the practical
                conditions for change.
              </p>
            </Reveal>
          </div>

          <Reveal delay={240} y={8}>
            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-4">
              <Button href="/iso-25553" variant="ink">
                About ISO 25553
              </Button>
              <Button href={GET_INVOLVED_URL} external variant="outline">
                Get involved
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
