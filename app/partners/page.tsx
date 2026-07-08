import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Partners — Agile Ageing Alliance",
  description:
    "Agile Ageing Alliance brings together public agencies, global brands, researchers, SMEs and civic leaders. Partner organisations will be announced soon.",
};

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Partners"
        title="Partners"
        subtitle="A cross-sector alliance of public agencies, global brands, researchers, SMEs and civic leaders."
      />

      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[860px] mx-auto">
            <ComingSoon
              eyebrow="Partner organisations"
              heading="Partner organisations will be announced soon."
              body="AAA is convening partners across housing, health, care, technology, planning and investment to shape and implement ISO 25553. We would welcome a conversation."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
