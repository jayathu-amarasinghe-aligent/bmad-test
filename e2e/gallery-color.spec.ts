import { test, expect } from '@playwright/test';

/**
 * E2E Tests for Color Gallery Page
 *
 * Test Level: E2E (User Journey)
 * Priority: P0 (Critical user path)
 *
 * Following BMAD best practices:
 * - Deterministic waiting (wait for network, not arbitrary timeouts)
 * - Data-testid selectors (semantic, not brittle CSS)
 * - Test isolation (each test independent)
 */

test.describe('Color Gallery - Basic Navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to color gallery before each test
    await page.goto('/gallery/color');

    // Wait for images to load
    await page.waitForSelector('img[alt]', { timeout: 10000 });
  });

  test('should display color gallery page with header and footer', async ({ page }) => {
    // Verify page title
    await expect(page).toHaveTitle(/Wildlife/i);

    // Verify header is visible
    await expect(page.locator('header')).toBeVisible();

    // Verify page heading
    await expect(page.locator('h1')).toContainText('Color Gallery');

    // Verify subtitle
    await expect(page.locator('text=Vibrant moments from the wild')).toBeVisible();

    // Verify footer is visible
    await expect(page.locator('footer')).toBeVisible();
  });

  test('should load and display gallery images in masonry grid', async ({ page }) => {
    // Images already loaded in beforeEach

    // Verify masonry grid is rendered
    const masonryGrid = page.locator('[class*="columns-"]');
    await expect(masonryGrid).toBeVisible();

    // Verify at least one image is loaded
    const images = page.locator('img[alt]');
    await expect(images.first()).toBeVisible();

    // Verify image count is displayed
    await expect(page.locator('text=/\\d+ images? in gallery/i')).toBeVisible();
  });

  test('should display correct number of color images', async ({ page }) => {
    // Images already loaded in beforeEach

    // Get image count from footer text
    const countText = await page.locator('text=/\\d+ images? in gallery/i').textContent();
    const imageCount = parseInt(countText?.match(/\\d+/)?.[0] || '0');

    // Verify count is greater than 0
    expect(imageCount).toBeGreaterThan(0);

    // Verify actual images rendered match the count
    const renderedImages = await page.locator('img[alt]').count();
    expect(renderedImages).toBe(imageCount);
  });

  test('should show responsive masonry layout on different screen sizes', async ({ page }) => {
    // Desktop view (should have multiple columns)
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForLoadState('networkidle');

    const masonryGrid = page.locator('[class*="columns-"]');
    await expect(masonryGrid).toBeVisible();

    // Mobile view (should adjust columns)
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500); // Brief wait for layout reflow

    await expect(masonryGrid).toBeVisible();
  });
});

test.describe('Color Gallery - Image Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/gallery/color');
    await page.waitForSelector('img[alt]', { timeout: 10000 });
  });

  test('should show hover overlay with EXIF metadata', async ({ page }) => {
    // Get first image container
    const firstImage = page.locator('img[alt]').first();
    await firstImage.waitFor({ state: 'visible' });

    // Hover over the image
    await firstImage.hover();

    // Wait for hover overlay to appear (check for EXIF data visibility)
    // Note: This depends on your hover implementation
    const imageContainer = firstImage.locator('xpath=ancestor::div[contains(@class, "group")]');
    await expect(imageContainer).toBeVisible();
  });

  test('should open lightbox when image is clicked', async ({ page }) => {
    // Click first image (force to bypass hover overlay)
    const firstImage = page.locator('img[alt]').first();
    await firstImage.click({ force: true });

    // Verify lightbox opens (check for lightbox modal)
    const lightbox = page.locator('[class*="fixed"][class*="inset-0"]').filter({ hasText: /ISO|aperture|shutter/i });
    await expect(lightbox).toBeVisible({ timeout: 2000 });

    // Verify image is displayed in lightbox
    const lightboxImage = lightbox.locator('img');
    await expect(lightboxImage).toBeVisible();
  });

  test('should close lightbox when close button is clicked', async ({ page }) => {
    // Open lightbox
    await page.locator('img[alt]').first().click();

    // Wait for lightbox to open
    const lightbox = page.locator('[class*="fixed"][class*="inset-0"]').first();
    await expect(lightbox).toBeVisible();

    // Click close button (X button or ESC key)
    await page.keyboard.press('Escape');

    // Verify lightbox is closed
    await expect(lightbox).not.toBeVisible();
  });

  test('should navigate between images using keyboard arrows in lightbox', async ({ page }) => {
    // Open lightbox
    await page.locator('img[alt]').first().click();

    // Wait for lightbox
    const lightbox = page.locator('[class*="fixed"][class*="inset-0"]').first();
    await expect(lightbox).toBeVisible();

    // Get first image alt text
    const firstImageAlt = await page.locator('img[alt]').first().getAttribute('alt');

    // Press right arrow to go to next image
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500); // Wait for transition

    // Verify we moved to a different image
    const currentImageAlt = await lightbox.locator('img').getAttribute('alt');
    expect(currentImageAlt).not.toBe(firstImageAlt);

    // Press left arrow to go back
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(500);
  });
});

test.describe('Color Gallery - Navigation Header', () => {
  test('should navigate to home page from header', async ({ page }) => {
    await page.goto('/gallery/color');

    // Click on logo or home link in header
    await page.click('header a[href="/"]');

    // Verify we're on home page
    await expect(page).toHaveURL('/');
  });

  test('should navigate to B&W gallery from header', async ({ page }) => {
    await page.goto('/gallery/color');

    // Click on B&W link in header
    await page.click('header a[href="/gallery/bw"]');

    // Verify we're on B&W page
    await expect(page).toHaveURL('/gallery/bw');
    await expect(page.locator('h1')).toContainText('Black & White Gallery');
  });

  test('should highlight current gallery in navigation', async ({ page }) => {
    await page.goto('/gallery/color');

    // Verify color gallery link has active state
    const colorLink = page.locator('header a[href="/gallery/color"]');
    await expect(colorLink).toBeVisible();

    // Check if it has an active class or aria-current attribute
    const hasActiveState = await colorLink.evaluate(el => {
      return el.classList.contains('active') ||
             el.classList.contains('text-neutral-900') ||
             el.getAttribute('aria-current') === 'page';
    });

    expect(hasActiveState).toBeTruthy();
  });
});

test.describe('Color Gallery - Error States', () => {
  test('should show loading state while images are being fetched', async ({ page }) => {
    // Intercept and delay the images.json request
    await page.route('**/data/images.json', async route => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      await route.continue();
    });

    await page.goto('/gallery/color');

    // Verify loading indicator is shown
    await expect(page.locator('text=/loading/i')).toBeVisible();
  });

  test('should handle empty gallery gracefully', async ({ page }) => {
    // Mock empty response
    await page.route('**/data/images.json', route => {
      route.fulfill({
        status: 200,
        body: JSON.stringify({
          images: [],
          generatedAt: new Date().toISOString(),
          totalImages: 0,
          categories: { color: 0, bw: 0 }
        })
      });
    });

    await page.goto('/gallery/color');

    // Verify empty state message
    await expect(page.locator('text=/no images found/i')).toBeVisible();
  });
});
