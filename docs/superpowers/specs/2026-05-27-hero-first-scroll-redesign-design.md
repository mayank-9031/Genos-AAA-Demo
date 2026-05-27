# Hero + First-Scroll Redesign — "The Civic Document"

**Date:** 2026-05-27
**Branch:** `redesign/hero-civic`
**Trigger:** Client (Ian Spero, Agile Ageing Alliance) asked for one qualifying test before any broader engagement — a redesigned homepage hero and first scroll that feels *"credible for public-sector, standards, NHS, university, investor and community audiences — modern, but not flashy; human, but not sentimental; ambitious but not overclaimed."*

## Problem

The current demo hero (`genos-aaa-demo.vercel.app`) reads as a start-up campaign microsite, not the front door to a standards-led civic organisation. Ian's specific criticisms, mapped to the code:

- **Too declarative / overclaimed** — H1 "The world just agreed on what a good place to grow old looks like."
- **Too laboured / too risky** — sub-line "Now we're putting it into the ground… building the alternative."
- **Shouting, not confidence** — a looping marquee of boasts.
- **Start-up flashy, not civic** — hot terracotta full-bleed + autoplay care video.

## Goal

A calm, authoritative, warm, civic hero + first scroll. Standards-led but not dry; human but not sentimental; modern but not flashy. The job is to create confidence, not to shout. The reply to Ian must itself demonstrate restraint, so it is written *after* the screen exists and points at it.

## Chosen direction — "A — The Civic Document"

Warm stone ground, ink-navy serif headline, a single calm real photograph as a quiet companion (not video), one restrained amber rule, and trust signals stated **once**, quietly. Rejected: "B — Warm Editorial" (full-bleed photo risks campaign drift / less standards-led) and "C — Standards-led navy" (risks the "dry" Ian explicitly warned against).

## Design

### Palette & type
- Ground: stone `#F4EFE6` · Text: ink `#0B2545` · Accent: amber `#D98E36` (one short rule only) · Labels: sage `#7A8D7A`.
- Terracotta retired from this view (token stays defined in Tailwind; simply unused).
- Keep Fraunces (serif headlines) + Inter (body), already loaded in `app/layout.tsx`.

### Hero copy
- **Eyebrow:** `ISO 25553 · An international standard · Published 2026`
- **Headline:** `A standard for neighbourhoods where it's good to grow old.`
- **Sub-line:** `Published in 2026, ISO 25553 defines what good looks like. We work with the cities, councils and communities turning it into real places.`
- **Primary button:** `Read the standard` → `https://agileageing.org/standards/`
- **Quiet text link:** `Explore the demonstrator pathway →` → `#demonstrator`
- **Trust strip (stated once, quiet):** `Convened with UN-Habitat · Connected Places Catapult · Endorsed by 20 national standards bodies`
  - **Caveat (Ian's "overclaimed" risk):** use only claims already present in the existing demo. Every claim must be confirmed accurate by the AAA team before this is sent to Ian. BSI deliberately excluded from the partner line (named by Ian as an audience, not a stated partner).

### Hero layout
- Two-column on `lg+`: text left (~55%), photograph right. Stacks to single column on mobile (text over a shorter image, or image hidden — match existing responsive intent).
- Quiet trust strip as a thin band directly under the hero (stone, slightly darker `#ECE4D6`), small letter-spaced caps, low contrast.

### First-scroll section ("Why this work, now") — `why-now.tsx`
- **Eyebrow:** `Why this work, now`
- **Headline:** `The way we age is changing faster than the places we live.`
- **Paragraph:** `By 2050, one in six people on Earth will be over sixty-five. Most of our neighbourhoods were designed for a different population, at a different time. ISO 25553 is a shared, international agreement on how to design for the one we actually have.`
- **Three quiet columns** (restrained one-liners, no looping, no big italic pull-quotes, no aggressive hover bar):
  - `01 · The old model` — Built for the moment people leave a community — not the decades they live in one.
  - `02 · What changed` — A decade of convening produced ISO 25553, endorsed by 20 national standards bodies.
  - `03 · What we build` — Multigenerational neighbourhoods — mixed tenure, mixed age, built to the standard.
- The first scroll ends after the three columns; the demonstrator CTA lives only in the closing section (the earlier in-section "See the pathway" transition was removed as a duplicate). Section padding tuned down (`py-16 md:py-24`) to avoid excess whitespace between two same-colour stone sections.

### Imagery & motion
- One calm, real still photograph (sourced from Unsplash; 2–3 candidates presented for approval; swap is a one-line change). Stored in `public/`.
- Gentle fade-ins on load only (existing `Reveal`). Nothing loops or autoplays. `prefers-reduced-motion` respected.

### Accessibility
- ink-on-stone passes WCAG AA comfortably; descriptive `alt` on the photo; existing focus-visible states retained; semantic `h1` (hero) / `h2` (first scroll).

## Scope

**In:** `navbar.tsx`, `hero.tsx`, `why-now.tsx`, `loading-screen.tsx`, `globals.css`, `ui/button.tsx` (add `ink` variant), one image in `public/`.
**Trimmed:** the old `Pipeline` section (four-block narrative + a pull-quote *fabricated and attributed to Ian Spero* + laboured "Once the … existed," connectors) is replaced by a single calm `closing-invitation.tsx` — a restrained "Bring a place. We'll bring the standard." CTA that keeps the `#demonstrator` anchor the hero and first scroll link to. `pipeline.tsx` and `pipeline-block.tsx` deleted. Rationale: Ian's test is scoped to hero + first scroll; the narrative reintroduced the exact "declarative / laboured / risky" issues he flagged, and the fabricated quote is a credibility risk in an email going *to* Ian. The AAA→ISO→NOHA→demonstrator story is deferred to a later, properly art-directed pass.
**Out (unchanged):** `footer.tsx` (already ink/stone/amber — consistent), `watch-learn.tsx` (already unused before this work). The final page is Hero → WhyNow → ClosingInvitation.

## Build plan (files)

1. **`components/hero.tsx`** — rebuild: stone ground, ink serif headline, text-left / `next/image` photo-right, amber rule, new copy, static trust strip; remove `<video>` and marquee; keep `Reveal` fade-ins and reduced-motion handling.
2. **`components/navbar.tsx`** — replace the terracotta two-column split with a single calm stone bar (ink logo + text), keep dropdown groups, "Get involved" CTA, and the auto-hide-past-hero behaviour.
3. **`components/why-now.tsx`** — restrained copy above; remove the scale-x amber hover bar and big italic pull-quotes; keep stone bg and the pathway link.
4. **`components/loading-screen.tsx`** — recolour `bg-terracotta` → stone with ink mark/text; remove the now-unused hero-video gate (gate on `window.load` + safety cap only).
5. **`app/globals.css`** — remove unused `@keyframes marquee` / `.marquee-track` rules.
6. **`components/ui/button.tsx`** — add an `ink` variant (ink bg, stone text) for the calm primary CTA.
7. **`public/`** — add approved hero photograph; wire into `hero.tsx`.

## Verification
- `npm run build` compiles with no type errors.
- Visual check: calm first paint (loader), stone hero, no autoplay/marquee, seamless seam into first scroll.

## Follow-up (separate deliverable)
- Draft a short, restrained reply to Ian accepting his test in his own words and pointing at the deployed screen. Written last.
