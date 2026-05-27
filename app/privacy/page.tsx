import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy notice — Agile Ageing Alliance",
  description:
    "How the Agile Ageing Alliance handles information collected through this website.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-stone">
      <div className="mx-auto max-w-[760px] px-6 md:px-10 pt-28 md:pt-36 pb-20 md:pb-28">
        <p className="text-sage text-[11px] tracking-[0.18em] uppercase">Privacy</p>
        <h1 className="font-serif text-ink text-[28px] md:text-[38px] leading-[1.2] tracking-[-0.01em] mt-4">
          Privacy notice
        </h1>

        <div className="mt-8 space-y-5 text-charcoal text-[15.5px] leading-[1.7]">
          <p>
            This notice explains how the Agile Ageing Alliance handles
            information collected through this website. We collect as little
            personal data as possible, and only to operate the site and respond
            to enquiries.
          </p>

          <h2 className="font-serif text-ink text-[19px] md:text-[21px] pt-4">
            Information we collect
          </h2>
          <p>
            This site is primarily informational. Standard server logs may record
            technical data such as IP address and browser type for security and
            performance. If you contact us, we use the details you provide solely
            to respond to your enquiry.
          </p>

          <h2 className="font-serif text-ink text-[19px] md:text-[21px] pt-4">
            Cookies and analytics
          </h2>
          <p>
            We keep cookies to a minimum. Any analytics are used only to
            understand aggregate usage and improve the site; they are not used to
            identify individuals.
          </p>

          <h2 className="font-serif text-ink text-[19px] md:text-[21px] pt-4">
            Your rights
          </h2>
          <p>
            You may request access to, correction of, or deletion of any personal
            data we hold about you, in line with applicable data-protection law.
          </p>

          <h2 className="font-serif text-ink text-[19px] md:text-[21px] pt-4">
            Contact
          </h2>
          <p>
            For any privacy question or request, contact us via the{" "}
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
            This notice is reviewed periodically and was last updated in 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
