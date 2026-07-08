import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { GET_INVOLVED_URL, ISO_OVERVIEW_PDF_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Research — Agile Ageing Alliance",
  description:
    "Evidence that informs better neighbourhoods — the Neighbourhoods of the Future report series, thematic topic papers, the SHAPES Horizon 2020 programme and the research base behind ISO 25553.",
};

// The Neighbourhoods of the Future report series — real editions with live
// download links on agileageing.org.
const REPORTS = [
  {
    year: "2022",
    title: "Neighbourhoods of the Future",
    edition: "Creating a Better Future with Technology",
    href: "https://agileageing.org/aaa-iso-report-launch-pdf-request/",
    action: "Request the report",
  },
  {
    year: "2019",
    title: "Neighbourhoods of the Future",
    edition: "Better Homes, Better Lives, Better Cities",
    href: "https://agileageing.org/site_files/5944/upload_files/NeighbourhoodsoftheFuture2019_250119(1)(1).pdf?dl=1",
    action: "Download PDF",
  },
  {
    year: "2017",
    title: "Neighbourhoods of the Future",
    edition: "The founding report",
    href: "https://agileageing.org/site_files/5944/upload_files/NeighbourhoodsoftheFuture12(1).pdf?dl=1",
    action: "Download PDF",
  },
];

// Thematic chapters from the 2019 edition, published as standalone papers.
const TOPIC_PAPERS = [
  {
    title: "Housing",
    href: "https://agileageing.org/site_files/5944/upload_files/NeighbourhoodsoftheFuture2019_02_Housing250119.pdf?dl=1",
  },
  {
    title: "Health & Care",
    href: "https://agileageing.org/site_files/5944/upload_files/NeighbourhoodsoftheFuture2019_05_Health&Care060119(1).pdf?dl=1",
  },
  {
    title: "Design",
    href: "https://agileageing.org/site_files/5944/upload_files/NeighbourhoodsoftheFuture2019_04_Design060119(1)(1).pdf?dl=1",
  },
  {
    title: "Technology",
    href: "https://agileageing.org/site_files/5944/upload_files/NeighbourhoodsoftheFuture2019_06_Tech200119.pdf?dl=1",
  },
  {
    title: "Finance",
    href: "https://agileageing.org/site_files/5944/upload_files/NeighbourhoodsoftheFuture2019_07_Finance060119.pdf?dl=1",
  },
];

const SHAPES_FACTS = [
  { value: "€24m", label: "EU Horizon 2020 funding" },
  { value: "34", label: "Academic & industry partners" },
  { value: "14", label: "Countries" },
  { value: "4", label: "Years of demonstration" },
];

export default function ResearchPage() {
  return (
    <main>
      <PageHero
        eyebrow="Research"
        title="Research"
        subtitle="Evidence that informs better neighbourhoods."
      />

      {/* ——— Neighbourhoods of the Future report series ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[760px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                The report series
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
                Neighbourhoods of the Future.
              </h2>
            </Reveal>
            <Reveal delay={120} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68] mt-6">
                An unapologetically optimistic series of reports capturing
                insights from distinguished experts and thought leaders on
                disrupting the construction, finance, social and business
                models that shape how we live as we grow older.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
            {REPORTS.map((report, i) => (
              <Reveal key={report.year} delay={i * 110} y={26} scale={0.98}>
                <a
                  href={report.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-stone rounded-[4px]"
                >
                  {/* Typographic report cover */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[4px] bg-ink p-7 md:p-8 flex flex-col shadow-[0_1px_3px_rgba(11,37,69,0.15)] transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    <p className="text-stone/60 text-[10px] tracking-[0.22em] uppercase">
                      Agile Ageing Alliance
                    </p>
                    <p className="font-serif text-stone text-[26px] md:text-[24px] lg:text-[28px] leading-[1.15] tracking-[-0.01em] mt-6">
                      {report.title}
                    </p>
                    <p className="text-stone/75 text-[13.5px] leading-[1.5] mt-3">
                      {report.edition}
                    </p>
                    <div className="mt-auto">
                      <div aria-hidden="true" className="h-[3px] w-12 bg-amber" />
                      <p className="font-serif text-stone/90 text-[34px] leading-none mt-5">
                        {report.year}
                      </p>
                    </div>
                  </div>
                  <p className="inline-flex items-center gap-1.5 text-ink text-[14.5px] font-medium mt-4 underline underline-offset-[5px] decoration-1 group-hover:decoration-2">
                    <span>{report.action}</span>
                    <span aria-hidden="true">→</span>
                  </p>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Topic papers */}
          <div className="mt-16 md:mt-20 max-w-[860px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                Topic papers · 2019 edition
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16px] leading-[1.65] mt-4">
                Thematic chapters from the 2019 report, published as standalone
                papers.
              </p>
            </Reveal>
            <ul className="mt-7 border-t border-ink/15">
              {TOPIC_PAPERS.map((paper, i) => (
                <Reveal
                  key={paper.title}
                  as="li"
                  delay={120 + i * 70}
                  y={10}
                  className="border-b border-ink/15"
                >
                    <a
                      href={paper.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline justify-between gap-6 py-4 md:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-[2px]"
                    >
                      <span className="font-serif text-ink text-[18px] md:text-[20px] leading-snug group-hover:underline underline-offset-[6px] decoration-1">
                        {paper.title}
                      </span>
                      <span className="shrink-0 text-charcoal/70 text-[13px] tracking-[0.08em] uppercase group-hover:text-ink transition-colors">
                        PDF <span aria-hidden="true">↓</span>
                      </span>
                    </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— SHAPES ——— */}
      <section className="bg-cream border-y border-ink/10">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7 max-w-[680px]">
              <Reveal y={8}>
                <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                  Applied research · EU Horizon 2020
                </p>
              </Reveal>
              <Reveal delay={60} y={8}>
                <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
                  SHAPES: Smart & Healthy Ageing through People Engaging in
                  Supportive Systems.
                </h2>
              </Reveal>
              <div className="mt-7 space-y-5">
                <Reveal delay={120} y={8}>
                  <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68]">
                    AAA was a partner in SHAPES, a four-year, €24 million EU
                    Horizon 2020 demonstrator programme bringing together 34
                    academic and private-sector partners across 14 countries to
                    understand the life course of older adults and their
                    relationship with the built environment.
                  </p>
                </Reveal>
                <Reveal delay={170} y={8}>
                  <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68]">
                    Findings from SHAPES directly informed the development of
                    ISO 25553, providing a framework upon which strategies and
                    solutions can be built.
                  </p>
                </Reveal>
                <Reveal delay={220} y={8}>
                  <a
                    href="https://shapes2020.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink underline underline-offset-[5px] decoration-1 hover:decoration-2 text-[15px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-[2px]"
                  >
                    <span>Visit shapes2020.eu</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-5">
              <dl className="grid grid-cols-2 gap-px bg-ink/10 border border-ink/10 rounded-[4px] overflow-hidden">
                {SHAPES_FACTS.map((fact, i) => (
                  <Reveal
                    key={fact.label}
                    delay={140 + i * 90}
                    y={14}
                    className="bg-white p-6 md:p-7"
                  >
                    <dd className="font-serif text-ink text-[30px] md:text-[36px] leading-none">
                      {fact.value}
                    </dd>
                    <dt className="text-charcoal/80 text-[12.5px] leading-[1.45] mt-3">
                      {fact.label}
                    </dt>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ——— From research to standard ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[760px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                From research to standard
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
                A decade of evidence, distilled into ISO 25553.
              </h2>
            </Reveal>
            <Reveal delay={120} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68] mt-6">
                The insight gathered through Neighbourhoods of the Future,
                SHAPES and a decade of convening now sits within ISO 25553:
                Smart Multigenerational Neighbourhoods — and shapes the
                evidence, evaluation and demonstrator programme for Parts 2
                and 3.
              </p>
            </Reveal>
            <Reveal delay={200} y={8}>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
                <Button href={ISO_OVERVIEW_PDF_URL} external variant="ink">
                  Download the ISO 25553 overview
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
