"use client";

import Image from "next/image";
import { useState } from "react";

type VideoEmbedProps = {
  /** YouTube video ID. */
  id: string;
  title: string;
  /** Small caption under the title — e.g. session number or year. */
  caption?: string;
};

// Thumbnail-first YouTube embed. Shows the video's poster frame with a play
// control; the iframe is only created on demand, so a page of many videos
// stays light and no third-party script loads until a viewer chooses to watch.
export function VideoEmbed({ id, title, caption }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <article>
      <div className="relative aspect-video w-full overflow-hidden rounded-[4px] border border-ink/15 bg-ink">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 block h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-inset"
          >
            <Image
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-ink/25 transition-colors duration-300 group-hover:bg-ink/10"
            />
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-14 w-14 items-center justify-center rounded-full bg-stone/95 text-ink shadow-[0_2px_10px_rgba(11,37,69,0.35)] transition-transform duration-300 group-hover:scale-105"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.5v13l11-6.5-11-6.5Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <h3 className="font-serif text-ink text-[17px] md:text-[18px] leading-snug mt-4">
        {title}
      </h3>
      {caption ? (
        <p className="text-sage text-[11px] tracking-[0.16em] uppercase mt-1.5">
          {caption}
        </p>
      ) : null}
    </article>
  );
}
