import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Team — Agile Ageing Alliance",
  description:
    "Leadership and advisory team information for the Agile Ageing Alliance is coming soon.",
};

export default function TeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="Team"
        title="Team"
        subtitle="The people convening expertise across sectors, disciplines and cultures."
      />

      <section className="bg-stone">
        <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[860px] mx-auto">
            <ComingSoon
              eyebrow="Leadership & advisory team"
              heading="Leadership and advisory team information coming soon."
              body="Profiles of the Alliance's leadership and its cross-sector advisory network are being prepared and will be published here shortly."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
