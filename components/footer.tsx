import Image from "next/image";
import Link from "next/link";

const FOOTER_NAV = [
  { label: "About", href: "/about" },
  { label: "ISO 25553", href: "/iso-25553" },
  { label: "Research", href: "/research" },
  { label: "Events", href: "/events" },
  { label: "Videos", href: "/videos" },
  { label: "Partners", href: "/partners" },
  { label: "Team", href: "/team" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-stone border-t border-stone/10">
      <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand lockup */}
          <div className="lg:col-span-5">
            <div className="bg-stone inline-block p-4 rounded-[2px]">
              <Image
                src="/aaa-logo.png"
                alt="Agile Ageing Alliance — convening partner for ISO/TC 314 Ageing Societies"
                width={300}
                height={150}
                className="h-auto w-[260px]"
              />
            </div>
            <p className="text-stone/80 text-[14.5px] leading-relaxed max-w-[40ch] mt-6">
              Convening organisation for ISO 25553 — Smart Multigenerational
              Neighbourhoods, developed within ISO/TC 314, in partnership with
              UN-Habitat. Advisor to Innovate UK and the European Commission,
              with academic links to UCL Bartlett.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-stone/60 text-[11px] tracking-[0.18em] uppercase">
              Sitemap
            </p>
            <ul className="mt-5 space-y-3">
              {FOOTER_NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-stone hover:text-amber transition-colors duration-200 text-[15px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-stone/60 text-[11px] tracking-[0.18em] uppercase">
              Work with us
            </p>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <a
                  href="https://agileageing.org/iso-discussion-contact-form/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone hover:text-amber transition-colors duration-200"
                >
                  Become a demonstrator partner →
                </a>
              </li>
              <li>
                <a
                  href="https://agileageing.org/page/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone hover:text-amber transition-colors duration-200"
                >
                  General enquiries →
                </a>
              </li>
            </ul>

            <p className="text-stone/60 text-[11px] tracking-[0.18em] uppercase mt-10">
              Follow
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
              <li>
                <a
                  href="https://www.linkedin.com/company/agile-ageing-alliance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone hover:text-amber transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@agileageingalliance6868"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone hover:text-amber transition-colors duration-200"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://agileageing.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone hover:text-amber transition-colors duration-200"
                >
                  agileageing.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone/15 mt-14 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12.5px] text-stone/60">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>© {new Date().getFullYear()} Agile Ageing Alliance. All rights reserved.</p>
            <span aria-hidden="true" className="hidden md:inline text-stone/30">·</span>
            <a href="/accessibility" className="hover:text-amber transition-colors duration-200">
              Accessibility
            </a>
            <span aria-hidden="true" className="text-stone/30">·</span>
            <a href="/privacy" className="hover:text-amber transition-colors duration-200">
              Privacy
            </a>
          </div>
          <p className="tracking-[0.14em] uppercase text-[10.5px]">
            Established 2015  ·  ISO/TC 314 — Ageing Societies
          </p>
        </div>
      </div>
    </footer>
  );
}
