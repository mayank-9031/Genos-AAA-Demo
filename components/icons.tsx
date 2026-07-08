import type { SVGProps } from "react";

// A small set of calm, single-weight line icons used on the ISO 25553 page.
// All inherit `currentColor` and a 1.6 stroke so they sit quietly beside serif
// headings rather than shouting like a SaaS feature grid.

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

// —— Who should use it ————————————————————————————————
export function IconGovernment(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 21h18" />
      <path d="M5 21V9.5L12 5l7 4.5V21" />
      <path d="M9 21v-6h6v6" />
      <path d="M4 9.5h16" />
    </svg>
  );
}

export function IconPlanning(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  );
}

export function IconDesign(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="7" r="2.2" />
      <path d="M10.2 8.6 5 20M13.8 8.6 19 20M7.4 15h9.2" />
    </svg>
  );
}

export function IconCare(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20.8 6.6a4.6 4.6 0 0 0-7.8-2.1L12 5.4l-1-.9A4.6 4.6 0 0 0 3.2 6.6c0 3.6 4.1 6.9 8.8 11 4.7-4.1 8.8-7.4 8.8-11Z" />
      <path d="M6.5 11h2.3l1.2-2 1.8 3.6 1.2-2.2H17" />
    </svg>
  );
}

export function IconTechnology(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="8" y="8" width="8" height="8" rx="1" />
      <path d="M10 8V5m4 3V5m-4 14v-3m4 3v-3M8 10H5m3 4H5m14-4h-3m3 4h-3" />
    </svg>
  );
}

export function IconResearch(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4 2.5 8 12 12l9.5-4L12 4Z" />
      <path d="M6 10v4.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V10" />
      <path d="M21.5 8v5" />
    </svg>
  );
}

// —— Key priorities ————————————————————————————————
export function IconSafety(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 5 5.5V11c0 4.4 3 8 7 9.8 4-1.8 7-5.4 7-9.8V5.5L12 3Z" />
      <path d="m9 11.5 2 2 4-4" />
    </svg>
  );
}

export function IconAccess(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="5" r="1.6" />
      <path d="M12 7v6m0 0-3 5m3-5 3 5M7.5 9.5 12 11l4.5-1.5" />
    </svg>
  );
}

export function IconInformation(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5M12 7.8h.01" />
    </svg>
  );
}

export function IconRepresentation(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="8.5" cy="8.5" r="2.4" />
      <circle cx="16" cy="9.5" r="2" />
      <path d="M4 19c0-2.6 2-4.5 4.5-4.5S13 16.4 13 19M14.5 19c0-2 .8-3.5 2.2-4.2 2 .3 3.3 2 3.3 4.2" />
    </svg>
  );
}

export function IconConnection(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10 13.5 7.5 16a3 3 0 1 1-4.2-4.2l3-3a3 3 0 0 1 4.2 0" />
      <path d="M14 10.5 16.5 8a3 3 0 1 1 4.2 4.2l-3 3a3 3 0 0 1-4.2 0" />
    </svg>
  );
}

export function IconSustainability(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 20c0-6 2.5-10 8-11-.5 5.5-3.5 9-8 9.5Z" />
      <path d="M12 20c0-4-1.8-7-6-8 .4 4 2.6 6.5 6 7Z" />
      <path d="M12 20v-2.5" />
    </svg>
  );
}
