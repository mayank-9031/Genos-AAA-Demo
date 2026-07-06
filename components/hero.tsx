import Image from "next/image";
import { Reveal } from "@/components/reveal";

const MANIFESTO = [
  "The solutions will not come from housing, health, care, technology, planning or public services working in isolation.",
  "Agile Ageing Alliance (AAA) was established to address this challenge: reframing the neighbourhood itself as a foundation for health, connection, purpose and resilience.",
  "We bring together expert practitioners across sectors, disciplines and cultures to translate research, insight and ambition into shared language, trusted frameworks, practical routes to implementation and best practice.",
];

export function Hero() {
  return (
    <section id="top" className="relative w-full bg-stone">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 xl:gap-x-16 px-6 md:px-12 lg:px-16 xl:px-24 pt-24 pb-14 md:pt-32 lg:pt-36 lg:pb-24">
        {/* LEFT — the manifesto */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <Reveal delay={100} y={8}>
            <p className="text-sage text-[10.5px] md:text-[11px] tracking-[0.22em] uppercase">
              Agile Ageing Alliance
            </p>
          </Reveal>

          <Reveal delay={180} y={10}>
            <h1
              className="font-serif font-medium text-ink leading-[1.14] tracking-[-0.01em] mt-6"
              style={{ fontSize: "clamp(30px, 3.4vw, 48px)" }}
            >
              A Manifesto for Change
            </h1>
          </Reveal>

          <Reveal delay={300} y={8}>
            <p className="mt-7 max-w-[56ch] text-ink text-[16.5px] md:text-[18px] leading-[1.6]">
              Longer lives, new patterns of living, working, learning and
              caring, stretched public services and rapidly advancing AI are
              changing what people need from the places we call home.
            </p>
          </Reveal>

          <Reveal delay={400} y={8}>
            <div className="mt-6 space-y-5 max-w-[58ch]">
              {MANIFESTO.map((para) => (
                <p
                  key={para.slice(0, 24)}
                  className="text-charcoal text-[15px] md:text-[15.5px] leading-[1.65]"
                >
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={500} y={8}>
            <a
              href="#standard"
              className="mt-9 inline-flex items-center gap-1.5 text-ink underline underline-offset-[5px] decoration-1 hover:decoration-2 text-[14.5px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-stone rounded-[2px]"
            >
              <span>ISO 25553 — the standard behind the work</span>
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        {/* RIGHT — framed 16:9 still. The image carries its own composition
            (title panel left, street scene right), so it is framed rather
            than cropped to fill. */}
        <div className="lg:col-span-5 flex flex-col justify-center mt-12 lg:mt-0">
          <Reveal delay={340} y={10}>
            <figure>
              <div className="relative aspect-video w-full overflow-hidden rounded-[3px] border border-ink/15 bg-cream shadow-[0_1px_2px_rgba(11,37,69,0.08)]">
                <Image
                  src="/hero-shaping-the-future.jpg"
                  alt="ISO 25553 — Shaping the Future of Neighbourhood Health and Connected Care: residents of all ages sharing a tree-lined neighbourhood street"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-charcoal/70 text-[12px] tracking-[0.06em]">
                ISO 25553 · Shaping the future of neighbourhood health and
                connected care
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
