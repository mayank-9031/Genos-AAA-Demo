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
  metadataBase: new URL("https://genos-aaa-demo.vercel.app"),
  title: "Agile Ageing Alliance — ISO 25553 Smart Multigenerational Neighbourhoods",
  description:
    "The Agile Ageing Alliance supports the implementation of ISO 25553 for age-friendly, multigenerational neighbourhoods — through demonstrator partnerships, applied research and cross-sector collaboration.",
  openGraph: {
    title: "Agile Ageing Alliance — ISO 25553",
    description:
      "Supporting the implementation of ISO 25553 for age-friendly, multigenerational neighbourhoods.",
    type: "website",
    siteName: "Agile Ageing Alliance",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agile Ageing Alliance — ISO 25553",
    description:
      "Supporting the implementation of ISO 25553 for age-friendly, multigenerational neighbourhoods.",
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
