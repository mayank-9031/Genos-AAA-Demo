import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { VideoEmbed } from "@/components/video-embed";
import { YOUTUBE_CHANNEL_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Videos — Agile Ageing Alliance",
  description:
    "Films and Leaders Forum sessions from the Agile Ageing Alliance — the people building the framework for smart multigenerational neighbourhoods, on the record.",
};

// Flagship films from the Alliance's channel.
const FEATURED = [
  {
    id: "CKKO4V5U1vg",
    title: "Fit for the Future: The Shape of Things to Come",
    caption: "Feature film",
  },
  {
    id: "95jHWZVL9R4",
    title: "Cultivating Neighbourhoods that Care",
    caption: "Feature film",
  },
  {
    id: "s6H6a-v5ix0",
    title: "Working Together to Change the World",
    caption: "AAA Leaders Forum",
  },
];

// The complete AAA Leaders Forum 2026 programme, in session order.
const FORUM_2026 = [
  { id: "uiv-VpAtmxY", title: "Welcome" },
  { id: "FQ3GyfO7h6I", title: "A Minimum Standard of Living for the AI Age" },
  { id: "GjV5xE4ra4U", title: "Neighbourhoods for Life: London Innovation Hub" },
  { id: "6LUuwS6EZqo", title: "Rewiring Social Care" },
  { id: "ClCicvHAHU4", title: "Mobility, Access and Independence" },
  { id: "GovdGPgqqOo", title: "Reimagining Later Living" },
  { id: "Fqp2PkEZpbA", title: "Operationalising the Art of the Possible" },
  {
    id: "TtOoXYnSrMA",
    title: "Smart Multigenerational Neighbourhoods: A New Investable Asset Class",
  },
  { id: "3MPqOpTGFCI", title: "Gamechangers" },
  { id: "ITCm4NbV_f4", title: "Forum Round-up" },
];

export default function VideosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Videos"
        title="Videos"
        subtitle="Films and forum sessions from the people building the framework — researchers, policymakers, designers and practitioners, on the record."
      />

      {/* ——— Featured films ——— */}
      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[760px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                Featured films
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
                The case for neighbourhoods that care.
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {FEATURED.map((video, i) => (
              <Reveal key={video.id} delay={i * 80} y={10}>
                <VideoEmbed id={video.id} title={video.title} caption={video.caption} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Leaders Forum 2026 ——— */}
      <section className="bg-cream border-t border-ink/10">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[760px]">
            <Reveal y={8}>
              <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
                AAA Leaders Forum 2026
              </p>
            </Reveal>
            <Reveal delay={60} y={8}>
              <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
                The 2026 Forum, session by session.
              </h2>
            </Reveal>
            <Reveal delay={120} y={8}>
              <p className="text-charcoal text-[15.5px] md:text-[16.5px] leading-[1.68] mt-6">
                The complete programme from the most recent AAA ISO Ageing
                Societies Leaders Forum — ten sessions on standards, care,
                housing, mobility and investment in smart multigenerational
                neighbourhoods.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {FORUM_2026.map((session, i) => (
              <Reveal key={session.id} delay={(i % 3) * 70} y={10}>
                <VideoEmbed
                  id={session.id}
                  title={session.title}
                  caption={`Session ${String(i + 1).padStart(2, "0")}`}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} y={8}>
            <div className="mt-12">
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink underline underline-offset-[5px] decoration-1 hover:decoration-2 text-[15px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-[2px]"
              >
                <span>Watch the full archive on YouTube</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
