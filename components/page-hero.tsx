import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

// Shared interior-page header. A clean text band on the light page background —
// no image sits behind the text. Images are framed within the page body instead.
// It never carries id="top", so the site navbar stays visible on interior pages.
export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-stone border-b border-ink/10">
      <div className="mx-auto max-w-container px-6 md:px-10 pt-28 md:pt-36 pb-14 md:pb-20">
        <div className="max-w-[820px]">
          {eyebrow ? (
            <Reveal y={8}>
              <p className="text-sage text-[10.5px] md:text-[11px] tracking-[0.22em] uppercase">
                {eyebrow}
              </p>
            </Reveal>
          ) : null}
          <Reveal delay={80} y={10}>
            <h1
              className="font-serif font-medium text-ink leading-[1.1] tracking-[-0.015em] mt-5"
              style={{ fontSize: "clamp(34px, 4.4vw, 58px)" }}
            >
              {title}
            </h1>
          </Reveal>
          <Reveal delay={140} y={8}>
            <div aria-hidden="true" className="mt-7 h-[3px] w-14 bg-amber" />
          </Reveal>
          {subtitle ? (
            <Reveal delay={200} y={8}>
              <p className="mt-6 max-w-[62ch] text-charcoal text-[17px] md:text-[19px] leading-[1.55]">
                {subtitle}
              </p>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
