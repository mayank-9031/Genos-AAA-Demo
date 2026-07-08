import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { GET_INVOLVED_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Events — Agile Ageing Alliance",
  description:
    "The AAA ISO Ageing Societies Leaders Forum — an annual convening of policymakers, practitioners and innovators, with full playback of every forum since 2020.",
};

// The annual Leaders Forum archive. 2026 sessions are hosted on this site;
// earlier forums play back on agileageing.org.
const FORUMS = [
  {
    year: "2026",
    href: "/videos",
    internal: true,
    note: "All ten sessions available",
  },
  {
    year: "2025",
    href: "https://agileageing.org/aaa-iso-leaders-forum-may-2025/",
  },
  {
    year: "2024",
    href: "https://agileageing.org/aaa-iso-leaders-forum-nov-2023-event/",
  },
  {
    year: "2023",
    href: "https://agileageing.org/iso-leaders-forum-oct-2022-playback/",
  },
  {
    year: "2022",
    href: "https://agileageing.org/iso-leaders-forum-2022-playback/",
  },
  {
    year: "2021",
    href: "https://agileageing.org/iso-leaders-forum-2021-playback/",
  },
  {
    year: "2020",
    href: "https://agileageing.org/iso-leaders-forum-2020-playback/",
  },
];

export default function EventsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Events"
        title="Events"
        subtitle="Exploring the challenge with stakeholders — from world capitals to city halls and rural communities across the UK, Europe and further afield, since 2015."
      />

      {/* ——— Now convening ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[760px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                Now convening
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
                Shaping ISO 25553 Parts 2 and 3, 2026–2031.
              </h2>
            </Reveal>
            <Reveal delay={120} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68] mt-6">
                AAA is convening partners across sectors to shape the next
                phase of ISO 25553 — practical guidance, use cases,
                neighbourhood demonstrators, quantifiable evidence, evaluation
                and socioeconomic impact. Roundtables and partner sessions will
                be announced here as dates are confirmed.
              </p>
            </Reveal>
            <Reveal delay={200} y={8}>
              <div className="mt-9">
                <Button href={GET_INVOLVED_URL} external variant="ink">
                  Get involved
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— The Leaders Forum archive ——— */}
      <section className="bg-cream border-t border-ink/10">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[760px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                The annual forum
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
                AAA ISO Ageing Societies Leaders Forum.
              </h2>
            </Reveal>
            <Reveal delay={120} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68] mt-6">
                Each year the Alliance brings policymakers, practitioners,
                researchers and industry leaders together around the standard.
                Every forum since 2020 is available to watch in full.
              </p>
            </Reveal>
          </div>

          <ul className="mt-10 md:mt-12 border-t border-ink/15 max-w-[860px]">
            {FORUMS.map((forum, i) => {
                const rowInner = (
                  <>
                    <span className="font-serif text-ink text-[26px] md:text-[32px] leading-none w-[86px] md:w-[104px] shrink-0">
                      {forum.year}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-ink text-[15.5px] md:text-[16.5px] leading-snug">
                        AAA ISO Ageing Societies Leaders Forum
                      </span>
                      {forum.note ? (
                        <span className="block text-sage text-[11px] tracking-[0.14em] uppercase mt-1.5">
                          {forum.note}
                        </span>
                      ) : null}
                    </span>
                    <span className="shrink-0 inline-flex items-center gap-1.5 text-ink text-[14px] font-medium underline underline-offset-[5px] decoration-1 group-hover:decoration-2">
                      <span>
                        {forum.internal ? "Watch the sessions" : "Playback"}
                      </span>
                      <span aria-hidden="true">→</span>
                    </span>
                  </>
                );
                const rowClasses =
                  "group flex items-center gap-5 md:gap-8 py-5 md:py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-[2px]";
                return (
                  <Reveal
                    key={forum.year}
                    as="li"
                    delay={i * 80}
                    y={6}
                    x={-22}
                    className="border-b border-ink/15"
                  >
                    {forum.internal ? (
                      <Link href={forum.href} className={rowClasses}>
                        {rowInner}
                      </Link>
                    ) : (
                      <a
                        href={forum.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={rowClasses}
                      >
                        {rowInner}
                      </a>
                    )}
                  </Reveal>
                );
              })}
            </ul>
        </div>
      </section>
    </main>
  );
}
