# Design Brief

## Direction

SheltOwn Realtors — Premium fintech + real estate consultancy. Dark, bold, confidence-driven investment positioning.

## Tone

Brutally modern and unapologetically dark. Teal accents used sparingly for strategic focus (CTAs, active states). Never traditional luxury clichés.

## Differentiation

Fintech-grade interaction paired with real estate expertise. Every pixel serves trust and clarity, not decoration.

## Color Palette

| Token      | OKLCH           | Role                              |
| ---------- | --------------- | --------------------------------- |
| background | 0.08 0 0        | Deep black, primary surface       |
| foreground | 0.95 0.01 200   | Off-white text, high contrast     |
| card       | 0.15 0.008 240  | Elevated cards, subtle blue-grey  |
| primary    | 0.65 0.18 195   | Teal accent, CTAs, highlights     |
| muted      | 0.22 0.008 240  | Section dividers, disabled states |
| accent     | 0.65 0.18 195   | Same as primary (teal only)       |

## Typography

- Display: Space Grotesk — bold, geometric, confident headlines; 5xl–7xl hero
- Body: DM Sans — clean, readable, professional; 16px–18px base
- Mono: Geist Mono — precision data, code blocks
- Scale: hero 7xl/bold, h2 5xl/bold, label xs/uppercase, body lg/regular

## Elevation & Depth

Card-based hierarchy with shadow elevation. Subtle depth through background color shifts (bg-card > bg-background). No blurs, no glows.

## Structural Zones

| Zone    | Background       | Border          | Notes                                           |
| ------- | ---------------- | --------------- | ----------------------------------------------- |
| Header  | bg-background    | border-b        | Sticky nav, minimal, dark                       |
| Hero    | bg-background    | —               | Fullscreen, Delhi skyline imagery, bold CTA    |
| Section | alternate cards  | border-border   | bg-card (even), bg-muted/30 (odd)               |
| Footer  | bg-card          | border-t        | Elevated, secondary text, links                 |

## Spacing & Rhythm

6-12-24-48 spacing scale. Sections separated by 6rem gaps. Cards use 1.5rem internal padding. Micro-spacing (4-8px) for button/input groups.

## Component Patterns

- Buttons: bg-primary text-white, rounded-md, hover:opacity-90, focus:ring-2. CTA button with teal accent and subtle glow on hover.
- Cards: bg-card border-border rounded-lg shadow-card, hover:shadow-elevated transition-smooth.
- Badges: text-label uppercase, bg-muted text-foreground, rounded-sm.
- Inputs: bg-input border-border text-foreground, focus:ring-primary rounded-md.

## Motion

- Entrance: Framer Motion scroll reveals (fade-in + slide-up, 0.5s ease-out stagger). Hero text animates in on page load.
- Hover: Button scale (1.02), card lift (shadow-card → shadow-elevated), icon rotate on interactive elements.
- Decorative: Soft parallax on hero background (offset 5–10px), icon pulse on CTAs.

## Constraints

- Teal (#195 hue) accent used ONLY for CTAs, hover states, focus rings — never for backgrounds.
- No gradients, no transparency overlays. Depth via solid color shifts only.
- Mobile-first responsive. Sticky bottom bar on mobile (Call, WhatsApp, Enquire).
- All animations GPU-accelerated. Framer Motion for scroll/hover choreography.

## Signature Detail

Fintech-grade precision meets real estate trust: teal accent reserved for actions only, dark palette conveys authority, custom shadows create tactile depth without visual noise.
