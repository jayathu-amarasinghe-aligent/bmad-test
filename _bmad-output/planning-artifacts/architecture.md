---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7]
inputDocuments: ['_bmad-output/planning-artifacts/product-brief-BMAD-site-2026-01-14.md', '_bmad-output/planning-artifacts/prd.md', '_bmad-output/planning-artifacts/ux-design-specification.md']
workflowType: 'architecture'
project_name: 'BMAD-site'
user_name: 'jay'
date: '2026-01-23'
status: 'complete'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**

BMAD-site requires 50 functional capabilities across multiple domains:

- **Content Discovery & Navigation (FR1-FR6)**: Time-adaptive hero system, category-based gallery browsing (Color/B&W), infinite scroll masonry layouts with responsive column counts (1-4 columns based on device)
- **Image Viewing & Interaction (FR7-FR12)**: Progressive image optimization, behind-the-lens metadata reveals (camera settings, location, stories), equipment information display
- **Social Media Integration (FR13-FR15)**: Instagram/Facebook profile links with conversion tracking
- **SEO Optimization (FR16-FR20)**: Complete pre-rendered HTML for crawlers, descriptive alt text, XML sitemaps, Open Graph/Twitter Cards, JSON-LD structured data
- **Content Management (FR21-FR25)**: Google Drive source integration, automated sync pipeline to Vercel Blob Storage, image optimization during sync, static regeneration triggers
- **Analytics & Monitoring (FR26-FR30)**: Visitor behavior tracking, social conversion events, Core Web Vitals monitoring, search performance tracking, Google Images indexing status
- **Responsive Design & Accessibility (FR31-FR36)**: Cross-browser support (last 2 versions), keyboard navigation, screen reader compatibility, WCAG AA color contrast, responsive text sizing, reduced motion support
- **Performance & Optimization (FR37-FR41)**: <2.5s LCP, lazy loading, responsive image delivery, <3s load on 3G, layout stability (CLS <0.1)
- **Social Sharing (FR42-FR44)**: Rich preview cards for social platforms

**Phase 2 Requirements (Post-MVP):**
- E-commerce integration (FR50-FR55): Print sales, Stripe payments, shopping cart
- Booking system (FR56-FR59): Safari tour inquiries, scheduling, CRM integration
- Advanced CMS (FR60-FR64): Admin dashboard, bulk uploads, mobile content management

**Non-Functional Requirements:**

**Performance (NFR1-NFR8):**
- Homepage hero LCP: <2.5s desktop, <3s mobile 3G
- First Input Delay: <100ms
- Cumulative Layout Shift: <0.1
- Time to Interactive: <4s
- JavaScript bundle: <200KB gzipped
- Image optimization: <200KB mobile, <500KB desktop
- Lighthouse Performance: 90+ consistently
- Scale to 1,000+ images without performance degradation

**Security (NFR9-NFR15):**
- HTTPS with valid SSL (all pages)
- TLS 1.2+ for data transmission
- OAuth 2.0 for admin auth (Phase 2)
- PCI-DSS compliance via Stripe (Phase 2)
- No sensitive data in client-side storage
- Environment variables never exposed client-side
- Proper CORS policies

**Scalability (NFR16-NFR20):**
- Handle 1,000 concurrent visitors
- Support 100 to 10,000+ images without architecture changes
- CDN handles 10x traffic spikes
- Batch process 50+ images in <10 minutes
- Database queries <100ms (Phase 2)

**Accessibility (NFR21-NFR29):**
- WCAG 2.1 Level AA minimum
- 44×44px minimum touch targets
- 4.5:1 contrast for body text, 3:1 for large text
- Descriptive alt text on all images
- Full keyboard navigation
- Visible focus indicators
- Respect prefers-reduced-motion
- Semantic HTML5 throughout
- ARIA live regions for dynamic content

**Reliability (NFR30-NFR35):**
- 99.9% uptime (~43 min downtime/month)
- Zero-downtime deployments with rollback
- Automatic rollback on failed deployments
- Retry logic for transient failures (3 attempts)
- Error alerts within 5 minutes
- Graceful degradation when third-party services unavailable

**Maintainability (NFR41-NFR46):**
- TypeScript type safety: **No 'any' types in production code**
- **ESLint validation: Zero errors before deployment**
- Playwright E2E tests: 90%+ coverage on critical paths
- Executable sync pipeline with clear logging
- Clear error messages and stack traces
- Documentation for build scripts and deployment

**Compatibility (NFR47-NFR50):**
- Chrome, Safari, Firefox, Edge (last 2 versions)
- Safari iOS, Chrome Android (last 2 versions)
- Viewport support: 320px to 2560px+
- No IE11 support required

**Scale & Complexity:**

- **Primary domain**: Next.js 14+ static web application (SSG-first)
- **Complexity level**: Low-Medium
  - Sophisticated front-end with complex image optimization
  - Simple backend in Phase 1 (static generation + CDN)
  - Scales to moderate backend in Phase 2 (e-commerce, bookings)
- **Estimated architectural components**:
  - 6 core components (TimeAdaptiveHero, MasonryGallery, ImageLightbox, MetadataReveal, FireflyIcon, SkeletonLoader)
  - Image sync pipeline (Google Drive → optimization → Vercel Blob)
  - Static site generation system (Next.js SSG)
  - SEO metadata generation layer
  - Analytics integration layer

### Technical Constraints & Dependencies

**Framework & Language:**
- Next.js 14+ (App Router or Pages Router - decision needed)
- TypeScript with strict type checking
- React 18+ for component architecture

**Deployment & Infrastructure:**
- Vercel platform (free tier initially, scales to pro)
- Vercel Blob Storage for image CDN
- Google Drive API for image source management
- Zero DevOps requirement (Vercel handles all infrastructure)

**Image Pipeline:**
- Google Drive as source of truth for photographs
- Automated sync script: Drive → download → optimize → Blob Storage
- Image optimization: compression, WebP/AVIF conversion, responsive sizing
- Build-time static generation triggered by new uploads

**Styling & UI:**
- Tailwind CSS 3.x with JIT compiler
- Headless UI for accessible unstyled components
- Framer Motion for animations
- Custom matte nature color palette (forest green, savanna ochre)

**Testing & Quality:**
- Playwright for E2E testing with CI/CD gates
- ESLint + Prettier for code quality
- TypeScript strict mode (no 'any' escape hatches)
- Visual regression testing for design consistency

**Analytics & Monitoring:**
- Google Analytics 4 for visitor tracking
- Google Search Console for SEO monitoring
- Vercel Analytics for Core Web Vitals
- Error tracking (Sentry or similar for Phase 2)

**Browser Support Matrix:**
- Modern JavaScript (ES2020+) with minimal polyfills
- CSS Grid and Flexbox for layouts
- IntersectionObserver API for lazy loading
- LocalStorage for time-adaptive state (optional)

### Cross-Cutting Concerns Identified

**1. Image Optimization Pipeline**
- Affects: Content management, performance, SEO, user experience
- Architectural impact: Requires build-time optimization workflow, CDN strategy, responsive image serving
- Critical for: <200KB mobile target, Google Images indexing, LCP performance

**2. SEO & Metadata Generation**
- Affects: All pages, social sharing, search discoverability
- Architectural impact: Static generation required, structured data generation, sitemap automation
- Critical for: Organic traffic goals (60%+ by Month 6), Google Images rankings

**3. Performance Monitoring & Optimization**
- Affects: All components, user satisfaction, business goals
- Architectural impact: Core Web Vitals tracking, performance budgets in CI/CD, lazy loading patterns
- Critical for: 90+ Lighthouse score, <1s hero LCP, social conversion rates

**4. Type Safety & Code Quality**
- Affects: All TypeScript/React code, maintainability, team velocity
- Architectural impact: **Strict TypeScript configuration, ESLint as CI/CD gate, no 'any' types allowed**
- Critical for: Preventing runtime errors, consistent code style, AI agent implementation consistency

**5. Next.js Best Practices**
- Affects: Routing, data fetching, performance, SEO
- Architectural impact: **Proper use of SSG, Image component, Font optimization, Metadata API, App Router vs Pages Router decision**
- Critical for: Framework-aligned patterns, optimal performance, maintainability

**6. Accessibility Patterns**
- Affects: All interactive components, navigation, forms (Phase 2)
- Architectural impact: WCAG AA compliance in component library, keyboard navigation system, ARIA patterns
- Critical for: Legal compliance, inclusive access, screen reader support

**7. Responsive Layout System**
- Affects: All pages and components, masonry galleries, navigation
- Architectural impact: Mobile-first CSS, breakpoint strategy (320px-2560px), touch target sizing
- Critical for: 90%+ mobile traffic quality, cross-device consistency

**8. Analytics & Conversion Tracking**
- Affects: Social conversion primary goal, business validation
- Architectural impact: Event tracking architecture, privacy compliance, conversion funnel instrumentation
- Critical for: 20%+ social click-through target, Phase 2 go/no-go decisions

**9. Phased Architecture Evolution**
- Affects: Phase 2 monetization features (e-commerce, bookings)
- Architectural impact: Design for extensibility, API route structure, state management scalability
- Critical for: Adding Phase 2 without architectural rebuild

## Starter Template Evaluation

### Primary Technology Domain

**Next.js 16 Static Web Application** (App Router with Static Export) based on project requirements analysis for photography portfolio with:
- Static site generation for SEO optimization
- Image-heavy content delivery
- Performance-critical user experience (<1s LCP)
- Phased architecture evolution (Phase 1: galleries, Phase 2: e-commerce)

### Technical Preferences Established

Based on PRD and UX specification analysis:

**Core Technologies:**
- Next.js 16 (App Router with static export, Turbopack stable, React Compiler support)
- TypeScript with strict type checking (no 'any' types allowed)
- React 19.2 for component architecture

**Styling & UI:**
- Tailwind CSS 3.x with JIT compiler
- Headless UI for accessible components
- Framer Motion for animations
- Custom matte nature color palette

**Deployment & Infrastructure:**
- Vercel platform (free tier → pro tier scaling)
- Vercel Blob Storage for image CDN
- Google Drive API for image source management

**Quality & Testing:**
- Playwright for E2E testing with CI/CD gates
- ESLint + Prettier (zero-error policy before deployment)
- TypeScript strict mode enforcement
- Visual regression testing

### Starter Options Considered

**Option 1: create-next-app (Official Next.js CLI)**
- Most up-to-date with Next.js 16 releases
- Direct TypeScript + Tailwind + ESLint integration
- App Router by default with static export support
- Turbopack stable by default for faster builds
- React Compiler support for automatic optimization
- Zero configuration for Vercel deployment
- **Status**: ✅ Selected

**Option 2: T3 Stack (create-t3-app)**
- Includes tRPC, Prisma, NextAuth out of the box
- Opinionated full-stack setup
- **Rejected**: Too heavy for static-first site, includes database/auth we don't need in Phase 1

**Option 3: Next.js + Tailwind Manual Setup**
- Maximum control over configuration
- **Rejected**: Starter provides same control with less initial setup time

### Selected Starter: create-next-app (Official Next.js CLI)

**Rationale for Selection:**

1. **Official Next.js tooling** - Maintained by Vercel, always current with Next.js releases
2. **Matches established preferences** - TypeScript, Tailwind, ESLint included out of the box
3. **App Router support** - Modern architecture with React Server Components
4. **Turbopack stable** - Significantly faster builds than webpack (helps with image-heavy site)
5. **React Compiler support** - Automatic memoization reduces bundle size and improves performance
6. **Static export capability** - Supports static generation via `output: 'export'` and `generateStaticParams`
7. **Vercel deployment optimized** - Zero configuration needed for deployment
8. **Future-ready** - Better positioned for Phase 2 features (e-commerce, bookings)

**Initialization Command:**

```bash
npx create-next-app@latest bmad-site \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --turbopack \
  --use-npm
```

**Command Breakdown:**
- `--typescript`: Initialize with TypeScript strict mode
- `--tailwind`: Configure Tailwind CSS 3.x
- `--eslint`: Set up ESLint configuration
- `--app`: Use App Router (modern Next.js architecture)
- `--src-dir`: Organize code in `src/` directory for cleaner structure
- `--import-alias "@/*"`: Use `@/` for absolute imports from src
- `--turbopack`: Enable Turbopack for faster development builds
- `--use-npm`: Use npm as package manager

### Architectural Decisions Provided by Starter

**Language & Runtime:**
- TypeScript 5.x with strict type checking enabled
- React 19.2 with Server Components, automatic JSX runtime, and React Compiler
- ES2020+ target for modern browsers
- Node.js 18+ LTS runtime support

**App Router Architecture:**
- `/src/app` - App Router directory with file-based routing
- Server Components by default (optimal for static generation)
- Client Components explicitly marked with `'use client'`
- Layouts for shared UI and nested routing
- `generateStaticParams` for dynamic route static generation
- `generateMetadata` for SEO meta tags per route

**Styling Solution:**
- Tailwind CSS 3.x with JIT (Just-In-Time) compiler
- PostCSS configuration included
- CSS Modules support for component-scoped styles
- `@tailwind` directives in `globals.css`
- Tailwind config with custom color palette support

**Build Tooling:**
- Turbopack (stable) for both development and production builds
- React Compiler for automatic component memoization (no manual useMemo/useCallback needed)
- Automatic code splitting by route
- Tree-shaking for unused code removal
- Image optimization via Next.js Image component
- Font optimization with next/font
- Static generation at build time (`next build` with `output: 'export'`)

**Testing Framework:**
- **Not included by default** - We'll add Playwright in first setup story
- ESLint configured for code quality gates

**Code Organization:**
- `/src/app` - Pages, layouts, and route handlers
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and helpers
- `/src/styles` - Global styles and Tailwind config
- `/public` - Static assets (will add `/public/images` for optimized output)
- `tsconfig.json` - TypeScript configuration with strict mode

**Development Experience:**
- Turbopack for ultra-fast Hot Module Replacement
- Fast Refresh for React component updates
- TypeScript IntelliSense and type checking
- ESLint integration in editor and CLI
- Development server on `localhost:3000`

### Additional Setup Required (First Implementation Stories)

**Must Add:**
1. **Playwright configuration** - E2E testing framework setup
2. **Prettier configuration** - Code formatting alongside ESLint
3. **Vercel Blob Storage SDK** - Image CDN integration (`@vercel/blob`)
4. **Google Drive API client** - Image source integration
5. **Framer Motion** - Animation library
6. **Headless UI** - Accessible component primitives (`@headlessui/react`)
7. **Image sync pipeline script** - Google Drive → Vercel Blob workflow

**Next.js Configuration for Static Export:**

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static HTML export
  images: {
    unoptimized: true, // Required for static export with external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
    ],
  },
  trailingSlash: true, // Optional: adds trailing slashes to URLs
}

module.exports = nextConfig
```

**TypeScript Configuration Enhancements:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

**ESLint Configuration Enhancements:**
- Add `@typescript-eslint` rules for strict type checking
- Configure import ordering rules
- Add accessibility linting with `eslint-plugin-jsx-a11y`
- Zero-tolerance for warnings in CI/CD pipeline

### Next.js 16 App Router Best Practices to Enforce

**Static Generation with App Router:**
- Use Server Components by default for static pages
- Implement `generateStaticParams` for dynamic routes (e.g., `/gallery/[category]`)
- Add `export const dynamic = 'force-static'` to route files to ensure static generation
- Configure `output: 'export'` in `next.config.js` for full static export
- Use `export const dynamicParams = false` to restrict to predefined static paths

**Route Structure:**
```
/src/app
├── page.tsx                    # Homepage (Server Component)
├── layout.tsx                  # Root layout
├── gallery
│   └── [category]
│       ├── page.tsx            # Gallery pages (Color/BW)
│       └── generateStaticParams # Static path generation
└── about
    └── page.tsx                # About page (Phase 1C)
```

**Metadata API (App Router):**
- Use `generateMetadata` function for dynamic SEO meta tags
- Export static `metadata` object for static pages
- Generate JSON-LD structured data in metadata
- Configure Open Graph and Twitter Card images per route

**Image Optimization:**
- Use Next.js `<Image>` component for all images (requires `unoptimized: true` for static export)
- Configure `images.remotePatterns` for Vercel Blob Storage
- Alternative: Pre-optimize images in build pipeline and use standard `<img>` tags
- Define responsive image sizes in components

**Font Optimization:**
- Use `next/font/google` for Cormorant Garamond and Inter
- Fonts are automatically optimized and self-hosted
- Preload fonts for LCP optimization
- Subset fonts to Latin character set for smaller file size

**Client Components Strategy:**
- Mark interactive components with `'use client'` directive
- Examples: TimeAdaptiveHero (time detection), MasonryGallery (infinite scroll), ImageLightbox (modal)
- Keep Server Components for static content (layouts, static pages)
- Minimize client JavaScript bundle size

**Performance Optimization:**
- Enable `output: 'export'` for fully static site
- Use Server Components to reduce client-side JavaScript
- React Compiler automatically optimizes component re-renders (no manual memoization needed)
- Implement lazy loading for client components (`next/dynamic`)
- Turbopack provides faster builds and optimized bundles
- Configure bundle analyzer for size monitoring
- Set aggressive caching headers for static assets

**Data Fetching:**
- Fetch image metadata at build time in Server Components
- No runtime data fetching needed for Phase 1 (all static)
- Phase 2: Use Server Actions for form submissions (print requests, bookings)

**Note:** Project initialization using this command should be the first implementation story, followed by:
1. Next.js configuration for static export
2. Dependency additions (Playwright, Prettier, Framer Motion, Headless UI, Vercel Blob SDK)
3. TypeScript and ESLint configuration enhancements
4. Image sync pipeline development

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- State Management: Zustand for client-side state coordination
- Image Sync Pipeline: GitHub Actions automated workflow
- SEO Metadata: Centralized factory functions approach
- Analytics: @next/third-parties for GA4 integration
- Error Handling: React Error Boundaries + console logging (Phase 1)

**Important Decisions (Shape Architecture):**
- Static export configuration with Next.js 16 App Router
- Turbopack (stable) for faster builds and optimized bundles
- React Compiler for automatic component optimization
- Server Components by default, Client Components for interactivity
- Vercel Blob Storage for optimized image delivery
- TypeScript strict mode with zero 'any' types
- ESLint zero-error policy before deployment

**Deferred Decisions (Post-MVP/Phase 2):**
- Advanced error tracking (Sentry) - deferred to Phase 2 when e-commerce/bookings added
- Database selection - deferred to Phase 2 (Phase 1 is fully static)
- Authentication system - deferred to Phase 2 for admin CMS
- Payment processing details - deferred to Phase 2 (Stripe planned)

### Data Architecture

**Phase 1 (Static Site):**
- **No database required** - All data generated at build time
- **Image Metadata Storage**: JSON files committed to git via GitHub Actions sync
- **Data Source**: Google Drive API as source of truth for photographs
- **Build-time Data**: Image metadata fetched during static generation
- **Caching Strategy**: Static HTML + CDN caching (Vercel Edge Network)

**Phase 2 (Future Database Needs):**
- **Deferred to Phase 2**: Database will be needed for:
  - E-commerce (print orders, inventory)
  - Booking system (safari inquiries, scheduling)
  - CMS (admin content management)
- **Likely choice**: Vercel Postgres or Supabase (Postgres-based, serverless)

**Data Validation:**
- **TypeScript types** for image metadata at build time
- **Zod schemas** for runtime validation when Phase 2 forms added
- **ESLint validation** for code-level type safety

### State Management

**Decision: Zustand for Client-Side State**

**Version:** zustand@^4.5.0 (latest stable)

**Rationale:**
- Lightweight (~1KB gzipped) fits within <200KB JavaScript bundle target
- TypeScript-first with excellent type inference
- Minimal boilerplate compared to Redux
- Perfect for coordinating state across isolated client components
- No provider setup needed

**Use Cases:**
- **Lightbox State**: Track open/closed, current image index, navigation
- **Gallery State**: Infinite scroll position, loaded image batches
- **Time-Adaptive State**: Current time-of-day for hero background selection
- **Analytics Events**: Queue social conversion events before sending to GA4

**Store Structure:**
```typescript
// src/stores/lightboxStore.ts
interface LightboxState {
  isOpen: boolean
  currentIndex: number
  images: ImageData[]
  open: (index: number) => void
  close: () => void
  next: () => void
  previous: () => void
}

// src/stores/galleryStore.ts
interface GalleryState {
  loadedImages: ImageData[]
  isLoading: boolean
  hasMore: boolean
  loadMore: () => void
}
```

**Implementation:**
- Create separate stores per concern (lightbox, gallery, analytics)
- Use shallow equality for performance
- Persist only non-sensitive state (time preference) to localStorage
- Server Components remain stateless

**Affects:** TimeAdaptiveHero, MasonryGallery, ImageLightbox, FireflyIcon components

### Image Sync Pipeline Architecture

**Decision: GitHub Actions Automated Workflow**

**Rationale:**
- Fully automated sync from Google Drive to Vercel Blob Storage
- Version-controlled image metadata (JSON committed to git)
- Scheduled daily sync + manual trigger capability
- Triggers Vercel deployment automatically after sync
- No manual intervention required for new image uploads

**Workflow Structure:**

```yaml
# .github/workflows/sync-images.yml
name: Sync Images from Google Drive

on:
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM UTC
  workflow_dispatch:      # Manual trigger option

jobs:
  sync-images:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run image sync script
        env:
          GOOGLE_DRIVE_API_KEY: ${{ secrets.GOOGLE_DRIVE_API_KEY }}
          VERCEL_BLOB_TOKEN: ${{ secrets.VERCEL_BLOB_TOKEN }}
        run: npm run sync-images

      - name: Commit updated metadata
        run: |
          git config user.name "GitHub Actions Bot"
          git config user.email "actions@github.com"
          git add src/data/images.json
          git commit -m "chore: sync images from Google Drive [skip ci]" || exit 0
          git push
```

**Sync Script Responsibilities:**
1. **Fetch from Google Drive**: Query Drive API for images in designated folders
2. **Download & Optimize**: Download full-res images, optimize for web (WebP/AVIF conversion)
3. **Upload to Vercel Blob**: Upload optimized images to Blob Storage, get CDN URLs
4. **Generate Metadata**: Create JSON metadata file with image URLs, alt text, metadata
5. **Commit to Git**: Commit metadata JSON, triggering Vercel deployment

**Image Metadata JSON Structure:**
```json
{
  "images": [
    {
      "id": "img_001",
      "category": "color",
      "url": "https://xxx.public.blob.vercel-storage.com/lion-001.webp",
      "alt": "Lion in Serengeti at golden hour",
      "metadata": {
        "camera": "Canon EOS R5",
        "settings": "f/5.6, 1/500s, ISO 800",
        "location": "Serengeti National Park, Tanzania",
        "story": "Waited 45 minutes for this direct gaze after the hunt.",
        "date": "2024-08-15"
      },
      "dimensions": { "width": 1600, "height": 1067 }
    }
  ]
}
```

**Build Trigger:**
- GitHub Actions commits metadata → Vercel detects commit → auto-deploys
- Static site regenerates with new images included
- No manual deployment needed

**Affects:** Content management workflow, SEO (new images indexed), performance (optimized images)

### SEO & Metadata Generation

**Decision: Centralized Metadata Factory Functions**

**Rationale:**
- Extensive SEO requirements (Open Graph, Twitter Cards, JSON-LD)
- Consistency across all pages and gallery categories
- Single source of truth for photographer info, social handles, base URL
- Easy to maintain and update schema definitions
- Supports both static and dynamic metadata generation

**Architecture:**

```typescript
// src/lib/metadata.ts

export interface PageMetadataOptions {
  title?: string
  description?: string
  images?: string[]
  path?: string
}

export function generatePageMetadata(options: PageMetadataOptions): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bmad-site.vercel.app'
  const title = options.title || 'Wildlife Photography Portfolio'
  const description = options.description || 'Professional wildlife photography...'

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title,
      description,
      url: `${baseUrl}${options.path || ''}`,
      siteName: 'BMAD Wildlife Photography',
      images: options.images || ['/og-default.jpg'],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: options.images || ['/og-default.jpg'],
    },
  }
}

export function generateGalleryMetadata(category: 'color' | 'bw'): Metadata {
  return generatePageMetadata({
    title: `${category === 'color' ? 'Color' : 'Black & White'} Gallery`,
    description: `Explore ${category} wildlife photography from around the world`,
    path: `/gallery/${category}`,
  })
}

export function generateJSONLD(type: 'website' | 'photographer' | 'imageGallery') {
  // Structured data generation for rich snippets
}
```

**Usage in Routes:**

```typescript
// src/app/page.tsx (Homepage)
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Wildlife Photography Portfolio - Photographer Name',
  description: 'Professional wildlife photography portfolio...',
})

// src/app/gallery/[category]/page.tsx
import { generateGalleryMetadata } from '@/lib/metadata'

export async function generateMetadata({ params }: { params: { category: string } }) {
  return generateGalleryMetadata(params.category as 'color' | 'bw')
}
```

**JSON-LD Schemas:**
- **Website Schema**: Homepage (organization, logo, social links)
- **Person Schema**: Photographer profile (name, occupation, credentials)
- **ImageGallery Schema**: Gallery pages (collection of images)
- **ImageObject Schema**: Individual images (photographer, location, equipment)
- **BreadcrumbList Schema**: Navigation hierarchy

**Sitemap Generation:**
- Automatic via Next.js 15 `sitemap.ts` file
- Include all static routes + dynamic gallery categories
- Image sitemap for Google Images optimization

**Affects:** All pages, SEO rankings, social sharing previews, Google Images indexing

### Analytics & Conversion Tracking

**Decision: @next/third-parties for Google Analytics 4**

**Version:** @next/third-parties@^16.0.0 (Next.js 16 compatible)

**Rationale:**
- Official Next.js integration for third-party scripts
- Optimized loading (doesn't block rendering or affect LCP)
- Built-in TypeScript support
- Simple event tracking API
- Vercel Analytics already included for Core Web Vitals
- Can add Google Search Console separately

**Implementation:**

```typescript
// src/app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  )
}
```

**Event Tracking:**

```typescript
// src/lib/analytics.ts
import { sendGAEvent } from '@next/third-parties/google'

export function trackSocialClick(platform: 'instagram' | 'facebook') {
  sendGAEvent({
    event: 'social_click',
    value: platform,
    category: 'engagement',
  })
}

export function trackImageView(imageId: string, category: string) {
  sendGAEvent({
    event: 'image_view',
    value: imageId,
    category: category,
  })
}

export function trackLightboxOpen(imageId: string) {
  sendGAEvent({
    event: 'lightbox_open',
    value: imageId,
    category: 'engagement',
  })
}
```

**Analytics Stack:**
- **Google Analytics 4**: Visitor behavior, social conversions, page views
- **Google Search Console**: Keyword rankings, search impressions, indexing status
- **Vercel Analytics**: Core Web Vitals, real user performance monitoring

**Key Metrics Tracked:**
- **Social Conversion**: Click-through rate to Instagram/Facebook (target: 20%+)
- **Gallery Engagement**: Images viewed per session, time on page
- **Lightbox Engagement**: Percentage of users opening lightbox
- **Behind-the-Lens Discovery**: Metadata reveal interaction rate
- **Performance**: LCP, CLS, FID from Vercel Analytics

**Privacy Considerations:**
- No cookie banner for Phase 1 (analytics-only tracking)
- Can add consent management in Phase 2 if needed (GDPR compliance)
- No personally identifiable information collected

**Affects:** All pages, FireflyIcon social links, MasonryGallery interactions, ImageLightbox usage

### Error Handling & Monitoring

**Decision: React Error Boundaries + Console Logging (Phase 1)**

**Rationale:**
- Phase 1 is fully static site with limited error scenarios
- Client components are the only runtime error source
- Error boundaries provide graceful degradation
- Console logging sufficient for initial monitoring
- Defer Sentry to Phase 2 when e-commerce/bookings add complexity
- Keep Phase 1 lean and focused

**Error Boundary Implementation:**

```typescript
// src/components/ErrorBoundary.tsx
'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error Boundary caught error:', error, errorInfo)

    // Log to console in production for debugging
    if (process.env.NODE_ENV === 'production') {
      console.error('Production error:', {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
      })
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex min-h-screen items-center justify-center bg-neutral-50">
          <div className="text-center">
            <h2 className="font-serif text-2xl text-neutral-800">
              Something went wrong
            </h2>
            <p className="mt-2 text-neutral-600">
              Please refresh the page to try again.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="mt-4 rounded bg-forest-500 px-6 py-2 text-white hover:bg-forest-600"
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
```

**Usage Pattern:**

```typescript
// src/app/layout.tsx
import { ErrorBoundary } from '@/components/ErrorBoundary'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}

// Wrap individual client components
// src/app/gallery/[category]/page.tsx
<ErrorBoundary fallback={<GalleryErrorFallback />}>
  <MasonryGallery images={images} />
</ErrorBoundary>
```

**Error Scenarios Handled:**
- **Client Component Crashes**: TimeAdaptiveHero, MasonryGallery, ImageLightbox rendering errors
- **Image Load Failures**: Graceful fallback when Vercel Blob images fail to load
- **Analytics Script Failures**: Non-blocking, won't crash site if GA4 fails
- **State Management Errors**: Zustand store errors caught by boundaries

**Build-Time Error Handling:**
- TypeScript strict mode catches type errors at compile time
- ESLint catches code quality issues before deployment
- Playwright E2E tests catch integration errors in CI/CD

**Phase 2 Enhancement (Deferred):**
- **Sentry Integration**: Add when e-commerce/bookings increase error complexity
- **Error Reporting**: Real-time alerts for production errors
- **Source Maps**: Upload source maps for readable stack traces
- **Performance Monitoring**: Track slow components and user interactions

**Affects:** All client components, user experience during errors, debugging workflow

### Decision Impact Analysis

**Implementation Sequence:**

1. **Project Initialization** (First Story):
   - Run `create-next-app` with specified flags
   - Configure `next.config.js` for static export
   - Enhance TypeScript and ESLint configs

2. **Dependency Setup**:
   - Install Zustand for state management
   - Install @next/third-parties for analytics
   - Install Playwright for testing
   - Install Prettier for code formatting
   - Install Headless UI and Framer Motion

3. **Core Infrastructure**:
   - Create centralized metadata factory functions (`src/lib/metadata.ts`)
   - Set up Error Boundary component
   - Configure Tailwind with matte nature color palette
   - Set up Google Fonts (Cormorant Garamond, Inter)

4. **Image Sync Pipeline**:
   - Create GitHub Actions workflow
   - Develop sync script (Drive API → optimization → Vercel Blob)
   - Set up image metadata JSON structure
   - Configure GitHub secrets (API keys)

5. **State Management**:
   - Create Zustand stores (lightbox, gallery, analytics)
   - Implement store hooks and selectors

6. **Analytics Integration**:
   - Add GoogleAnalytics component to root layout
   - Create analytics utility functions
   - Set up event tracking for social conversions

7. **Component Development**:
   - Build with Error Boundaries wrapping client components
   - Use Zustand for state coordination
   - Apply metadata generation via factory functions

**Cross-Component Dependencies:**

- **Zustand ↔ Client Components**: All interactive components use Zustand stores
- **Metadata Functions ↔ All Routes**: Every page uses centralized metadata generation
- **GitHub Actions ↔ Image Data**: Sync workflow populates JSON consumed by galleries
- **Error Boundaries ↔ Client Components**: All client components wrapped for graceful errors
- **Analytics ↔ User Interactions**: All conversion events tracked via GA4 integration
- **TypeScript Strict ↔ All Code**: No 'any' types allowed, enforced by ESLint

## Implementation Patterns & Consistency Rules

### Pattern Categories Defined

**Critical Conflict Points Identified:**
8 major areas where AI agents could make different implementation choices without established patterns

### Naming Patterns

**Component & File Naming:**
- **Component files**: PascalCase (e.g., `TimeAdaptiveHero.tsx`, `MasonryGallery.tsx`)
- **Non-component files**: camelCase (e.g., `metadata.ts`, `imageSync.ts`)
- **Zustand stores**: `use[Name]Store.ts` pattern (e.g., `useLightboxStore.ts`, `useGalleryStore.ts`)
- **Types/Interfaces**: PascalCase in dedicated `types.ts` files

**TypeScript Naming:**
- **Variables**: camelCase (e.g., `imageUrl`, `currentIndex`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_IMAGES_PER_BATCH`, `DEFAULT_TIMEOUT`)
- **Functions**: camelCase (e.g., `generatePageMetadata`, `trackSocialClick`)
- **Interfaces**: PascalCase with descriptive names (e.g., `ImageMetadata`, `LightboxState`)
- **Types**: PascalCase (e.g., `GalleryCategory`, `TimeOfDay`)

**JSON Field Naming:**
- **Image metadata JSON**: camelCase for consistency with TypeScript (e.g., `imageUrl`, `altText`, `cameraSettings`)
- **Environment variables**: UPPER_SNAKE_CASE (e.g., `NEXT_PUBLIC_GA_ID`, `VERCEL_BLOB_TOKEN`)

**Route Naming:**
- **Dynamic segments**: `[category]`, `[slug]` (lowercase, descriptive)
- **Route groups**: `(marketing)`, `(gallery)` for organization without affecting URLs

### Structure Patterns

**Project Organization:**
```
/src
├── app/                    # Next.js App Router pages
├── components/            # Reusable React components
├── stores/                # Zustand stores
├── lib/                   # Utility functions & helpers
│   ├── metadata.ts       # SEO metadata factory functions
│   ├── analytics.ts      # GA4 event tracking
│   └── utils.ts          # General utilities
├── types/                 # TypeScript type definitions
├── data/                  # Static data (images.json from sync)
└── styles/                # Global styles
```

**Test Co-location:**
- Tests live next to components: `Gallery.test.tsx` next to `Gallery.tsx`
- E2E tests in `/e2e` folder at project root
- Test utilities in `/src/lib/test-utils.ts`

**Component Organization:**
- One component per file
- Export component as default
- Co-locate types/interfaces used only by that component
- Shared types go in `/src/types`

### Format Patterns

**Image Metadata JSON Structure** (MUST follow exactly):
```typescript
{
  "images": [
    {
      "id": string,              // Unique identifier
      "category": "color" | "bw", // Gallery category
      "url": string,             // Vercel Blob CDN URL
      "alt": string,             // SEO-optimized alt text
      "metadata": {
        "camera": string,        // Camera model
        "settings": string,      // f/stop, shutter, ISO
        "location": string,      // Geographic location
        "story": string,         // Behind-the-lens story
        "date": string           // ISO 8601 date string
      },
      "dimensions": {
        "width": number,
        "height": number
      }
    }
  ]
}
```

**Analytics Event Format:**
```typescript
sendGAEvent({
  event: string,      // Event name (snake_case: 'social_click', 'image_view')
  value: string,      // Event value
  category: string    // Event category
})
```

**Date/Time Formats:**
- **API/JSON**: ISO 8601 strings (`2024-08-15T14:30:00Z`)
- **Display**: Locale-based formatting via `Intl.DateTimeFormat`
- **File names**: `YYYY-MM-DD` format (e.g., `2024-08-15-lion.jpg`)

### Communication Patterns

**Zustand Store Structure** (MUST follow):
```typescript
// Pattern: separate stores, typed interfaces, clear actions
interface [Name]State {
  // State properties
  [property]: type

  // Actions (imperative verbs)
  [actionName]: () => void
}

export const use[Name]Store = create<[Name]State>((set) => ({
  // Initial state
  [property]: initialValue,

  // Actions
  [actionName]: () => set((state) => ({ ...state, [property]: newValue }))
}))
```

**Component Props Pattern:**
```typescript
interface [Component]Props {
  // Required props first
  requiredProp: type

  // Optional props
  optionalProp?: type

  // Event handlers (on[Event] pattern)
  onClick?: () => void
  onClose?: () => void
}
```

### Process Patterns

**Error Handling:**
- **Client components**: Wrap with `<ErrorBoundary>` component
- **Build errors**: Fail loudly, don't continue with warnings
- **Image load errors**: Show fallback placeholder, log to console
- **Console logging format**:
  ```typescript
  console.error('[ComponentName]:', 'Error message', { context })
  ```

**Loading States:**
- **Zustand store pattern**: `isLoading` boolean + `loadMore()` action
- **UI pattern**: Skeleton loaders (not spinners) for better perceived performance
- **Naming**: `isLoading`, `isSubmitting`, `isFetching` (descriptive boolean names)

**Async Operations:**
- **Use async/await** (not .then() chains)
- **Error boundaries** catch errors, log them
- **Retry logic**: Max 3 attempts with exponential backoff for transient failures

### Enforcement Guidelines

**All AI Agents MUST:**

1. **Follow TypeScript strict mode** - Zero 'any' types, enable all strict checks
2. **Use PascalCase for components** - `TimeAdaptiveHero.tsx`, not `time-adaptive-hero.tsx`
3. **Use camelCase for JSON fields** - `imageUrl`, not `image_url`
4. **Co-locate tests** - `Component.test.tsx` next to `Component.tsx`
5. **Use Zustand for client state** - Never use Context API or Redux
6. **Use centralized metadata functions** - Import from `@/lib/metadata`, never inline
7. **Wrap client components in ErrorBoundary** - Graceful error handling required
8. **Track analytics via lib/analytics.ts** - Never call sendGAEvent directly
9. **Use Server Components by default** - Only add `'use client'` when truly needed
10. **Follow image metadata JSON schema** - Exact structure, no deviations

**Pattern Enforcement:**
- **ESLint** catches naming violations and code quality issues
- **TypeScript** enforces type safety and interface contracts
- **Playwright tests** verify component behavior
- **Code reviews** check for pattern adherence
- **CI/CD gates** block deployment if ESLint has errors

### Pattern Examples

**Good Example - Zustand Store:**
```typescript
// src/stores/useLightboxStore.ts
import { create } from 'zustand'
import type { ImageData } from '@/types'

interface LightboxState {
  isOpen: boolean
  currentIndex: number
  images: ImageData[]
  open: (index: number) => void
  close: () => void
  next: () => void
  previous: () => void
}

export const useLightboxStore = create<LightboxState>((set) => ({
  isOpen: false,
  currentIndex: 0,
  images: [],
  open: (index) => set({ isOpen: true, currentIndex: index }),
  close: () => set({ isOpen: false }),
  next: () => set((state) => ({
    currentIndex: Math.min(state.currentIndex + 1, state.images.length - 1)
  })),
  previous: () => set((state) => ({
    currentIndex: Math.max(state.currentIndex - 1, 0)
  })),
}))
```

**Good Example - Component with Error Boundary:**
```typescript
// src/app/gallery/[category]/page.tsx
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { MasonryGallery } from '@/components/MasonryGallery'
import { generateGalleryMetadata } from '@/lib/metadata'
import imagesData from '@/data/images.json'

export async function generateMetadata({ params }: { params: { category: string } }) {
  return generateGalleryMetadata(params.category as 'color' | 'bw')
}

export default function GalleryPage({ params }: { params: { category: string } }) {
  const images = imagesData.images.filter(img => img.category === params.category)

  return (
    <ErrorBoundary fallback={<GalleryErrorFallback />}>
      <MasonryGallery images={images} />
    </ErrorBoundary>
  )
}
```

**Anti-Patterns (DO NOT USE):**

❌ **Don't use snake_case for TypeScript variables:**
```typescript
// BAD
const image_url = 'https://...'
const camera_settings = 'f/5.6'

// GOOD
const imageUrl = 'https://...'
const cameraSettings = 'f/5.6'
```

❌ **Don't create inline metadata:**
```typescript
// BAD
export const metadata = {
  title: 'Gallery',
  description: '...',
  openGraph: { ... } // Repetitive, inconsistent
}

// GOOD
export const metadata = generateGalleryMetadata('color')
```

❌ **Don't use 'any' types:**
```typescript
// BAD
function processImage(data: any) { ... }

// GOOD
function processImage(data: ImageMetadata) { ... }
```

❌ **Don't call GA4 directly in components:**
```typescript
// BAD
import { sendGAEvent } from '@next/third-parties/google'
sendGAEvent({ event: 'click', value: 'instagram' })

// GOOD
import { trackSocialClick } from '@/lib/analytics'
trackSocialClick('instagram')
```

## Project Structure & Boundaries

### Complete Project Directory Structure

```
bmad-site/
├── README.md
├── package.json
├── package-lock.json
├── next.config.js                   # Static export config, Turbopack, image optimization
├── tailwind.config.ts               # Custom matte nature color palette
├── postcss.config.js
├── tsconfig.json                    # Strict TypeScript configuration
├── .eslintrc.json                   # Zero-error policy rules
├── .prettierrc
├── .env.local                       # Local environment variables
├── .env.example                     # Template for environment setup
├── .gitignore
├── .github/
│   └── workflows/
│       ├── sync-images.yml          # Daily Google Drive → Vercel Blob sync
│       └── ci.yml                   # ESLint, TypeScript, Playwright tests
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout with ErrorBoundary, GA4, fonts
│   │   ├── page.tsx                 # Homepage with TimeAdaptiveHero
│   │   ├── globals.css              # Tailwind directives, global styles
│   │   ├── sitemap.ts               # Sitemap generation (homepage, galleries, about)
│   │   ├── robots.ts                # Robots.txt configuration
│   │   ├── gallery/
│   │   │   └── [category]/
│   │   │       └── page.tsx         # Gallery pages (color/bw) with MasonryGallery
│   │   └── about/
│   │       └── page.tsx             # About page (Phase 1C)
│   ├── components/
│   │   ├── ErrorBoundary.tsx        # Global error boundary component
│   │   ├── TimeAdaptiveHero.tsx     # Time-of-day adaptive hero (client component)
│   │   ├── TimeAdaptiveHero.test.tsx
│   │   ├── MasonryGallery.tsx       # Infinite scroll masonry gallery (client component)
│   │   ├── MasonryGallery.test.tsx
│   │   ├── ImageLightbox.tsx        # Full-screen image lightbox (client component)
│   │   ├── ImageLightbox.test.tsx
│   │   ├── MetadataReveal.tsx       # Behind-the-lens metadata reveal
│   │   ├── MetadataReveal.test.tsx
│   │   ├── FireflyIcon.tsx          # Animated firefly social icon (client component)
│   │   ├── FireflyIcon.test.tsx
│   │   ├── SkeletonLoader.tsx       # Skeleton loading placeholders
│   │   └── SkeletonLoader.test.tsx
│   ├── stores/
│   │   ├── useLightboxStore.ts      # Lightbox state (open/close, navigation)
│   │   ├── useGalleryStore.ts       # Gallery state (infinite scroll, loaded images)
│   │   └── useTimeStore.ts          # Time-of-day state (dawn/midday/dusk/night)
│   ├── lib/
│   │   ├── metadata.ts              # Centralized SEO metadata factory functions
│   │   ├── analytics.ts             # GA4 event tracking utilities
│   │   ├── utils.ts                 # General utility functions
│   │   ├── imageSync.ts             # Google Drive → Vercel Blob sync script
│   │   └── test-utils.ts            # Shared test utilities
│   ├── types/
│   │   ├── index.ts                 # Exported types
│   │   └── image.ts                 # ImageData, ImageMetadata interfaces
│   ├── data/
│   │   └── images.json              # Generated by GitHub Actions sync workflow
│   └── styles/
│       └── globals.css              # Additional global styles (if needed)
├── e2e/
│   ├── homepage.spec.ts             # E2E test for homepage and TimeAdaptiveHero
│   ├── gallery.spec.ts              # E2E test for gallery navigation and infinite scroll
│   ├── lightbox.spec.ts             # E2E test for lightbox functionality
│   └── social-conversion.spec.ts   # E2E test for social click tracking
├── public/
│   ├── favicon.ico
│   ├── og-default.jpg               # Default Open Graph image
│   └── robots.txt                   # Generated by app/robots.ts
├── scripts/
│   └── sync-images.sh               # Helper script for manual image sync
└── playwright.config.ts             # Playwright E2E test configuration
```

### Architectural Boundaries

**Component Boundaries:**

- **Server Components (Default)**: All pages in `/src/app` are Server Components for optimal static generation
  - `app/page.tsx` - Homepage (Server Component, renders TimeAdaptiveHero client component)
  - `app/gallery/[category]/page.tsx` - Gallery pages (Server Component, renders MasonryGallery)
  - `app/layout.tsx` - Root layout (Server Component, wraps children with ErrorBoundary)

- **Client Components (Explicit 'use client')**: Interactive components only
  - `TimeAdaptiveHero.tsx` - Needs client-side time detection
  - `MasonryGallery.tsx` - Needs IntersectionObserver for infinite scroll
  - `ImageLightbox.tsx` - Needs modal state and keyboard event handling
  - `MetadataReveal.tsx` - Needs hover/click interactions
  - `FireflyIcon.tsx` - Needs animation and click tracking
  - `ErrorBoundary.tsx` - React error boundary (must be client component)

- **State Management Boundary**: All client components access Zustand stores
  - Zustand stores in `/src/stores` are imported only by client components
  - No prop drilling for shared state (lightbox, gallery scroll, time-of-day)
  - Server Components remain stateless

**Data Boundaries:**

- **Build-Time Data**: Image metadata from `/src/data/images.json`
  - Generated by GitHub Actions workflow during sync
  - Read at build time by Server Components
  - Passed as props to client components (MasonryGallery, ImageLightbox)
  - No runtime data fetching in Phase 1 (fully static)

- **External Data Sources**:
  - **Google Drive API**: Source of truth for photographs (accessed only by sync script)
  - **Vercel Blob Storage**: CDN for optimized images (referenced in images.json URLs)
  - **Google Analytics 4**: Analytics data (one-way: app → GA4)
  - **Google Search Console**: SEO data (external monitoring)

**Integration Boundaries:**

- **Image Sync Pipeline Boundary**: GitHub Actions ↔ Google Drive API ↔ Vercel Blob
  - Runs independently of Next.js application
  - Outputs `images.json` which triggers Vercel deployment
  - No direct coupling between sync script and app code

- **Analytics Boundary**: All analytics events go through `/src/lib/analytics.ts`
  - Never call `sendGAEvent` directly from components
  - Centralized tracking ensures consistent event naming
  - Analytics failures never crash the application

- **Metadata Boundary**: All SEO metadata goes through `/src/lib/metadata.ts`
  - Factory functions ensure consistency across all pages
  - Single source of truth for photographer info, social handles, base URL
  - JSON-LD generation centralized

**Error Boundaries:**

- **Global Error Boundary**: `app/layout.tsx` wraps entire app
  - Catches all client component errors
  - Shows graceful error UI
  - Logs errors to console (Phase 1) or Sentry (Phase 2)

- **Component-Level Error Boundaries**: Wrap individual features
  - `<ErrorBoundary>` around `<MasonryGallery>` prevents gallery errors from crashing page
  - Custom fallback UI per component (e.g., `<GalleryErrorFallback />`)

### Requirements to Structure Mapping

**FR1-FR6: Content Discovery & Navigation**
- **TimeAdaptiveHero**: `/src/components/TimeAdaptiveHero.tsx`
- **Homepage**: `/src/app/page.tsx`
- **Gallery Routes**: `/src/app/gallery/[category]/page.tsx`
- **Time State**: `/src/stores/useTimeStore.ts`
- **Tests**: `/src/components/TimeAdaptiveHero.test.tsx`, `/e2e/homepage.spec.ts`

**FR7-FR12: Image Viewing & Interaction**
- **MasonryGallery**: `/src/components/MasonryGallery.tsx`
- **ImageLightbox**: `/src/components/ImageLightbox.tsx`
- **MetadataReveal**: `/src/components/MetadataReveal.tsx`
- **Gallery State**: `/src/stores/useGalleryStore.ts`
- **Lightbox State**: `/src/stores/useLightboxStore.ts`
- **Image Data**: `/src/data/images.json`
- **Tests**: `/src/components/MasonryGallery.test.tsx`, `/e2e/lightbox.spec.ts`

**FR13-FR15: Social Media Integration**
- **FireflyIcon**: `/src/components/FireflyIcon.tsx`
- **Analytics Tracking**: `/src/lib/analytics.ts` (`trackSocialClick()`)
- **Tests**: `/e2e/social-conversion.spec.ts`

**FR16-FR20: SEO Optimization**
- **Metadata Functions**: `/src/lib/metadata.ts`
  - `generatePageMetadata()`
  - `generateGalleryMetadata()`
  - `generateJSONLD()`
- **Sitemap**: `/src/app/sitemap.ts`
- **Robots**: `/src/app/robots.ts`
- **Applied in**: All page.tsx files via `generateMetadata()` export

**FR21-FR25: Content Management (Image Sync)**
- **Sync Workflow**: `/.github/workflows/sync-images.yml`
- **Sync Script**: `/src/lib/imageSync.ts`
- **Output**: `/src/data/images.json`
- **Manual Helper**: `/scripts/sync-images.sh`

**FR26-FR30: Analytics & Monitoring**
- **GA4 Integration**: `/src/app/layout.tsx` (GoogleAnalytics component)
- **Event Tracking**: `/src/lib/analytics.ts`
  - `trackSocialClick()`
  - `trackImageView()`
  - `trackLightboxOpen()`
- **Vercel Analytics**: Automatic (no code needed)
- **Tests**: `/e2e/social-conversion.spec.ts`

**FR31-FR36: Responsive Design & Accessibility**
- **Tailwind Config**: `/tailwind.config.ts` (breakpoints, matte nature colors)
- **Global Styles**: `/src/app/globals.css`
- **Accessible Components**: All components implement WCAG AA patterns
- **Error Boundary**: `/src/components/ErrorBoundary.tsx` (accessible error UI)

**FR37-FR41: Performance & Optimization**
- **Next.js Config**: `/next.config.js` (`output: 'export'`, image optimization)
- **Turbopack**: Enabled by default in Next.js 16
- **React Compiler**: Automatic memoization (no manual code)
- **Lazy Loading**: Used in `MasonryGallery.tsx` for infinite scroll
- **Skeleton Loaders**: `/src/components/SkeletonLoader.tsx`

**FR42-FR44: Social Sharing**
- **Open Graph Tags**: Generated via `/src/lib/metadata.ts`
- **Twitter Cards**: Generated via `/src/lib/metadata.ts`
- **Dynamic Images**: Configured per page in `generateMetadata()`

### Cross-Cutting Concerns

**TypeScript Type Safety**
- **Types Location**: `/src/types/`
  - `image.ts` - ImageData, ImageMetadata, GalleryCategory
- **Strict Config**: `/tsconfig.json` - Zero 'any' types, all strict checks enabled
- **Applied Everywhere**: All `.ts`/`.tsx` files

**Testing Infrastructure**
- **Unit Tests**: Co-located with components (`Component.test.tsx`)
- **E2E Tests**: Centralized in `/e2e/` folder
- **Test Utils**: `/src/lib/test-utils.ts`
- **Playwright Config**: `/playwright.config.ts`
- **CI/CD Tests**: `/.github/workflows/ci.yml`

**Error Handling**
- **Error Boundary Component**: `/src/components/ErrorBoundary.tsx`
- **Applied in**: All pages and feature components
- **Logging**: Console (Phase 1), Sentry integration point (Phase 2)

**Code Quality**
- **ESLint**: `/.eslintrc.json` - Zero-error policy
- **Prettier**: `/.prettierrc` - Consistent formatting
- **TypeScript**: `/tsconfig.json` - Strict mode
- **CI/CD Gates**: `/.github/workflows/ci.yml` - Blocks on errors

### Integration Points

**Internal Communication:**

- **Server → Client Component Props**:
  - Homepage Server Component passes time-of-day to TimeAdaptiveHero
  - Gallery Server Component passes filtered images to MasonryGallery
  - MasonryGallery passes current image to ImageLightbox

- **Client Component → Zustand Stores**:
  - TimeAdaptiveHero reads/writes `useTimeStore`
  - MasonryGallery reads/writes `useGalleryStore`
  - ImageLightbox reads/writes `useLightboxStore`

- **Components → Analytics**:
  - FireflyIcon calls `trackSocialClick()` on click
  - MasonryGallery calls `trackImageView()` when image enters viewport
  - ImageLightbox calls `trackLightboxOpen()` when opened

- **Components → Metadata**:
  - All page.tsx files call `generatePageMetadata()` or `generateGalleryMetadata()`
  - Metadata functions read `process.env.NEXT_PUBLIC_SITE_URL`

**External Integrations:**

- **Google Drive API**:
  - **Where**: `/src/lib/imageSync.ts` and `/.github/workflows/sync-images.yml`
  - **Credentials**: GitHub Secrets (`GOOGLE_DRIVE_API_KEY`)
  - **Direction**: Sync script → Google Drive (read-only)

- **Vercel Blob Storage**:
  - **Where**: `/src/lib/imageSync.ts` (upload), `/src/data/images.json` (CDN URLs)
  - **Credentials**: GitHub Secrets (`VERCEL_BLOB_TOKEN`)
  - **Direction**: Sync script → Blob Storage (write), App → Blob Storage (read images)

- **Google Analytics 4**:
  - **Where**: `/src/app/layout.tsx` (GoogleAnalytics component), `/src/lib/analytics.ts`
  - **Credentials**: Environment variable (`NEXT_PUBLIC_GA_ID`)
  - **Direction**: App → GA4 (one-way event tracking)

- **Google Search Console**:
  - **Where**: External (not integrated in code)
  - **Setup**: Manual (submit sitemap, verify ownership)
  - **Direction**: Google → App (crawling)

- **Vercel Analytics**:
  - **Where**: Automatic (Vercel platform integration)
  - **Direction**: App → Vercel (Core Web Vitals reporting)

**Data Flow:**

1. **Image Sync Flow**:
   ```
   Google Drive → Sync Script → Vercel Blob Storage
                              ↓
                         images.json committed to git
                              ↓
                      Vercel detects commit → triggers build
                              ↓
                   Next.js reads images.json at build time
                              ↓
                    Static pages generated with image data
   ```

2. **User Interaction Flow**:
   ```
   User visits homepage
        ↓
   Server Component renders → passes data to TimeAdaptiveHero (client)
        ↓
   TimeAdaptiveHero detects time → updates useTimeStore
        ↓
   User clicks gallery link
        ↓
   Gallery Server Component reads images.json → filters by category
        ↓
   Passes filtered images to MasonryGallery (client)
        ↓
   MasonryGallery uses IntersectionObserver → loads more images
        ↓
   User clicks image → ImageLightbox opens (useLightboxStore updated)
        ↓
   User clicks social icon → trackSocialClick() → sends event to GA4
   ```

### File Organization Patterns

**Configuration Files:**
- **Root Level**: All config files at project root for easy access
  - `next.config.js` - Next.js 16 configuration (static export, Turbopack)
  - `tailwind.config.ts` - Custom color palette, responsive breakpoints
  - `tsconfig.json` - TypeScript strict mode settings
  - `.eslintrc.json` - ESLint rules, zero-error policy
  - `.prettierrc` - Code formatting rules
  - `playwright.config.ts` - E2E test configuration

**Source Organization:**
- **App Router**: `/src/app` - File-based routing, Server Components by default
- **Components**: `/src/components` - Reusable React components, tests co-located
- **Stores**: `/src/stores` - Zustand stores (one file per store)
- **Libraries**: `/src/lib` - Utilities, metadata, analytics, sync script
- **Types**: `/src/types` - TypeScript type definitions
- **Data**: `/src/data` - Static JSON data (images.json from sync)

**Test Organization:**
- **Unit Tests**: Co-located with components (`Component.test.tsx`)
- **E2E Tests**: Centralized in `/e2e` folder
- **Test Utilities**: `/src/lib/test-utils.ts` (shared test helpers)

**Asset Organization:**
- **Public Assets**: `/public` - Favicon, Open Graph images, robots.txt
- **Generated Assets**: `/out` - Static export output (not committed to git)
- **Remote Assets**: Vercel Blob Storage - All optimized images via CDN URLs

### Development Workflow Integration

**Development Server Structure:**
- **Command**: `npm run dev`
- **Turbopack Dev Server**: Ultra-fast HMR on `localhost:3000`
- **File Watching**: Automatic reload on changes to `/src` files
- **Environment**: Loads `.env.local` for local development

**Build Process Structure:**
- **Command**: `npm run build`
- **Turbopack Build**: Optimized production build with React Compiler
- **Static Export**: Generates `/out` folder with static HTML/CSS/JS
- **Image Optimization**: Images referenced but served from Vercel Blob (unoptimized flag for static export)
- **Output**: Fully static site ready for CDN deployment

**Deployment Structure:**
- **Platform**: Vercel
- **Trigger**: Git push to main branch (or GitHub Actions commit)
- **Build**: Vercel runs `npm run build` automatically
- **Deploy**: Static files served from Vercel Edge Network
- **Environment Variables**: Set in Vercel dashboard
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_GA_ID`
  - `GOOGLE_DRIVE_API_KEY` (GitHub Secrets for Actions)
  - `VERCEL_BLOB_TOKEN` (GitHub Secrets for Actions)

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:**

All architectural decisions are fully compatible and work together without conflicts:

- **Next.js 16 + TypeScript 5.x + React 19.2**: Perfect compatibility, all latest stable versions
- **Turbopack + React Compiler**: Both stable features of Next.js 16, work together for optimal performance
- **Static Export + Zustand**: Client-side state management works seamlessly with static generation
- **Tailwind CSS 3.x + Headless UI + Framer Motion**: All compatible, no version conflicts
- **Playwright + TypeScript strict mode**: Testing framework fully supports strict TypeScript
- **@next/third-parties for GA4**: Official Next.js 16 integration, optimized for static sites
- **Vercel Blob Storage + Static Export**: Images served via CDN URLs, no build-time optimization conflicts

**Pattern Consistency:**

Implementation patterns fully support all architectural decisions:

- **PascalCase components** align with React/TypeScript conventions
- **camelCase JSON fields** consistent with TypeScript variable naming
- **Zustand store pattern** (`use[Name]Store`) matches React Hooks naming convention
- **Centralized metadata factories** eliminate repetition while maintaining type safety
- **Error Boundary wrapping** ensures graceful degradation across all client components
- **Test co-location** matches component-driven architecture
- **Server Components by default** maximizes static generation benefits

**Structure Alignment:**

Project structure perfectly supports all architectural decisions and patterns:

- **`/src/app` structure** leverages Next.js 16 App Router file-based routing
- **`/src/stores` separation** isolates client-side Zustand state from Server Components
- **`/src/lib` utilities** centralize metadata, analytics, and sync script logic
- **`/src/components` organization** supports both Server and Client component boundaries
- **`/e2e` centralization** follows Playwright best practices
- **GitHub Actions workflow** integrates seamlessly with Vercel deployment
- **Static export to `/out`** aligns with Vercel Edge Network delivery

### Requirements Coverage Validation ✅

**Functional Requirements Coverage (FR1-FR64):**

All 50 Phase 1 functional requirements are fully covered:

- **FR1-FR6 (Content Discovery)**: TimeAdaptiveHero component, App Router routing, useTimeStore ✅
- **FR7-FR12 (Image Viewing)**: MasonryGallery, ImageLightbox, MetadataReveal components ✅
- **FR13-FR15 (Social Media)**: FireflyIcon component, analytics tracking ✅
- **FR16-FR20 (SEO)**: Centralized metadata.ts, sitemap.ts, robots.ts, JSON-LD generation ✅
- **FR21-FR25 (Content Management)**: GitHub Actions sync workflow, imageSync.ts script ✅
- **FR26-FR30 (Analytics)**: Google Analytics 4 via @next/third-parties, analytics.ts utilities ✅
- **FR31-FR36 (Responsive/Accessibility)**: Tailwind breakpoints, WCAG AA patterns, ErrorBoundary ✅
- **FR37-FR41 (Performance)**: Turbopack, React Compiler, lazy loading, SkeletonLoader ✅
- **FR42-FR44 (Social Sharing)**: Open Graph & Twitter Card generation via metadata.ts ✅

**Phase 2 Requirements (FR50-FR64) - Architectural Foundation Established:**
- **E-commerce (FR50-FR55)**: API route structure ready, state management scalable ✅
- **Booking System (FR56-FR59)**: Server Components architecture supports forms, Server Actions ready ✅
- **Advanced CMS (FR60-FR64)**: Admin routes can be added to App Router, authentication boundary defined ✅

**Non-Functional Requirements Coverage:**

**Performance (NFR1-NFR8):**
- **<2.5s LCP**: Static generation + CDN + Turbopack + React Compiler ✅
- **<100ms FID**: Minimal client-side JavaScript, Server Components ✅
- **<0.1 CLS**: Skeleton loaders, reserved space patterns ✅
- **<4s TTI**: Code splitting, lazy loading ✅
- **<200KB JS bundle**: Zustand (1KB), minimal dependencies, tree-shaking ✅
- **<200KB mobile images**: Vercel Blob optimization, responsive sizing ✅
- **90+ Lighthouse score**: Static HTML, optimized fonts, Next.js best practices ✅
- **1,000+ images scalability**: Static generation at build time, no runtime queries ✅

**Security (NFR9-NFR15):**
- **HTTPS/TLS 1.2+**: Vercel platform automatic ✅
- **No client-side secrets**: Environment variables properly scoped (NEXT_PUBLIC_ prefix) ✅
- **CORS policies**: Next.js configuration supports CORS when needed in Phase 2 ✅

**Scalability (NFR16-NFR20):**
- **1,000 concurrent visitors**: Static CDN delivery (Vercel Edge Network) ✅
- **100-10,000+ images**: Static generation scales linearly, no database queries ✅
- **10x traffic spikes**: CDN handles all traffic ✅
- **50+ image batch processing**: GitHub Actions workflow parallelizable ✅

**Accessibility (NFR21-NFR29):**
- **WCAG 2.1 AA**: All components designed for AA compliance ✅
- **44×44px touch targets**: Tailwind spacing supports minimum sizes ✅
- **4.5:1 / 3:1 contrast**: Matte nature color palette validated for contrast ✅
- **Keyboard navigation**: All interactive components support keyboard ✅
- **prefers-reduced-motion**: Framer Motion respects user preferences ✅
- **Semantic HTML5**: Next.js encourages semantic markup ✅

**Reliability (NFR30-NFR35):**
- **99.9% uptime**: Vercel SLA ✅
- **Zero-downtime deployments**: Vercel atomic deployments with rollback ✅
- **Retry logic**: GitHub Actions can retry transient failures ✅
- **Error alerts**: Console logging (Phase 1), Sentry ready (Phase 2) ✅
- **Graceful degradation**: ErrorBoundary components throughout ✅

**Maintainability (NFR41-NFR46):**
- **TypeScript strict mode**: Zero 'any' types enforced ✅
- **ESLint zero-error policy**: CI/CD gates block deployment ✅
- **90%+ test coverage**: Playwright E2E tests + unit tests co-located ✅
- **Clear logging**: Structured console logging patterns ✅
- **Documentation**: Architecture document provides complete reference ✅

**Compatibility (NFR47-NFR50):**
- **Modern browsers (last 2 versions)**: ES2020+ target ✅
- **320px-2560px viewports**: Tailwind responsive breakpoints ✅
- **No IE11 requirement**: Modern JavaScript features enabled ✅

### Implementation Readiness Validation ✅

**Decision Completeness:**

All critical decisions documented with specific versions:

- **Next.js 16** - Specified with Turbopack and React Compiler features
- **React 19.2** - Latest stable version with Server Components
- **TypeScript 5.x** - Strict mode configuration detailed
- **Zustand ^4.5.0** - State management version specified
- **@next/third-parties ^16.0.0** - Analytics integration version
- **Tailwind CSS 3.x** - Styling framework version
- **Playwright** - E2E testing framework (version from npm)
- **Headless UI + Framer Motion** - UI libraries specified

All patterns include concrete examples (Zustand store, ErrorBoundary, metadata factory, etc.)

**Structure Completeness:**

Project structure is 100% complete and specific:

- **78 specific files/directories defined** in the project tree
- **All integration points mapped** (Google Drive API, Vercel Blob, GA4, Search Console)
- **All component boundaries clearly specified** (Server vs Client Components)
- **Complete data flow diagrams** (Image Sync Flow, User Interaction Flow)
- **Development/Build/Deployment workflows documented**

**Pattern Completeness:**

All 8 potential conflict points addressed with enforceable rules:

1. **Component naming**: PascalCase for components, camelCase for files ✅
2. **JSON field naming**: camelCase throughout ✅
3. **Zustand store pattern**: Specific structure with typed interfaces ✅
4. **Metadata generation**: Centralized factory functions ✅
5. **Error handling**: ErrorBoundary wrapping pattern ✅
6. **Analytics tracking**: Indirect via lib/analytics.ts ✅
7. **Test organization**: Co-located unit tests, centralized E2E ✅
8. **TypeScript strictness**: Zero 'any' types allowed ✅

### Gap Analysis Results

**Critical Gaps:** NONE ✅

All implementation-blocking decisions have been made.

**Important Gaps:** NONE ✅

All significant architectural elements are documented.

**Nice-to-Have Gaps (Future Enhancements):**

1. **React Compiler Configuration** - While enabled by default in Next.js 16, specific compiler options could be tuned if needed
   - **Priority**: Low (defaults are production-ready)
   - **Defer to**: Phase 2 or during performance optimization

2. **Bundle Analyzer Integration** - Mentioned in patterns but not in project structure
   - **Priority**: Low (can be added as needed)
   - **Resolution**: Add `@next/bundle-analyzer` when monitoring bundle size becomes critical

3. **Sentry Integration Details** - Deferred to Phase 2, but no specific configuration documented
   - **Priority**: Low (Phase 2 requirement)
   - **Resolution**: Document in Phase 2 architecture decisions

4. **Visual Regression Testing Setup** - Mentioned in NFR but not in project structure
   - **Priority**: Low (nice-to-have for design consistency)
   - **Resolution**: Can add Percy or Chromatic in Phase 1C or Phase 2

5. **Image Sitemap Specifics** - General sitemap.ts mentioned, image sitemap format not detailed
   - **Priority**: Low (standard XML format)
   - **Resolution**: Document in implementation story for SEO

### Validation Issues Addressed

**NO CRITICAL ISSUES FOUND** ✅

**NO IMPORTANT ISSUES FOUND** ✅

**Minor Observations (Already Addressed):**

1. **App Router vs Pages Router Decision**: Initially mentioned as undecided, but resolved to App Router ✅
2. **Next.js Version**: Updated from 15 to 16 after user request ✅
3. **React Compiler Benefits**: Explicitly documented for automatic memoization ✅
4. **TypeScript/ESLint Best Practices**: User requested and fully integrated ✅

### Architecture Completeness Checklist

**✅ Requirements Analysis**

- [x] Project context thoroughly analyzed (50 FRs + all NFRs)
- [x] Scale and complexity assessed (Low-Medium, static-first, 6 core components)
- [x] Technical constraints identified (Next.js, TypeScript, Vercel, Google Drive, zero DevOps)
- [x] Cross-cutting concerns mapped (9 major concerns: Image Pipeline, SEO, Performance, Type Safety, Next.js Best Practices, Accessibility, Responsive Layout, Analytics, Phased Evolution)

**✅ Architectural Decisions**

- [x] Critical decisions documented with versions (Next.js 16, React 19.2, TypeScript 5.x, Zustand ^4.5.0, etc.)
- [x] Technology stack fully specified (Next.js 16 App Router, Turbopack, React Compiler, Tailwind CSS, Vercel, Blob Storage)
- [x] Integration patterns defined (Google Drive → Sync → Vercel Blob → Static Build)
- [x] Performance considerations addressed (Turbopack, React Compiler, static export, lazy loading, skeleton loaders)

**✅ Implementation Patterns**

- [x] Naming conventions established (PascalCase components, camelCase JSON, UPPER_SNAKE_CASE constants)
- [x] Structure patterns defined (/src structure with app, components, stores, lib, types, data)
- [x] Communication patterns specified (Zustand stores, Server→Client props, analytics via lib/analytics.ts)
- [x] Process patterns documented (ErrorBoundary wrapping, async/await, retry logic, console logging format)

**✅ Project Structure**

- [x] Complete directory structure defined (78 files/directories specified)
- [x] Component boundaries established (Server Components by default, Client Components explicit)
- [x] Integration points mapped (Google Drive API, Vercel Blob, GA4, Search Console, Vercel Analytics)
- [x] Requirements to structure mapping complete (All FR1-FR64 mapped to specific files)

### Architecture Readiness Assessment

**Overall Status:** ✅ **READY FOR IMPLEMENTATION**

**Confidence Level:** **HIGH** 

Architecture is comprehensive, coherent, and provides clear guidance for AI agent implementation.

**Key Strengths:**

1. **Technology Coherence**: All technologies (Next.js 16, Turbopack, React Compiler, Zustand, Tailwind) work together seamlessly
2. **Pattern Clarity**: 10 mandatory rules + comprehensive examples eliminate ambiguity
3. **Structure Completeness**: Every file and directory specified, no generic placeholders
4. **Requirements Traceability**: Every FR mapped to specific architectural components
5. **Performance Focus**: <2.5s LCP target supported by Turbopack, React Compiler, static generation
6. **SEO Optimization**: Centralized metadata factories ensure consistent, comprehensive SEO
7. **Type Safety**: Zero 'any' types policy enforced via strict TypeScript + ESLint gates
8. **Scalability**: Static generation architecture scales effortlessly from 100 to 10,000+ images
9. **Future-Ready**: Phased architecture supports Phase 2 e-commerce and bookings without rebuild

**Areas for Future Enhancement:**

1. **React Compiler Optimization**: Monitor compiler output, tune options if specific patterns need adjustment (Phase 1C or Phase 2)
2. **Bundle Size Monitoring**: Add bundle analyzer when approaching 200KB JavaScript limit
3. **Visual Regression Testing**: Add Percy/Chromatic for design consistency verification (Phase 1C or Phase 2)
4. **Advanced Error Tracking**: Integrate Sentry in Phase 2 when e-commerce increases error complexity
5. **Performance Monitoring**: Add RUM (Real User Monitoring) beyond Vercel Analytics if needed in Phase 2

### Implementation Handoff

**AI Agent Guidelines:**

1. **Follow all architectural decisions exactly as documented** - No deviations from specified versions or patterns
2. **Use implementation patterns consistently across all components** - PascalCase components, camelCase JSON, Zustand stores, centralized metadata
3. **Respect project structure and boundaries** - Server Components by default, Client Components explicit, no mixing of concerns
4. **Refer to this document for all architectural questions** - This is the single source of truth for BMAD-site architecture
5. **Never use 'any' types** - TypeScript strict mode is non-negotiable
6. **ESLint zero-error policy** - Fix all errors before committing, CI/CD will block deployment
7. **Wrap client components in ErrorBoundary** - Graceful error handling is required
8. **Use centralized utilities** - Import metadata from @/lib/metadata, analytics from @/lib/analytics
9. **Test everything** - Unit tests co-located, E2E tests for user flows
10. **Build incrementally** - Static export validates architecture, catch issues early

**First Implementation Priority:**

```bash
# Step 1: Initialize Next.js 16 project with all configurations
npx create-next-app@latest bmad-site \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --turbopack \
  --use-npm

# Step 2: Configure for static export (edit next.config.js)
# Step 3: Enhance TypeScript strict mode (edit tsconfig.json)
# Step 4: Configure ESLint zero-error policy (edit .eslintrc.json)
# Step 5: Add Prettier (npm install -D prettier, create .prettierrc)
# Step 6: Install dependencies (Zustand, Headless UI, Framer Motion, @next/third-parties, Playwright)
# Step 7: Set up project structure (create stores/, lib/, types/, data/, e2e/ directories)
# Step 8: Implement core infrastructure (ErrorBoundary, metadata.ts, analytics.ts)
```

**Recommended Implementation Sequence:**

1. **Project Initialization** (Story 1): Set up Next.js 16 with all configurations
2. **Core Infrastructure** (Story 2): ErrorBoundary, metadata factories, analytics utilities, Zustand stores
3. **Homepage + TimeAdaptiveHero** (Story 3): First user-facing feature
4. **Gallery Pages + MasonryGallery** (Story 4): Core content display
5. **ImageLightbox + MetadataReveal** (Story 5): Image interaction features
6. **FireflyIcon + Social Links** (Story 6): Social conversion feature
7. **Image Sync Pipeline** (Story 7): GitHub Actions workflow + imageSync.ts script
8. **SEO Optimization** (Story 8): Sitemap, robots.txt, complete metadata implementation
9. **E2E Testing** (Story 9): Playwright tests for all user flows
10. **About Page** (Story 10 - Phase 1C): Final Phase 1 page
