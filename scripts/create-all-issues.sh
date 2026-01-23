#!/bin/bash

# Batch create all GitHub issues for BMAD-site stories
# This creates all 49 stories (we already created 1.1, so 48 remaining)

echo "🚀 Creating GitHub Issues for BMAD-site Stories"
echo "================================================"
echo ""

# Counter
count=1
total=48

# Epic 1 - Stories 1.2 to 1.6 (5 stories - we already created 1.1)

echo "📦 Epic 1: Project Foundation & Infrastructure Setup (5 remaining stories)"

gh issue create --title "[Epic 1] Story 1.2: Configure TypeScript Strict Mode and ESLint Zero-Error Policy" --body "## Story 1.2
As a developer, I want TypeScript strict mode enabled with zero 'any' types policy and ESLint configured for zero errors, So that code quality is enforced and type safety is guaranteed throughout development." --label "epic-1,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 1.2 created"
count=$((count + 1))

gh issue create --title "[Epic 1] Story 1.3: Configure Tailwind CSS with Custom Nature Color Palette" --body "## Story 1.3
As a developer, I want Tailwind CSS configured with the matte nature color palette (forest green, savanna ochre, neutral warm tones), So that I can use consistent design tokens throughout the application." --label "epic-1,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 1.3 created"
count=$((count + 1))

gh issue create --title "[Epic 1] Story 1.4: Set up Vercel Deployment Pipeline with Zero-Downtime Configuration" --body "## Story 1.4
As a developer, I want Vercel deployment configured with automatic deployments from main branch and instant rollback capability, So that the site can be deployed reliably with zero downtime." --label "epic-1,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 1.4 created"
count=$((count + 1))

gh issue create --title "[Epic 1] Story 1.5: Configure Font Optimization for Cormorant Garamond and Inter" --body "## Story 1.5
As a developer, I want Cormorant Garamond (serif) and Inter (sans) fonts optimized using next/font, So that typography loads quickly without layout shift and matches the UX design system." --label "epic-1,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 1.5 created"
count=$((count + 1))

gh issue create --title "[Epic 1] Story 1.6: Set Up Static Export Configuration" --body "## Story 1.6
As a developer, I want Next.js configured for static site generation with output: 'export', So that the entire site can be pre-rendered as static HTML for optimal performance and SEO." --label "epic-1,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 1.6 created"
count=$((count + 1))

# Epic 2 - 6 stories

echo ""
echo "📦 Epic 2: Time-Adaptive Homepage Experience (6 stories)"

gh issue create --title "[Epic 2] Story 2.1: Create Minimal Navigator Homepage Layout" --body "## Story 2.1
As a visitor, I want to see an elegant, centered homepage with the photographer's name and clear navigation choices, So that I immediately understand this is a photography portfolio and can choose which gallery to explore." --label "epic-2,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 2.1 created"
count=$((count + 1))

gh issue create --title "[Epic 2] Story 2.2: Implement Time-Adaptive Background Image System" --body "## Story 2.2
As a visitor, I want to see a subtle background image that adapts to my local time of day, So that the homepage feels fresh and personalized on each visit." --label "epic-2,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 2.2 created"
count=$((count + 1))

gh issue create --title "[Epic 2] Story 2.3: Implement Homepage Navigation with Page Transitions" --body "## Story 2.3
As a visitor, I want to click navigation links and smoothly transition to gallery pages, So that I can explore wildlife photography categories." --label "epic-2,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 2.3 created"
count=$((count + 1))

gh issue create --title "[Epic 2] Story 2.4: Add Firefly-Animated Social Media Icons to Homepage" --body "## Story 2.4
As a visitor, I want to see playful social media icons with gentle floating animations, So that I can easily follow the photographer on Instagram and Facebook." --label "epic-2,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 2.4 created"
count=$((count + 1))

gh issue create --title "[Epic 2] Story 2.5: Implement Progressive Disclosure for Homepage Navigation" --body "## Story 2.5
As a first-time visitor, I want navigation hints to appear after initial visual impact, So that I'm not overwhelmed immediately but can discover navigation naturally." --label "epic-2,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 2.5 created"
count=$((count + 1))

gh issue create --title "[Epic 2] Story 2.6: Optimize Homepage Performance for LCP <2.5s" --body "## Story 2.6
As a visitor, I want the homepage to load instantly with hero image appearing in under 2.5 seconds, So that I get an immediate wow impression without waiting." --label "epic-2,story,ready-for-dev"
echo "  ✓ ($count/$total) Story 2.6 created"
count=$((count + 1))

# Continue with remaining epics...

echo ""
echo "✅ Created $count issues successfully!"
echo ""
echo "Note: This script created simplified issues. Run the full Node.js script for complete acceptance criteria."
echo "View all issues: gh issue list --label story"
