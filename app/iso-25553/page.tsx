import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { GET_INVOLVED_URL, ISO_OVERVIEW_PDF_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "ISO 25553: Smart Multigenerational Neighbourhoods — Agile Ageing Alliance",
  description:
    "ISO 25553 provides a global framework for Smart Multigenerational Neighbourhoods: places designed to support people of all ages and abilities to live well together. A New Standard of Living for the AI Age.",
};

const AUDIENCES = [
  "local and national government",
  "planners and housing authorities",
  "developers, architects and designers",
  "health systems, social care providers and service commissioners",
  "technology, infrastructure, AI, IoT, utilities and service providers",
  "universities, researchers, evaluators and innovation leaders",
];

const PRIORITIES = [
  {
    term: "Safety",
    body: "Intelligent environments that protect physical, emotional and digital wellbeing.",
  },
  {
    term: "Access",
    body: "Services designed to remove barriers and widen inclusion.",
  },
  {
    term: "Information",
    body: "Transparent systems and data control.",
  },
  {
    term: "Representation",
    body: "People and communities as co-creators.",
  },
  {
    term: "Loneliness",
    body: "Design that fosters connection and belonging.",
  },
  {
    term: "Sustainability",
    body: "Smart, climate-resilient and self-sufficient systems.",
  },
];

export default function Iso25553Page() {
  return (
    <main>
      {/* ——— Page header + opening ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 pt-28 md:pt-36 pb-16 md:pb-20">
          <Reveal y={8}>
            <p className="text-sage text-[10.5px] md:text-[11px] tracking-[0.22em] uppercase">
              International standard · Developed within ISO/TC 314
            </p>
          </Reveal>

          <Reveal delay={80} y={10}>
            <h1
              className="font-serif font-medium text-ink leading-[1.14] tracking-[-0.01em] mt-6 max-w-[24ch]"
              style={{ fontSize: "clamp(29px, 3.2vw, 46px)" }}
            >
              ISO 25553: Smart Multigenerational Neighbourhoods
            </h1>
          </Reveal>

          <Reveal delay={140} y={8}>
            <p className="mt-4 text-ink/85 text-[17px] md:text-[19px] font-medium">
              A New Standard of Living for the AI Age
            </p>
          </Reveal>

          <Reveal delay={200} y={8}>
            <div aria-hidden="true" className="mt-7 h-[3px] w-14 bg-amber" />
          </Reveal>

          <div className="mt-9 max-w-[66ch] space-y-5">
            <Reveal delay={260} y={8}>
              <p className="text-ink text-[16.5px] md:text-[17.5px] leading-[1.62]">
                ISO 25553 provides a global framework for Smart
                Multigenerational Neighbourhoods: places designed to support
                people of all ages and abilities to live well together, with
                the right homes, services, public spaces, facilities,
                technologies and relationships around them.
              </p>
            </Reveal>
            <Reveal delay={320} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16px] leading-[1.65]">
                The standard brings together human-centred design, digital
                infrastructure, cognitive housing, redistributed health and
                care, connected services, placemaking, transportation,
                neighbourhood intelligence and governance into a single
                scalable framework.
              </p>
            </Reveal>
            <Reveal delay={380} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16px] leading-[1.65]">
                Developed through international consensus, ISO 25553 helps move
                trusted, AI-enabled living from promise to practice.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— The neighbourhood as a connected system (infographic) ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 pb-16 md:pb-24">
          <Reveal y={12}>
            <figure>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[3px] border border-ink/15 bg-cream">
                <Image
                  src="/iso-25553-connected-system.jpg"
                  alt="Infographic: the neighbourhood as a connected system. An integrated operating model with people and communities at the centre, surrounded by planning and governance, digital infrastructure, social innovation and community life, services and care integration, and built form and environment — delivering better lives, better outcomes, better value, resilient places and stronger connections."
                  fill
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-charcoal/70 text-[12px] tracking-[0.06em]">
                The neighbourhood as a connected system — the ISO 25553
                integrated operating model
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ——— Why it matters ——— */}
      <section className="bg-cream border-y border-ink/10">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[680px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                Why it matters
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[24px] md:text-[32px] leading-[1.25] tracking-[-0.01em] mt-4">
                The neighbourhood, working together by design.
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5">
              <Reveal delay={120} y={8}>
                <p className="text-charcoal text-[15.5px] md:text-[16px] leading-[1.65]">
                  Modern systems for housing, health, care, technology and
                  investment have too often evolved separately.
                </p>
              </Reveal>
              <Reveal delay={170} y={8}>
                <p className="text-charcoal text-[15.5px] md:text-[16px] leading-[1.65]">
                  ISO 25553 establishes the neighbourhood as the place where
                  physical space, social life, services and digital systems can
                  work together by design.
                </p>
              </Reveal>
              <Reveal delay={220} y={8}>
                <p className="text-charcoal text-[15.5px] md:text-[16px] leading-[1.65]">
                  It provides a shared framework for moving beyond short-term,
                  siloed solutions towards neighbourhoods that can support
                  independence, connection, dignity and wellbeing over time.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Who should use it ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[680px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                Who should use it
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.65] mt-5">
                ISO 25553 is relevant to organisations and practitioners
                involved in planning, delivering, operating and evaluating
                neighbourhoods as long-term civic infrastructure, including:
              </p>
            </Reveal>
          </div>

          <Reveal delay={140} y={10}>
            <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
              {AUDIENCES.map((audience) => (
                <li key={audience} className="bg-stone p-6 md:p-7">
                  <span
                    aria-hidden="true"
                    className="block h-[2px] w-8 bg-amber"
                  />
                  <span className="block text-ink text-[15px] md:text-[15.5px] leading-[1.55] mt-4">
                    {audience}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ——— What it enables ——— */}
      <section className="bg-cream border-y border-ink/10">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[680px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                What it enables
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[24px] md:text-[32px] leading-[1.25] tracking-[-0.01em] mt-4">
                Neighbourhoods that can adapt as lives change.
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <Reveal delay={120} y={10}>
              <div>
                <h3 className="font-serif text-ink text-[19px] md:text-[20px] leading-snug">
                  For people and communities
                </h3>
                <div className="mt-4 space-y-4">
                  <p className="text-charcoal text-[15px] md:text-[15.5px] leading-[1.65]">
                    ISO 25553 supports neighbourhoods that can adapt as lives
                    change.
                  </p>
                  <p className="text-charcoal text-[15px] md:text-[15.5px] leading-[1.65]">
                    Homes and everyday environments are shaped to preserve
                    independence, wellbeing and dignity, while health, care and
                    related services are brought closer to daily life.
                  </p>
                  <p className="text-charcoal text-[15px] md:text-[15.5px] leading-[1.65]">
                    By strengthening social infrastructure and
                    intergenerational connection, the framework helps reduce
                    isolation and support continuity of living over time.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200} y={10}>
              <div>
                <h3 className="font-serif text-ink text-[19px] md:text-[20px] leading-snug">
                  For local authorities, regional government and delivery
                  partners
                </h3>
                <div className="mt-4 space-y-4">
                  <p className="text-charcoal text-[15px] md:text-[15.5px] leading-[1.65]">
                    ISO 25553 provides a shared operating model for planning,
                    governing and scaling neighbourhoods as long-term civic
                    infrastructure.
                  </p>
                  <p className="text-charcoal text-[15px] md:text-[15.5px] leading-[1.65]">
                    It enables innovation to move beyond pilots, reduces risk,
                    and creates clearer expectations for how digital systems
                    support care, dignity and human connection.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— Key priorities ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[680px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                Key priorities
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[24px] md:text-[32px] leading-[1.25] tracking-[-0.01em] mt-4">
                Priorities that matter to people and communities.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={140} y={10}>
            <dl className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
              {PRIORITIES.map((item) => (
                <div key={item.term} className="bg-stone p-7 md:p-8">
                  <dt className="font-serif text-ink text-[17px] md:text-[18px] leading-snug">
                    {item.term}
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

      {/* ——— Neighbourhoods for life ——— */}
      <section className="bg-ink text-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[720px]">
            <Reveal y={8}>
              <p className="text-stone/60 text-[11px] tracking-[0.18em] uppercase">
                Neighbourhoods for life
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-stone text-[24px] md:text-[32px] leading-[1.25] tracking-[-0.01em] mt-4">
                Human-centred neighbourhoods that learn to care.
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5">
              <Reveal delay={120} y={8}>
                <p className="text-stone/90 text-[15.5px] md:text-[16.5px] leading-[1.65]">
                  ISO 25553 sets out a globally applicable framework for
                  co-creating human-centred neighbourhoods that learn to care.
                </p>
              </Reveal>
              <Reveal delay={170} y={8}>
                <p className="text-stone/90 text-[15.5px] md:text-[16.5px] leading-[1.65]">
                  These communities are shaped by their capacity to support
                  continuity of living across the life course.
                </p>
              </Reveal>
              <Reveal delay={220} y={8}>
                <p className="text-stone/90 text-[15.5px] md:text-[16.5px] leading-[1.65]">
                  By aligning physical design, social infrastructure and
                  digital coordination, ISO 25553 creates the conditions for
                  people of all ages and abilities to participate, contribute
                  and belong on their own terms.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ——— How to engage ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[680px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                How to engage
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[24px] md:text-[32px] leading-[1.25] tracking-[-0.01em] mt-4">
                Shaping ISO 25553 Parts 2 and 3, 2026–2031.
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5">
              <Reveal delay={120} y={8}>
                <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.65]">
                  AAA is now convening partners to shape ISO 25553 Parts 2 and
                  3, 2026–2031.
                </p>
              </Reveal>
              <Reveal delay={170} y={8}>
                <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.65]">
                  This next phase will focus on practical guidance, use cases,
                  neighbourhood demonstrators, quantifiable evidence,
                  evaluation and socioeconomic impact.
                </p>
              </Reveal>
              <Reveal delay={220} y={8}>
                <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.65]">
                  The aim is to turn shared ambition into repeatable,
                  investable and sustainable practice.
                </p>
              </Reveal>
            </div>

            <Reveal delay={300} y={8}>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4">
                <Button href={ISO_OVERVIEW_PDF_URL} external variant="ink">
                  Download overview
                </Button>
                <Button href={GET_INVOLVED_URL} external variant="outline">
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
