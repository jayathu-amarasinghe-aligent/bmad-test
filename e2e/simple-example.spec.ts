import { test, expect } from '@playwright/test';

/**
 * BEGINNER-FRIENDLY EXAMPLE
 *
 * This is a simple test to help you understand Playwright.
 * Run with: npx playwright test e2e/simple-example.spec.ts --headed
 *
 * The --headed flag will show you the browser so you can see what happens!
 */

test('Simple example - Visit home page', async ({ page }) => {
  // 1. Go to the home page
  console.log('Step 1: Going to home page...');
  await page.goto('/');

  // 2. Wait for the page to load
  console.log('Step 2: Waiting for page to load...');
  await page.waitForLoadState('networkidle');

  // 3. Check if the page title contains "Wildlife"
  console.log('Step 3: Checking page title...');
  await expect(page).toHaveTitle(/Wildlife/i);

  console.log('✅ Test passed! The home page works!');
});

test('Simple example - Navigate to Color Gallery', async ({ page }) => {
  // 1. Go directly to color gallery (simpler test)
  console.log('Step 1: Going directly to Color Gallery...');
  await page.goto('/gallery/color');

  // 2. Wait for page to load
  console.log('Step 2: Waiting for page to load...');
  await page.waitForLoadState('networkidle');

  // 3. Check we are on the color gallery page
  console.log('Step 3: Checking we are on Color Gallery...');
  await expect(page).toHaveURL(/\/gallery\/color\/?/);
  await expect(page.locator('h1')).toContainText('Color Gallery');

  // 4. Navigate to B&W gallery using header
  console.log('Step 4: Navigating to B&W Gallery...');
  await page.click('a[href="/gallery/bw"]');

  // 5. Check we navigated successfully
  console.log('Step 5: Checking we arrived at B&W Gallery...');
  await expect(page).toHaveURL(/\/gallery\/bw\/?/);
  await expect(page.locator('h1')).toContainText('Black & White');

  console.log('✅ Test passed! Navigation works!');
});

test('Simple example - Check images load', async ({ page }) => {
  // 1. Go directly to color gallery
  console.log('Step 1: Going to Color Gallery...');
  await page.goto('/gallery/color');

  // 2. Wait for the data to load
  console.log('Step 2: Waiting for images data...');
  await page.waitForResponse(response =>
    response.url().includes('/data/images.json') && response.status() === 200
  );

  // 3. Count how many images loaded
  console.log('Step 3: Counting images...');
  const imageCount = await page.locator('img[alt]').count();
  console.log(`Found ${imageCount} images!`);

  // 4. Check that we have at least 1 image
  expect(imageCount).toBeGreaterThan(0);

  console.log('✅ Test passed! Images are loading!');
});

test('Simple example - Click an image', async ({ page }) => {
  // 1. Go to color gallery
  console.log('Step 1: Going to Color Gallery...');
  await page.goto('/gallery/color');

  // 2. Wait for images to load
  console.log('Step 2: Waiting for images...');
  await page.waitForLoadState('networkidle');

  // 3. Click the first image (force click to bypass hover overlay)
  console.log('Step 3: Clicking first image...');
  await page.locator('img[alt]').first().click({ force: true });

  // 4. Check if lightbox appears
  console.log('Step 4: Checking if lightbox opened...');
  const lightbox = page.locator('[class*="fixed"][class*="inset-0"]').first();
  await expect(lightbox).toBeVisible({ timeout: 3000 });

  // 5. Press Escape to close
  console.log('Step 5: Pressing ESC to close lightbox...');
  await page.keyboard.press('Escape');

  // 6. Check lightbox closed
  console.log('Step 6: Checking lightbox closed...');
  await expect(lightbox).not.toBeVisible();

  console.log('✅ Test passed! Lightbox works!');
});

/**
 * TRY THIS:
 *
 * Run this file with: npm run test:ui
 * Then click on "simple-example.spec.ts" in the UI
 * Click the ▶️ button next to any test
 * Watch it run step-by-step!
 *
 * OR run with: npx playwright test e2e/simple-example.spec.ts --headed
 * This shows the actual browser!
 */
