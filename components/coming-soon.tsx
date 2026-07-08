import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { GET_INVOLVED_URL } from "@/lib/links";

type ComingSoonProps = {
  eyebrow?: string;
  heading: string;
  body: string;
  /** Show a "Get involved" CTA under the message. */
  cta?: boolean;
};

// A calm, finished "in preparation" panel — used where content is still being
// assembled, so the page reads as intentional rather than an empty box.
export function ComingSoon({ eyebrow, heading, body, cta = true }: ComingSoonProps) {
  return (
    <Reveal y={10}>
      <div className="rounded-[5px] border border-ink/12 bg-white px-7 py-14 md:px-14 md:py-20 text-center">
        {eyebrow ? (
          <p className="text-sage text-[10.5px] tracking-[0.2em] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <p
          aria-hidden="true"
          className="mx-auto mt-6 h-[3px] w-14 bg-amber"
        />
        <h2 className="font-serif text-ink text-[24px] md:text-[30px] leading-[1.25] tracking-[-0.01em] mt-6 max-w-[26ch] mx-auto">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-charcoal text-[15.5px] md:text-[16px] leading-[1.68]">
          {body}
        </p>
        {cta ? (
          <div className="mt-9 flex justify-center">
            <Button href={GET_INVOLVED_URL} external variant="ink">
              Get involved
            </Button>
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}
