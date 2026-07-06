import { Hero } from "@/components/hero";
import { TrustBand } from "@/components/trust-band";
import { IsoStandard } from "@/components/iso-standard";
import { Framework } from "@/components/framework";
import { DemonstratorPathway } from "@/components/demonstrator-pathway";
import { WhyItMatters } from "@/components/why-it-matters";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBand />
      <IsoStandard />
      <Framework />
      <DemonstratorPathway />
      <WhyItMatters />
    </main>
  );
}
