import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility statement — Agile Ageing Alliance",
  description:
    "How the Agile Ageing Alliance website works to meet WCAG 2.2 Level AA, and how to report an accessibility problem.",
};

export default function AccessibilityPage() {
  return (
    <section className="bg-stone">
      <div className="mx-auto max-w-[760px] px-6 md:px-10 pt-28 md:pt-36 pb-20 md:pb-28">
        <p className="text-sage text-[11px] tracking-[0.18em] uppercase">Accessibility</p>
        <h1 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.2] tracking-[-0.01em] mt-4">
          Accessibility statement
        </h1>

        <div className="mt-8 space-y-5 text-charcoal text-[15.5px] leading-[1.7]">
          <p>
            We want this website to be usable by as many people as possible. It
            is designed to meet the Web Content Accessibility Guidelines (WCAG)
            2.2 at Level&nbsp;AA.
          </p>

          <h2 className="font-serif text-ink text-[19px] md:text-[21px] pt-4">
            Conformance status
          </h2>
          <p>
            The site aims to conform to WCAG&nbsp;2.2 Level&nbsp;AA. We review
            keyboard operability, colour contrast, semantic structure, focus
            visibility and support for reduced-motion preferences.
          </p>

          <h2 className="font-serif text-ink text-[19px] md:text-[21px] pt-4">
            What we have done
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Semantic HTML with clear heading structure and landmarks.</li>
            <li>Full keyboard navigation with visible focus states.</li>
            <li>Text and interface contrast checked against Level&nbsp;AA.</li>
            <li>Descriptive alternative text for meaningful images.</li>
            <li>Respect for the operating system&apos;s reduced-motion setting.</li>
          </ul>

          <h2 className="font-serif text-ink text-[19px] md:text-[21px] pt-4">
            Reporting a problem
          </h2>
          <p>
            If you encounter an accessibility barrier, please tell us so we can
            put it right. Contact us via the{" "}
            <a
              href="https://agileageing.org/page/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline underline-offset-4 hover:no-underline"
            >
              Agile Ageing Alliance contact page
            </a>
            .
          </p>

          <p className="text-charcoal/70 text-[14px] pt-4">
            This statement is reviewed periodically and was last reviewed in 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
