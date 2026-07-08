import { Fragment } from "react";
import { Reveal } from "@/components/reveal";

type Node = {
  term: string;
  caption: string;
};

const NODES: Node[] = [
  { term: "Agile Ageing Alliance", caption: "A cross-sector convening alliance" },
  { term: "ISO 25553", caption: "The international standard, within ISO/TC 314" },
  { term: "NOHA", caption: "An open framework for putting it into practice" },
  { term: "Demonstrators", caption: "Applied with partners, in real places" },
  { term: "Outcomes", caption: "Evidence for wider adoption" },
];

export function Framework() {
  return (
    <section id="framework" className="bg-stone scroll-mt-24">
      <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[680px]">
          <Reveal y={8}>
            <p className="text-sage text-[11px] tracking-[0.18em] uppercase">
              How the work fits together
            </p>
          </Reveal>
          <Reveal delay={60} y={8}>
            <h2 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.18] tracking-[-0.015em] mt-4">
              An international standard, and the means to implement it.
            </h2>
          </Reveal>
          <Reveal delay={120} y={8}>
            <p className="text-charcoal text-[15px] md:text-[16px] leading-[1.6] mt-5">
              From a convening alliance to measurable local outcomes — each part
              connects to the next.
            </p>
          </Reveal>
        </div>

        <div
          role="list"
          aria-label="Framework: from the alliance to local outcomes"
          className="mt-12 md:mt-14 flex flex-col md:flex-row md:items-stretch"
        >
          {NODES.map((node, i) => (
            <Fragment key={node.term}>
              {/* Each node lands in sequence — the chain assembles left to right. */}
              <Reveal
                className="md:flex-1"
                delay={i * 110}
                y={10}
                x={14}
              >
                <div
                  role="listitem"
                  className="h-full bg-white border border-ink/12 rounded-[3px] p-5 flex flex-col"
                >
                  <span className="text-sage text-[10px] tracking-[0.18em] uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-ink text-[16px] md:text-[16.5px] leading-snug mt-2">
                    {node.term}
                  </span>
                  <span className="text-charcoal/85 text-[13px] leading-[1.5] mt-2">
                    {node.caption}
                  </span>
                </div>
              </Reveal>
              {i < NODES.length - 1 && (
                <Reveal
                  delay={i * 110 + 70}
                  y={0}
                  className="flex items-center justify-center shrink-0"
                >
                  <div
                    aria-hidden="true"
                    className="flex items-center justify-center text-ink/30 py-1.5 md:py-0 md:px-2.5"
                  >
                    <span className="md:hidden">↓</span>
                    <span className="hidden md:inline">→</span>
                  </div>
                </Reveal>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
