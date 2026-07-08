import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Parallax } from "@/components/parallax";
import { Button } from "@/components/ui/button";
import { GET_INVOLVED_URL } from "@/lib/links";

// Ian's manifesto — verbatim. Do not paraphrase.
const MANIFESTO = [
  "The solutions will not come from housing, health, care, technology, planning or public services working in isolation.",
  "Agile Ageing Alliance (AAA) was established to address this challenge: reframing the neighbourhood itself as a foundation for health, connection, purpose and resilience.",
  "We bring together expert practitioners across sectors, disciplines and cultures to translate research, insight and ambition into shared language, trusted frameworks, practical routes to implementation and best practice.",
];

export function Hero() {
  return (
    <>
      {/* ——— First screen: ink ground, manifesto beside a large, readable slide ——— */}
      <section
        id="top"
        className="relative w-full overflow-hidden bg-stone lg:min-h-svh lg:flex lg:items-center"
      >
        <div className="relative mx-auto w-full max-w-container grid grid-cols-1 lg:grid-cols-12 gap-x-10 xl:gap-x-14 gap-y-12 items-center px-6 md:px-10 pt-28 pb-16 lg:pt-28 lg:pb-20">
          {/* LEFT — the opening of the manifesto */}
          <div className="lg:col-span-5">
            <Reveal delay={80} y={10}>
              <p className="text-sage text-[10.5px] md:text-[11px] tracking-[0.24em] uppercase">
                Agile Ageing Alliance
              </p>
            </Reveal>

            <Reveal delay={180} y={12}>
              <h1
                className="font-serif font-medium text-ink leading-[1.08] tracking-[-0.015em] mt-5"
                style={{ fontSize: "clamp(36px, 3.8vw, 56px)" }}
              >
                A Manifesto for Change
              </h1>
            </Reveal>

            <Reveal delay={300} y={10}>
              <div
                aria-hidden="true"
                className="mt-7 h-[3px] w-14 bg-amber"
              />
            </Reveal>

            <Reveal delay={380} y={10}>
              <p className="mt-7 max-w-[52ch] text-ink text-[16.5px] md:text-[18px] leading-[1.6]">
                Longer lives, new patterns of living, working, learning and
                caring, stretched public services and rapidly advancing AI are
                changing what people need from the places we call home.
              </p>
            </Reveal>

            <Reveal delay={500} y={10}>
              <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3">
                <Button href="/iso-25553" variant="ink">
                  About ISO 25553
                </Button>
                <Button href={GET_INVOLVED_URL} external variant="outline">
                  Get involved
                </Button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — the slide, large enough that its own text is readable */}
          <div className="lg:col-span-7">
            <Reveal delay={340} y={18} x={24} scale={0.97}>
              <Parallax speed={0.045}>
                <figure>
                  <div className="relative aspect-video w-full overflow-hidden rounded-[5px] border border-ink/15 bg-white shadow-[0_18px_50px_rgba(11,37,69,0.18)]">
                    <Image
                      src="/hero-shaping-the-future.jpg"
                      alt="ISO 25553 — Shaping the Future of Neighbourhood Health and Connected Care: residents of all ages sharing a tree-lined neighbourhood street"
                      fill
                      priority
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 text-charcoal/70 text-[11.5px] tracking-[0.08em]">
                    ISO 25553 · Shaping the future of neighbourhood health and
                    connected care
                  </figcaption>
                </figure>
              </Parallax>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— Manifesto continuation — the rest of Ian's opening statement ——— */}
      <section className="bg-stone border-b border-ink/10">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-20">
          <div className="max-w-[760px] space-y-6">
            {MANIFESTO.map((para, i) => (
              <Reveal key={para.slice(0, 24)} delay={i * 90} y={12}>
                <p
                  className={
                    i === 0
                      ? "font-serif text-ink text-[21px] md:text-[26px] leading-[1.4] tracking-[-0.01em]"
                      : "text-charcoal text-[16px] md:text-[17.5px] leading-[1.7]"
                  }
                >
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
