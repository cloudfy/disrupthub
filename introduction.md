# Disrupt.hub — Modern AI Consultancy Website

## Technology Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | React | ^19 |
| Language | TypeScript | ~5.9 |
| Build tool | Vite | ^8 |
| Routing | React Router DOM | ^7 |
| Styling | Tailwind CSS | v4 (CSS-native config) |
| Fonts | Syne (display) + DM Sans (body) | via Google Fonts |
| Animations | CSS-only (Intersection Observer + @keyframes) | — |
| Contact form | EmailJS browser SDK | ^4 |
| Deployment | GitHub Pages via GitHub Actions | — |

**No JS animation library** — all scroll and hover effects are pure CSS transitions triggered by a lightweight `useScrollReveal` hook (Intersection Observer → class toggle).

## Design System

### Aesthetic
**Corporate & bold** — inspired by Stripe. Near-white backgrounds (`#FAFAFA`) with vibrant purple (`#8B5CF6`) and blue (`#3B82F6`) accents. The design avoids generic AI aesthetics in favour of high-contrast, editorial precision.

### Typography
- **Display / Headings**: `Syne` — geometric, bold, tight letter-spacing (`-0.03em`)
- **Body**: `DM Sans` — clean, readable, optical-size aware

### Colour Tokens (defined in `src/index.css` → `@theme {}`)
```
--color-brand-purple:        #8B5CF6
--color-brand-purple-light:  #A78BFA
--color-brand-purple-dark:   #6D28D9
--color-brand-blue:          #3B82F6
--color-surface:             #FAFAFA
--color-surface-alt:         #F4F4F6
--color-surface-dark:        #0F0F13
--color-surface-card:        #FFFFFF
--color-text-primary:        #0D0D12
--color-text-secondary:      #52525B
--color-text-muted:          #A1A1AA
--color-border:              #E4E4E7
```

### Motion
- `fadeInUp`, `fadeIn`, `slideInLeft`, `scaleIn`, `shimmer`, `pulse-glow`, `float` keyframes
- Scroll reveal: `.reveal` / `.reveal-left` / `.reveal-scale` classes toggled via `useScrollReveal` hook
- Stagger groups: `.reveal-group > *:nth-child(n)` with incremental `transition-delay`
- Card hover: `translateY(-4px)` + purple glow shadow
- CTA button: `::after` shimmer sweep animation
- Navbar: transparent → frosted-glass (`backdrop-filter: blur(12px)`) on scroll

### UI Component Library (`src/components/ui/`)
| Component | Variants / Props |
|---|---|
| `Button` | `primary`, `secondary`, `ghost`, `outline`; sizes `sm`, `md`, `lg`; `loading`, `fullWidth` |
| `Card` | `hover`, `gradient` (gradient border), padding `sm`/`md`/`lg` |
| `Badge` | `purple`, `blue`, `gray`, `green` |
| `Input` | label, error, hint; forwarded ref |
| `Select` | label, error, hint; forwarded ref |
| `Textarea` | label, error, hint; forwarded ref |

## Project Structure

```
disrupthub/
├── .env.example                    # EmailJS env vars template
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions: build → deploy to Pages
├── index.html                      # Syne + DM Sans fonts, OG meta, SPA redirect script
├── public/
│   └── 404.html                    # GitHub Pages SPA deep-link redirect
├── vite.config.ts                  # @tailwindcss/vite plugin, path alias @/→src/
├── tsconfig.app.json               # baseUrl + paths for @/ alias
└── src/
    ├── index.css                   # Tailwind v4 @import, @theme tokens, @keyframes
    ├── main.tsx                    # React 19 createRoot entry point
    ├── App.tsx                     # BrowserRouter, ScrollToTop, Layout wrapping all Routes
    ├── assets/
    │   └── Logo.tsx                # SVG DH monogram + wordmark (light/dark/mark variants)
    ├── components/
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Card.tsx
    │   │   ├── Badge.tsx
    │   │   ├── FormFields.tsx      # Input, Select, Textarea
    │   │   └── index.ts            # Barrel exports
    │   ├── layout/
    │   │   ├── Layout.tsx          # Navbar + main + Footer shell
    │   │   ├── Navbar.tsx          # Sticky, scroll-state aware, mobile hamburger
    │   │   └── Footer.tsx          # Dark footer, link columns, copyright
    │   └── sections/               # Home page sections (used by pages/Home.tsx)
    │       ├── Hero.tsx
    │       ├── ValueProps.tsx
    │       ├── WhatWeDo.tsx
    │       ├── CaseStories.tsx
    │       └── CTABanner.tsx
    ├── hooks/
    │   └── useScrollReveal.ts      # Intersection Observer → adds .revealed class
    ├── lib/
    │   └── contact.ts              # sendContactEmail() via EmailJS SDK
    └── pages/
        ├── Home.tsx                # Composes all sections
        ├── HowWeBuild.tsx          # 4-phase process + guiding principles
        ├── Contact.tsx             # Form + sidebar, client-side validation, EmailJS
        └── About.tsx               # Mission, values, placeholder team grid
```

## Pages & Routes

### 1. Home (`/`)
- **Hero** — bold headline, gradient stat cards, dual CTA buttons
- **ValueProps** — three-column grid: speed / collaboration / delivery philosophy
- **WhatWeDo** (`#what-we-do`) — three offering cards (AI Agents, Digitalization, CI/CD)
- **CaseStories** — Keepit, Norlys, Camall with outcome metrics
- **CTABanner** — dark section with purple glow, links to `/contact`

### 2. How We Build (`/how-we-build`)
- Phase navigation pills (anchor links)
- Four `PhaseCard` components (extracted sub-component to satisfy React hooks rules):
  - **01 Specify** — discovery, spec
  - **02 Adopt** — AI-assisted sprints, knowledge transfer
  - **03 Deploy** — CI/CD, observability, rollback
  - **04 Operate** — AI monitoring, drift detection
- Guiding principles grid
- Bottom CTA → `/contact`

### 3. Contact (`/contact`)
- Two-column layout: form + sticky info sidebar
- Form fields: Name, Email, Company, Role (CTO/CFO/CPO/CEO/Lead/Other), Message
- Client-side validation with per-field error display
- `idle → loading → success/error` state machine
- Submits via `sendContactEmail()` in `src/lib/contact.ts` (EmailJS)
- Success state replaces form with confirmation UI

### 4. About (`/about`)
- Mission narrative + stat grid (12+ systems, 3 countries, 100% production rate)
- "How we operate" values: Ship then iterate / Radical transparency / Ownership by design
- Placeholder team grid (4 profiles with initials avatars)

## Navigation
- Sticky `Navbar` — transparent → frosted-glass on scroll
- Active route highlighted via React Router `NavLink` `isActive`
- Mobile hamburger: animated three-line → X, slide-down drawer, closes on route change
- "Get in Touch" CTA → `/contact`
- `Footer` — dark background, Company + Services link columns

## Contact Form — EmailJS Setup
The contact form uses **EmailJS** (browser-safe, no server required):
1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Add an Email Service (Gmail, SMTP, etc.)
3. Create a template with variables: `{{from_name}}`, `{{from_email}}`, `{{company}}`, `{{role}}`, `{{message}}`
4. Copy your Service ID, Template ID, and Public Key
5. Create `cp .env.example .env.local` and fill in the values
6. For GitHub Pages deployment: add the three secrets in `Settings → Secrets and variables → Actions`

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

## Deployment — GitHub Pages

### One-time setup
1. Push to GitHub; enable Pages in `Settings → Pages → Source: GitHub Actions`
2. Add the three EmailJS secrets under `Settings → Secrets and variables → Actions`

### Workflow (`.github/workflows/deploy.yml`)
- Trigger: push to `main` or manual dispatch
- Steps: `checkout → setup-node@22 → npm ci → tsc (type-check) → vite build → upload-pages-artifact → deploy-pages`
- `public/404.html` handles SPA deep-link refreshes on GitHub Pages

### Custom Domain
If using a custom domain (e.g. `disrupt.hub`):
- Keep `base: '/'` in `vite.config.ts` (already set)
- Add a `CNAME` file to `public/` containing your domain
- Configure DNS CNAME/A records per GitHub Pages docs

If serving from a subpath (`https://user.github.io/disrupthub/`):
- Change `base: '/disrupthub/'` in `vite.config.ts`

## Development

```bash
# Install
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check + production build  
npm run build

# Preview production build locally
npm run preview
```

## Case Stories

- **Keepit** — Designing, integrating and building a modern billing infrastructure for contracted subscription and usage-based billing. End-to-end Quote-to-Cash, from lead to product.
- **Norlys** — Consolidating, building and operating billing infrastructure to support new workloads and services growth across a multi-BU energy company.
- **Camall** — Building, scaling and launching a modern OpenID Connect authentication provider for European enterprise customers.

## Decisions & Rationale

| Decision | Why |
|---|---|
| Tailwind CSS v4 | CSS-native `@theme` config, no `tailwind.config.ts`, native cascade layers |
| CSS-only animations | No JS animation library = leaner bundle; Intersection Observer provides sufficient control |
| EmailJS over Resend/SendGrid | Static GitHub Pages has no server runtime; EmailJS uses a browser-safe public key model |
| React Router `BrowserRouter` | Standard SPA routing; `404.html` trick handles GitHub Pages deep-link refreshes |
| Syne + DM Sans | Distinctive, characterful pairing; avoids generic Inter/Roboto defaults |
| `@/` path alias | Cleaner imports without `../../..` traversal |

