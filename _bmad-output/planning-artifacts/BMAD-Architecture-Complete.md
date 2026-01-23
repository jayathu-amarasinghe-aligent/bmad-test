# BMAD Wildlife Photography Portfolio
## Architecture Decision Document

**Project:** BMAD-site
**Author:** Architect Agent (with Jay)
**Date:** January 23, 2026
**Version:** 1.0 (Complete)
**Status:** Ready for Implementation

---

## Executive Summary

This document defines the complete architecture for BMAD-site, a high-performance wildlife photography portfolio built with Next.js 16, optimized for SEO, performance, and social conversion. The architecture supports fully static generation with automated image sync from Google Drive to Vercel Blob Storage, delivering sub-2.5s page loads while maintaining exceptional image quality.

### Key Architectural Decisions

- **Framework**: Next.js 16 with App Router, Turbopack (stable), React Compiler
- **Language**: TypeScript 5.x with strict mode (zero 'any' types policy)
- **Deployment**: Vercel Platform with Edge Network (static export)
- **State Management**: Zustand for client-side coordination
- **Image Pipeline**: GitHub Actions automated sync (Google Drive → Vercel Blob)
- **Analytics**: Google Analytics 4 via @next/third-parties
- **Testing**: Playwright E2E + Jest unit tests
- **SEO**: Centralized metadata factory functions with JSON-LD

### Performance Targets

- **LCP**: <2.5s desktop, <3s mobile
- **FID**: <100ms
- **CLS**: <0.1
- **JavaScript Bundle**: <200KB gzipped
- **Lighthouse Score**: 90+ consistently

---

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Component Architecture](#component-architecture)
3. [Data Flow](#data-flow)
4. [Project Structure](#project-structure)
5. [Technology Stack](#technology-stack)
6. [Core Architectural Decisions](#core-architectural-decisions)
7. [Implementation Patterns](#implementation-patterns)
8. [Requirements Coverage](#requirements-coverage)
9. [Implementation Roadmap](#implementation-roadmap)

---

## System Architecture

### High-Level Architecture Diagram

![System Architecture](diagrams/system-architecture.excalidraw.md)

### Architecture Components

#### 1. Image Source & Sync Pipeline
- **Google Drive API**: Source of truth for all photographs
- **GitHub Actions Workflow**: Daily automated sync (2 AM UTC) + manual trigger
- **Image Optimizer**: WebP/AVIF conversion, responsive sizing
- **Vercel Blob Storage**: CDN for optimized image delivery

#### 2. Application Layer
- **Next.js 16 Application**: Static site with App Router
- **Server Components**: Default for all pages (optimal static generation)
- **Client Components**: Interactive features only (marked with 'use client')
- **Zustand Stores**: Client-side state management

#### 3. Deployment & Delivery
- **Vercel Platform**: Zero-configuration deployment
- **Edge Network**: Global CDN for static assets
- **Atomic Deployments**: Zero-downtime with automatic rollback

#### 4. Analytics & Monitoring
- **Google Analytics 4**: Visitor behavior and social conversion tracking
- **Google Search Console**: SEO performance monitoring
- **Vercel Analytics**: Core Web Vitals real user monitoring

### Integration Points

**External Integrations:**
- Google Drive API (read-only, image source)
- Vercel Blob Storage (image CDN)
- Google Analytics 4 (event tracking)
- Google Search Console (SEO monitoring)

**Internal Communication:**
- Server Components → Client Components (props)
- Client Components → Zustand Stores (state)
- All Components → Analytics (via lib/analytics.ts)
- All Pages → Metadata (via lib/metadata.ts)

---

## Component Architecture

### Component Hierarchy Diagram

![Component Architecture](diagrams/component-architecture.excalidraw.md)

### Component Boundaries

#### Server Components (Default)
All pages are Server Components by default for optimal static generation:

- **app/layout.tsx**: Root layout with ErrorBoundary wrapper
- **app/page.tsx**: Homepage with static hero background
- **app/gallery/[category]/page.tsx**: Gallery pages (Color/B&W categories)
- **app/about/page.tsx**: About page (Phase 1C)

#### Client Components ('use client')
Interactive components requiring client-side JavaScript:

- **TimeAdaptiveHero**: Time-of-day detection (dawn/midday/dusk/night)
- **MasonryGallery**: Infinite scroll image grid with IntersectionObserver
- **ImageLightbox**: Full-screen image viewer with keyboard navigation
- **MetadataReveal**: Behind-the-lens metadata overlay (hover/click)
- **FireflyIcon**: Animated social media icon with analytics tracking
- **ErrorBoundary**: React error boundary for graceful error handling

#### State Management (Zustand)
Three specialized stores for client-side state:

- **useLightboxStore**: Lightbox open/close, current image, navigation
- **useGalleryStore**: Infinite scroll state, loaded image batches
- **useTimeStore**: Time-of-day state for hero background

### Component Communication Patterns

**Server → Client Props:**
```typescript
// Homepage Server Component passes time-of-day to TimeAdaptiveHero
<TimeAdaptiveHero initialTime={timeOfDay} />

// Gallery Server Component passes filtered images to MasonryGallery
<MasonryGallery images={colorImages} category="color" />
```

**Client → Zustand Store:**
```typescript
// Component reads/writes store
const { isOpen, open, close } = useLightboxStore()
```

**Component → Analytics:**
```typescript
// All analytics events go through lib/analytics.ts
import { trackSocialClick } from '@/lib/analytics'
trackSocialClick('instagram')
```

---

## Data Flow

### Image Sync & Build Flow Diagram

![Data Flow](diagrams/data-flow.excalidraw.md)

### Automated Image Sync Pipeline

**Daily Workflow (2 AM UTC):**

1. **Fetch**: GitHub Actions triggers sync script, queries Google Drive API
2. **Download**: Download full-resolution images to temporary storage
3. **Optimize**: Convert to WebP/AVIF, compress for web delivery (<200KB mobile, <500KB desktop)
4. **Upload**: Upload optimized images to Vercel Blob Storage, receive CDN URLs
5. **Generate Metadata**: Create `src/data/images.json` with:
   - Image CDN URLs
   - SEO-optimized alt text
   - Camera metadata (model, settings, location)
   - Behind-the-lens stories
   - Image dimensions
6. **Commit**: GitHub Actions commits `images.json` to repository
7. **Trigger Build**: Vercel detects commit, starts Next.js build
8. **Static Generation**: Next.js reads `images.json`, generates static HTML/CSS/JS
9. **Deploy**: Static site deployed to Vercel Edge Network

**Result**: Zero manual intervention, new images appear on site within 5-10 minutes

### User Interaction Flow

1. User visits homepage → Server Component renders
2. TimeAdaptiveHero (client) detects time → updates useTimeStore
3. User clicks gallery link → Gallery Server Component renders
4. Gallery filters images.json by category → passes to MasonryGallery (client)
5. MasonryGallery uses IntersectionObserver → lazy loads images
6. User clicks image → ImageLightbox opens (useLightboxStore updated)
7. User clicks social icon → trackSocialClick() → sends event to GA4

---

## Project Structure

### Directory Structure Diagram

![Project Structure](diagrams/project-structure.excalidraw.md)

### Complete Project Tree

```
bmad-site/
├── README.md
├── package.json
├── package-lock.json
├── next.config.js                   # Static export, Turbopack, image config
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
│   │   ├── layout.tsx               # Root layout with ErrorBoundary, GA4
│   │   ├── page.tsx                 # Homepage with TimeAdaptiveHero
│   │   ├── globals.css              # Tailwind directives, global styles
│   │   ├── sitemap.ts               # Sitemap generation
│   │   ├── robots.ts                # Robots.txt configuration
│   │   ├── gallery/
│   │   │   └── [category]/
│   │   │       └── page.tsx         # Gallery pages (color/bw)
│   │   └── about/
│   │       └── page.tsx             # About page (Phase 1C)
│   ├── components/
│   │   ├── ErrorBoundary.tsx        # Global error boundary
│   │   ├── TimeAdaptiveHero.tsx     # Time-adaptive hero (client)
│   │   ├── TimeAdaptiveHero.test.tsx
│   │   ├── MasonryGallery.tsx       # Infinite scroll gallery (client)
│   │   ├── MasonryGallery.test.tsx
│   │   ├── ImageLightbox.tsx        # Full-screen lightbox (client)
│   │   ├── ImageLightbox.test.tsx
│   │   ├── MetadataReveal.tsx       # Behind-the-lens metadata
│   │   ├── MetadataReveal.test.tsx
│   │   ├── FireflyIcon.tsx          # Animated social icon (client)
│   │   ├── FireflyIcon.test.tsx
│   │   ├── SkeletonLoader.tsx       # Skeleton loading placeholders
│   │   └── SkeletonLoader.test.tsx
│   ├── stores/
│   │   ├── useLightboxStore.ts      # Lightbox state management
│   │   ├── useGalleryStore.ts       # Gallery infinite scroll state
│   │   └── useTimeStore.ts          # Time-of-day state
│   ├── lib/
│   │   ├── metadata.ts              # Centralized SEO metadata factories
│   │   ├── analytics.ts             # GA4 event tracking utilities
│   │   ├── utils.ts                 # General utility functions
│   │   ├── imageSync.ts             # Google Drive → Vercel Blob script
│   │   └── test-utils.ts            # Shared test utilities
│   ├── types/
│   │   ├── index.ts                 # Exported types
│   │   └── image.ts                 # ImageData, ImageMetadata interfaces
│   ├── data/
│   │   └── images.json              # Generated by GitHub Actions
│   └── styles/
│       └── globals.css              # Additional global styles
├── e2e/
│   ├── homepage.spec.ts             # E2E test for homepage
│   ├── gallery.spec.ts              # E2E test for gallery navigation
│   ├── lightbox.spec.ts             # E2E test for lightbox
│   └── social-conversion.spec.ts   # E2E test for social tracking
├── public/
│   ├── favicon.ico
│   ├── og-default.jpg               # Default Open Graph image
│   └── robots.txt                   # Generated by app/robots.ts
├── scripts/
│   └── sync-images.sh               # Helper script for manual sync
└── playwright.config.ts             # Playwright E2E test configuration
```

### File Organization Patterns

**Configuration Files (Root):**
- All configuration at project root for easy access
- next.config.js, tsconfig.json, .eslintrc.json, tailwind.config.ts, playwright.config.ts

**Source Organization (/src):**
- **app/**: Next.js App Router pages (file-based routing)
- **components/**: Reusable React components (tests co-located)
- **stores/**: Zustand stores (one file per store)
- **lib/**: Utilities, metadata, analytics, sync script
- **types/**: TypeScript type definitions
- **data/**: Static JSON data (images.json from sync)

**Test Organization:**
- **Unit Tests**: Co-located with components (Component.test.tsx)
- **E2E Tests**: Centralized in /e2e folder
- **Test Utilities**: /src/lib/test-utils.ts

---

## Technology Stack

### Core Technologies

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Framework** | Next.js | 16 | App Router, static export, Turbopack |
| **Runtime** | React | 19.2 | Server Components, React Compiler |
| **Language** | TypeScript | 5.x | Strict type checking (zero 'any' types) |
| **Styling** | Tailwind CSS | 3.x | Utility-first CSS with JIT compiler |
| **State** | Zustand | ^4.5.0 | Lightweight client-side state (1KB) |
| **Testing** | Playwright | Latest | E2E testing framework |
| **Analytics** | @next/third-parties | ^16.0.0 | Google Analytics 4 integration |
| **Platform** | Vercel | - | Deployment, Edge Network, Blob Storage |

### Additional Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| Headless UI | Latest | Accessible unstyled components |
| Framer Motion | Latest | Animations (respects prefers-reduced-motion) |
| ESLint | Latest | Code quality (zero-error policy) |
| Prettier | Latest | Code formatting |
| @vercel/blob | Latest | Vercel Blob Storage SDK |

### Browser Support

- **Desktop**: Chrome, Safari, Firefox, Edge (last 2 versions)
- **Mobile**: Safari iOS, Chrome Android (last 2 versions)
- **Viewport**: 320px to 2560px+ (responsive design)
- **No IE11 support** (modern JavaScript ES2020+)

---

## Core Architectural Decisions

### 1. Next.js 16 with App Router (Static Export)

**Decision:** Use Next.js 16 App Router with static export (`output: 'export'`)

**Rationale:**
- Latest stable version with Turbopack and React Compiler
- App Router provides better performance than Pages Router
- Server Components by default reduce client-side JavaScript
- Static export ideal for content-focused site with SEO requirements
- Turbopack provides significantly faster builds (important for image-heavy site)
- React Compiler automatically optimizes components (no manual memoization)

**Configuration:**
```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
    ],
  },
}
```

### 2. State Management: Zustand

**Decision:** Use Zustand for client-side state management

**Rationale:**
- Lightweight (1KB gzipped) fits within <200KB JavaScript bundle target
- TypeScript-first with excellent type inference
- Minimal boilerplate compared to Redux or Context API
- Perfect for coordinating state across isolated client components
- No provider setup needed

**Use Cases:**
- Lightbox state (open/closed, current image, navigation)
- Gallery state (infinite scroll position, loaded images)
- Time-of-day state (dawn/midday/dusk/night for hero)
- Analytics event queue

**Example:**
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

### 3. Image Sync Pipeline: GitHub Actions

**Decision:** Automated GitHub Actions workflow for image sync

**Rationale:**
- Fully automated sync from Google Drive to Vercel Blob Storage
- Version-controlled image metadata (JSON committed to git)
- Scheduled daily sync (2 AM UTC) + manual trigger capability
- Triggers Vercel deployment automatically after sync
- Zero manual intervention for new image uploads

**Workflow:**
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

### 4. SEO & Metadata: Centralized Factory Functions

**Decision:** Centralized metadata generation via factory functions

**Rationale:**
- Extensive SEO requirements (Open Graph, Twitter Cards, JSON-LD)
- Consistency across all pages and gallery categories
- Single source of truth for photographer info, social handles, base URL
- Easy to maintain and update schema definitions
- Supports both static and dynamic metadata generation

**Example:**
```typescript
// src/lib/metadata.ts
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

// Usage in page
export const metadata = generatePageMetadata({
  title: 'Wildlife Photography Portfolio',
  description: 'Professional wildlife photography from around the world',
})
```

### 5. Analytics: @next/third-parties for GA4

**Decision:** Use @next/third-parties for Google Analytics 4 integration

**Rationale:**
- Official Next.js 16 integration for third-party scripts
- Optimized loading (doesn't block rendering or affect LCP)
- Built-in TypeScript support
- Simple event tracking API
- Vercel Analytics already included for Core Web Vitals

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

// src/lib/analytics.ts
import { sendGAEvent } from '@next/third-parties/google'

export function trackSocialClick(platform: 'instagram' | 'facebook') {
  sendGAEvent({
    event: 'social_click',
    value: platform,
    category: 'engagement',
  })
}
```

### 6. Error Handling: React Error Boundaries

**Decision:** React Error Boundaries + console logging (Phase 1)

**Rationale:**
- Phase 1 is fully static site with limited error scenarios
- Client components are the only runtime error source
- Error boundaries provide graceful degradation
- Console logging sufficient for initial monitoring
- Defer Sentry to Phase 2 when e-commerce/bookings add complexity

**Implementation:**
```typescript
// src/components/ErrorBoundary.tsx
'use client'

export class ErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error Boundary caught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please refresh.</div>
    }
    return this.props.children
  }
}

// Usage in layout
<ErrorBoundary>
  <MasonryGallery images={images} />
</ErrorBoundary>
```

---

## Implementation Patterns

### Naming Patterns

**Component & File Naming:**
- Component files: PascalCase (`TimeAdaptiveHero.tsx`, `MasonryGallery.tsx`)
- Non-component files: camelCase (`metadata.ts`, `imageSync.ts`)
- Zustand stores: `use[Name]Store.ts` (`useLightboxStore.ts`)
- Types/Interfaces: PascalCase in dedicated `types.ts` files

**TypeScript Naming:**
- Variables: camelCase (`imageUrl`, `currentIndex`)
- Constants: UPPER_SNAKE_CASE (`MAX_IMAGES_PER_BATCH`, `DEFAULT_TIMEOUT`)
- Functions: camelCase (`generatePageMetadata`, `trackSocialClick`)
- Interfaces: PascalCase (`ImageMetadata`, `LightboxState`)

**JSON Field Naming:**
- Image metadata JSON: camelCase (`imageUrl`, `altText`, `cameraSettings`)
- Environment variables: UPPER_SNAKE_CASE (`NEXT_PUBLIC_GA_ID`)

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

### Format Patterns

**Image Metadata JSON Structure (MUST follow exactly):**
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

### Communication Patterns

**Zustand Store Structure (MUST follow):**
```typescript
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

### Mandatory Rules for AI Agents

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

---

## Requirements Coverage

### Functional Requirements (FR1-FR50)

| Requirement | Component/File | Status |
|-------------|---------------|--------|
| **FR1-FR6: Content Discovery & Navigation** | | |
| Time-adaptive hero | TimeAdaptiveHero.tsx, useTimeStore.ts | ✅ |
| Category browsing | gallery/[category]/page.tsx | ✅ |
| Infinite scroll masonry | MasonryGallery.tsx, useGalleryStore.ts | ✅ |
| **FR7-FR12: Image Viewing** | | |
| Progressive image loading | MasonryGallery.tsx (lazy loading) | ✅ |
| Behind-the-lens metadata | MetadataReveal.tsx | ✅ |
| Full-screen lightbox | ImageLightbox.tsx, useLightboxStore.ts | ✅ |
| **FR13-FR15: Social Media** | | |
| Social icon links | FireflyIcon.tsx | ✅ |
| Conversion tracking | lib/analytics.ts (trackSocialClick) | ✅ |
| **FR16-FR20: SEO** | | |
| Pre-rendered HTML | Next.js static export | ✅ |
| Meta tags | lib/metadata.ts (generatePageMetadata) | ✅ |
| Sitemap | app/sitemap.ts | ✅ |
| JSON-LD structured data | lib/metadata.ts (generateJSONLD) | ✅ |
| **FR21-FR25: Content Management** | | |
| Google Drive integration | lib/imageSync.ts, .github/workflows/sync-images.yml | ✅ |
| Automated sync | GitHub Actions daily workflow | ✅ |
| Image optimization | imageSync.ts (WebP/AVIF conversion) | ✅ |
| **FR26-FR30: Analytics** | | |
| GA4 integration | app/layout.tsx (GoogleAnalytics component) | ✅ |
| Event tracking | lib/analytics.ts | ✅ |
| Core Web Vitals | Vercel Analytics (automatic) | ✅ |
| **FR31-FR36: Responsive & Accessibility** | | |
| WCAG AA compliance | All components (semantic HTML, ARIA) | ✅ |
| Keyboard navigation | All interactive components | ✅ |
| Screen reader support | ErrorBoundary, semantic markup | ✅ |
| **FR37-FR41: Performance** | | |
| <2.5s LCP | Turbopack, React Compiler, static export | ✅ |
| Lazy loading | MasonryGallery.tsx (IntersectionObserver) | ✅ |
| Skeleton loaders | SkeletonLoader.tsx | ✅ |
| **FR42-FR44: Social Sharing** | | |
| Open Graph tags | lib/metadata.ts (openGraph) | ✅ |
| Twitter Cards | lib/metadata.ts (twitter) | ✅ |

### Non-Functional Requirements

| Category | Target | Architectural Support | Status |
|----------|--------|----------------------|--------|
| **Performance** | | | |
| LCP | <2.5s desktop, <3s mobile | Turbopack, React Compiler, static export, CDN | ✅ |
| FID | <100ms | Minimal client JS, Server Components | ✅ |
| CLS | <0.1 | Skeleton loaders, reserved space | ✅ |
| TTI | <4s | Code splitting, lazy loading | ✅ |
| JS Bundle | <200KB gzipped | Zustand (1KB), tree-shaking, no heavy deps | ✅ |
| Lighthouse | 90+ | All performance optimizations combined | ✅ |
| **Security** | | | |
| HTTPS/TLS 1.2+ | Required | Vercel platform automatic | ✅ |
| No client secrets | Required | Env vars properly scoped (NEXT_PUBLIC_) | ✅ |
| **Scalability** | | | |
| 1,000 concurrent users | Required | Static CDN delivery (Vercel Edge) | ✅ |
| 100-10,000+ images | Required | Static generation, no database queries | ✅ |
| **Accessibility** | | | |
| WCAG 2.1 AA | Required | All components AA-compliant | ✅ |
| Keyboard navigation | Required | All interactive components | ✅ |
| Screen readers | Required | Semantic HTML, ARIA labels | ✅ |
| **Maintainability** | | | |
| TypeScript strict | Zero 'any' types | tsconfig.json strict mode | ✅ |
| ESLint | Zero errors | .eslintrc.json with CI/CD gates | ✅ |
| Test coverage | 90%+ critical paths | Playwright E2E + unit tests | ✅ |

---

## Implementation Roadmap

### Phase 1A: Foundation (Stories 1-4)

**Story 1: Project Initialization**
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
- Configure next.config.js for static export
- Enhance tsconfig.json for strict mode
- Configure .eslintrc.json for zero-error policy
- Add Prettier configuration
- Set up project structure (stores/, lib/, types/, data/, e2e/)

**Story 2: Core Infrastructure**
- Create ErrorBoundary component
- Create metadata factory functions (lib/metadata.ts)
- Create analytics utilities (lib/analytics.ts)
- Set up Zustand stores (useLightboxStore, useGalleryStore, useTimeStore)
- Configure Tailwind with matte nature color palette
- Set up Google Fonts (Cormorant Garamond, Inter)

**Story 3: Homepage + TimeAdaptiveHero**
- Create app/page.tsx (Homepage Server Component)
- Create TimeAdaptiveHero component (client)
- Implement time-of-day detection
- Connect to useTimeStore
- Add metadata generation
- Write unit tests and E2E tests

**Story 4: Gallery Pages + MasonryGallery**
- Create app/gallery/[category]/page.tsx
- Create MasonryGallery component (client)
- Implement infinite scroll with IntersectionObserver
- Connect to useGalleryStore
- Add SkeletonLoader components
- Write unit tests and E2E tests

### Phase 1B: Core Features (Stories 5-7)

**Story 5: ImageLightbox + MetadataReveal**
- Create ImageLightbox component (client)
- Create MetadataReveal component (client)
- Connect to useLightboxStore
- Implement keyboard navigation
- Add ARIA labels for accessibility
- Write unit tests and E2E tests

**Story 6: FireflyIcon + Social Links**
- Create FireflyIcon component (client)
- Implement animation with Framer Motion
- Add analytics tracking (trackSocialClick)
- Test social conversion tracking
- Write E2E test for social clicks

**Story 7: Image Sync Pipeline**
- Create lib/imageSync.ts script
- Implement Google Drive API integration
- Add image optimization (WebP/AVIF conversion)
- Implement Vercel Blob Storage upload
- Create .github/workflows/sync-images.yml
- Test manual and scheduled sync
- Create images.json schema and validation

### Phase 1C: SEO & Polish (Stories 8-10)

**Story 8: SEO Optimization**
- Create app/sitemap.ts (sitemap generation)
- Create app/robots.ts (robots.txt)
- Implement JSON-LD structured data
- Add image sitemap for Google Images
- Test SEO meta tags across all pages
- Verify Open Graph and Twitter Card previews

**Story 9: E2E Testing Suite**
- Create e2e/homepage.spec.ts
- Create e2e/gallery.spec.ts
- Create e2e/lightbox.spec.ts
- Create e2e/social-conversion.spec.ts
- Configure Playwright CI/CD gates
- Achieve 90%+ coverage on critical paths

**Story 10: About Page**
- Create app/about/page.tsx
- Add photographer bio content
- Implement metadata generation
- Write tests
- Final polish and deployment

### Phase 2: E-commerce & Bookings (Future)

**Deferred Features:**
- E-commerce integration (print sales, Stripe payments)
- Booking system (safari tour inquiries, scheduling)
- Advanced CMS (admin dashboard, bulk uploads)
- Sentry error tracking
- Database integration (Vercel Postgres or Supabase)
- Authentication system (NextAuth.js)

---

## Appendices

### A. Environment Variables

```bash
# .env.example

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://bmad-site.vercel.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# GitHub Actions Secrets (not in .env)
# GOOGLE_DRIVE_API_KEY
# VERCEL_BLOB_TOKEN
```

### B. Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "playwright test",
    "test:ui": "playwright test --ui",
    "sync-images": "node src/lib/imageSync.ts",
    "format": "prettier --write ."
  }
}
```

### C. TypeScript Configuration

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### D. ESLint Configuration

```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/strict"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-imports": "warn",
    "import/order": [
      "warn",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc" }
      }
    ]
  }
}
```

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-23 | Architect Agent + Jay | Complete architecture document with all 7 workflow steps |

---

**This architecture document serves as the single source of truth for all implementation decisions in the BMAD-site project. All AI agents and developers must follow the patterns, rules, and structures defined herein.**

**For questions or clarifications, refer to the specific sections above or consult the original workflow steps in `_bmad/bmm/workflows/3-solutioning/create-architecture/`.**
