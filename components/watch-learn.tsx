import { Reveal } from "@/components/reveal";

export type WatchVideo = {
  /** YouTube video ID, e.g. "dQw4w9WgXcQ" — pulled from the share URL. */
  id: string;
  title: string;
  /** Optional caption shown under the title — e.g. publish year or speaker. */
  caption?: string;
};

// Placeholder slots — replace with real video IDs + titles once user pastes them
// from https://www.youtube.com/@agileageingalliance6868/videos
const DEFAULT_VIDEOS: WatchVideo[] = [
  {
    id: "",
    title: "Ageing well at home — the case for ISO 25553",
    caption: "Coming soon",
  },
  {
    id: "",
    title: "Inside a smart multigenerational neighbourhood",
    caption: "Coming soon",
  },
  {
    id: "",
    title: "Why the next decade belongs to age-friendly cities",
    caption: "Coming soon",
  },
];

export function WatchLearn({ videos = DEFAULT_VIDEOS }: { videos?: WatchVideo[] }) {
  return (
    <section className="bg-terracotta text-white scroll-mt-24" id="watch">
      <div className="mx-auto max-w-container px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <p className="text-cream text-[11px] tracking-[0.18em] uppercase text-center">
            Watch &amp; learn
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="font-serif text-white text-center text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.01em] mt-4">
            The conversation, on the record.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto max-w-[60ch] text-center text-white/85 text-[17px] md:text-[19px] leading-relaxed mt-6">
            A decade of talks, panels, and demonstrations from the people
            building the framework — researchers, mayors, designers, and the
            residents already living the alternative.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {videos.map((v, i) => (
              <VideoCard key={`${v.id || "placeholder"}-${i}`} video={v} index={i} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-14 text-center">
            <a
              href="https://www.youtube.com/@agileageingalliance6868/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:text-cream hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta rounded-[2px] text-[15px]"
            >
              Watch the full channel on YouTube →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VideoCard({ video, index }: { video: WatchVideo; index: number }) {
  const hasId = !!video.id;
  // Use youtube-nocookie for privacy-enhanced mode.
  const embedSrc = hasId
    ? `https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`
    : null;

  return (
    <article className="group">
      <div className="relative aspect-video w-full overflow-hidden bg-white/5 border border-white/20">
        {embedSrc ? (
          <iframe
            src={embedSrc}
            title={video.title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          // Placeholder card until a video ID is supplied
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-40"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 30%, rgba(239,231,220,0.25) 0%, rgba(181,87,43,0) 60%)",
              }}
            />
            <span className="relative font-serif text-white/30 text-[120px] leading-none select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-serif text-white text-[19px] md:text-[20px] leading-snug mt-5">
        {video.title}
      </h3>
      {video.caption ? (
        <p className="text-cream/85 text-[12.5px] tracking-[0.14em] uppercase mt-2">
          {video.caption}
        </p>
      ) : null}
    </article>
  );
}
