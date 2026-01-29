---
stepsCompleted: ['step-01-validate-prerequisites', 'step-02-design-epics', 'step-03-create-stories']
inputDocuments:
  - '_bmad-output/planning-artifacts/prd.md'
  - '_bmad-output/planning-artifacts/architecture.md'
  - '_bmad-output/planning-artifacts/BMAD-Architecture-Complete.md'
  - '_bmad-output/planning-artifacts/ux-design-specification.md'
totalEpics: 9
totalStories: 57
---

# BMAD-site - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for BMAD-site, decomposing the requirements from the PRD, UX Design, and Architecture documents into implementable stories.

## Requirements Inventory

### Functional Requirements

**FR1:** Visitors can view a full-screen hero image that adapts based on their local time of day (dawn, midday, dusk, night)

**FR2:** Visitors can navigate from the homepage to gallery pages through intentional page transitions

**FR3:** Visitors can browse wildlife photographs organized by Color and Black & White categories

**FR4:** Visitors can filter gallery views by category (Color/B&W)

**FR5:** Visitors can scroll through galleries with infinite scroll pagination

**FR6:** Visitors can view images in a responsive masonry layout that adapts to their device (desktop 3-4 columns, tablet 2 columns, mobile 1 column)

**FR7:** Visitors can view optimized images appropriate for their device and connection speed

**FR8:** Visitors can hover over (desktop) or tap (mobile) images to reveal Behind-the-Lens metadata

**FR9:** Visitors can view camera settings for each photograph (aperture, shutter speed, ISO, lens)

**FR10:** Visitors can view location information for each photograph

**FR11:** Visitors can read field stories describing the context and moment of each photograph

**FR12:** Visitors can see equipment information used for each photograph

**FR13:** Visitors can access Instagram profile through floating social media icons

**FR14:** Visitors can access Facebook profile through floating social media icons

**FR15:** The system can track social media link clicks for conversion analysis

**FR16:** Search engines can crawl all pages with complete pre-rendered HTML content

**FR17:** Search engines can discover images through descriptive alt text

**FR18:** Search engines can index the site through auto-generated XML sitemaps

**FR19:** Search engines can display rich previews through Open Graph and Twitter Card metadata

**FR20:** Search engines can understand site structure through JSON-LD structured data (Person, ImageObject, BreadcrumbList, WebSite schemas)

**FR21:** Content owner can organize photographs in Google Drive folders by category

**FR22:** The system can automatically sync images from Google Drive to Vercel Blob Storage

**FR23:** The system can automatically optimize images during sync (compression, format conversion, responsive sizing)

**FR24:** The system can trigger static site regeneration when new images are added

**FR25:** Content owner can add metadata to photographs (camera settings, location, story, equipment)

**FR26:** The system can track visitor behavior (page views, session duration, bounce rate)

**FR27:** The system can track social media conversion events (link clicks)

**FR28:** The system can monitor Core Web Vitals performance metrics (LCP, CLS, FID)

**FR29:** The system can track search engine performance (keyword rankings, impressions, click-through rates)

**FR30:** The system can monitor Google Images indexing status

**FR31:** Visitors can access the site from any modern browser (Chrome, Safari, Firefox, Edge - last 2 versions)

**FR32:** Visitors can navigate the entire site using keyboard controls

**FR33:** Screen reader users can access all content through semantic HTML and ARIA labels

**FR34:** Visitors can view content with sufficient color contrast (WCAG AA compliance)

**FR35:** Visitors can adjust their browser text size without breaking layouts

**FR36:** Visitors with motion sensitivity can experience reduced motion when preferred

**FR37:** The system can deliver hero images within 2.5 seconds (LCP target)

**FR38:** The system can load gallery pages with lazy-loaded images for optimal performance

**FR39:** The system can serve responsive images with appropriate sizes for each viewport

**FR40:** The system can deliver pages under 3 seconds on 3G mobile connections

**FR41:** The system can maintain layout stability during image loading (CLS <0.1)

**FR42:** Visitors can share individual photographs to social media platforms with rich preview cards

**FR43:** Visitors can share gallery pages to social media platforms with rich preview cards

**FR44:** Visitors can share the homepage to social media platforms with rich preview cards

### Non-Functional Requirements

**NFR1:** Homepage hero image (LCP) must load in <2.5 seconds on desktop and <3 seconds on mobile 3G connections

**NFR2:** Gallery pages must achieve First Input Delay (FID) <100ms for responsive interactions

**NFR3:** Cumulative Layout Shift (CLS) must be <0.1 to prevent jarring visual shifts during image loading

**NFR4:** Time to Interactive (TTI) must be <4 seconds to enable user interactions quickly

**NFR5:** JavaScript bundle size must be <200KB (gzipped) to minimize download and parse time

**NFR6:** Individual optimized images must be <200KB on mobile and <500KB on desktop

**NFR7:** Lighthouse Performance Score must maintain 90+ consistently across all pages

**NFR8:** The system must maintain <10% performance degradation when image library grows from 100 to 1,000+ photographs

**NFR9:** All pages must be served over HTTPS with valid SSL certificates

**NFR10:** All API calls and data transmission must use encryption in transit (TLS 1.2+)

**NFR11:** Admin authentication (Phase 2) must use industry-standard authentication mechanisms (OAuth 2.0 or similar)

**NFR12:** Payment processing (Phase 2) must comply with PCI-DSS requirements through Stripe integration

**NFR13:** No sensitive user data must be stored in client-side storage (localStorage/sessionStorage) except for non-sensitive preferences

**NFR14:** Environment variables and API keys must never be exposed in client-side code

**NFR15:** The system must implement proper CORS policies to prevent unauthorized API access

**NFR16:** The system must handle 1,000 concurrent visitors without performance degradation

**NFR17:** Static site generation must support scaling from 100 to 10,000+ images without architectural changes

**NFR18:** Image delivery through Vercel Blob Storage and CDN must handle traffic spikes up to 10x normal load

**NFR19:** The sync pipeline must process batch uploads of 50+ images within 10 minutes

**NFR20:** Database queries (Phase 2) must maintain <100ms response time as data grows to 10,000+ records

**NFR21:** The site must achieve WCAG 2.1 Level AA compliance at minimum

**NFR22:** All interactive elements must have minimum touch/click targets of 44×44 pixels for mobile usability

**NFR23:** Color contrast ratios must be at least 4.5:1 for normal text and 3:1 for large text

**NFR24:** All images must have descriptive alt text that conveys meaningful content to screen readers

**NFR25:** The site must be fully navigable using keyboard alone (Tab, Enter, Arrow keys)

**NFR26:** Focus indicators must be visible on all interactive elements for keyboard navigation

**NFR27:** The site must respect user's prefers-reduced-motion settings to minimize animations for motion-sensitive users

**NFR28:** Semantic HTML5 must be used throughout to ensure proper screen reader interpretation

**NFR29:** Form validation errors (Phase 2) must be clearly announced to screen readers with ARIA live regions

**NFR30:** The production site must maintain 99.9% uptime (allowing ~43 minutes downtime per month)

**NFR31:** Vercel deployment must support zero-downtime deployments with instant rollback capability

**NFR32:** Failed deployments must automatically roll back to the last known good version

**NFR33:** The image sync pipeline must include retry logic for transient failures (up to 3 attempts)

**NFR34:** Error monitoring must capture and alert on critical failures within 5 minutes

**NFR35:** The system must gracefully degrade when third-party services (Google Drive, Analytics) are temporarily unavailable

**NFR36:** First-time visitors must understand primary navigation within 30 seconds of landing on the homepage

**NFR37:** The responsive masonry layout must adapt seamlessly across all breakpoints (mobile, tablet, desktop) without horizontal scrolling

**NFR38:** Image loading must provide visual feedback (placeholders, loading indicators) to prevent perceived delays

**NFR39:** Error states (404, 500) must provide clear user guidance and navigation options back to working pages

**NFR40:** The site must maintain visual consistency across all supported browsers (Chrome, Safari, Firefox, Edge)

**NFR41:** The codebase must maintain TypeScript type safety with no 'any' types in production code

**NFR42:** Code must pass ESLint validation with zero errors before deployment

**NFR43:** All critical user paths must be covered by Playwright E2E tests with 90%+ test pass rate

**NFR44:** The image sync pipeline must be executable manually or automatically with clear logging

**NFR45:** The system must provide clear error messages and stack traces for debugging production issues

**NFR46:** Documentation must exist for all custom build scripts, sync pipelines, and deployment processes

**NFR47:** The site must render correctly on Chrome, Safari, Firefox, and Edge (last 2 versions)

**NFR48:** Mobile browser support must include Safari iOS (last 2 versions) and Chrome Android (last 2 versions)

**NFR49:** The site must support viewport widths from 320px (small mobile) to 2560px+ (large desktop)

**NFR50:** No Internet Explorer support is required (IE11 end-of-life acknowledged)

### Additional Requirements

**From Architecture:**

- **Next.js 16 Starter Template**: Architecture specifies using `create-next-app` with specific flags for Next.js 16 App Router, TypeScript, Tailwind CSS, ESLint, Turbopack, and src directory structure
- **Static Export Configuration**: `output: 'export'` in next.config.js for fully static HTML generation
- **Turbopack Build System**: Stable Turbopack for faster builds and development experience
- **React Compiler**: Automatic component optimization without manual memoization
- **Zustand State Management**: Lightweight client-side state for lightbox, gallery, and time-adaptive hero
- **GitHub Actions Image Sync**: Automated daily sync workflow from Google Drive to Vercel Blob Storage
- **Centralized Metadata Factory Functions**: lib/metadata.ts for consistent SEO across all pages
- **Google Analytics 4 Integration**: via @next/third-parties for optimized third-party script loading
- **React Error Boundaries**: Graceful error handling for client components
- **TypeScript Strict Mode**: Zero 'any' types policy with comprehensive strict checks enabled
- **ESLint Zero-Error Policy**: CI/CD gates block deployment on any ESLint errors
- **Playwright E2E Testing**: Comprehensive test coverage for critical user paths
- **Vercel Blob Storage**: CDN for optimized image delivery
- **Image Metadata JSON Structure**: Specific schema for images.json generated by sync pipeline
- **Tailwind CSS Configuration**: Custom matte nature color palette (forest green, savanna ochre)
- **Font Optimization**: next/font for Cormorant Garamond and Inter with automatic optimization

**From UX Design:**

- **Minimal Navigator Homepage**: Typography-centered layout with subtle time-adaptive background at 20-30% opacity
- **Matte Nature Color Palette**: Specific color values for forest green (#5a8a6d) and savanna ochre (#8f7556)
- **Typography System**: Cormorant Garamond (serif headings), Inter (sans body), JetBrains Mono (metadata)
- **Generous Whitespace**: 48-96px between major sections for calm, peaceful aesthetic
- **Firefly/Butterfly Animations**: Social icons with gentle floating animations (translateY -4px to -8px, 3s ease-in-out)
- **Calm Scroll Physics**: Momentum-based scrolling that feels like "walking through nature"
- **Progressive Disclosure**: Navigation hints appear after initial impact, not overwhelming immediately
- **Behind-the-Lens Metadata Reveals**: Hover/click reveals camera settings, location, story in metadata format
- **Skeleton Loaders**: Gradient pulse animation (1.5s loop) for perceived performance
- **Modal Animations**: Scale + fade transitions (400ms opening, 300ms closing)
- **Consistent Easing**: cubic-bezier(0.4, 0, 0.2, 1) for all animations
- **Focus Ring Standard**: forest-500 color, 2px solid, 2px offset
- **Touch Target Sizing**: 48x48px minimum for all interactive elements
- **Responsive Breakpoints**: 640px (sm), 768px (md), 1024px (lg), 1280px (xl), 1536px (2xl)
- **Image Lightbox**: Full-screen viewer with keyboard navigation (arrows, Esc, Z for zoom)
- **Masonry Layout**: React-Masonry-CSS with Tailwind responsive classes
- **Empty States**: Friendly messaging with clear next actions
- **Accessibility Standards**: WCAG 2.1 AA compliance, keyboard navigation, screen reader support

### FR Coverage Map

**Epic 1 (Foundation):** Enables all other epics - NFR41, NFR42, NFR47-50

**Epic 2 (Homepage):** FR1, FR2, FR13-14, FR31-37 - NFR1, NFR21-29, NFR36

**Epic 3 (Gallery):** FR3-7, FR31-41 - NFR2-8, NFR16-19, NFR37-40

**Epic 4 (Lightbox):** FR8-12, FR32-33 - NFR25-26, NFR28

**Epic 5 (SEO):** FR16-20, FR42-44 - NFR9-10

**Epic 6 (Social/Analytics):** FR13-15, FR26-30 - NFR34-35

**Epic 7 (Image Pipeline):** FR21-25 - NFR6, NFR19, NFR33, NFR44

**Epic 8 (Testing):** Quality assurance - NFR31-32, NFR43, NFR45

## Epic List

### Epic 1: Project Foundation & Infrastructure Setup
Development environment is ready with Next.js 16, proper tooling, and deployment pipeline configured for fast, reliable builds

**FRs covered:** None directly (enabler epic)

**NFRs addressed:** NFR41 (TypeScript strict), NFR42 (ESLint zero errors), NFR47-50 (browser compatibility)

**Additional Requirements:** Next.js 16 starter template, Turbopack, React Compiler, TypeScript strict mode, ESLint configuration, Vercel deployment setup

---

### Epic 2: Time-Adaptive Homepage Experience
Visitors see an elegant, minimal homepage with photographer name and time-of-day adaptive background that creates immediate impact and guides them to galleries

**FRs covered:** FR1 (time-adaptive hero), FR2 (homepage to gallery navigation), FR13-14 (social media icons), FR31-36 (accessibility), FR37 (hero LCP <2.5s)

**NFRs addressed:** NFR1 (homepage LCP <2.5s), NFR21-29 (WCAG AA compliance), NFR36 (navigation clarity in 30s)

**Additional Requirements:** Minimal Navigator layout, matte nature colors, Cormorant Garamond typography, firefly animations, progressive disclosure

---

### Epic 3: Responsive Masonry Gallery Browsing
Visitors can browse wildlife photography in beautiful, responsive masonry layouts (Color/B&W categories) with smooth infinite scroll and effortless performance

**FRs covered:** FR3-7 (category browsing, masonry layout, infinite scroll, responsive images, optimized delivery), FR31-36 (accessibility), FR38-41 (lazy loading, responsive images, <3s load, CLS <0.1)

**NFRs addressed:** NFR2-8 (FID, CLS, TTI, bundle size, Lighthouse 90+), NFR16-19 (scalability), NFR37-40 (responsive layout, visual feedback)

**Additional Requirements:** Calm scroll physics, skeleton loaders, masonry animations, empty states

---

### Epic 4: Full-Screen Image Lightbox & Behind-the-Lens Storytelling
Visitors can view images in full-screen lightbox and discover behind-the-lens metadata (camera settings, location, stories) for deeper appreciation

**FRs covered:** FR8-12 (metadata reveals, camera settings, location, stories, equipment), FR32-33 (keyboard navigation, screen reader support)

**NFRs addressed:** NFR25-26 (keyboard navigation, focus indicators), NFR28 (semantic HTML)

**Additional Requirements:** Modal animations, metadata reveal component, lightbox with zoom, keyboard shortcuts

---

### Epic 5: SEO Optimization & Discoverability
Search engines can discover, crawl, and index the site perfectly, driving organic traffic through Google Search and Google Images

**FRs covered:** FR16-20 (pre-rendered HTML, alt text, sitemaps, Open Graph, JSON-LD), FR42-44 (social sharing)

**NFRs addressed:** NFR9-10 (HTTPS, TLS 1.2+)

**Additional Requirements:** Centralized metadata factory functions, JSON-LD schemas, image sitemap

---

### Epic 6: Social Media Conversion & Analytics Tracking
Visitors can easily follow on Instagram/Facebook through playful firefly-animated icons, and site owner can track conversion rates and visitor behavior

**FRs covered:** FR13-15 (social icons with tracking), FR26-30 (GA4, Core Web Vitals, search performance tracking)

**NFRs addressed:** NFR34 (error monitoring), NFR35 (graceful degradation)

**Additional Requirements:** GA4 integration via @next/third-parties, analytics event tracking, firefly icon animations

---

### Epic 7: Automated Image Management Pipeline
Content owner can upload images to Google Drive, and the system automatically syncs, optimizes, and deploys them to the live site without manual intervention

**FRs covered:** FR21-25 (Google Drive folders, automated sync, image optimization, static regeneration, metadata management)

**NFRs addressed:** NFR6 (image optimization <200KB mobile), NFR19 (batch processing 50+ images in 10 min), NFR33 (retry logic), NFR44 (pipeline logging)

**Additional Requirements:** GitHub Actions workflow, Vercel Blob Storage, image metadata JSON schema, WebP/AVIF conversion

---

### Epic 8: Quality Assurance & Testing Framework
All critical user paths are tested automatically, ensuring zero regressions and maintaining high quality standards before every deployment

**FRs covered:** None directly (quality enabler)

**NFRs addressed:** NFR43 (Playwright E2E 90%+ coverage), NFR31-32 (zero-downtime deployments, rollback), NFR45 (error messages and debugging)

**Additional Requirements:** Playwright configuration, E2E test suite, CI/CD gates, visual regression testing

---

## Epic Breakdown with Stories

---

## Epic 1: Project Foundation & Infrastructure Setup

Development environment is ready with Next.js 16, proper tooling, and deployment pipeline configured for fast, reliable builds

### Story 1.1: Initialize Next.js 16 Project with App Router

As a developer,
I want to create a new Next.js 16 project with App Router, TypeScript, Turbopack, and src directory structure,
So that I have a modern, performant foundation for building the wildlife photography portfolio.

**Acceptance Criteria:**

**Given** I need to start the BMAD-site project
**When** I run `npx create-next-app@latest` with flags: `--app`, `--typescript`, `--tailwind`, `--eslint`, `--turbopack`, `--src-dir`, `--import-alias "@/*"`
**Then** A new Next.js 16 project is created with:
- App Router structure in `src/app/`
- TypeScript configuration file (`tsconfig.json`)
- Tailwind CSS installed and configured
- ESLint installed with Next.js recommended rules
- Turbopack enabled as the build system
- Import alias `@/*` pointing to `src/*`
**And** The project runs successfully with `npm run dev`
**And** The default Next.js starter page loads at `http://localhost:3000`
**And** Turbopack successfully compiles the application

---

### Story 1.2: Configure TypeScript Strict Mode and ESLint Zero-Error Policy

As a developer,
I want TypeScript strict mode enabled with zero 'any' types policy and ESLint configured for zero errors,
So that code quality is enforced and type safety is guaranteed throughout development.

**Acceptance Criteria:**

**Given** The Next.js 16 project exists with basic TypeScript configuration
**When** I update `tsconfig.json` with strict mode settings:
- `"strict": true`
- `"noImplicitAny": true`
- `"strictNullChecks": true`
- `"strictFunctionTypes": true`
- `"strictBindCallApply": true`
- `"strictPropertyInitialization": true`
- `"noUncheckedIndexedAccess": true`
**And** I configure ESLint in `.eslintrc.json` with:
- `"extends": ["next/core-web-vitals", "next/typescript"]`
- Custom rule: `"@typescript-eslint/no-explicit-any": "error"`
**Then** TypeScript compilation fails if any `any` types are used
**And** ESLint validation fails if any errors are detected
**And** Running `npm run lint` produces zero errors on the starter project
**And** Running `tsc --noEmit` produces zero type errors
**And** CI/CD can gate deployments on ESLint passing

---

### Story 1.3: Configure Tailwind CSS with Custom Nature Color Palette

As a developer,
I want Tailwind CSS configured with the matte nature color palette (forest green, savanna ochre, neutral warm tones),
So that I can use consistent design tokens throughout the application.

**Acceptance Criteria:**

**Given** Tailwind CSS is installed in the Next.js project
**When** I update `tailwind.config.ts` with custom theme extensions:
- Forest green scale: 50-900 with primary `forest-500: '#5a8a6d'`
- Savanna ochre scale: 50-900 with primary `savanna-500: '#8f7556'`
- Neutral warm scale: 50-900 with background `neutral-50: '#faf9f7'`
- Font families: `serif: ['Cormorant Garamond', 'Georgia', 'serif']`, `sans: ['Inter', 'system-ui', 'sans-serif']`, `mono: ['JetBrains Mono', 'monospace']`
- Custom animations: `fade-in`, `firefly` with keyframes
- Custom easing: `cubic-bezier(0.4, 0, 0.2, 1)`
**And** I add Tailwind plugins: `@tailwindcss/typography`, `@tailwindcss/forms`
**Then** I can use custom color classes: `bg-forest-500`, `text-savanna-600`, `border-neutral-200`
**And** I can use custom font classes: `font-serif`, `font-sans`, `font-mono`
**And** I can use custom animations: `animate-fade-in`, `animate-firefly`
**And** Tailwind JIT compiler only includes used classes in production build
**And** The custom palette matches UX design specification exactly

---

### Story 1.4: Set up Vercel Deployment Pipeline with Zero-Downtime Configuration

As a developer,
I want Vercel deployment configured with automatic deployments from main branch and instant rollback capability,
So that the site can be deployed reliably with zero downtime.

**Acceptance Criteria:**

**Given** The Next.js project exists in a Git repository on GitHub
**When** I connect the repository to Vercel:
- Link GitHub repository to Vercel project
- Configure production branch as `main`
- Enable automatic deployments on push to `main`
- Configure preview deployments for all branches
**And** I configure Vercel project settings:
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next` (or `out` if static export)
- Install Command: `npm install`
- Node.js Version: 20.x or later
**Then** Pushing to `main` branch triggers automatic production deployment
**And** Deployment completes successfully with preview URL
**And** Production URL serves the deployed application
**And** Vercel dashboard shows deployment history with rollback option
**And** Failed deployments can be rolled back instantly
**And** Environment variables can be configured securely in Vercel dashboard
**And** HTTPS is automatically enabled with valid SSL certificate

---

### Story 1.5: Configure Font Optimization for Cormorant Garamond and Inter

As a developer,
I want Cormorant Garamond (serif) and Inter (sans) fonts optimized using next/font,
So that typography loads quickly without layout shift and matches the UX design system.

**Acceptance Criteria:**

**Given** The Next.js 16 project with Tailwind CSS is configured
**When** I create `src/app/fonts.ts` and import fonts using `next/font/google`:
- Import Cormorant Garamond with weights: 400, 600, 700
- Import Inter with weights: 300, 400, 500, 600
- Configure `display: 'swap'` for both fonts
- Define CSS variables: `--font-serif` and `--font-sans`
**And** I apply fonts in `src/app/layout.tsx`:
- Add font variables to root `<html>` element className
- Configure fallback fonts in CSS
**And** I update Tailwind config to use CSS variables:
- `fontFamily.serif: ['var(--font-serif)', 'Georgia', 'serif']`
- `fontFamily.sans: ['var(--font-sans)', 'system-ui', 'sans-serif']`
**Then** Fonts are automatically optimized and self-hosted by Next.js
**And** Font files are preloaded in the document head
**And** No layout shift occurs when fonts load (FOUT prevented)
**And** Tailwind classes `font-serif` and `font-sans` use the optimized fonts
**And** Fallback fonts display during font loading
**And** Lighthouse audit shows optimized font loading with no CLS

---

### Story 1.6: Set Up Static Export Configuration

As a developer,
I want Next.js configured for static site generation with `output: 'export'`,
So that the entire site can be pre-rendered as static HTML for optimal performance and SEO.

**Acceptance Criteria:**

**Given** The Next.js 16 project is set up with App Router
**When** I update `next.config.ts` with:
- `output: 'export'` for static HTML generation
- `images: { unoptimized: false }` to allow Next.js Image optimization with static export
- Configure `trailingSlash: true` for consistent URLs
**And** I verify all pages use static generation (no server-side runtime)
**And** I verify no dynamic API routes exist (incompatible with static export)
**Then** Running `npm run build` generates static HTML files in `out/` directory
**And** All pages are pre-rendered at build time
**And** The `out/` directory contains:
- `index.html` (homepage)
- Static assets in `_next/static/`
- All routes as `.html` files
**And** Static site can be served from any static hosting
**And** All pages are fully crawlable by search engines
**And** No server-side runtime is required
**And** Build completes without errors related to dynamic features

---

## Epic 2: Time-Adaptive Homepage Experience

Visitors see an elegant, minimal homepage with photographer name and time-of-day adaptive background that creates immediate impact and guides them to galleries

### Story 2.1: Create Minimal Navigator Homepage Layout

As a visitor,
I want to see an elegant, centered homepage with the photographer's name and clear navigation choices,
So that I immediately understand this is a photography portfolio and can choose which gallery to explore.

**Acceptance Criteria:**

**Given** I navigate to the homepage (/)
**When** The page loads
**Then** I see a centered layout with:
- Photographer name in Cormorant Garamond serif font (48px desktop, 36px mobile)
- Tagline in Inter sans font (18px, neutral-600 color)
- Navigation links: "Color Gallery", "Black & White Gallery"
- Generous whitespace (48-96px between sections)
- Warm off-white background (neutral-50: #faf9f7)
**And** The layout is centered vertically and horizontally
**And** Navigation links use forest-600 and savanna-600 colors respectively
**And** All text is readable with WCAG AA contrast ratios (4.5:1 minimum)
**And** The layout is responsive across all breakpoints (320px-2560px)
**And** Touch targets for navigation are minimum 48x48px

---

### Story 2.2: Implement Time-Adaptive Background Image System

As a visitor,
I want to see a subtle background image that adapts to my local time of day,
So that the homepage feels fresh and personalized on each visit.

**Acceptance Criteria:**

**Given** I visit the homepage at different times of day
**When** The page loads and detects my local time using JavaScript
**Then** The appropriate background image is displayed:
- Dawn (5am-10am): Warm morning wildlife image
- Midday (10am-5pm): Bright daylight wildlife image
- Dusk (5pm-8pm): Golden hour wildlife image
- Night (8pm-5am): Dark/twilight wildlife image
**And** Background image is displayed at 20-30% opacity or with blur effect
**And** Background image loads optimized (<100KB) using Next.js Image
**And** Text remains readable against all background variants
**And** Time detection uses visitor's browser timezone
**And** Background changes only on page reload, not during session
**And** Fallback to midday image if time detection fails

---

### Story 2.3: Implement Homepage Navigation with Page Transitions

As a visitor,
I want to click navigation links and smoothly transition to gallery pages,
So that I can explore wildlife photography categories.

**Acceptance Criteria:**

**Given** I am on the homepage
**When** I click "Color Gallery" link
**Then** I navigate to `/gallery/color` route
**And** Page transition is smooth (no jarring redirect)
**And** Color gallery page loads and displays
**When** I click "Black & White Gallery" link
**Then** I navigate to `/gallery/bw` route
**And** B&W gallery page loads and displays
**And** Browser back button returns me to homepage
**And** Navigation links have hover states (underline animation, 300ms)
**And** Keyboard navigation works (Tab to focus, Enter to activate)
**And** Focus rings are visible (forest-500, 2px solid, 2px offset)

---

### Story 2.4: Add Firefly-Animated Social Media Icons to Homepage

As a visitor,
I want to see playful social media icons with gentle floating animations,
So that I can easily follow the photographer on Instagram and Facebook.

**Acceptance Criteria:**

**Given** I am on the homepage
**When** The page loads
**Then** I see social media icons (Instagram, Facebook) positioned subtly
**And** Icons have 48x48px minimum tap targets
**And** On hover (desktop), icons float gently (translateY -4px to -8px, 3s ease-in-out)
**And** Opacity transitions from 0.7 to 1.0 on hover
**And** On mobile, icons have subtle pulse animation
**And** Clicking Instagram icon opens Instagram profile in new tab
**And** Clicking Facebook icon opens Facebook profile in new tab
**And** Icons have descriptive aria-labels: "Follow on Instagram", "Follow on Facebook"
**And** Animation respects prefers-reduced-motion (no animation if user prefers reduced motion)
**And** Icons use SVG format with forest/savanna color accents

---

### Story 2.5: Implement Progressive Disclosure for Homepage Navigation

As a first-time visitor,
I want navigation hints to appear after initial visual impact,
So that I'm not overwhelmed immediately but can discover navigation naturally.

**Acceptance Criteria:**

**Given** I am a first-time visitor landing on the homepage
**When** The page loads
**Then** The photographer name and background appear immediately (0ms)
**And** Navigation links fade in after 1 second delay (fade-in animation, 600ms duration)
**And** Social icons fade in after 1.5 seconds delay
**And** Animations use cubic-bezier(0.4, 0, 0.2, 1) easing
**And** On subsequent page loads (return visitors), all elements appear immediately (no delay)
**And** User preference is stored in sessionStorage (non-sensitive)
**And** Animations respect prefers-reduced-motion setting
**And** Content is accessible to screen readers immediately (no ARIA delays)

---

### Story 2.6: Optimize Homepage Performance for LCP <2.5s

As a visitor,
I want the homepage to load instantly with hero image appearing in under 2.5 seconds,
So that I get an immediate "wow" impression without waiting.

**Acceptance Criteria:**

**Given** I visit the homepage on desktop with good connection
**When** The page loads
**Then** Largest Contentful Paint (LCP) occurs in <2.5 seconds
**And** Time-adaptive background image is optimized (<100KB)
**And** Background image uses Next.js Image with priority loading
**And** Fonts are preloaded and optimized via next/font
**And** Critical CSS is inlined in the document head
**And** JavaScript bundle is code-split and loads asynchronously
**And** Cumulative Layout Shift (CLS) is <0.1
**And** First Input Delay (FID) is <100ms
**And** Lighthouse Performance Score is 90+
**And** On mobile 3G connection, LCP is <3 seconds

---

## Epic 3: Responsive Masonry Gallery Browsing

Visitors can browse wildlife photography in beautiful, responsive masonry layouts (Color/B&W categories) with smooth infinite scroll and effortless performance

### Story 3.1: Create Gallery Page Routes for Color and B&W Categories

As a visitor,
I want to navigate to separate Color and B&W gallery pages,
So that I can browse photography organized by category.

**Acceptance Criteria:**

**Given** The Next.js App Router is configured
**When** I create routes `/gallery/color` and `/gallery/bw`
**Then** Both routes render gallery page components
**And** Color gallery route (`/app/gallery/color/page.tsx`) exists
**And** B&W gallery route (`/app/gallery/bw/page.tsx`) exists
**And** Both pages are statically generated at build time
**And** Both pages have unique page titles and meta descriptions
**And** Navigation from homepage to galleries works correctly
**And** Browser back button returns to homepage
**And** URLs are clean with trailing slashes: `/gallery/color/`, `/gallery/bw/`

---

### Story 3.2: Implement Responsive Masonry Layout Component

As a visitor,
I want to see images arranged in a masonry layout that adapts to my screen size,
So that I can browse photography efficiently on any device.

**Acceptance Criteria:**

**Given** I am viewing a gallery page
**When** The page loads on different devices
**Then** The masonry layout displays:
- Desktop (1024px+): 3-4 columns
- Tablet (768px-1023px): 2-3 columns
- Mobile (<768px): 1 column
**And** Images maintain their natural aspect ratios (no forced cropping)
**And** Column gaps are consistent: 16px mobile, 24px desktop
**And** Layout uses React-Masonry-CSS library with Tailwind classes
**And** No horizontal scrolling occurs at any breakpoint
**And** Layout reflows smoothly when viewport resizes
**And** Empty gallery state shows friendly message: "Gallery coming soon"
**And** Component is reusable for both Color and B&W galleries

---

### Story 3.3: Implement Image Loading with Skeleton Placeholders

As a visitor,
I want to see placeholder skeletons while images load,
So that I understand content is loading and experience no layout shift.

**Acceptance Criteria:**

**Given** I navigate to a gallery page
**When** Images are loading
**Then** Skeleton placeholders appear immediately in masonry layout
**And** Skeletons maintain aspect ratio of expected images
**And** Skeletons have gradient pulse animation (neutral-200 to neutral-100, 1.5s loop)
**And** When image loads, it crossfades in (300ms fade transition)
**And** No layout shift occurs (CLS <0.1)
**And** Skeleton color is neutral-200 (subtle, not distracting)
**And** Images outside viewport are lazy-loaded
**And** Animation respects prefers-reduced-motion (static placeholder if reduced motion preferred)

---

### Story 3.4: Implement Infinite Scroll with Intersection Observer

As a visitor,
I want the gallery to load more images as I scroll,
So that I can browse the entire collection without pagination clicks.

**Acceptance Criteria:**

**Given** I am viewing a gallery with more images than initially loaded
**When** I scroll down and approach the bottom of the gallery
**Then** The next batch of images begins loading when I'm 2 rows from the bottom
**And** Intersection Observer API detects when to load more images
**And** Loading indicator appears during fetch (spinner or skeleton row)
**And** New images are appended to the masonry layout smoothly
**And** Scroll position is maintained (no jump to top)
**And** Initial load shows 12-20 images (balance between performance and content)
**And** Subsequent loads add 12 images per batch
**And** When all images are loaded, no further loading occurs
**And** Scroll performance maintains 60fps (no lag or stutter)

---

### Story 3.5: Optimize Gallery Images for Responsive Delivery

As a visitor,
I want images optimized for my device and connection speed,
So that the gallery loads quickly without sacrificing visual quality.

**Acceptance Criteria:**

**Given** I am viewing gallery images on different devices
**When** Images are served
**Then** Next.js Image component delivers appropriately sized images:
- Mobile (<768px): <200KB, 800px wide
- Tablet (768-1023px): <350KB, 1200px wide
- Desktop (1024px+): <500KB, 1600px wide
**And** Images use modern formats (WebP with JPEG fallback)
**And** Images are served from Vercel Blob Storage CDN
**And** Lazy loading is enabled for off-screen images
**And** Priority loading for first 6 images (above fold)
**And** Alt text is descriptive: "[Species] in [habitat], [location]"
**And** Images have explicit width/height to prevent CLS
**And** Blur placeholder loads while high-res image fetches

---

### Story 3.6: Add Hover States and Click Interaction to Gallery Images

As a visitor,
I want visual feedback when I hover over or tap gallery images,
So that I know they are interactive and can be viewed full-screen.

**Acceptance Criteria:**

**Given** I am viewing a gallery page
**When** I hover over an image (desktop)
**Then** Image scales slightly (scale 1.02) with 300ms transition
**Or** A subtle border highlight appears (forest-500 for Color, savanna-500 for B&W, 2px)
**And** Cursor changes to pointer
**And** Transform uses GPU acceleration (transform, not width/height)
**When** I click/tap an image
**Then** The lightbox opens with the full-screen image (handled in Epic 4)
**And** Keyboard focus is visible (forest-500 outline, 2px solid, 2px offset)
**And** Tab key allows navigation through images
**And** Enter key opens lightbox for focused image
**And** On mobile, tap feedback is immediate (<100ms)

---

### Story 3.7: Implement Calm Scroll Physics for Gallery

As a visitor,
I want scrolling to feel smooth and natural like "walking through nature",
So that browsing the gallery is a calming, enjoyable experience.

**Acceptance Criteria:**

**Given** I am scrolling through a gallery
**When** I use mouse wheel, trackpad, or touch to scroll
**Then** Scroll behavior has momentum-based easing
**And** Deceleration uses cubic-bezier(0.4, 0, 0.2, 1) easing
**And** No sudden stops or jarring movements
**And** Scroll animations are CSS-based for 60fps performance
**And** On mobile, scroll feels natural with iOS/Android native physics
**And** Scroll performance doesn't degrade with 100+ images loaded
**And** Intersection Observer efficiently manages visibility
**And** Respects prefers-reduced-motion (instant scroll if reduced motion preferred)

---

### Story 3.8: Add Gallery Category Differentiation with Color Accents

As a visitor,
I want to visually distinguish Color and B&W galleries,
So that I know which category I'm browsing.

**Acceptance Criteria:**

**Given** I am viewing either the Color or B&W gallery
**When** The page loads
**Then** Color gallery uses forest green accents:
- Page title color: text-forest-600
- Hover borders: border-forest-500
- Focus rings: outline-forest-500
**And** B&W gallery uses savanna ochre accents:
- Page title color: text-savanna-600
- Hover borders: border-savanna-500
- Focus rings: outline-savanna-500
**And** Gallery title appears at top: "Color Gallery" or "Black & White Gallery"
**And** Title uses Cormorant Garamond serif font (24px)
**And** Navigation link to switch galleries is visible
**And** Background remains consistent neutral-50
**And** Accents are subtle, not overwhelming the photography

---

## Epic 4: Full-Screen Image Lightbox & Behind-the-Lens Storytelling

Visitors can view images in full-screen lightbox and discover behind-the-lens metadata (camera settings, location, stories) for deeper appreciation

### Story 4.1: Create Full-Screen Image Lightbox Component

As a visitor,
I want to click a gallery image and view it full-screen in a lightbox,
So that I can appreciate the photography without distractions.

**Acceptance Criteria:**

**Given** I am viewing a gallery page
**When** I click on an image
**Then** A full-screen lightbox opens with:
- Black background overlay (rgba(0,0,0,0.95))
- Image centered and sized to fit viewport (max 90vw x 90vh)
- Close button (X) in top-right corner (48x48px tap target)
- Previous/Next navigation arrows
**And** Lightbox opens with scale + fade animation (400ms)
**And** Body scroll is locked when lightbox is open
**And** Click outside image closes lightbox
**And** ESC key closes lightbox
**And** Close animation is faster (300ms)
**And** Focus is trapped within lightbox
**And** Focus returns to triggering image when closed

---

### Story 4.2: Implement Lightbox Keyboard Navigation

As a visitor,
I want to navigate between images using keyboard arrows,
So that I can browse the full collection in lightbox view.

**Acceptance Criteria:**

**Given** The lightbox is open with an image displayed
**When** I press the Right Arrow key
**Then** The next image in the gallery loads
**And** Image transitions with crossfade (300ms)
**When** I press the Left Arrow key
**Then** The previous image loads
**And** At the first image, Left Arrow does nothing (or loops to last)
**And** At the last image, Right Arrow does nothing (or loops to first)
**And** Image counter displays: "5 of 47"
**And** All keyboard navigation works without mouse
**And** Tab key navigates through lightbox controls (Close, Prev, Next)
**And** Screen reader announces image changes

---

### Story 4.3: Add Zoom Functionality to Lightbox Images

As a visitor,
I want to zoom into lightbox images for detailed viewing,
So that I can examine photography closely.

**Acceptance Criteria:**

**Given** The lightbox is open with an image displayed
**When** I press the Z key or double-click the image
**Then** Image zooms to 2x scale
**And** Mouse drag pans the zoomed image
**And** Cursor changes to grab/grabbing during pan
**And** Pressing Z again or double-clicking zooms out
**And** Zoom is smooth with 300ms transition
**And** On mobile, pinch gesture zooms in/out
**And** On mobile, two-finger drag pans
**And** Zoom state resets when navigating to different image
**And** Zoom respects image boundaries (no excessive whitespace)

---

### Story 4.4: Implement Mobile Swipe Gestures for Lightbox

As a mobile visitor,
I want to swipe left/right to navigate between images in the lightbox,
So that I can browse naturally on touch devices.

**Acceptance Criteria:**

**Given** The lightbox is open on a mobile device
**When** I swipe left on the image
**Then** The next image loads with slide transition
**When** I swipe right on the image
**Then** The previous image loads with slide transition
**When** I swipe down on the image
**Then** The lightbox closes
**And** Swipe gestures feel responsive (<50ms delay)
**And** Minimum swipe distance is 50px to trigger action
**And** Swipe velocity affects transition speed
**And** Touch feedback is immediate (image follows finger during swipe)
**And** Swipe conflicts with zoom/pan are handled (zoom takes precedence)

---

### Story 4.5: Create Behind-the-Lens Metadata Component

As a photography enthusiast,
I want to view camera settings and story details for each photograph,
So that I can learn technical details and context.

**Acceptance Criteria:**

**Given** The lightbox is open with an image
**When** I click the info button ("i" icon) or press the I key
**Then** A metadata panel slides up from the bottom with:
- **Technical Section**: Camera model, ISO, aperture, shutter speed, lens
- **Context Section**: Location, date taken, shooting conditions
- **Story Section**: Behind-the-lens narrative describing the moment
**And** Panel uses JetBrains Mono font for technical data (12px)
**And** Panel background is semi-transparent dark (rgba(0,0,0,0.8))
**And** Panel animation is slide-up (300ms)
**And** Clicking outside panel or pressing I again closes it
**And** Panel is scrollable if content exceeds viewport height
**And** On desktop, panel is bottom-anchored
**And** On mobile, panel can be swiped down to close

---

### Story 4.6: Implement Metadata Hover Preview in Gallery

As a visitor,
I want to preview metadata when hovering over gallery images,
So that I can discover stories without opening the lightbox.

**Acceptance Criteria:**

**Given** I am viewing a gallery page
**When** I hover over an image for 2+ seconds
**Then** A subtle metadata overlay appears on the image with:
- Camera settings (brief): ISO, aperture, shutter
- Location (brief)
**And** Overlay background is semi-transparent (rgba(0,0,0,0.6))
**And** Overlay fades in smoothly (300ms)
**And** Text is white for contrast
**And** Font is Inter sans, 14px
**And** Moving mouse away fades out overlay
**And** On mobile, long-press (500ms) triggers overlay
**And** Overlay doesn't interfere with click-to-lightbox action
**And** Overlay respects image boundaries (doesn't overflow)

---

### Story 4.7: Add React Error Boundaries for Lightbox Components

As a developer,
I want error boundaries around lightbox components,
So that lightbox failures don't crash the entire application.

**Acceptance Criteria:**

**Given** The lightbox component may encounter errors
**When** An error occurs (image load failure, component crash)
**Then** Error boundary catches the error
**And** User sees friendly error message: "Unable to display image"
**And** Close button remains functional
**And** Error is logged to console with stack trace
**And** User can close lightbox and continue browsing gallery
**And** Next image navigation still works if available
**And** Error doesn't break other gallery features
**And** Production error monitoring captures the error (if configured)

---

## Epic 5: SEO Optimization & Discoverability

Search engines can discover, crawl, and index the site perfectly, driving organic traffic through Google Search and Google Images

### Story 5.1: Create Centralized Metadata Factory Functions

As a developer,
I want centralized metadata generation functions for all pages,
So that SEO metadata is consistent and easy to maintain.

**Acceptance Criteria:**

**Given** I need to add metadata to multiple pages
**When** I create `src/lib/metadata.ts` with factory functions
**Then** The file exports functions:
- `generateHomepageMetadata()`: Returns metadata for homepage
- `generateGalleryMetadata(category)`: Returns metadata for Color/B&W galleries
- `generateImageMetadata(image)`: Returns metadata for individual images (future)
**And** Each function returns Next.js Metadata object with:
- `title`: Page-specific title
- `description`: SEO-optimized description
- `openGraph`: OG tags for social sharing
- `twitter`: Twitter Card tags
- `alternates`: Canonical URLs
**And** All metadata follows SEO best practices (55-60 char titles, 150-160 char descriptions)
**And** Functions are type-safe with TypeScript
**And** Functions are reusable across all page components

---

### Story 5.2: Implement Open Graph and Twitter Card Metadata

As a content owner,
I want rich preview cards when pages are shared on social media,
So that shared links are visually appealing and drive clicks.

**Acceptance Criteria:**

**Given** I share a page URL on social media
**When** The platform fetches metadata
**Then** Open Graph tags are present:
- `og:title`: Page title
- `og:description`: Page description
- `og:image`: Preview image (1200x630px)
- `og:url`: Canonical URL
- `og:type`: "website"
- `og:site_name`: "BMAD Wildlife Photography"
**And** Twitter Card tags are present:
- `twitter:card`: "summary_large_image"
- `twitter:title`: Page title
- `twitter:description`: Page description
- `twitter:image`: Preview image
**And** Preview images are optimized (<300KB)
**And** Testing with Facebook Debugger and Twitter Card Validator shows correct previews
**And** Each gallery has unique preview image

---

### Story 5.3: Generate XML Sitemap for Search Engine Crawling

As a content owner,
I want an automatically generated XML sitemap,
So that search engines can discover and index all pages efficiently.

**Acceptance Criteria:**

**Given** The site has multiple pages and galleries
**When** The site is built for production
**Then** An XML sitemap is generated at `/sitemap.xml`
**And** Sitemap includes all static routes:
- Homepage: `/`
- Color gallery: `/gallery/color/`
- B&W gallery: `/gallery/bw/`
**And** Each URL entry has:
- `<loc>`: Full URL
- `<lastmod>`: Last modification date
- `<changefreq>`: Update frequency ("weekly" for galleries)
- `<priority>`: Page priority (1.0 for homepage, 0.8 for galleries)
**And** Sitemap is accessible and valid XML
**And** Sitemap is referenced in `robots.txt`
**And** Google Search Console can successfully read the sitemap

---

### Story 5.4: Add JSON-LD Structured Data for Rich Results

As a content owner,
I want JSON-LD structured data on all pages,
So that search engines understand the site structure and display rich results.

**Acceptance Criteria:**

**Given** I need search engines to understand page content
**When** I add JSON-LD scripts to page components
**Then** Homepage includes Person schema:
- `@type`: "Person"
- `name`: Photographer name
- `jobTitle`: "Wildlife Photographer"
- `url`: Site URL
- `sameAs`: Social media profile URLs
**And** Gallery pages include ImageGallery schema:
- `@type`: "ImageGallery"
- `name`: Gallery name
- `description`: Gallery description
**And** Each image can have ImageObject schema (future):
- `@type`: "ImageObject"
- `contentUrl`: Image URL
- `description`: Alt text
- `author`: Photographer name
**And** Breadcrumb schema shows navigation:
- Home > Color Gallery
- Home > B&W Gallery
**And** All JSON-LD validates with Google's Rich Results Test

---

### Story 5.5: Optimize Images with Descriptive Alt Text for Accessibility and SEO

As a visitor using a screen reader or search engine,
I want every image to have descriptive alt text,
So that I can understand the image content.

**Acceptance Criteria:**

**Given** Images are displayed in galleries
**When** An image is rendered
**Then** Alt text follows the format: "[Species] in [habitat], [location]"
**And** Examples:
- "African elephant in savanna grasslands, Serengeti National Park"
- "Bengal tiger drinking water, Ranthambore, India"
- "Great gray owl perched on branch, Finnish Lapland"
**And** Alt text is descriptive but concise (100-125 characters)
**And** Alt text is stored in image metadata JSON
**And** No images have empty alt attributes
**And** Decorative images use `alt=""` (time-adaptive background)
**And** Screen readers read alt text correctly
**And** Google Images can index images with proper descriptions

---

### Story 5.6: Configure robots.txt for Search Engine Guidelines

As a content owner,
I want a robots.txt file that guides search engines,
So that they crawl the site efficiently and respect boundaries.

**Acceptance Criteria:**

**Given** Search engines need crawling instructions
**When** I create `/public/robots.txt`
**Then** The file contains:
```
User-agent: *
Allow: /
Sitemap: https://[domain]/sitemap.xml
```
**And** All pages are crawlable (no Disallow directives needed)
**And** Sitemap is referenced correctly
**And** File is accessible at root: `/robots.txt`
**And** Google Search Console respects the rules
**And** No sensitive paths are exposed (none exist in static site)

---

## Epic 6: Social Media Conversion & Analytics Tracking

Visitors can easily follow on Instagram/Facebook through playful firefly-animated icons, and site owner can track conversion rates and visitor behavior

### Story 6.1: Integrate Google Analytics 4 via @next/third-parties

As a content owner,
I want Google Analytics 4 tracking on all pages,
So that I can monitor visitor behavior, traffic sources, and engagement metrics.

**Acceptance Criteria:**

**Given** I need to track site analytics
**When** I install and configure `@next/third-parties`
**Then** GA4 is integrated in `src/app/layout.tsx` using `<GoogleAnalytics />` component
**And** GA4 Measurement ID is stored in environment variable: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
**And** Script loads asynchronously and doesn't block page rendering
**And** Tracking works on all pages (homepage, galleries)
**And** Basic pageview events are automatically tracked
**And** GA4 Real-time reporting shows active users
**And** @next/third-parties optimizes script loading for performance
**And** Analytics respect user privacy (no tracking before consent if required)

---

### Story 6.2: Track Social Media Link Clicks as Conversion Events

As a content owner,
I want to track when visitors click social media icons,
So that I can measure social conversion rates.

**Acceptance Criteria:**

**Given** GA4 is configured
**When** A visitor clicks Instagram or Facebook icon
**Then** A custom event is sent to GA4:
- Event name: `social_click`
- Parameters: `{ platform: 'instagram' }` or `{ platform: 'facebook' }`
**And** Event tracking uses `gtag()` function
**And** Events appear in GA4 Events report
**And** I can create conversions from these events in GA4
**And** Click tracking doesn't delay navigation (fires asynchronously)
**And** Tracking respects user's Do Not Track preferences
**And** Events are properly attributed to user sessions

---

### Story 6.3: Track Core Web Vitals Performance Metrics

As a content owner,
I want to monitor Core Web Vitals (LCP, CLS, FID) automatically,
So that I can ensure the site maintains high performance standards.

**Acceptance Criteria:**

**Given** The site is deployed and receiving traffic
**When** Visitors browse the site
**Then** Core Web Vitals are automatically tracked in GA4:
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID) / Interaction to Next Paint (INP)
**And** Next.js `web-vitals` library reports metrics to GA4
**And** Metrics are segmented by page (homepage vs galleries)
**And** I can view Web Vitals in GA4 custom reports
**And** Performance degradation triggers alerts (if configured)
**And** Metrics align with Google Search Console Core Web Vitals report

---

### Story 6.4: Set Up Error Monitoring and Alerting

As a developer,
I want critical errors captured and logged,
So that I can debug production issues quickly.

**Acceptance Criteria:**

**Given** The site may encounter errors in production
**When** A client-side error occurs
**Then** Error is caught by React Error Boundaries
**And** Error details are logged to browser console with stack trace
**And** Error includes:
- Error message
- Component stack
- User agent
- Page URL
**And** (Optional) Errors can be sent to external monitoring (Sentry, LogRocket)
**And** Critical errors don't crash the entire application
**And** User sees friendly error messages, not raw stack traces
**And** Error monitoring respects user privacy (no PII captured)

---

### Story 6.5: Create Analytics Dashboard Configuration in GA4

As a content owner,
I want a custom GA4 dashboard for wildlife photography portfolio metrics,
So that I can quickly see key performance indicators.

**Acceptance Criteria:**

**Given** GA4 is tracking site data
**When** I create a custom dashboard in GA4
**Then** The dashboard includes widgets for:
- **Traffic Sources**: Organic search vs direct vs social
- **Pageviews by Page**: Homepage vs Color vs B&W galleries
- **Social Conversions**: Instagram and Facebook click counts
- **Core Web Vitals**: LCP, CLS, FID averages
- **User Engagement**: Session duration, bounce rate
- **Google Images Traffic**: Organic image search referrals
**And** Dashboard auto-refreshes with latest data
**And** Dashboard is shareable with stakeholders
**And** Custom reports can be exported to PDF/CSV

---

## Epic 7: Automated Image Management Pipeline

Content owner can upload images to Google Drive, and the system automatically syncs, optimizes, and deploys them to the live site without manual intervention

### Story 7.1: Design Image Metadata JSON Schema

As a developer,
I want a standardized JSON schema for image metadata,
So that the sync pipeline and frontend consume data consistently.

**Acceptance Criteria:**

**Given** I need to store image metadata
**When** I design the JSON schema
**Then** The schema structure is:
```json
{
  "images": [
    {
      "id": "unique-id",
      "filename": "elephant-savanna-001.jpg",
      "category": "color" | "bw",
      "url": "https://blob.vercel-storage.com/...",
      "width": 1600,
      "height": 1200,
      "alt": "African elephant in savanna grasslands, Serengeti",
      "metadata": {
        "camera": "Canon EOS R5",
        "iso": 400,
        "aperture": "f/5.6",
        "shutter": "1/1000s",
        "lens": "RF 100-500mm f/4.5-7.1L IS USM",
        "location": "Serengeti National Park, Tanzania",
        "dateTaken": "2024-06-15",
        "story": "Behind-the-lens narrative..."
      },
      "timeOfDay": "dawn" | "midday" | "dusk" | "night",
      "createdAt": "2024-01-20T10:00:00Z"
    }
  ]
}
```
**And** Schema is documented in `README.md`
**And** TypeScript types are generated from schema
**And** Schema supports all required metadata fields
**And** Schema is versioned for future changes

---

### Story 7.2: Create GitHub Actions Workflow for Image Sync

As a content owner,
I want a GitHub Actions workflow that syncs images from Google Drive to Vercel Blob Storage,
So that image updates are automated.

**Acceptance Criteria:**

**Given** Images are organized in Google Drive folders
**When** The GitHub Actions workflow runs
**Then** The workflow:
- Authenticates with Google Drive API
- Scans folders: `/Color` and `/BW`
- Downloads new/updated images
- Uploads to Vercel Blob Storage
- Generates `images.json` with metadata
- Commits `images.json` to repository
- Triggers Vercel deployment
**And** Workflow runs on schedule (daily at 2am UTC)
**And** Workflow can be triggered manually via GitHub UI
**And** Workflow includes retry logic (3 attempts) for transient failures
**And** Workflow logs are clear and debuggable
**And** Secrets (Google Drive API key, Vercel token) are stored securely
**And** Workflow completes within 10 minutes for 50 images

---

### Story 7.3: Implement Image Optimization During Sync

As a content owner,
I want images automatically optimized during sync,
So that they load quickly without manual compression.

**Acceptance Criteria:**

**Given** Original images are uploaded to Google Drive
**When** The sync pipeline processes images
**Then** Each image is optimized:
- Converted to WebP format (with JPEG fallback)
- Compressed to target sizes:
  - Mobile: <200KB, 800px wide
  - Desktop: <500KB, 1600px wide
- EXIF data is preserved for metadata extraction
- Original aspect ratio is maintained
**And** Optimization uses Sharp library (Node.js)
**And** Optimization is lossless or near-lossless quality
**And** Optimized images are uploaded to Vercel Blob Storage
**And** Original images remain in Google Drive untouched
**And** Optimization performance: <2 seconds per image

---

### Story 7.4: Extract EXIF Metadata from Images

As a content owner,
I want camera settings automatically extracted from image EXIF data,
So that I don't have to manually enter technical details.

**Acceptance Criteria:**

**Given** Images contain EXIF metadata
**When** The sync pipeline processes images
**Then** EXIF data is extracted:
- Camera model
- ISO
- Aperture (f-stop)
- Shutter speed
- Lens
- Date taken
- GPS coordinates (if available)
**And** Extraction uses `exif-parser` or `exifr` library
**And** Extracted data is added to `images.json` metadata
**And** Missing EXIF fields gracefully default to null
**And** Manual overrides can be provided via companion CSV/JSON file
**And** EXIF extraction handles corrupt data without failing

---

### Story 7.5: Implement Manual Metadata Override via CSV

As a content owner,
I want to provide additional metadata (location, story) via CSV file,
So that I can add details not available in EXIF data.

**Acceptance Criteria:**

**Given** I want to add location and story details
**When** I upload `metadata.csv` to Google Drive alongside images
**Then** The sync pipeline reads the CSV with columns:
- `filename`: Image filename
- `location`: Location description
- `story`: Behind-the-lens narrative
- `timeOfDay`: dawn | midday | dusk | night (for homepage background)
**And** CSV data merges with EXIF data in `images.json`
**And** Manual metadata overrides EXIF where conflicts exist
**And** Missing CSV entries use EXIF-only data
**And** CSV parsing is robust (handles quotes, commas in text)
**And** Invalid CSV triggers warning but doesn't fail entire sync

---

### Story 7.6: Trigger Static Site Regeneration After Image Sync

As a content owner,
I want the site to automatically rebuild and deploy after image sync,
So that new images appear live without manual intervention.

**Acceptance Criteria:**

**Given** The image sync workflow has completed successfully
**When** `images.json` is committed to the repository
**Then** Vercel detects the commit and triggers a new deployment
**And** Next.js rebuilds all static pages with updated image data
**And** New images appear in galleries within 5 minutes of sync completion
**And** Deployment uses zero-downtime strategy (no site outage)
**And** Failed deployments automatically roll back
**And** Deployment status is visible in Vercel dashboard
**And** GitHub Actions workflow logs include Vercel deployment URL

---

## Epic 8: Quality Assurance & Testing Framework

All critical user paths are tested automatically, ensuring zero regressions and maintaining high quality standards before every deployment

### Story 8.1: Configure Playwright for End-to-End Testing

As a developer,
I want Playwright E2E testing framework configured,
So that I can write and run tests for critical user paths.

**Acceptance Criteria:**

**Given** The Next.js project needs E2E testing
**When** I install and configure Playwright
**Then** Playwright is installed: `npm install -D @playwright/test`
**And** Configuration file `playwright.config.ts` exists with:
- Base URL: `http://localhost:3000`
- Browsers: Chromium, Firefox, WebKit
- Retries: 2 attempts for flaky tests
- Screenshot on failure: enabled
- Video on failure: enabled
**And** Test directory structure exists: `/tests/e2e/`
**And** Running `npx playwright test` executes all tests
**And** Tests can run in headed mode for debugging: `npx playwright test --headed`
**And** Playwright inspector works for debugging: `npx playwright test --debug`

---

### Story 8.2: Write E2E Tests for Homepage User Journey

As a developer,
I want E2E tests for the homepage experience,
So that critical homepage features don't regress.

**Acceptance Criteria:**

**Given** Playwright is configured
**When** I write homepage tests in `/tests/e2e/homepage.spec.ts`
**Then** Tests cover:
- Homepage loads successfully (200 status)
- Photographer name is visible
- Navigation links (Color Gallery, B&W Gallery) are present
- Time-adaptive background image loads
- Social media icons are visible and clickable
- Clicking "Color Gallery" navigates to `/gallery/color`
- Clicking "B&W Gallery" navigates to `/gallery/bw`
- Keyboard navigation works (Tab, Enter)
**And** All tests pass consistently (90%+ pass rate)
**And** Tests run in <30 seconds total
**And** Tests use page object pattern for maintainability

---

### Story 8.3: Write E2E Tests for Gallery Browsing Journey

As a developer,
I want E2E tests for gallery browsing,
So that masonry layout and infinite scroll don't regress.

**Acceptance Criteria:**

**Given** Playwright is configured
**When** I write gallery tests in `/tests/e2e/gallery.spec.ts`
**Then** Tests cover:
- Gallery page loads successfully
- Masonry layout renders correctly
- Images load with skeleton placeholders
- Infinite scroll triggers on scroll
- Hover states work on images
- Clicking image opens lightbox
- Gallery title displays correct category
- Navigation back to homepage works
**And** Tests validate responsive behavior (mobile, tablet, desktop)
**And** Tests verify accessibility (keyboard navigation, focus rings)
**And** All tests pass consistently

---

### Story 8.4: Write E2E Tests for Lightbox Interaction Journey

As a developer,
I want E2E tests for lightbox functionality,
So that full-screen viewing and navigation don't regress.

**Acceptance Criteria:**

**Given** Playwright is configured
**When** I write lightbox tests in `/tests/e2e/lightbox.spec.ts`
**Then** Tests cover:
- Clicking gallery image opens lightbox
- Lightbox displays full-screen image
- Close button closes lightbox
- ESC key closes lightbox
- Left/Right arrow keys navigate images
- Image counter displays correctly
- Metadata panel opens and displays data
- Zoom functionality works (Z key)
**And** Tests verify mobile swipe gestures work
**And** Tests verify focus management and accessibility
**And** All tests pass consistently

---

### Story 8.5: Add Visual Regression Testing for Critical Pages

As a developer,
I want visual regression tests to catch unintended UI changes,
So that design consistency is maintained across deployments.

**Acceptance Criteria:**

**Given** Playwright supports screenshot comparison
**When** I add visual tests to E2E suites
**Then** Baseline screenshots are captured for:
- Homepage (desktop and mobile)
- Color gallery page (desktop and mobile)
- B&W gallery page (desktop and mobile)
- Lightbox view (desktop and mobile)
**And** Tests compare new screenshots against baselines
**And** Pixel differences >1% fail the test
**And** Failed visual tests generate diff images
**And** Baselines are stored in `/tests/e2e/screenshots/`
**And** Visual tests can be updated when intentional changes occur: `npx playwright test --update-snapshots`

---

### Story 8.6: Integrate E2E Tests into CI/CD Pipeline

As a developer,
I want E2E tests to run automatically on every pull request,
So that regressions are caught before merging.

**Acceptance Criteria:**

**Given** GitHub Actions CI/CD is configured
**When** A pull request is created
**Then** GitHub Actions workflow runs:
- Install dependencies
- Build production site
- Run Playwright E2E tests
- Upload test results and screenshots as artifacts
**And** PR is blocked from merging if tests fail
**And** Test results are visible in PR checks
**And** Failed tests show screenshots and videos for debugging
**And** Tests run in parallel across browsers for speed
**And** Workflow completes within 10 minutes
**And** Flaky tests retry automatically (max 2 retries)

---

## Epic 9: Photographer About Page & Professional Identity

Visitors can learn about the photographer's background, expertise, and passion for wildlife conservation through an elegant About page that builds credibility and trust

### Story 9.1: Create About Page with Photographer Bio and Story

As a visitor,
I want to learn about the photographer's background and passion for wildlife,
So that I can connect with the person behind the camera and understand their expertise.

**Acceptance Criteria:**

**Given** I navigate to `/about` from the homepage or gallery navigation
**When** The page loads
**Then** I see an About page with:
- Page title: "About [Photographer Name]"
- Professional bio section (150-200 words) describing:
  - Background in wildlife photography
  - Geographic regions and ecosystems of expertise (Serengeti, tropical forests, wetlands)
  - Photography philosophy and approach
  - Passion for conservation and wildlife education
- Professional portrait image (photographer in the field or with equipment)
- Consistent with homepage design system:
  - Matte nature color palette (forest green accents)
  - Cormorant Garamond serif headings
  - Inter sans body text
  - Generous whitespace (48-96px between sections)
  - Warm off-white background (neutral-50: #faf9f7)
**And** The layout is responsive across all breakpoints (320px-2560px)
**And** Text maintains WCAG AA contrast ratios (4.5:1 minimum)
**And** Navigation back to homepage is visible

---

### Story 9.2: Add Equipment and Technical Approach Section

As a photography enthusiast,
I want to see what equipment and techniques the photographer uses,
So that I can learn from their technical approach and understand their expertise level.

**Acceptance Criteria:**

**Given** I am viewing the About page
**When** I scroll to the Equipment section
**Then** I see a well-organized section titled "Equipment & Approach" with:
- **Primary Camera Bodies:** List of main camera systems used (e.g., Canon EOS R5, Nikon Z9)
- **Lenses:** Key lenses for wildlife photography (e.g., telephoto zooms, primes)
- **Field Approach:** Brief description of fieldwork methodology:
  - Patience and ethical wildlife observation practices
  - Understanding of animal behavior and ecosystems
  - Commitment to minimal disturbance of natural habitats
- Clean, readable typography using Inter sans font (18px)
- Subtle forest green color accents for section headings
- Equipment presented as simple list, not overly technical
**And** Section uses icons or subtle visual elements (not overwhelming)
**And** Content reinforces expertise and professional credibility
**And** Mobile layout stacks equipment categories vertically for readability

---

### Story 9.3: Add Conservation and Mission Statement

As an environmentally-conscious visitor,
I want to understand the photographer's commitment to conservation,
So that I can feel good about supporting their work and potentially following their mission.

**Acceptance Criteria:**

**Given** I am viewing the About page
**When** I scroll to the Conservation section
**Then** I see a section titled "Conservation & Mission" with:
- Brief mission statement about wildlife conservation and education
- Commitment to ethical wildlife photography practices
- Statement about supporting conservation organizations or initiatives (if applicable)
- Vision for using photography to raise awareness and inspire protection of natural habitats
- Text formatted with Cormorant Garamond headings and Inter body text
- Forest green accent color for section heading
- 2-3 paragraphs maximum (keep concise and impactful)
**And** Tone is passionate but not preachy
**And** Content builds emotional connection and shared values with visitors
**And** Optional: Links to partner conservation organizations (if applicable)

---

### Story 9.4: Implement Glassmorphism Design Elements from Homepage

As a visitor,
I want the About page to visually align with the homepage aesthetic,
So that the experience feels cohesive and professionally designed.

**Acceptance Criteria:**

**Given** The homepage uses glassmorphism effects and time-adaptive backgrounds
**When** I view the About page
**Then** The page incorporates similar design elements:
- Option A: Subtle background image (wildlife themed, low opacity 20-30%)
- Option B: Clean minimal background with glassmorphism card containers for content sections
- Backdrop blur effects on content containers (backdrop-blur-md)
- Semi-transparent white backgrounds (bg-white/10 or bg-white/80)
- Subtle borders (border-white/20)
- Shadow effects for depth (shadow-2xl)
- Smooth fade-in animations for content sections (fade-in 600ms)
**And** Design doesn't overpower the text content
**And** Maintains readability and accessibility (WCAG AA compliance)
**And** Responsive across all devices
**And** Consistent transition animations (cubic-bezier(0.4, 0, 0.2, 1))

---

### Story 9.5: Add Social Media and Contact Section

As a potential collaborator or client,
I want to easily contact the photographer or follow on social media,
So that I can connect for inquiries, collaborations, or stay updated.

**Acceptance Criteria:**

**Given** I am viewing the About page
**When** I scroll to the bottom of the page
**Then** I see a "Connect" section with:
- Social media icons (Instagram, Facebook) with same firefly animations from homepage
- Email contact link with subtle icon
- Optional: Link to professional networks (LinkedIn) if applicable
- Icons are 48x48px minimum tap targets
- Hover states with gentle floating animation (translateY -4px to -8px, 3s ease-in-out)
- Consistent with homepage social icon styling
- Descriptive aria-labels: "Follow on Instagram", "Follow on Facebook", "Send email"
**And** Links open in new tabs (target="_blank" with rel="noopener noreferrer")
**And** Email link uses mailto: protocol
**And** Animation respects prefers-reduced-motion setting
**And** Icons maintain forest green accent color theme

---

### Story 9.6: Add About Page to Site Navigation

As a visitor,
I want to easily navigate to the About page from anywhere on the site,
So that I can learn about the photographer when I'm interested.

**Acceptance Criteria:**

**Given** I am on any page of the site (homepage, galleries)
**When** I view the navigation
**Then** I see an "About" link in the main navigation:
- Homepage: "About" link added to navigation bar alongside "Color Gallery" and "Black & White Gallery"
- Gallery pages: "About" link visible in navigation header
- Link uses consistent styling:
  - Forest-500 color accent
  - Hover underline animation
  - Keyboard accessible (focus ring visible)
  - Active state indication when on About page
**And** Clicking "About" navigates to `/about` route
**And** About page has "Back to Home" or "Back to Gallery" navigation
**And** Breadcrumb pattern visible: Home > About
**And** Navigation is responsive across all breakpoints
**And** Touch target is minimum 44x44px on mobile

---

### Story 9.7: Optimize About Page for SEO and Social Sharing

As a content owner,
I want the About page properly optimized for search engines and social sharing,
So that people can discover and share information about the photographer.

**Acceptance Criteria:**

**Given** The About page exists at `/about`
**When** Search engines crawl the page
**Then** SEO metadata is properly configured:
- Page title: "About [Photographer Name] | Wildlife Photographer"
- Meta description: 150-160 character description of photographer and expertise
- Open Graph tags:
  - og:title: About page title
  - og:description: About page description
  - og:image: Professional portrait or representative image (1200x630px)
  - og:url: Canonical URL
  - og:type: "profile"
- Twitter Card tags:
  - twitter:card: "summary"
  - twitter:title: About page title
  - twitter:description: About page description
  - twitter:image: Portrait image
- JSON-LD Person schema:
  - @type: "Person"
  - name: Photographer name
  - jobTitle: "Wildlife Photographer"
  - url: Site URL
  - sameAs: Social media profile URLs
  - knowsAbout: ["Wildlife Photography", "Conservation", specific ecosystems]
**And** About page is included in XML sitemap
**And** Semantic HTML5 markup used (header, main, section, article)
**And** All images have descriptive alt text

---

### Story 9.8: Add Professional Achievements and Recognition (Optional)

As a visitor evaluating the photographer's credentials,
I want to see awards, publications, or notable achievements,
So that I can understand their professional standing and expertise.

**Acceptance Criteria:**

**Given** The photographer has notable achievements (awards, publications, exhibitions)
**When** I view the About page
**Then** I see an optional "Recognition" section with:
- Photography awards or competitions (if applicable)
- Published work in magazines or websites (if applicable)
- Exhibition history (if applicable)
- Notable clients or collaborations (if applicable)
- Presented as simple, humble list (not boastful)
- Uses Inter sans font, 16-18px
- Subtle forest green accents
- Maximum 5-7 items (only significant achievements)
**And** Section is skipped entirely if no significant achievements yet
**And** Tone remains humble and focused on the work, not ego
**And** Layout is clean and doesn't overwhelm the bio narrative

---

**Epic 9 Summary:**

This epic adds a professional About page that builds credibility, trust, and emotional connection with visitors. It supports multiple user journeys:
- Personal network visitors (Sarah Chen) validating professionalism
- Photography enthusiasts (Marcus Rodriguez) learning about approach and expertise
- Safari seekers (Lisa & Tom Anderson) evaluating field experience and credibility
- Print buyers (James Patterson) building confidence in the photographer's authenticity

The About page reinforces the distinctive design system while providing essential context that converts casual visitors into engaged followers and future clients.

**FRs enabled:** Credibility building, social conversion, conservation values communication
**NFRs addressed:** NFR21-29 (accessibility), NFR36 (navigation clarity), SEO optimization
**Design alignment:** Matte nature palette, glassmorphism, Cormorant Garamond + Inter typography, calm aesthetic

---

### Story 9.9: Implement About Page with Nature Pattern Background

As a developer,
I want to implement the About page based on the approved design mockup,
So that visitors can learn about the photographer's story and mission.

**Acceptance Criteria:**

**Given** The about-page-preview.html design has been approved
**When** I implement the About page at `/about`
**Then** The page includes:
- Nature-inspired background pattern (birds, flowers, butterflies)
  - Background image: nature-birds-pattern.png
  - Background size: 1000px auto (maintaining aspect ratio)
  - Background repeat: repeat (tiles both directions)
  - Semi-transparent white overlay (40% opacity) to lighten pattern
- Sticky header navigation matching gallery pages
  - Site title on left
  - Navigation links: "Color Gallery", "Black & White Gallery", "About" (active)
  - Forest green hover animations
  - Backdrop blur effect
**And** Hero section with elephant illustration background:
  - White background with hero-elephant-bg.png positioned bottom-right
  - Circular profile photo (240px diameter, forest green border, box shadow)
  - Photographer name in Cormorant Garamond serif (48px)
  - Subtitle: "Wildlife Photographer & Conservationist" in Inter sans (20px)
  - Minimum height: 500px
**And** Three full-width photo strips (400px height each) between content sections
**And** Content sections with:
  - Max-width: 900px, centered
  - Padding: 96px 24px
  - White background
  - Forest green section headings (Cormorant Garamond, 36px)
  - Body text in Inter sans (18px, 1.8 line-height)
**And** All styling uses CSS variables from design system:
  - --forest-500, --forest-600, --forest-700
  - --neutral-50, --neutral-600, --neutral-800
  - --font-serif, --font-sans
**And** Page maintains z-index layering (background pattern < overlay < content)

---

### Story 9.10: Implement Bio and Story Content Section

As a visitor,
I want to read the photographer's background and story,
So that I can connect with their passion and expertise.

**Acceptance Criteria:**

**Given** I am viewing the About page after the hero section
**When** I scroll to the first content section
**Then** I see the "My Story" section with:
- Section heading: "My Story" in forest green (#5a8a6d)
- Three paragraphs of bio content covering:
  - Decade of wildlife photography experience
  - Geographic regions (Serengeti, Costa Rica, etc.)
  - Photography philosophy (patience, respect, ethical practices)
  - Conservation commitment
- Text formatting:
  - 18px Inter sans font
  - 1.8 line-height
  - Neutral-600 color (#6b645d)
  - 20px margin between paragraphs
**And** Section has white background with proper z-index above pattern
**And** Content is centered with max-width 900px
**And** Generous padding (96px top/bottom, 24px left/right)

---

### Story 9.11: Implement Equipment and Approach Section

As a photography enthusiast,
I want to see the photographer's equipment and field approach,
So that I can learn from their technical expertise.

**Acceptance Criteria:**

**Given** I am viewing the About page
**When** I scroll to the Equipment & Approach section
**Then** I see:
- Section heading: "Equipment & Approach" in forest green
- Introductory paragraph about gear and ethical approach
- Three subsections with custom bullet styling:
  - **Primary Camera Bodies** (Canon EOS R5, Nikon Z9, Sony A1)
  - **Lenses** (telephoto zooms, primes with specific models)
  - **Field Approach** (patience, ethics, ecosystem understanding)
- List styling:
  - No default bullets (list-style: none)
  - Custom forest green bullet points (•) positioned absolutely
  - 16px Inter sans font
  - 8px vertical padding per item
  - 24px left padding for text
**And** Subsection headings are 18px, semi-bold, neutral-800 color
**And** Content follows same max-width and padding as other sections

---

### Story 9.12: Implement Conservation Mission Section

As an environmentally-conscious visitor,
I want to understand the photographer's conservation commitment,
So that I can align with their values and mission.

**Acceptance Criteria:**

**Given** I am viewing the About page
**When** I scroll to the Conservation & Mission section
**Then** I see:
- Section heading: "Conservation & Mission" in forest green
- Three paragraphs covering:
  - Mission statement (using photography for conservation)
  - Ethical practices commitment (never disturbing wildlife)
  - Partnerships and advocacy efforts
- First paragraph includes bold emphasis on "My mission is simple:"
- Text maintains same styling as other content sections (18px, 1.8 line-height)
- Tone is passionate but professional
**And** Section positioned after photo strip 3
**And** White background with proper spacing

---

### Story 9.13: Implement Connect Section with Social Icons

As a visitor,
I want to connect with the photographer on social media or email,
So that I can follow their work and stay in touch.

**Acceptance Criteria:**

**Given** I am viewing the About page
**When** I scroll to the bottom Connect section
**Then** I see:
- Light green background (forest-100: #e3ede7)
- Section heading: "Let's Connect" (Cormorant Garamond, 36px, forest-700)
- Subtitle paragraph explaining connection options
- Three social media icons in a row:
  - Instagram (with icon SVG)
  - Facebook (with icon SVG)
  - Email (with icon SVG)
- Icon styling:
  - 60px x 60px circular buttons
  - White background with forest-500 border (2px)
  - Centered icons (24px SVG)
  - Gap: 24px between icons
- Hover animations:
  - Transform: translateY(-8px)
  - Background changes to forest-500
  - Icon color changes to white
  - Box shadow: 0 12px 24px rgba(90, 138, 109, 0.3)
  - Transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
**And** Links open in new tabs (target="_blank", rel="noopener noreferrer")
**And** Email uses mailto: protocol
**And** All icons have descriptive aria-labels for accessibility
**And** Icons maintain 48x48px minimum tap target size

---

### Story 9.14: Implement Mobile-Responsive Design for About Page

As a mobile user,
I want the About page to work perfectly on my phone or tablet,
So that I can read about the photographer on any device.

**Acceptance Criteria:**

**Given** I am viewing the About page on a mobile device (≤768px width)
**When** The page loads
**Then** The responsive styles adjust:
- **Hero section:**
  - Padding reduced to 60px 16px
  - Profile photo: 180px diameter (down from 240px)
  - Title: 36px (down from 48px)
  - Subtitle: 18px (down from 20px)
  - Elephant background scales proportionally
- **Photo strips:**
  - Height: 250px (down from 400px)
- **Content sections:**
  - Padding: 64px 16px (reduced from 96px 24px)
  - Section headings: 28px (down from 36px)
  - Body text: 16px (down from 18px)
- **Navigation:**
  - Gap reduced to 16px between links
  - Nav links: 14px (down from 16px)
  - Navigation remains functional and readable
- **Background pattern:**
  - Continues to tile seamlessly at 1000px size
  - White overlay maintains visibility of content
- **Connect section:**
  - Social icons maintain 60px size for tap targets
  - Stack or maintain horizontal layout with proper spacing
**And** All text remains readable (WCAG AA contrast)
**And** Touch targets are minimum 44x44px
**And** Page scrolls smoothly without horizontal overflow
**And** Images load efficiently on mobile connections
**And** Layout shifts are minimal (CLS < 0.1)

---

### Story 9.15: Add About Page to Site Navigation

As a visitor,
I want to access the About page from anywhere on the site,
So that I can easily learn about the photographer.

**Acceptance Criteria:**

**Given** I am on the homepage or gallery pages
**When** I view the navigation
**Then** I see an "About" link in the main navigation
**And** Clicking "About" navigates to `/about` route
**And** The About link uses consistent styling with other nav links:
  - Forest-500 color on hover
  - Underline animation (width transitions from 0 to 100%)
  - Active state (forest-600 color, font-weight 500) when on About page
**And** Navigation is keyboard accessible (Tab key navigation works)
**And** Focus states are visible for accessibility
**And** About page has "Back to Home" functionality via site title link

**Given** I am on the About page
**When** I view the navigation
**Then** The "About" link shows active state (forest-600 color, font-weight 500)
**And** I can navigate to Color Gallery or Black & White Gallery from the nav

---

**Epic 9 Implementation Summary:**

Stories 9.9-9.15 focus on implementing the About page based on the approved HTML preview design. Key features:
- Nature-inspired repeating background pattern (birds, flowers, butterflies)
- Hero section with elephant illustration positioned bottom-right
- Circular profile photo with forest green styling
- Three full-width photo strips alternating with content sections
- Comprehensive bio, equipment, and conservation content
- Social media connect section with hover animations
- Fully responsive mobile design (Story 9.14)
- Integrated navigation across the site

**Technical Notes:**
- Background pattern: 1000px auto sizing for subtle repetition
- Two background layers: tiled pattern + semi-transparent white overlay
- Z-index management: pattern (0) < overlay (0) < content (1) < header (100)
- Consistent design system variables throughout
- Mobile breakpoint: 768px for responsive adjustments
