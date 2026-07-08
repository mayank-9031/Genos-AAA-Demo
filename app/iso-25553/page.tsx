import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { EnlargeableImage } from "@/components/enlargeable-image";
import { GET_INVOLVED_URL, ISO_OVERVIEW_PDF_URL } from "@/lib/links";
import {
  IconGovernment,
  IconPlanning,
  IconDesign,
  IconCare,
  IconTechnology,
  IconResearch,
  IconSafety,
  IconAccess,
  IconInformation,
  IconRepresentation,
  IconConnection,
  IconSustainability,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "ISO 25553: Smart Multigenerational Neighbourhoods — Agile Ageing Alliance",
  description:
    "ISO 25553 provides a global framework for Smart Multigenerational Neighbourhoods: places designed to support people of all ages and abilities to live well together. A New Standard of Living for the AI Age.",
};

const AUDIENCES = [
  { icon: IconGovernment, label: "Local and national government" },
  { icon: IconPlanning, label: "Planners and housing authorities" },
  { icon: IconDesign, label: "Developers, architects and designers" },
  {
    icon: IconCare,
    label:
      "Health systems, social care providers and service commissioners",
  },
  {
    icon: IconTechnology,
    label:
      "Technology, infrastructure, AI, IoT, utilities and service providers",
  },
  {
    icon: IconResearch,
    label: "Universities, researchers, evaluators and innovation leaders",
  },
];

const PRIORITIES = [
  {
    icon: IconSafety,
    term: "Safety",
    body: "Intelligent environments that protect physical, emotional and digital wellbeing.",
  },
  {
    icon: IconAccess,
    term: "Access",
    body: "Services designed to remove barriers and widen inclusion.",
  },
  {
    icon: IconInformation,
    term: "Information",
    body: "Transparent systems and data control.",
  },
  {
    icon: IconRepresentation,
    term: "Representation",
    body: "People and communities as co-creators.",
  },
  {
    icon: IconConnection,
    term: "Loneliness",
    body: "Design that fosters connection and belonging.",
  },
  {
    icon: IconSustainability,
    term: "Sustainability",
    body: "Smart, climate-resilient and self-sufficient systems.",
  },
];

export default function Iso25553Page() {
  return (
    <main>
      {/* ——— Hero — page header and opening, beside the SMN infographic ——— */}
      <section className="bg-stone border-b border-ink/10">
        <div className="mx-auto max-w-container px-6 md:px-10 pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT — title, subtitle and the opening statement */}
            <div className="lg:col-span-6 max-w-[620px]">
              <Reveal y={8}>
                <p className="text-sage text-[10.5px] md:text-[11px] tracking-[0.22em] uppercase">
                  International standard · Developed within ISO/TC 314
                </p>
              </Reveal>
              <Reveal delay={80} y={10}>
                <h1
                  className="font-serif font-medium text-ink leading-[1.1] tracking-[-0.015em] mt-5"
                  style={{ fontSize: "clamp(32px, 3.8vw, 52px)" }}
                >
                  ISO 25553: Smart Multigenerational Neighbourhoods
                </h1>
              </Reveal>
              <Reveal delay={150} y={8}>
                <p className="mt-5 text-ink/85 text-[17px] md:text-[19px] font-medium">
                  A New Standard of Living for the AI Age
                </p>
              </Reveal>
              <Reveal delay={210} y={8}>
                <div aria-hidden="true" className="mt-7 h-[3px] w-14 bg-amber" />
              </Reveal>
              <div className="mt-7 space-y-5">
                <Reveal delay={270} y={8}>
                  <p className="text-ink text-[16px] md:text-[17px] leading-[1.62]">
                    ISO 25553 provides a global framework for Smart
                    Multigenerational Neighbourhoods: places designed to support
                    people of all ages and abilities to live well together, with
                    the right homes, services, public spaces, facilities,
                    technologies and relationships around them.
                  </p>
                </Reveal>
                <Reveal delay={330} y={8}>
                  <p className="text-charcoal text-[15px] md:text-[15.5px] leading-[1.65]">
                    The standard brings together human-centred design, digital
                    infrastructure, cognitive housing, redistributed health and
                    care, connected services, placemaking, transportation,
                    neighbourhood intelligence and governance into a single
                    scalable framework.
                  </p>
                </Reveal>
                <Reveal delay={390} y={8}>
                  <p className="text-charcoal text-[15px] md:text-[15.5px] leading-[1.65]">
                    Developed through international consensus, ISO 25553 helps
                    move trusted, AI-enabled living from promise to practice.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* RIGHT — the SMN infographic, pulled up alongside the title */}
            <div className="lg:col-span-6">
              <Reveal delay={200} y={20} scale={0.95}>
                <EnlargeableImage
                  src="/iso-25553-smn-wheel.jpg"
                  alt="ISO 25553 Smart Multigenerational Neighbourhoods infographic — a wheel showing the interconnected domains of the standard around people and communities."
                  aspect="1/1"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  caption="The Smart Multigenerational Neighbourhood — the domains of ISO 25553 (click to enlarge)"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Why it matters ——— */}
      <section className="bg-cream border-y border-ink/10">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[760px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                01 · Why it matters
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
                The neighbourhood, working together by design.
              </h2>
            </Reveal>
            <div className="mt-7 space-y-5">
              <Reveal delay={120} y={8}>
                <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68]">
                  Modern systems for housing, health, care, technology and
                  investment have too often evolved separately.
                </p>
              </Reveal>
              <Reveal delay={170} y={8}>
                <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68]">
                  ISO 25553 establishes the neighbourhood as the place where
                  physical space, social life, services and digital systems can
                  work together by design.
                </p>
              </Reveal>
              <Reveal delay={220} y={8}>
                <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68]">
                  It provides a shared framework for moving beyond short-term,
                  siloed solutions towards neighbourhoods that can support
                  independence, connection, dignity and wellbeing over time.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Who should use it — six icon cards ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[760px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                02 · Who should use it
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

          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {AUDIENCES.map((audience, i) => {
              const Icon = audience.icon;
              return (
                <Reveal key={audience.label} delay={i * 60} y={10}>
                  <div className="h-full rounded-[4px] border border-ink/12 bg-white p-6 md:p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] bg-ink/5 text-ink">
                      <Icon />
                    </span>
                    <p className="text-ink text-[15.5px] md:text-[16px] leading-[1.5] mt-5">
                      {audience.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ——— What it enables — two feature cards ——— */}
      <section className="bg-cream border-y border-ink/10">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[760px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                03 · What it enables
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
                Neighbourhoods that can adapt as lives change.
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <Reveal delay={120} y={10}>
              <div className="h-full rounded-[4px] border border-ink/12 bg-white p-8 md:p-10">
                <h3 className="font-serif text-ink text-[21px] md:text-[23px] leading-snug">
                  For people and communities
                </h3>
                <div className="mt-5 space-y-4">
                  <p className="text-charcoal text-[15px] md:text-[15.5px] leading-[1.68]">
                    ISO 25553 supports neighbourhoods that can adapt as lives
                    change.
                  </p>
                  <p className="text-charcoal text-[15px] md:text-[15.5px] leading-[1.68]">
                    Homes and everyday environments are shaped to preserve
                    independence, wellbeing and dignity, while health, care and
                    related services are brought closer to daily life.
                  </p>
                  <p className="text-charcoal text-[15px] md:text-[15.5px] leading-[1.68]">
                    By strengthening social infrastructure and
                    intergenerational connection, the framework helps reduce
                    isolation and support continuity of living over time.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200} y={10}>
              <div className="h-full rounded-[4px] border border-ink/12 bg-white p-8 md:p-10">
                <h3 className="font-serif text-ink text-[21px] md:text-[23px] leading-snug">
                  For local authorities, regional government and delivery
                  partners
                </h3>
                <div className="mt-5 space-y-4">
                  <p className="text-charcoal text-[15px] md:text-[15.5px] leading-[1.68]">
                    ISO 25553 provides a shared operating model for planning,
                    governing and scaling neighbourhoods as long-term civic
                    infrastructure.
                  </p>
                  <p className="text-charcoal text-[15px] md:text-[15.5px] leading-[1.68]">
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

      {/* ——— Key priorities — six icon cards ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[760px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                04 · Key priorities
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
                Priorities that matter to people and communities.
              </h2>
            </Reveal>
            <Reveal delay={120} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68] mt-6">
                ISO 25553 addresses priorities that matter to people and
                communities:
              </p>
            </Reveal>
          </div>

          <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {PRIORITIES.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.term} delay={i * 55} y={10}>
                  <div className="h-full rounded-[4px] border border-ink/12 bg-white p-6 md:p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] bg-amber/15 text-amber">
                      <Icon />
                    </span>
                    <h3 className="font-serif text-ink text-[18px] md:text-[19px] leading-snug mt-5">
                      {item.term}
                    </h3>
                    <p className="text-charcoal text-[14.5px] leading-[1.65] mt-2.5">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ——— Neighbourhoods for life ——— */}
      <section className="bg-ink text-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[760px]">
            <Reveal y={8}>
              <p className="text-stone/60 text-[11px] tracking-[0.18em] uppercase">
                05 · Neighbourhoods for life
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-stone text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
                Human-centred neighbourhoods that learn to care.
              </h2>
            </Reveal>
            <div className="mt-7 space-y-5">
              <Reveal delay={120} y={8}>
                <p className="text-stone/90 text-[15.5px] md:text-[16.5px] leading-[1.68]">
                  ISO 25553 sets out a globally applicable framework for
                  co-creating human-centred neighbourhoods that learn to care.
                </p>
              </Reveal>
              <Reveal delay={170} y={8}>
                <p className="text-stone/90 text-[15.5px] md:text-[16.5px] leading-[1.68]">
                  These communities are shaped by their capacity to support
                  continuity of living across the life course.
                </p>
              </Reveal>
              <Reveal delay={220} y={8}>
                <p className="text-stone/90 text-[15.5px] md:text-[16.5px] leading-[1.68]">
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
          <div className="max-w-[760px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                06 · How to engage
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
                Shaping ISO 25553 Parts 2 and 3, 2026–2031.
              </h2>
            </Reveal>
            <div className="mt-7 space-y-5">
              <Reveal delay={120} y={8}>
                <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68]">
                  AAA is now convening partners to shape ISO 25553 Parts 2 and
                  3 (2026–2031).
                </p>
              </Reveal>
              <Reveal delay={170} y={8}>
                <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68]">
                  This next phase will focus on practical guidance, use cases,
                  neighbourhood demonstrators, quantifiable evidence,
                  evaluation and socioeconomic impact.
                </p>
              </Reveal>
              <Reveal delay={220} y={8}>
                <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68]">
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
