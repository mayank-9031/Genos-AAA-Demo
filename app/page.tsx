import { Hero } from "@/components/hero";
import { WhyNow } from "@/components/why-now";
import { ClosingInvitation } from "@/components/closing-invitation";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyNow />
      <ClosingInvitation />
    </main>
  );
}
