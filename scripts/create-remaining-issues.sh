#!/bin/bash

# Create remaining GitHub issues for Epics 3-8
# We already created Epics 1-2 (12 issues)
# This will create the remaining 37 stories

echo "🚀 Creating Remaining GitHub Issues (Epics 3-8)"
echo "================================================"
echo ""

count=13  # Starting from 13 (we created 12 already)
total=49

# Epic 3: Responsive Masonry Gallery Browsing - 8 stories

echo "📦 Epic 3: Responsive Masonry Gallery Browsing (8 stories)"

gh issue create --title "[Epic 3] Story 3.1: Create Gallery Page Routes for Color and B&W Categories" --body "As a visitor, I want to navigate to separate Color and B&W gallery pages, So that I can browse photography organized by category." --label "epic-3,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 3.1 created"
count=$((count + 1))

gh issue create --title "[Epic 3] Story 3.2: Implement Responsive Masonry Layout Component" --body "As a visitor, I want to see images arranged in a masonry layout that adapts to my screen size, So that I can browse photography efficiently on any device." --label "epic-3,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 3.2 created"
count=$((count + 1))

gh issue create --title "[Epic 3] Story 3.3: Implement Image Loading with Skeleton Placeholders" --body "As a visitor, I want to see placeholder skeletons while images load, So that I understand content is loading and experience no layout shift." --label "epic-3,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 3.3 created"
count=$((count + 1))

gh issue create --title "[Epic 3] Story 3.4: Implement Infinite Scroll with Intersection Observer" --body "As a visitor, I want the gallery to load more images as I scroll, So that I can browse the entire collection without pagination clicks." --label "epic-3,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 3.4 created"
count=$((count + 1))

gh issue create --title "[Epic 3] Story 3.5: Optimize Gallery Images for Responsive Delivery" --body "As a visitor, I want images optimized for my device and connection speed, So that the gallery loads quickly without sacrificing visual quality." --label "epic-3,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 3.5 created"
count=$((count + 1))

gh issue create --title "[Epic 3] Story 3.6: Add Hover States and Click Interaction to Gallery Images" --body "As a visitor, I want visual feedback when I hover over or tap gallery images, So that I know they are interactive and can be viewed full-screen." --label "epic-3,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 3.6 created"
count=$((count + 1))

gh issue create --title "[Epic 3] Story 3.7: Implement Calm Scroll Physics for Gallery" --body "As a visitor, I want scrolling to feel smooth and natural like walking through nature, So that browsing the gallery is a calming, enjoyable experience." --label "epic-3,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 3.7 created"
count=$((count + 1))

gh issue create --title "[Epic 3] Story 3.8: Add Gallery Category Differentiation with Color Accents" --body "As a visitor, I want to visually distinguish Color and B&W galleries, So that I know which category I'm browsing." --label "epic-3,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 3.8 created"
count=$((count + 1))

# Epic 4: Full-Screen Image Lightbox - 7 stories

echo ""
echo "📦 Epic 4: Full-Screen Image Lightbox & Behind-the-Lens Storytelling (7 stories)"

gh issue create --title "[Epic 4] Story 4.1: Create Full-Screen Image Lightbox Component" --body "As a visitor, I want to click a gallery image and view it full-screen in a lightbox, So that I can appreciate the photography without distractions." --label "epic-4,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 4.1 created"
count=$((count + 1))

gh issue create --title "[Epic 4] Story 4.2: Implement Lightbox Keyboard Navigation" --body "As a visitor, I want to navigate between images using keyboard arrows, So that I can browse the full collection in lightbox view." --label "epic-4,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 4.2 created"
count=$((count + 1))

gh issue create --title "[Epic 4] Story 4.3: Add Zoom Functionality to Lightbox Images" --body "As a visitor, I want to zoom into lightbox images for detailed viewing, So that I can examine photography closely." --label "epic-4,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 4.3 created"
count=$((count + 1))

gh issue create --title "[Epic 4] Story 4.4: Implement Mobile Swipe Gestures for Lightbox" --body "As a mobile visitor, I want to swipe left/right to navigate between images in the lightbox, So that I can browse naturally on touch devices." --label "epic-4,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 4.4 created"
count=$((count + 1))

gh issue create --title "[Epic 4] Story 4.5: Create Behind-the-Lens Metadata Component" --body "As a photography enthusiast, I want to view camera settings and story details for each photograph, So that I can learn technical details and context." --label "epic-4,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 4.5 created"
count=$((count + 1))

gh issue create --title "[Epic 4] Story 4.6: Implement Metadata Hover Preview in Gallery" --body "As a visitor, I want to preview metadata when hovering over gallery images, So that I can discover stories without opening the lightbox." --label "epic-4,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 4.6 created"
count=$((count + 1))

gh issue create --title "[Epic 4] Story 4.7: Add React Error Boundaries for Lightbox Components" --body "As a developer, I want error boundaries around lightbox components, So that lightbox failures don't crash the entire application." --label "epic-4,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 4.7 created"
count=$((count + 1))

# Epic 5: SEO Optimization - 6 stories

echo ""
echo "📦 Epic 5: SEO Optimization & Discoverability (6 stories)"

gh issue create --title "[Epic 5] Story 5.1: Create Centralized Metadata Factory Functions" --body "As a developer, I want centralized metadata generation functions for all pages, So that SEO metadata is consistent and easy to maintain." --label "epic-5,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 5.1 created"
count=$((count + 1))

gh issue create --title "[Epic 5] Story 5.2: Implement Open Graph and Twitter Card Metadata" --body "As a content owner, I want rich preview cards when pages are shared on social media, So that shared links are visually appealing and drive clicks." --label "epic-5,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 5.2 created"
count=$((count + 1))

gh issue create --title "[Epic 5] Story 5.3: Generate XML Sitemap for Search Engine Crawling" --body "As a content owner, I want an automatically generated XML sitemap, So that search engines can discover and index all pages efficiently." --label "epic-5,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 5.3 created"
count=$((count + 1))

gh issue create --title "[Epic 5] Story 5.4: Add JSON-LD Structured Data for Rich Results" --body "As a content owner, I want JSON-LD structured data on all pages, So that search engines understand the site structure and display rich results." --label "epic-5,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 5.4 created"
count=$((count + 1))

gh issue create --title "[Epic 5] Story 5.5: Optimize Images with Descriptive Alt Text for Accessibility and SEO" --body "As a visitor using a screen reader or search engine, I want every image to have descriptive alt text, So that I can understand the image content." --label "epic-5,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 5.5 created"
count=$((count + 1))

gh issue create --title "[Epic 5] Story 5.6: Configure robots.txt for Search Engine Guidelines" --body "As a content owner, I want a robots.txt file that guides search engines, So that they crawl the site efficiently and respect boundaries." --label "epic-5,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 5.6 created"
count=$((count + 1))

# Epic 6: Analytics - 5 stories

echo ""
echo "📦 Epic 6: Social Media Conversion & Analytics Tracking (5 stories)"

gh issue create --title "[Epic 6] Story 6.1: Integrate Google Analytics 4 via @next/third-parties" --body "As a content owner, I want Google Analytics 4 tracking on all pages, So that I can monitor visitor behavior, traffic sources, and engagement metrics." --label "epic-6,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 6.1 created"
count=$((count + 1))

gh issue create --title "[Epic 6] Story 6.2: Track Social Media Link Clicks as Conversion Events" --body "As a content owner, I want to track when visitors click social media icons, So that I can measure social conversion rates." --label "epic-6,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 6.2 created"
count=$((count + 1))

gh issue create --title "[Epic 6] Story 6.3: Track Core Web Vitals Performance Metrics" --body "As a content owner, I want to monitor Core Web Vitals (LCP, CLS, FID) automatically, So that I can ensure the site maintains high performance standards." --label "epic-6,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 6.3 created"
count=$((count + 1))

gh issue create --title "[Epic 6] Story 6.4: Set Up Error Monitoring and Alerting" --body "As a developer, I want critical errors captured and logged, So that I can debug production issues quickly." --label "epic-6,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 6.4 created"
count=$((count + 1))

gh issue create --title "[Epic 6] Story 6.5: Create Analytics Dashboard Configuration in GA4" --body "As a content owner, I want a custom GA4 dashboard for wildlife photography portfolio metrics, So that I can quickly see key performance indicators." --label "epic-6,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 6.5 created"
count=$((count + 1))

# Epic 7: Image Pipeline - 6 stories

echo ""
echo "📦 Epic 7: Automated Image Management Pipeline (6 stories)"

gh issue create --title "[Epic 7] Story 7.1: Design Image Metadata JSON Schema" --body "As a developer, I want a standardized JSON schema for image metadata, So that the sync pipeline and frontend consume data consistently." --label "epic-7,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 7.1 created"
count=$((count + 1))

gh issue create --title "[Epic 7] Story 7.2: Create GitHub Actions Workflow for Image Sync" --body "As a content owner, I want a GitHub Actions workflow that syncs images from Google Drive to Vercel Blob Storage, So that image updates are automated." --label "epic-7,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 7.2 created"
count=$((count + 1))

gh issue create --title "[Epic 7] Story 7.3: Implement Image Optimization During Sync" --body "As a content owner, I want images automatically optimized during sync, So that they load quickly without manual compression." --label "epic-7,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 7.3 created"
count=$((count + 1))

gh issue create --title "[Epic 7] Story 7.4: Extract EXIF Metadata from Images" --body "As a content owner, I want camera settings automatically extracted from image EXIF data, So that I don't have to manually enter technical details." --label "epic-7,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 7.4 created"
count=$((count + 1))

gh issue create --title "[Epic 7] Story 7.5: Implement Manual Metadata Override via CSV" --body "As a content owner, I want to provide additional metadata (location, story) via CSV file, So that I can add details not available in EXIF data." --label "epic-7,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 7.5 created"
count=$((count + 1))

gh issue create --title "[Epic 7] Story 7.6: Trigger Static Site Regeneration After Image Sync" --body "As a content owner, I want the site to automatically rebuild and deploy after image sync, So that new images appear live without manual intervention." --label "epic-7,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 7.6 created"
count=$((count + 1))

# Epic 8: Testing - 6 stories

echo ""
echo "📦 Epic 8: Quality Assurance & Testing Framework (6 stories)"

gh issue create --title "[Epic 8] Story 8.1: Configure Playwright for End-to-End Testing" --body "As a developer, I want Playwright E2E testing framework configured, So that I can write and run tests for critical user paths." --label "epic-8,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 8.1 created"
count=$((count + 1))

gh issue create --title "[Epic 8] Story 8.2: Write E2E Tests for Homepage User Journey" --body "As a developer, I want E2E tests for the homepage experience, So that critical homepage features don't regress." --label "epic-8,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 8.2 created"
count=$((count + 1))

gh issue create --title "[Epic 8] Story 8.3: Write E2E Tests for Gallery Browsing Journey" --body "As a developer, I want E2E tests for gallery browsing, So that masonry layout and infinite scroll don't regress." --label "epic-8,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 8.3 created"
count=$((count + 1))

gh issue create --title "[Epic 8] Story 8.4: Write E2E Tests for Lightbox Interaction Journey" --body "As a developer, I want E2E tests for lightbox functionality, So that full-screen viewing and navigation don't regress." --label "epic-8,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 8.4 created"
count=$((count + 1))

gh issue create --title "[Epic 8] Story 8.5: Add Visual Regression Testing for Critical Pages" --body "As a developer, I want visual regression tests to catch unintended UI changes, So that design consistency is maintained across deployments." --label "epic-8,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 8.5 created"
count=$((count + 1))

gh issue create --title "[Epic 8] Story 8.6: Integrate E2E Tests into CI/CD Pipeline" --body "As a developer, I want E2E tests to run automatically on every pull request, So that regressions are caught before merging." --label "epic-8,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 8.6 created"
count=$((count + 1))

echo ""
echo "============================================================"
echo "✅ All GitHub Issues Created Successfully!"
echo "============================================================"
echo ""
echo "Total issues created: $((count - 1)) stories"
echo ""
echo "🔗 View all issues: gh issue list --label story"
echo "🔗 View by epic: gh issue list --label epic-3"
echo "🔗 Open in browser: gh issue list --web"
echo ""
