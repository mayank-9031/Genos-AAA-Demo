import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Agile Ageing Alliance — How the world will age well, at home.",
  description:
    "We convene the international standard for smart multigenerational neighbourhoods. With ISO 25553 now published, we're moving from framework to real-world implementation — alongside cities, governments, and partners around the world.",
  openGraph: {
    title: "Agile Ageing Alliance — How the world will age well, at home.",
    description:
      "Convening organisation for ISO 25553 Smart Multigenerational Neighbourhoods.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-stone text-charcoal font-sans antialiased min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:text-stone focus:px-4 focus:py-2 focus:rounded-[4px] focus:outline-none focus:ring-2 focus:ring-amber"
        >
          Skip to content
        </a>
        <LoadingScreen />
        <Navbar />
        <div id="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
