# Nexcent Landing Page

Marketing landing page built from a Figma composition. Copy and assets are authored in JSON; UI components only render that data.

## Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS** v4
- **Turbopack** (default Next.js 16 dev bundler)

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Architecture

| Folder | Role |
|--------|------|
| `app/` | Next.js routing and root layout (document shell, fonts, metadata, Header/Footer) |
| `components/` | Reusable UI primitives + landing-specific composition |
| `content/` | Authored landing page copy and asset references |
| `lib/` | Data loaders, types, and landing utilities |
| `styles/` | Global design tokens and shared CSS utilities |
| `public/` | Static assets (images, icons, favicon) |

### Why this split

- **`app/`** stays thin: routing and chrome only.
- **`components/`** owns presentation — shared primitives vs landing sections stay separate.
- **`content/`** owns words and image paths so design copy can change without touching React.
- **`lib/`** is the boundary between content and UI (load, type-check, helper maps).
- **`styles/`** holds tokens (colors, gaps, breakpoints) used across sections.
- **`public/`** serves files as-is at URL paths like `/assets/images/...`.

## Project Structure

```text
app/
├── layout.tsx              # Root layout: fonts, CSS, SkipLink, Header, Footer
├── page.tsx                # Thin entry → LandingPage
└── favicon.ico

components/
├── layout/
│   └── Container.tsx       # Shared 1024px content band
├── ui/
│   ├── Button.tsx
│   ├── ContentImage.tsx
│   └── IconImage.tsx
└── landing/
    ├── LandingPage.tsx     # Section stack (page composition)
    ├── Header.tsx
    ├── Footer.tsx
    ├── parts/              # Landing-only subcomponents
    │   ├── AchievementStat.tsx
    │   ├── BlogCard.tsx
    │   ├── CommunityCard.tsx
    │   ├── CommunityIconBadge.tsx
    │   ├── FooterBrand.tsx
    │   ├── FooterLinkColumns.tsx
    │   ├── FooterNewsletter.tsx
    │   ├── FooterSocialLinks.tsx
    │   ├── HeaderAuthActions.tsx
    │   ├── HeaderNavLinks.tsx
    │   ├── MobileMenuToggle.tsx
    │   ├── MobileNavMenu.tsx
    │   ├── NewsletterForm.tsx
    │   ├── SectionHeading.tsx
    │   ├── SkipLink.tsx
    │   ├── TestimonialLogoRow.tsx
    │   └── TestimonialQuoteBlock.tsx
    └── sections/           # Homepage sections
        ├── Achievements.tsx
        ├── Blog.tsx
        ├── Clients.tsx
        ├── Community.tsx
        ├── CtaBanner.tsx
        ├── FeatureSplit.tsx
        ├── Hero.tsx
        └── Testimonial.tsx

content/
└── landing.json            # All landing copy + image refs

lib/
└── landing/
    ├── get-landing-content.ts   # Content boundary (cached loader)
    ├── types.ts                 # Landing content TypeScript types
    ├── client-logo-sizes.ts
    └── social-icons.ts

styles/
└── index.css               # Design tokens, utilities, section heights/gaps

public/
└── assets/
    ├── images/             # Illustrations, logos, photos
    └── icons/
```

Header, Footer, and SkipLink mount from `app/layout.tsx`. Section order lives only in `components/landing/LandingPage.tsx`.

## Content Workflow

```text
content/landing.json
        ↓
lib/landing/          (getLandingContent + types + helpers)
        ↓
components/landing/   (LandingPage → sections → parts)
```

1. **Author** copy and asset paths in `content/landing.json`.
2. **Load** through `lib/landing/get-landing-content.ts` (typed as `LandingPageContent` in `types.ts`).
3. **Render** in section components; they receive props — they do not hardcode marketing text.

### Why content and UI are separate

- Designers/editors can update headings, CTAs, and image paths without editing React.
- Components stay reusable: the same `FeatureSplit` renders both `unlock` and `calendar` from different JSON keys.
- Types in `lib/landing/types.ts` catch shape mismatches at build time.
- The loader is the swap point: today it imports static JSON; later it can fetch a CMS/API without rewriting sections.

Content keys `unlock` and `calendar` map to the two `FeatureSplit` sections. In-page links (`#home`, `#blog`, …) are the current single-page navigation until real routes exist.

## Images

- Local SVGs use `next/image` with `unoptimized` so vectors stay crisp.
- Rasters default to quality `75`; large hero photography may use `quality={95}`.
- Prefer meaningful `alt` text; decorative strip logos use empty `alt`.

## Environment

Optional: `NEXT_PUBLIC_SITE_URL` for `metadataBase` / canonical URLs. Defaults to `http://localhost:3000`.
