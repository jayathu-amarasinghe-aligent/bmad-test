# Playwright Guide - Getting Started

## What is Playwright? 🎭

Playwright is a **browser automation tool** that lets you write tests that interact with your website just like a real user would.

### Real-World Example:

Instead of manually:
1. Opening your website in a browser
2. Clicking on an image
3. Checking if the lightbox opens
4. Pressing ESC to close it
5. Repeating this 20 times for different browsers

Playwright does all of this **automatically** in seconds!

---

## Your Setup (Already Installed! ✅)

You already have Playwright installed in your `package.json`:

```json
{
  "devDependencies": {
    "@playwright/test": "^1.57.0"  // ✅ Already here!
  },
  "scripts": {
    "test": "playwright test",     // ✅ Already configured!
    "test:ui": "playwright test --ui"
  }
}
```

---

## How to Run Your Tests

### 1. **Run All Tests** (Headless - No Browser Window)

```bash
npm run test
```

This runs all tests in the background. You'll see output in the terminal:

```
Running 100 tests using 5 workers
  ✓ Color Gallery - should load images (2.3s)
  ✓ B&W Gallery - should display title (1.8s)
  ...
Passed: 95/100 (95%)
```

### 2. **Run Tests with UI** (Visual Mode - Recommended for Learning!)

```bash
npm run test:ui
```

This opens a **visual interface** where you can:
- See all your tests in a list
- Click a test to run it
- Watch it execute step-by-step
- See screenshots at each step
- Debug failed tests

**👉 Try this first! It's the easiest way to learn.**

### 3. **Run Tests in Headed Mode** (See the Browser)

```bash
npx playwright test --headed
```

This opens actual browser windows and you can watch the tests run in real-time. Great for debugging!

### 4. **Run a Specific Test File**

```bash
npx playwright test e2e/gallery-color.spec.ts
```

### 5. **Debug a Specific Test**

```bash
npx playwright test --debug
```

Opens Playwright Inspector where you can:
- Step through each test line
- Pause execution
- Inspect elements
- See what the browser sees

---

## Understanding a Test (Simple Example)

Let's break down a simple test:

```typescript
import { test, expect } from '@playwright/test';

test('should display gallery title', async ({ page }) => {
  // Step 1: Go to the page
  await page.goto('/gallery/color');

  // Step 2: Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Step 3: Check if the title is visible
  await expect(page.locator('h1')).toContainText('Color Gallery');
});
```

**What this does:**
1. Opens a browser
2. Navigates to `http://localhost:3000/gallery/color`
3. Waits for the page to finish loading
4. Checks if there's an `<h1>` element with text "Color Gallery"
5. If found → Test passes ✅
6. If not found → Test fails ❌

---

## Common Playwright Commands

### Navigation

```typescript
// Go to a page
await page.goto('/gallery/color');

// Go back
await page.goBack();

// Reload
await page.reload();
```

### Finding Elements (Locators)

```typescript
// Find by text
page.locator('text=Color Gallery');

// Find by tag
page.locator('h1');

// Find by CSS class
page.locator('.gallery-image');

// Find by data-testid (recommended!)
page.locator('[data-testid="gallery-image"]');

// Find images
page.locator('img[alt="Bear"]');

// Find links
page.locator('a[href="/gallery/bw"]');
```

### Interactions

```typescript
// Click
await page.click('button');
await page.locator('img').first().click();

// Type text
await page.fill('input[type="text"]', 'search term');

// Press keys
await page.keyboard.press('Escape');
await page.keyboard.press('ArrowRight');

// Hover
await page.hover('img.gallery-image');

// Check checkbox
await page.check('input[type="checkbox"]');
```

### Assertions (Checking Things)

```typescript
// Check if visible
await expect(page.locator('h1')).toBeVisible();

// Check text content
await expect(page.locator('h1')).toContainText('Gallery');

// Check URL
await expect(page).toHaveURL('/gallery/color');

// Check element count
await expect(page.locator('img')).toHaveCount(23);

// Check if NOT visible
await expect(page.locator('.modal')).not.toBeVisible();
```

### Waiting

```typescript
// Wait for element to appear
await page.locator('h1').waitFor({ state: 'visible' });

// Wait for network to be idle
await page.waitForLoadState('networkidle');

// Wait for specific API call
await page.waitForResponse(response =>
  response.url().includes('/data/images.json')
);
```

---

## Your Test Structure

Your tests are organized like this:

```
e2e/
├── gallery-color.spec.ts    # Tests for Color Gallery
├── gallery-bw.spec.ts        # Tests for B&W Gallery
└── README.md                 # Test documentation

playwright.config.ts          # Playwright configuration
```

---

## How Tests Are Organized

Tests use **describe blocks** to group related tests:

```typescript
test.describe('Color Gallery - Basic Navigation', () => {
  // Runs before each test in this group
  test.beforeEach(async ({ page }) => {
    await page.goto('/gallery/color');
  });

  test('first test', async ({ page }) => {
    // Test code here
  });

  test('second test', async ({ page }) => {
    // Test code here
  });
});
```

---

## Viewing Test Results

After running tests, you can view an HTML report:

```bash
# Run tests
npm run test

# View report
npx playwright show-report
```

The report shows:
- Which tests passed/failed
- Screenshots of failures
- Execution time
- Traces (step-by-step recording)

---

## Quick Start - Try This Now!

1. **Make sure dev server is running** (in another terminal):
   ```bash
   npm run dev
   ```

2. **Run tests in UI mode**:
   ```bash
   npm run test:ui
   ```

3. **In the Playwright UI**:
   - Click on a test name (e.g., "should display color gallery page")
   - Click the "Play" button ▶️
   - Watch it run!

4. **Try editing a test**:
   - Open `e2e/gallery-color.spec.ts`
   - Change line 26 to: `await expect(page.locator('h1')).toContainText('WRONG TEXT');`
   - Run the test again
   - It will fail! ❌
   - Look at the error message
   - Change it back

---

## Common Scenarios

### Scenario 1: Testing Image Click

```typescript
test('should open lightbox when clicking image', async ({ page }) => {
  await page.goto('/gallery/color');

  // Wait for images to load
  await page.waitForLoadState('networkidle');

  // Click first image
  await page.locator('img[alt]').first().click();

  // Check if lightbox appears
  const lightbox = page.locator('[class*="fixed"]');
  await expect(lightbox).toBeVisible();
});
```

### Scenario 2: Testing Navigation

```typescript
test('should navigate between galleries', async ({ page }) => {
  await page.goto('/gallery/color');

  // Click B&W link
  await page.click('a[href="/gallery/bw"]');

  // Check we're on B&W page
  await expect(page).toHaveURL('/gallery/bw');
  await expect(page.locator('h1')).toContainText('Black & White');
});
```

### Scenario 3: Testing Form Input

```typescript
test('should search images', async ({ page }) => {
  await page.goto('/gallery/color');

  // Type in search box
  await page.fill('input[type="search"]', 'leopard');

  // Press Enter
  await page.keyboard.press('Enter');

  // Check results
  await expect(page.locator('img[alt*="leopard"]')).toBeVisible();
});
```

---

## Debugging Tips

### 1. **Use console.log in tests**

```typescript
test('debug test', async ({ page }) => {
  await page.goto('/gallery/color');

  // Log page title
  console.log(await page.title());

  // Log element count
  const count = await page.locator('img').count();
  console.log(`Found ${count} images`);
});
```

### 2. **Take screenshots**

```typescript
test('with screenshot', async ({ page }) => {
  await page.goto('/gallery/color');
  await page.screenshot({ path: 'gallery-screenshot.png' });
});
```

### 3. **Pause execution**

```typescript
test('with pause', async ({ page }) => {
  await page.goto('/gallery/color');

  await page.pause(); // Opens inspector - you can explore!

  await page.click('img');
});
```

---

## What Each Browser Tests

Playwright runs your tests in multiple browsers:

- **Chromium** - Chrome/Edge rendering engine
- **Firefox** - Mozilla Firefox
- **WebKit** - Safari rendering engine
- **Mobile Chrome** - Android phone simulation
- **Mobile Safari** - iPhone simulation

This ensures your site works everywhere! 📱💻

---

## Need Help?

- **Playwright Docs**: https://playwright.dev/
- **Your test guide**: `e2e/README.md`
- **VS Code Extension**: Install "Playwright Test for VSCode" for IDE integration

---

## Next Steps

1. ✅ Run tests with `npm run test:ui`
2. ✅ Watch one test execute
3. ✅ Open `e2e/gallery-color.spec.ts` and read the tests
4. ✅ Try modifying a test
5. ✅ Add your own simple test

You're all set! 🎉
