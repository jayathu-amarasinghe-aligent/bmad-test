---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish']
inputDocuments: ['_bmad-output/planning-artifacts/product-brief-BMAD-site-2026-01-14.md', '_bmad-output/planning-artifacts/wireframe.excalidraw']
briefCount: 1
researchCount: 0
brainstormingCount: 0
projectDocsCount: 0
workflowType: 'prd'
classification:
  projectType: 'web_app'
  domain: 'general'
  complexity: 'low-medium'
  projectContext: 'greenfield'
---

# Product Requirements Document - BMAD-site

**Author:** jay
**Date:** 2026-01-16

## Success Criteria

### User Success

Success for BMAD-site users is measured by engagement quality and conversion to social media followers:

**Discovery & First Impression:**
- Users see the hero image within 1 second (page load performance target)
- 90%+ of visitors understand navigation within 30 seconds
- Immediate "wow" moment from full-screen time-adaptive hero image

**Engagement Quality:**
- Users explore 3+ images per gallery visit (indicates genuine interest)
- Average session duration >2 minutes (deep engagement with content)
- Pages per visit >3 pages (active exploration across galleries)
- Bounce rate <40% (content resonates and encourages exploration)
- "Behind the Lens" hover/click engagement >15% of gallery viewers (deeper connection with photography stories)

**Conversion Success:**
- Social media click-through rate >20% of visitors (primary Phase 1 goal - visitor → follower conversion)
- Return visitor rate >25% within 30 days (memorable experience drives repeat visits)

**Phase 2 Conversion (Post-MVP):**
- Print request captures >5% of engaged gallery viewers
- Safari inquiry rate >2% of visitors who view ecosystem galleries

### Business Success

Business success is measured in two distinct phases, focusing first on audience growth and credibility, then transitioning to monetization.

**Phase 1: Reach & Social Growth (Months 1-6)**

*Primary Objective: Establish the portfolio as a social media growth engine*

- **Social Follower Growth:** +50 Instagram followers/month driven by site traffic (validates portfolio → social conversion strategy)
- **Site Traffic Growth:** 500+ monthly visitors by Month 3, 1000+ by Month 6
- **Search Discoverability:** Top 3 Google pages for "wildlife photography" and specific animal/ecosystem keywords
- **Organic Traffic Dominance:** >60% of total traffic from organic search by Month 6 (validates SEO strategy)
- **Print Interest Validation:** 20+ email captures for print interest by Month 6 (validates Phase 2 demand)
- **Community Validation:** Site URL shared organically in photography communities, referral traffic growing month-over-month

**Phase 2: Monetization (Post-Validation)**

*Triggered when Phase 1 achieves 85%+ success criteria AND print interest >20 emails*

- **Print Sales Revenue:** $500+/month within 3 months of e-commerce launch
- **Safari Booking Pipeline:** 5+ qualified safari inquiries within 6 months
- **Customer Acquisition Cost:** <$20 per print sale (leveraging organic traffic advantage)
- **Average Order Value:** $200+ per print sale
- **Business Sustainability:** Positive ROI on development investment through combined revenue streams

**Long-term Strategic Success (12+ months):**

- **Passive Income Growth:** Site becomes compounding asset as SEO improves and content library expands
- **Market Positioning:** Recognized as distinctive portfolio example in wildlife photography community
- **Brand Recognition:** Direct searches for photographer name trending upward month-over-month

### Technical Success

Technical excellence enables user and business success through performance, discoverability, and quality assurance.

**Performance Targets:**

- **Lighthouse Performance Score:** 90+ consistently across all pages
- **Largest Contentful Paint (LCP):** <2.5 seconds (critical for hero image impact)
- **Cumulative Layout Shift (CLS):** <0.1 (smooth, calm experience without jarring shifts)
- **Page Load Time:** <3 seconds on 3G mobile (ensures accessibility on slower connections)
- **Mobile vs Desktop Parity:** <10% performance difference between devices
- **Image Optimization:** 100% of images <200KB on mobile with automatic responsive sizing

**SEO Effectiveness:**

- **Google Images Indexing:** 100% of uploaded images indexed within 7 days
- **Organic Search Growth:** 20%+ month-over-month traffic growth for first 6 months
- **Keyword Rankings:** 5+ wildlife/ecosystem keywords in top 3 Google pages
- **Meta Tag CTR:** >60% click-through rate from search results to site
- **Structured Data:** Perfect JSON-LD implementation for rich search results

**Quality Assurance:**

- **Zero Critical Bugs:** No production-blocking issues (enforced through Playwright CI/CD gates)
- **Cross-Browser Compatibility:** Perfect rendering on Chrome, Safari, Firefox, Edge
- **Accessibility:** WCAG AA minimum compliance (ensures inclusive access)
- **Deployment Reliability:** Zero failed deployments, all preview environments working
- **Monitoring Coverage:** 100% of critical user paths covered by E2E tests

### Measurable Outcomes

**3-Month Success Checkpoint:**

- ✅ Lighthouse Performance Score: 90+ consistently
- ✅ Social media click-through: >20% of visitors
- ✅ Average session duration: >2 minutes
- ✅ Monthly visitors: 500+
- ✅ Organic traffic: >60% of total
- ✅ Google Images indexing: 80%+ within 7 days
- ✅ Zero critical bugs in production

**6-Month Success Checkpoint:**

- ✅ Social follower growth: +300 Instagram followers from site (50/month × 6)
- ✅ Monthly visitors: 1000+
- ✅ Print interest captures: 20+ emails
- ✅ Return visitor rate: >25% within 30 days
- ✅ Site shared organically in photography communities
- ✅ Referral traffic increasing month-over-month

**Go/No-Go Decision Criteria:**

- **Proceed to Phase 1D (Enhanced Features):** If 70%+ of Phase 1 success criteria met → expand navigation features (ecosystem-based galleries, curated collections)
- **Proceed to Phase 2 (Monetization):** If 85%+ Phase 1 criteria met AND print interest >20 emails → invest in e-commerce and booking systems
- **Iterate MVP:** If <70% criteria met → refine before expanding scope
- **Pivot:** If user engagement low despite technical success → reassess value proposition

## Product Scope

### MVP - Minimum Viable Product

**Phase 1A: Foundation (Weeks 1-4)**

*Core Infrastructure & Homepage Experience*

**Technical Infrastructure:**
- Next.js project setup with TypeScript for type safety
- Vercel deployment pipeline with continuous deployment and preview environments
- Google Drive integration for image source management
- Vercel Blob Storage for reliable CDN-backed image serving
- Sync pipeline: automated script pulls from Drive → optimizes → uploads to Blob Storage

**Homepage Experience:**
- Time-of-Day Adaptive Hero: Full-screen hero image changes based on visitor's local time
  - Dawn (5-9am): Sunrise/morning wildlife shots
  - Midday (9am-5pm): Bright daylight images
  - Dusk (5-8pm): Golden hour photos
  - Night (8pm-5am): Nocturnal wildlife
- Minimal navigation with progressive disclosure and subtle hints for first-time visitors
- Intentional page navigation (not scroll) between homepage and galleries

**Gallery System:**
- Color/B&W Categories: Simple two-category navigation as MVP starting point
- Responsive Masonry Layout:
  - Desktop: 3-4 columns with varying heights
  - Tablet: 2 columns
  - Mobile: Single column vertical scroll
- Infinite Scroll: Lazy-loaded images for continuous browsing experience
- Image Optimization: Next.js Image component with automatic responsive sizing (<200KB mobile)

**Phase 1B: Differentiation (Weeks 5-6)**

*Distinctive Design & SEO Foundation*

**Distinctive Design Elements:**
- Nature Color Palette: Tropical forest greens + savanna earth tones as accents
- Custom Typography: Elegant serif headings (e.g., Playfair Display) + clean sans body text (e.g., Inter)
- Micro-Interactions:
  - Firefly/butterfly animated social media icons
  - Calm, smooth scroll behavior with slow easing functions
  - Gentle fade transitions for image loading
  - Progressive disclosure for navigation hints

**SEO Foundation:**
- Static Site Generation (SSG): All pages pre-rendered at build time
- Comprehensive Meta Tags: Open Graph, Twitter Cards, JSON-LD structured data
- Image Alt Text: Descriptive alt tags for all wildlife images
- XML Sitemap: Auto-generated sitemap for search engine crawling
- Robots.txt: Proper crawl directives

**Phase 1C: Engagement (Weeks 7-8)**

*Content Enrichment & Social Integration*

**Behind-the-Lens Metadata (Hover/Click Reveals):**
- Camera settings (f-stop, shutter speed, ISO)
- Location information
- Brief story about the moment
- Equipment used

**Social Media Integration:**
- Floating social icons (Instagram/Facebook) with nature-inspired animations
- Conversion tracking: Analytics tracking social link clicks
- Social sharing: Open Graph tags for beautiful preview cards

**Analytics & Monitoring:**
- Google Analytics: Visitor tracking, session duration, bounce rate
- Search Console: Keyword rankings, search impressions, click-through rates
- Performance Monitoring: Core Web Vitals tracking (LCP, CLS, FID)

**Quality Assurance:**
- Playwright Test Suite:
  - E2E tests for gallery loading and navigation
  - Image optimization validation
  - Performance budget enforcement
  - Visual regression testing
- CI/CD Pipeline: Automated testing before deployment

### Growth Features (Post-MVP)

**Phase 1D: Enhanced Navigation & Interaction (Post-Launch)**

*Deferred until MVP validation (70%+ success criteria met)*

- Ecosystem-Based Navigation: Habitat organization (Tropical Forest, Savanna, Wetlands)
- Photographer's Choice: Curated "My Favorites" collection with monthly rotation
- Compare Mode: Split-screen Color/B&W slider comparison
- Journey Mode: Full-screen slideshow with ambient nature sounds
- Advanced Animations: Wildlife sound wave visualizations, binoculars cursor effect
- Shake-to-Discover: Mobile-only Easter egg using accelerometer API

### Vision (Future)

**Phase 2: Monetization Features (Post-Validation)**

*Triggered when Phase 1 achieves 85%+ success criteria AND print interest >20 emails*

**E-commerce Integration:**
- Print sales with Stripe payment processing
- Size/format selection for prints (framed, canvas, metal, sizes)
- Shopping cart and checkout flow
- Order management system
- Inventory tracking

**Booking System:**
- Safari tour inquiry forms with detailed questionnaires
- Photography session scheduling
- Availability calendar integration
- Email notifications for inquiries and confirmations
- CRM integration for client relationship management

**Advanced Content Management:**
- Admin dashboard for content updates without code deployment
- Bulk image uploads without Drive dependency
- Category management UI for adding new ecosystems/collections
- Analytics dashboard for business metrics

**Intentionally Excluded from All Phases:**

- User Accounts/Login: No authentication needed (public portfolio)
- Comments/Reviews: Focus engagement on social media platforms
- Blog/News Section: Keep focus purely on photography, not content marketing
- Multi-Language Support: English only for MVP and growth phases
- Live Chat: Avoid distraction from minimalist aesthetic

**2-3 Year Vision: Comprehensive Wildlife Photography Platform**

- Expanded ecosystem galleries (10+ habitats), species collections, location-based browsing
- Virtual gallery tours with 3D immersive experiences and spatial audio
- Photography education hub with tutorials and field guide tips
- Community submissions for guest wildlife photographers
- Full merchandise ecosystem (calendars, photo books, branded apparel)
- B2B licensing for stock photos to publishers and ad agencies
- Conservation partnerships with wildlife organizations
- Mobile app with offline gallery viewing

## User Journeys

### Journey 1: Sarah Chen - Reconnecting with a Wildlife Photographer

**Sarah Chen, Marketing Director, 34, San Francisco**

**Opening Scene:**
Sarah met you at a photography exhibition three months ago. Your wildlife shots captivated her, and you mentioned you were building a portfolio. Now, preparing for a company presentation on authentic brand storytelling, she remembers your work and wants to reconnect. She Googles your name while sitting in her corner office, coffee in hand.

**Rising Action:**
She lands on your portfolio homepage. The full-screen golden-hour lion photograph immediately stops her scrolling—it's 6 PM, and the dusk-adaptive hero shows exactly the kind of powerful imagery she remembers. She clicks "Explore the Wild" and discovers the masonry gallery. Hovering over images reveals "Behind the Lens" stories—camera settings, locations, field notes. The professional presentation validates her memory: "This photographer is the real deal."

**Climax:**
She finds herself spending 5 minutes browsing, viewing 8 images across different galleries. The subtle firefly-animated Instagram icon catches her eye. She clicks through, follows your Instagram account, and bookmarks your portfolio to share with her creative team tomorrow.

**Resolution:**
Sarah becomes a loyal follower. She shares your portfolio URL in her company's Slack channel, generating 3 referral visits. Two weeks later, when planning the company's office redesign, she remembers your work and reaches out about purchasing prints for their meeting rooms.

**Requirements Revealed:**
- Name-based SEO optimization for personal network discovery
- Time-adaptive hero for immediate visual impact
- Professional, credible design that legitimizes the photographer
- Behind-the-Lens metadata for deeper engagement
- Clear, non-intrusive social media conversion path
- Memorable experience worthy of word-of-mouth sharing

---

### Journey 2: Marcus Rodriguez - Finding Photography Inspiration & Learning

**Marcus Rodriguez, Amateur Photographer, 28, Denver**

**Opening Scene:**
Marcus is passionate about wildlife photography but frustrated with his recent shots. It's Saturday morning, and he's searching Google Images for "wildlife photography techniques" and "savanna lion portraits" to understand how professionals capture stunning shots. He's tired of generic stock photo sites—he wants to find authentic photographers with real field experience.

**Rising Action:**
One of your lion photographs appears in Google Images results. He clicks through to your site, immediately impressed by the masonry gallery's quality. Unlike stock sites, these images have soul. He hovers over a leopard shot and discovers the "Behind the Lens" panel: "f/5.6, 1/500s, ISO 800, Serengeti National Park, Tanzania. Waited 45 minutes for this direct gaze after the hunt."

**Climax:**
Marcus's eyes light up—*this* is what he's been looking for. Real field stories, actual camera settings, habitat context. He spends 12 minutes exploring galleries, studying settings on 15+ images, taking mental notes about f-stop choices and lighting conditions. The ecosystem-based organization (future feature) would help him even more, but the existing Color/B&W categorization still surfaces excellent examples.

**Resolution:**
Marcus follows your Instagram account to see new work and techniques. He returns to your portfolio 4 times over the next month, each time learning something new. Six months later, planning his first African safari, he remembers your work and inquires about joining a photographer-led tour.

**Requirements Revealed:**
- Google Images SEO optimization for discovery
- Behind-the-Lens metadata with camera settings, location, and stories
- High engagement gallery browsing (infinite scroll, quality imagery)
- Educational content that demonstrates expertise
- Path from impressed visitor → social follower → potential client
- Return visitor experience that remains fresh

---

### Journey 3: Dr. Emily Thompson - Finding Educational Wildlife Content

**Dr. Emily Thompson, Environmental Educator, 42, Portland**

**Opening Scene:**
Dr. Thompson is preparing a university lecture on savanna ecosystems. She needs authentic wildlife photographs that show animals in natural habitats, not isolated on white backgrounds. She searches Google for "savanna ecosystem wildlife" and "tropical forest animals habitat," looking for images with proper environmental context for her slides.

**Rising Action:**
Your portfolio appears in search results. She clicks through and immediately appreciates the professional presentation. The masonry gallery shows wildlife in natural settings with beautiful composition. Hovering over images reveals habitat information—exactly what she needs for educational accuracy.

**Climax:**
She discovers that your images include location context: "Serengeti National Park," "Tropical forest, Costa Rica." This habitat-based information is perfect for her educational needs. She spends 8 minutes browsing, identifying 5 images that would work perfectly for her lecture series.

**Resolution:**
Dr. Thompson bookmarks your portfolio and follows your social media. When Phase 2 launches and print purchasing becomes available, she returns to license images for her educational presentations. She also recommends your portfolio to other environmental educators in her network, generating qualified referral traffic.

**Requirements Revealed:**
- Ecosystem/habitat-based search optimization
- Location and environmental context in metadata
- High-quality imagery suitable for professional/educational use
- Clear path from discovery → bookmarking → future purchase
- Educational credibility through professional presentation
- Referral-worthy quality for peer recommendations

---

### Journey 4: James Patterson - Finding Statement Art for Client Spaces

**James Patterson, Interior Designer, 38, New York**

**Opening Scene:**
James is decorating a corporate law firm's executive offices. The client wants "sophisticated wildlife art, but not generic—something authentic and unique." James searches Google for "wildlife photography prints," "fine art animal photography," and "wildlife photographer portfolio," filtering through countless mass-produced stock sites.

**Rising Action:**
Your portfolio stands out immediately. Unlike print-on-demand marketplaces, this is clearly a professional photographer's work. The minimalist design, elegant typography, and calm aesthetic align perfectly with the law firm's brand. James browses the gallery, noting several potential pieces: the black & white elephant portrait, the golden-hour cheetah, the misty morning bird shot.

**Climax:**
James hovers over the elephant image and sees "Behind the Lens" metadata revealing the story behind the shot. This authenticity—knowing a real photographer captured this in the field—is exactly what distinguishes this from mass-market art. He clicks the subtle "Request Print" icon (Phase 2 feature) and submits an inquiry for three large-format prints with framing options.

**Resolution:**
James receives a professional response with sizing options, pricing, and estimated delivery. He orders three prints totaling $1,200. The transaction is smooth, and the final prints exceed expectations. He bookmarks your portfolio for future projects and recommends it to two other designers in his network. Over the next year, he places four more orders for different client spaces.

**Requirements Revealed:**
- Professional, sophisticated design that builds buyer confidence
- High-quality imagery presentation
- Behind-the-Lens storytelling for authenticity and differentiation
- Clear, simple print request flow (Phase 2)
- Seamless inquiry-to-purchase experience
- Quality that generates repeat business and referrals

---

### Journey 5: Lisa and Tom Anderson - Planning a Safari with Photography Guidance

**Lisa and Tom Anderson, Adventure Travelers, 45 & 47, Chicago**

**Opening Scene:**
Lisa and Tom are planning their dream African safari. They're experienced travelers but photography novices. They want someone who can guide them to the best wildlife viewing spots *and* help them capture amazing photos. They search Google for "African safari photographer," "wildlife photography tours," and "Serengeti photography guide."

**Rising Action:**
Your portfolio appears in search results. They land on the homepage and are immediately impressed by the quality and breadth of your work. Browsing galleries, they see shots from multiple ecosystems—Serengeti, tropical forests, wetlands—demonstrating extensive field experience. The Behind-the-Lens metadata shows you've spent significant time in these locations.

**Climax:**
They find the "Book Safari" CTA (Phase 2 feature) and click through to learn more. Your portfolio has already proven your expertise and credibility—these aren't tourist snapshots; these are professional field photographs from someone who knows the ecosystems intimately. They fill out the inquiry form, specifying their interest in a Serengeti photography-focused safari for February.

**Resolution:**
You respond with a detailed itinerary, photography guidance offerings, and pricing. Lisa and Tom book a 10-day safari tour at $8,000. During the trip, your field expertise helps them capture shots they never imagined possible. They return home as loyal advocates, sharing your portfolio with 6 friends planning their own safaris. Over the next two years, your portfolio generates 4 more safari bookings from their referrals.

**Requirements Revealed:**
- SEO optimization for safari/tour-related keywords
- Portfolio as credibility showcase (proves field expertise)
- Ecosystem diversity demonstration (multiple habitats)
- Clear booking/inquiry CTA (Phase 2)
- Professional inquiry form with detailed questionnaire
- Experience quality that generates word-of-mouth referrals

---

### Journey 6: Site Administrator - Managing Content and Monitoring Performance

**You (Site Owner/Admin), Wildlife Photographer**

**Opening Scene:**
You've just returned from a 3-week safari expedition with 400 new photographs. You want to upload your best 50 shots to the portfolio, organized across Color and B&W galleries, with proper metadata (camera settings, locations, stories). You also want to check how the site is performing—traffic, social conversions, print interest.

**Rising Action (Phase 1 - Manual Process):**
You organize selected images in Google Drive folders (Color/B&W), ensuring each has descriptive filename and metadata. You run the sync pipeline script that pulls from Drive, optimizes images, and uploads to Vercel Blob Storage. The Next.js static site regenerates automatically. You manually check Google Analytics to review traffic trends and social link clicks.

**Climax (Phase 2 - Admin Dashboard):**
With the admin dashboard (Phase 2 feature), you log in to a simple CMS interface. You bulk upload 50 images with drag-and-drop, add metadata through intuitive forms (camera settings, location, story), assign to categories (Color/B&W, plus new Savanna ecosystem category), and publish with one click. The dashboard shows real-time analytics: 1,200 visitors this month, 22% social conversion rate, 15 print inquiries.

**Resolution:**
Content management becomes sustainable. You can update the portfolio from anywhere, even during field trips using mobile. The analytics dashboard helps you understand which images drive the most engagement, informing future photography decisions. The system scales effortlessly as your image library grows from 100 to 1,000+ photographs.

**Requirements Revealed (Phase 1):**
- Google Drive integration for image source management
- Automated sync pipeline (Drive → optimize → Blob Storage)
- Static site regeneration on content updates
- Google Analytics integration for traffic and conversion tracking
- Simple, reliable deployment process

**Requirements Revealed (Phase 2):**
- Admin authentication and CMS interface
- Bulk image upload with drag-and-drop
- Metadata management forms
- Category assignment UI
- Analytics dashboard for business metrics
- Mobile-friendly content management

---

### Journey Requirements Summary

**Core Capabilities Revealed Across Journeys:**

**Discovery & SEO (Journeys 1, 2, 3, 5):**
- Name-based search optimization for personal network discovery
- Google Images indexing for wildlife/ecosystem keyword searches
- Safari/tour-related keyword optimization
- Organic search dominance as primary traffic source

**Engagement & Conversion (Journeys 1, 2, 3, 4):**
- Time-adaptive hero image for immediate impact
- Responsive masonry galleries with infinite scroll
- Behind-the-Lens metadata (camera settings, location, story)
- Subtle, non-intrusive social media conversion path
- Professional design that builds credibility and confidence

**Credibility & Trust (Journeys 1, 4, 5):**
- Professional presentation that legitimizes photographer
- Quality imagery that differentiates from stock/generic sites
- Authentic field stories demonstrating expertise
- Memorable experience worthy of word-of-mouth sharing

**Phase 2 Monetization (Journeys 4, 5):**
- Print request flow with sizing and framing options
- Safari booking inquiry forms with detailed questionnaires
- Seamless inquiry-to-purchase experience
- Quality delivery that generates repeat business

**Content Management (Journey 6):**
- Google Drive integration for Phase 1 manual workflow
- Admin dashboard and CMS for Phase 2 scalable management
- Analytics integration for performance monitoring
- Bulk upload and metadata management capabilities

**Cross-Journey Patterns:**
- Every journey emphasizes quality over quantity
- Social media conversion is primary Phase 1 goal across all journeys
- Word-of-mouth referrals appear in 80% of journeys (validates viral potential)
- Behind-the-Lens metadata creates differentiation and deeper engagement
- Professional presentation builds confidence for future monetization

## Web Application Specific Requirements

### Project-Type Overview

BMAD-site is a **Next.js-based web application** utilizing static site generation (SSG) with client-side interactivity for gallery experiences. The architecture prioritizes SEO discoverability and performance while maintaining engaging, interactive user experiences through progressive enhancement.

### Technical Architecture Considerations

**Application Architecture:**
- **Primary Pattern:** Static Site Generation (SSG) with incremental static regeneration for content updates
- **Hybrid Approach:** Pre-rendered pages at build time with client-side hydration for interactive elements
- **Routing:** File-based routing via Next.js pages directory, intentional page transitions (not scroll-based navigation)
- **State Management:** Minimal client-side state (gallery filtering, image lazy loading, time-of-day detection)
- **Data Fetching:** Build-time data fetching from Google Drive → Vercel Blob Storage pipeline

**Technology Stack:**
- **Framework:** Next.js 14+ with TypeScript for type safety
- **Styling:** CSS-in-JS or Tailwind CSS for responsive, maintainable styling with nature color palette
- **Image Optimization:** Next.js Image component with automatic responsive sizing and format optimization
- **Deployment:** Vercel platform with continuous deployment and preview environments

### Browser Support Matrix

**Target Browser Support:**
- **Desktop Browsers:**
  - Chrome/Edge (Chromium): Last 2 versions
  - Safari: Last 2 versions
  - Firefox: Last 2 versions
- **Mobile Browsers:**
  - Safari iOS: Last 2 versions (iOS 15+)
  - Chrome Android: Last 2 versions
  - Samsung Internet: Latest version

**Browser Feature Requirements:**
- Modern JavaScript (ES2020+) with minimal polyfills
- CSS Grid and Flexbox for responsive masonry layouts
- IntersectionObserver API for lazy loading and infinite scroll
- LocalStorage for time-adaptive hero state (optional)
- No Internet Explorer support required

### Responsive Design Requirements

**Breakpoint Strategy:**
- **Mobile:** ≤640px (single column gallery, stacked navigation, touch-optimized interactions)
- **Tablet:** 641px–1024px (2-column masonry, simplified navigation)
- **Desktop:** ≥1025px (3-4 column masonry, floating social icons, full navigation)

**Responsive Considerations:**
- Mobile-first CSS approach
- Touch-friendly tap targets (minimum 44×44px)
- Responsive typography scaling
- Optimized image delivery per viewport (<200KB mobile, <500KB desktop)
- Progressive disclosure of navigation on smaller screens

### Performance Targets

**Core Web Vitals:**
- **Largest Contentful Paint (LCP):** <2.5 seconds (critical for hero image impact)
- **First Input Delay (FID):** <100ms (responsive interactions)
- **Cumulative Layout Shift (CLS):** <0.1 (smooth, calm experience)

**Lighthouse Scores:**
- Performance: 90+ consistently
- Accessibility: 90+ (WCAG AA compliance)
- Best Practices: 95+
- SEO: 100 (perfect SEO implementation)

**Performance Budget:**
- Initial page load: <3 seconds on 3G mobile
- Time to Interactive (TTI): <4 seconds
- JavaScript bundle size: <200KB (gzipped)
- Total page weight: <1MB (initial load)

### SEO Strategy & Implementation

**Technical SEO Foundation:**

**Static Site Generation Benefits:**
- All pages pre-rendered at build time for perfect crawlability
- Zero client-side rendering delays for search bots
- Complete HTML content available immediately
- Automatic static optimization via Next.js

**Meta Tags & Structured Data:**
- Comprehensive Open Graph tags for social sharing (Facebook, LinkedIn)
- Twitter Card tags for rich Twitter previews
- JSON-LD structured data for rich snippets:
  - Person schema (photographer profile)
  - ImageObject schema (individual photographs)
  - BreadcrumbList schema (navigation hierarchy)
  - WebSite schema (site-level metadata)

**Image SEO Optimization:**
- Descriptive alt text for all wildlife images (species, location, behavior)
- Optimized file names (e.g., "serengeti-lion-golden-hour.jpg")
- Image sitemaps for Google Images indexing
- Responsive images with srcset for optimal delivery
- Lazy loading with proper placeholder strategies

**XML Sitemap & Robots.txt:**
- Auto-generated XML sitemap via Next.js sitemap generation
- Image sitemap for wildlife photograph discovery
- Proper robots.txt directives for crawl optimization
- Priority and change frequency hints for search engines

**SEO Performance Tracking:**
- Google Search Console integration for keyword rankings
- Search impressions and click-through rate monitoring
- Google Images indexing status tracking (target: 100% within 7 days)
- Organic traffic source analysis

**Target Keywords:**
- Primary: "wildlife photography", photographer name
- Secondary: "savanna wildlife", "tropical forest photography", specific animal names
- Long-tail: "behind the lens wildlife photography", "African safari photographer", ecosystem-specific searches

### Accessibility Level & Implementation

**WCAG AA Compliance (Minimum Target):**

**Perceivable:**
- Alt text for all images (descriptive, contextual)
- Sufficient color contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Text alternatives for all non-text content
- Responsive text sizing (no fixed pixel sizes below 16px)

**Operable:**
- Full keyboard navigation support (Tab, Enter, Arrow keys)
- Focus indicators visible on all interactive elements
- No keyboard traps in modals or overlays
- Sufficient time for reading and interactions (no auto-advancing galleries)

**Understandable:**
- Clear, consistent navigation structure
- Descriptive link text (avoid "click here")
- Error identification and suggestion (for Phase 2 forms)
- Consistent visual and functional patterns

**Robust:**
- Semantic HTML5 markup (header, nav, main, article, footer)
- ARIA labels where semantic HTML insufficient
- Valid HTML/CSS (W3C validation)
- Screen reader testing (VoiceOver, NVDA)

**Accessibility Enhancements Beyond WCAG AA:**
- Skip to main content link
- Descriptive page titles for all routes
- Focus management for client-side navigation
- Reduced motion support (prefers-reduced-motion media query)

### Implementation Considerations

**Development Workflow:**
- TypeScript for type safety and developer experience
- ESLint + Prettier for code quality and consistency
- Git-based version control with feature branch workflow
- Pull request reviews before merging to main

**Testing Strategy:**
- Playwright E2E tests for critical user paths (gallery loading, navigation, social conversions)
- Visual regression testing for design consistency
- Performance budget enforcement in CI/CD pipeline
- Accessibility testing with axe-core integration

**Deployment Pipeline:**
- Vercel deployment with automatic preview environments for pull requests
- Production deployment triggered by merge to main branch
- Automated testing gates before deployment
- Zero-downtime deployments with instant rollback capability

**Image Management Pipeline:**
- Google Drive as source of truth for photographs
- Automated sync script: Drive → download → optimize → Vercel Blob Storage
- Image optimization: compression, format conversion (WebP/AVIF), responsive sizing
- Build-time static generation triggered by new image uploads

**Content Delivery:**
- Vercel Edge Network for global CDN distribution
- Automatic image optimization via Vercel Image Optimization
- Cache headers for static assets (images, CSS, JS)
- Stale-while-revalidate strategy for optimal performance

**Monitoring & Analytics:**
- Google Analytics 4 for visitor tracking and conversion analysis
- Vercel Analytics for Web Vitals monitoring
- Error tracking and logging (Sentry or similar)
- Social conversion tracking (Instagram/Facebook link clicks)

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach: Validation-Driven Social Growth Engine**

The MVP strategy focuses on proving the core hypothesis: **A professional portfolio can drive social media follower growth, which validates future monetization potential.** This is an **experience MVP** that delivers immediate value (beautiful portfolio, social credibility) while gathering data to validate Phase 2 investment (print sales, safari bookings).

**Strategic Rationale:**
- Phase 1 requires minimal ongoing costs (Vercel free tier, Google Drive storage)
- Social follower growth and print interest emails provide clear go/no-go signals
- Technical foundation (Next.js SSG, image pipeline) supports Phase 2 without rebuild
- 8-week timeline to launch creates urgency while maintaining quality

**Resource Requirements:**
- **Development:** 1 full-stack developer (Next.js, TypeScript, Vercel ecosystem)
- **Design:** Designer input for nature color palette, typography, micro-interactions (can be part-time/contract)
- **Photography:** Content owner provides images and metadata via Google Drive
- **Testing:** Automated via Playwright (part of development work)
- **Timeline:** 8 weeks to Phase 1C completion

### MVP Feature Set (Phase 1A-C)

**Core User Journeys Supported:**

The MVP supports 5 of 6 documented journeys:

1. ✅ **Sarah Chen (Personal Network):** Name search → portfolio discovery → social follow
2. ✅ **Marcus Rodriguez (Photography Enthusiast):** Google Images → Behind-the-Lens learning → social follow
3. ✅ **Dr. Emily Thompson (Educator):** Ecosystem search → habitat context → bookmark for future
4. ⚠️ **James Patterson (Print Buyer):** Gallery browsing → interest captured via email (Phase 2: full purchase flow)
5. ⚠️ **Lisa & Tom Anderson (Safari Seekers):** Portfolio credibility → interest captured via email (Phase 2: booking system)
6. ✅ **Admin (Content Management):** Google Drive sync → automated deployment (Phase 2: CMS dashboard)

**Must-Have Capabilities (Phase 1A: Foundation - Weeks 1-4):**

*These are non-negotiable for a functional portfolio:*

- Next.js project setup with TypeScript
- Vercel deployment pipeline with preview environments
- Google Drive integration for image source
- Vercel Blob Storage for image delivery
- Sync pipeline script (Drive → optimize → Blob)
- Time-adaptive hero image (dawn/midday/dusk/night based on visitor local time)
- Minimal navigation with progressive disclosure
- Intentional page navigation (not scroll-based) between home and galleries
- Color/B&W gallery categories (simple two-category MVP)
- Responsive masonry layout (3-4 cols desktop, 2 tablet, 1 mobile)
- Infinite scroll with lazy loading
- Next.js Image optimization (<200KB mobile)

**Must-Have Capabilities (Phase 1B: Differentiation - Weeks 5-6):**

*These create the distinctive minimalist brand:*

- Nature color palette (tropical green + savanna ochre accents)
- Custom typography (elegant serif headings + clean sans body)
- Firefly/butterfly animated social icons
- Smooth scroll behavior with slow easing
- Gentle fade transitions for image loading
- Progressive disclosure navigation hints
- Static Site Generation (SSG) for all pages
- Open Graph + Twitter Card meta tags
- JSON-LD structured data (Person, ImageObject, BreadcrumbList, WebSite)
- Descriptive image alt text
- Auto-generated XML sitemap
- Proper robots.txt

**Must-Have Capabilities (Phase 1C: Engagement - Weeks 7-8):**

*These drive conversion and gather validation data:*

- Behind-the-Lens metadata overlay (hover/click reveals):
  - Camera settings (f-stop, shutter, ISO)
  - Location information
  - Field story
  - Equipment used
- Floating social media icons (Instagram/Facebook) with animations
- Social link click tracking via Google Analytics
- Open Graph tags for social sharing
- Google Analytics 4 integration (visitor tracking, session duration, bounce rate)
- Google Search Console integration (keyword rankings, impressions)
- Core Web Vitals monitoring (LCP, CLS, FID)
- Playwright E2E test suite:
  - Gallery loading and navigation tests
  - Image optimization validation
  - Performance budget enforcement
  - Visual regression testing
- CI/CD pipeline with automated testing gates

**Intentionally Excluded from MVP:**

- Ecosystem-based navigation (deferred to Phase 1D)
- Photographer's Choice curated collection (Phase 1D)
- Compare mode (Color/B&W slider) (Phase 1D)
- Journey mode (full-screen slideshow) (Phase 1D)
- Advanced animations (sound waves, binoculars cursor) (Phase 1D)
- Shake-to-discover mobile feature (Phase 1D)
- E-commerce / print purchasing (Phase 2)
- Safari booking system (Phase 2)
- Admin CMS dashboard (Phase 2)

### Post-MVP Features

**Phase 1D: Enhanced Navigation & Interaction (Post-Launch Validation)**

*Triggered when Phase 1 achieves 70%+ success criteria (Month 3-6 checkpoint)*

**Purpose:** Scale engagement and exploration depth after MVP proves core value

- **Ecosystem-Based Navigation:** Organize galleries by habitat (Tropical Forest, Savanna, Wetlands, Mountains)
  - Enables ecosystem-focused user journeys (Dr. Emily Thompson use case)
  - Supports safari seekers looking for specific habitat expertise
  - SEO benefit: ecosystem-specific keyword optimization

- **Photographer's Choice:** Curated "My Favorites" collection with monthly rotation
  - Creates editorial voice and personality
  - Drives return visits for new curation
  - Showcases storytelling beyond technical categories

- **Compare Mode:** Split-screen Color/B&W slider comparison
  - Interactive engagement beyond passive browsing
  - Educational value (understanding color vs. B&W artistic choices)
  - Increases time on site and pages per visit

- **Journey Mode:** Full-screen slideshow with ambient nature sounds
  - Immersive experience for deep engagement
  - Differentiates from standard portfolio galleries
  - Potential for premium experience or lead capture

- **Advanced Animations:** Wildlife sound wave visualizations, binoculars cursor
  - Further differentiation through subtle interactions
  - Nature-inspired micro-interactions reinforce brand

- **Shake-to-Discover:** Mobile Easter egg using accelerometer API
  - Delight factor for mobile users
  - Shareable discovery moment (word-of-mouth potential)

**Phase 2: Monetization Features (Post-Validation)**

*Triggered when Phase 1 achieves 85%+ success criteria AND print interest >20 emails (Month 6+ checkpoint)*

**Purpose:** Convert validated audience into revenue through prints and safari bookings

**E-commerce Integration:**
- Print sales with Stripe payment processing
- Size/format selection (framed, canvas, metal, multiple sizes)
- Shopping cart and checkout flow
- Order management system
- Inventory tracking and fulfillment integration
- Revenue target: $500+/month within 3 months of launch

**Booking System:**
- Safari tour inquiry forms with detailed questionnaires
- Photography session scheduling
- Availability calendar integration
- Email notifications for inquiries and confirmations
- CRM integration for client relationship management
- Revenue target: 5+ qualified safari inquiries within 6 months

**Advanced Content Management:**
- Admin authentication and CMS interface
- Bulk image upload with drag-and-drop
- Metadata management forms (camera settings, location, story)
- Category assignment UI (expand beyond Color/B&W)
- Analytics dashboard for business metrics
- Mobile-friendly content management for field updates

**Phase 3: Platform Expansion (2-3 Year Vision)**

*Long-term vision features deferred until business model proven and sustainable*

- Expanded ecosystem galleries (10+ habitats), species collections, location-based browsing
- Virtual gallery tours with 3D immersive experiences and spatial audio
- Photography education hub with tutorials and field guide tips
- Community submissions for guest wildlife photographers
- Full merchandise ecosystem (calendars, photo books, branded apparel)
- B2B licensing for stock photos to publishers and ad agencies
- Conservation partnerships with wildlife organizations
- Mobile app with offline gallery viewing
- Subscription model (monthly print club, premium content access)

### Risk Mitigation Strategy

**Technical Risks:**

**Risk:** Image optimization pipeline fails to achieve <200KB mobile target consistently
- **Mitigation:** Use Next.js Image component with WebP/AVIF format conversion, quality testing in Phase 1A
- **Fallback:** Manual image optimization workflow if automated pipeline unreliable

**Risk:** Static site generation performance degrades as image library grows (100+ → 1000+)
- **Mitigation:** Incremental Static Regeneration (ISR) for gallery pages, pagination if needed
- **Fallback:** Category-based pagination, limit images per gallery page

**Risk:** Google Drive sync pipeline unreliable or slow
- **Mitigation:** Test sync script thoroughly in Phase 1A, add retry logic and error notifications
- **Fallback:** Manual upload to Vercel Blob Storage if Drive integration problematic

**Market Risks:**

**Risk:** Social media conversion rate <20% (below target)
- **Validation Approach:** A/B test social icon placement, animation styles, CTA messaging in first 3 months
- **Mitigation:** Iterate on social integration based on analytics data
- **Go/No-Go Signal:** If <10% conversion after 3 months, reassess value proposition

**Risk:** Print interest <20 emails by Month 6 (Phase 2 validation fails)
- **Validation Approach:** Track email captures, qualitative feedback on pricing/interest
- **Mitigation:** Survey interested visitors on print preferences, pricing sensitivity
- **Go/No-Go Signal:** If <10 emails, defer Phase 2 e-commerce and focus on Phase 1D features instead

**Risk:** Organic traffic doesn't reach 60% by Month 6 (SEO strategy underperforms)
- **Validation Approach:** Monitor Google Search Console weekly, track keyword rankings and indexing
- **Mitigation:** SEO iteration (meta tag optimization, alt text refinement, backlink outreach)
- **Contingency:** Supplement with targeted social media advertising if organic growth slow

**Resource Risks:**

**Risk:** Development timeline extends beyond 8 weeks
- **Mitigation:** Prioritize Phase 1A-B core features, defer Phase 1C if needed
- **Minimum Viable Scope:** Phase 1A + basic social icons (skip animations) + basic analytics
- **Contingency:** Launch with Color/B&W galleries only, add Behind-the-Lens metadata post-launch

**Risk:** Single developer unavailable or blocked
- **Mitigation:** Choose mature, well-documented tech stack (Next.js, Vercel, TypeScript)
- **Contingency:** Vercel templates and community resources enable alternative developer onboarding
- **Absolute Minimum:** Static HTML/CSS gallery with manual deployment if Next.js infeasible

**Risk:** Image content insufficient for launch (fewer than planned photos)
- **Mitigation:** Define minimum image count for MVP (suggest: 30-50 images across Color/B&W)
- **Quality over Quantity:** Launch with curated selection, expand library post-launch
- **Contingency:** Single category (Color or B&W only) if image library limited

### Go/No-Go Decision Framework

**3-Month Checkpoint (Phase 1 Complete):**

**Proceed to Phase 1D Enhancement if:**
- 70%+ of Phase 1 success criteria met
- Social media conversion >15%
- Monthly visitors >400
- Positive user feedback and community sharing

**Decision:** Invest in ecosystem navigation, curated collections, advanced interactions

**6-Month Checkpoint (Phase 1D Complete or Validation Period):**

**Proceed to Phase 2 Monetization if:**
- 85%+ of Phase 1 success criteria met
- Print interest emails >20
- Social follower growth +40/month (80% of target)
- Monthly visitors >800

**Decision:** Invest in e-commerce integration, booking system, CMS dashboard

**Iterate MVP if:**
- <70% success criteria met at 3 months
- User engagement below targets (session duration, pages/visit)
- SEO underperforming (organic traffic <50%)

**Decision:** Refine existing features, improve conversion funnels, optimize before expanding

**Pivot if:**
- User engagement extremely low despite technical success
- Social conversion <10% after iteration attempts
- Market feedback indicates fundamental value proposition mismatch

**Decision:** Reassess core value proposition, consider alternative positioning or audience

## Functional Requirements

### Content Discovery & Navigation

- **FR1:** Visitors can view a full-screen hero image that adapts based on their local time of day (dawn, midday, dusk, night)
- **FR2:** Visitors can navigate from the homepage to gallery pages through intentional page transitions
- **FR3:** Visitors can browse wildlife photographs organized by Color and Black & White categories
- **FR4:** Visitors can filter gallery views by category (Color/B&W)
- **FR5:** Visitors can scroll through galleries with infinite scroll pagination
- **FR6:** Visitors can view images in a responsive masonry layout that adapts to their device (desktop 3-4 columns, tablet 2 columns, mobile 1 column)

### Image Viewing & Interaction

- **FR7:** Visitors can view optimized images appropriate for their device and connection speed
- **FR8:** Visitors can hover over (desktop) or tap (mobile) images to reveal Behind-the-Lens metadata
- **FR9:** Visitors can view camera settings for each photograph (aperture, shutter speed, ISO, lens)
- **FR10:** Visitors can view location information for each photograph
- **FR11:** Visitors can read field stories describing the context and moment of each photograph
- **FR12:** Visitors can see equipment information used for each photograph

### Social Media Integration

- **FR13:** Visitors can access Instagram profile through floating social media icons
- **FR14:** Visitors can access Facebook profile through floating social media icons
- **FR15:** The system can track social media link clicks for conversion analysis

### Search Engine Optimization

- **FR16:** Search engines can crawl all pages with complete pre-rendered HTML content
- **FR17:** Search engines can discover images through descriptive alt text
- **FR18:** Search engines can index the site through auto-generated XML sitemaps
- **FR19:** Search engines can display rich previews through Open Graph and Twitter Card metadata
- **FR20:** Search engines can understand site structure through JSON-LD structured data (Person, ImageObject, BreadcrumbList, WebSite schemas)

### Content Management (Admin)

- **FR21:** Content owner can organize photographs in Google Drive folders by category
- **FR22:** The system can automatically sync images from Google Drive to Vercel Blob Storage
- **FR23:** The system can automatically optimize images during sync (compression, format conversion, responsive sizing)
- **FR24:** The system can trigger static site regeneration when new images are added
- **FR25:** Content owner can add metadata to photographs (camera settings, location, story, equipment)

### Analytics & Monitoring

- **FR26:** The system can track visitor behavior (page views, session duration, bounce rate)
- **FR27:** The system can track social media conversion events (link clicks)
- **FR28:** The system can monitor Core Web Vitals performance metrics (LCP, CLS, FID)
- **FR29:** The system can track search engine performance (keyword rankings, impressions, click-through rates)
- **FR30:** The system can monitor Google Images indexing status

### Responsive Design & Accessibility

- **FR31:** Visitors can access the site from any modern browser (Chrome, Safari, Firefox, Edge - last 2 versions)
- **FR32:** Visitors can navigate the entire site using keyboard controls
- **FR33:** Screen reader users can access all content through semantic HTML and ARIA labels
- **FR34:** Visitors can view content with sufficient color contrast (WCAG AA compliance)
- **FR35:** Visitors can adjust their browser text size without breaking layouts
- **FR36:** Visitors with motion sensitivity can experience reduced motion when preferred

### Performance & Optimization

- **FR37:** The system can deliver hero images within 2.5 seconds (LCP target)
- **FR38:** The system can load gallery pages with lazy-loaded images for optimal performance
- **FR39:** The system can serve responsive images with appropriate sizes for each viewport
- **FR40:** The system can deliver pages under 3 seconds on 3G mobile connections
- **FR41:** The system can maintain layout stability during image loading (CLS <0.1)

### Social Sharing

- **FR42:** Visitors can share individual photographs to social media platforms with rich preview cards
- **FR43:** Visitors can share gallery pages to social media platforms with rich preview cards
- **FR44:** Visitors can share the homepage to social media platforms with rich preview cards

### Progressive Enhancement (Phase 1D - Post-MVP)

- **FR45:** Visitors can browse galleries organized by ecosystem/habitat (Tropical Forest, Savanna, Wetlands, Mountains)
- **FR46:** Visitors can view curated "Photographer's Choice" collections with monthly rotations
- **FR47:** Visitors can compare Color and Black & White versions of the same photograph through split-screen slider interaction
- **FR48:** Visitors can experience full-screen slideshow mode with ambient nature sounds
- **FR49:** Mobile visitors can trigger discovery features through device motion (shake-to-discover)

### E-commerce (Phase 2 - Post-Validation)

- **FR50:** Visitors can request print purchases for individual photographs
- **FR51:** Visitors can select print size and format options (framed, canvas, metal, various sizes)
- **FR52:** Visitors can add prints to a shopping cart
- **FR53:** Visitors can complete checkout through Stripe payment processing
- **FR54:** Content owner can manage print orders through order management system
- **FR55:** The system can track inventory and fulfillment status

### Booking System (Phase 2 - Post-Validation)

- **FR56:** Visitors can submit safari tour inquiries through detailed questionnaire forms
- **FR57:** Visitors can schedule photography sessions through availability calendar
- **FR58:** Content owner can receive email notifications for new inquiries
- **FR59:** Content owner can manage client relationships through CRM integration

### Advanced Content Management (Phase 2 - Post-Validation)

- **FR60:** Content owner can upload images through admin dashboard with drag-and-drop interface
- **FR61:** Content owner can add and edit metadata through admin forms (camera settings, location, story)
- **FR62:** Content owner can assign images to multiple categories through category management UI
- **FR63:** Content owner can view analytics dashboard with business metrics (traffic, conversions, revenue)
- **FR64:** Content owner can manage content from mobile devices

## Non-Functional Requirements

### Performance

- **NFR1:** Homepage hero image (LCP) must load in <2.5 seconds on desktop and <3 seconds on mobile 3G connections
- **NFR2:** Gallery pages must achieve First Input Delay (FID) <100ms for responsive interactions
- **NFR3:** Cumulative Layout Shift (CLS) must be <0.1 to prevent jarring visual shifts during image loading
- **NFR4:** Time to Interactive (TTI) must be <4 seconds to enable user interactions quickly
- **NFR5:** JavaScript bundle size must be <200KB (gzipped) to minimize download and parse time
- **NFR6:** Individual optimized images must be <200KB on mobile and <500KB on desktop
- **NFR7:** Lighthouse Performance Score must maintain 90+ consistently across all pages
- **NFR8:** The system must maintain <10% performance degradation when image library grows from 100 to 1,000+ photographs

### Security

- **NFR9:** All pages must be served over HTTPS with valid SSL certificates
- **NFR10:** All API calls and data transmission must use encryption in transit (TLS 1.2+)
- **NFR11:** Admin authentication (Phase 2) must use industry-standard authentication mechanisms (OAuth 2.0 or similar)
- **NFR12:** Payment processing (Phase 2) must comply with PCI-DSS requirements through Stripe integration
- **NFR13:** No sensitive user data must be stored in client-side storage (localStorage/sessionStorage) except for non-sensitive preferences
- **NFR14:** Environment variables and API keys must never be exposed in client-side code
- **NFR15:** The system must implement proper CORS policies to prevent unauthorized API access

### Scalability

- **NFR16:** The system must handle 1,000 concurrent visitors without performance degradation
- **NFR17:** Static site generation must support scaling from 100 to 10,000+ images without architectural changes
- **NFR18:** Image delivery through Vercel Blob Storage and CDN must handle traffic spikes up to 10x normal load
- **NFR19:** The sync pipeline must process batch uploads of 50+ images within 10 minutes
- **NFR20:** Database queries (Phase 2) must maintain <100ms response time as data grows to 10,000+ records

### Accessibility

- **NFR21:** The site must achieve WCAG 2.1 Level AA compliance at minimum
- **NFR22:** All interactive elements must have minimum touch/click targets of 44×44 pixels for mobile usability
- **NFR23:** Color contrast ratios must be at least 4.5:1 for normal text and 3:1 for large text
- **NFR24:** All images must have descriptive alt text that conveys meaningful content to screen readers
- **NFR25:** The site must be fully navigable using keyboard alone (Tab, Enter, Arrow keys)
- **NFR26:** Focus indicators must be visible on all interactive elements for keyboard navigation
- **NFR27:** The site must respect user's prefers-reduced-motion settings to minimize animations for motion-sensitive users
- **NFR28:** Semantic HTML5 must be used throughout to ensure proper screen reader interpretation
- **NFR29:** Form validation errors (Phase 2) must be clearly announced to screen readers with ARIA live regions

### Reliability & Availability

- **NFR30:** The production site must maintain 99.9% uptime (allowing ~43 minutes downtime per month)
- **NFR31:** Vercel deployment must support zero-downtime deployments with instant rollback capability
- **NFR32:** Failed deployments must automatically roll back to the last known good version
- **NFR33:** The image sync pipeline must include retry logic for transient failures (up to 3 attempts)
- **NFR34:** Error monitoring must capture and alert on critical failures within 5 minutes
- **NFR35:** The system must gracefully degrade when third-party services (Google Drive, Analytics) are temporarily unavailable

### Usability

- **NFR36:** First-time visitors must understand primary navigation within 30 seconds of landing on the homepage
- **NFR37:** The responsive masonry layout must adapt seamlessly across all breakpoints (mobile, tablet, desktop) without horizontal scrolling
- **NFR38:** Image loading must provide visual feedback (placeholders, loading indicators) to prevent perceived delays
- **NFR39:** Error states (404, 500) must provide clear user guidance and navigation options back to working pages
- **NFR40:** The site must maintain visual consistency across all supported browsers (Chrome, Safari, Firefox, Edge)

### Maintainability

- **NFR41:** The codebase must maintain TypeScript type safety with no 'any' types in production code
- **NFR42:** Code must pass ESLint validation with zero errors before deployment
- **NFR43:** All critical user paths must be covered by Playwright E2E tests with 90%+ test pass rate
- **NFR44:** The image sync pipeline must be executable manually or automatically with clear logging
- **NFR45:** The system must provide clear error messages and stack traces for debugging production issues
- **NFR46:** Documentation must exist for all custom build scripts, sync pipelines, and deployment processes

### Compatibility

- **NFR47:** The site must render correctly on Chrome, Safari, Firefox, and Edge (last 2 versions)
- **NFR48:** Mobile browser support must include Safari iOS (last 2 versions) and Chrome Android (last 2 versions)
- **NFR49:** The site must support viewport widths from 320px (small mobile) to 2560px+ (large desktop)
- **NFR50:** No Internet Explorer support is required (IE11 end-of-life acknowledged)

