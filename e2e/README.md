# End-to-End Testing with Playwright

This directory contains E2E tests for the wildlife photography portfolio site, following BMAD (Build, Measure, Adapt, Deploy) best practices.

## Quick Start

```bash
# Install dependencies (if not already done)
npm install

# Run all E2E tests
npm run test

# Run tests in UI mode (interactive)
npx playwright test --ui

# Run specific test file
npx playwright test e2e/gallery-color.spec.ts

# Run tests in headed mode (see browser)
npx playwright test --headed

# Debug a specific test
npx playwright test --debug

# Generate HTML report after test run
npx playwright show-report
```

## Test Structure

```
e2e/
├── gallery-color.spec.ts    # Color gallery E2E tests
├── gallery-bw.spec.ts        # B&W gallery E2E tests
└── README.md                 # This file
```

## Writing Tests - BMAD Best Practices

### 1. **Test Levels Framework**

Choose the right test level:

- **E2E Tests** - Full user journeys (navigation, interactions, workflows)
- **API Tests** - Data flows and backend integration
- **Component Tests** - Isolated UI component behavior
- **Unit Tests** - Pure functions and business logic

For gallery features, we use **E2E tests** because they validate critical user paths.

### 2. **Deterministic Waiting (Network-First)**

❌ **Bad** - Arbitrary timeouts:
```typescript
await page.goto('/gallery/color');
await page.waitForTimeout(3000); // Flaky! May be too short or too long
```

✅ **Good** - Wait for network or specific conditions:
```typescript
await page.goto('/gallery/color');
await page.waitForResponse(response =>
  response.url().includes('/data/images.json') && response.status() === 200
);
```

### 3. **Semantic Selectors**

Use stable, semantic selectors that won't break with UI changes:

❌ **Bad** - Brittle CSS selectors:
```typescript
await page.click('div.gallery > div:nth-child(2) > img');
```

✅ **Good** - Semantic selectors:
```typescript
await page.click('img[alt="Bear"]');
// Or better yet, add data-testid attributes:
await page.click('[data-testid="gallery-image-bear"]');
```

**Recommendation**: Add `data-testid` attributes to key UI elements in your React components.

### 4. **Test Isolation**

Each test should be independent and not rely on state from previous tests:

```typescript
test.describe('Gallery Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Reset state before each test
    await page.goto('/gallery/color');
    await page.waitForLoadState('networkidle');
  });

  test('first test', async ({ page }) => {
    // This test runs independently
  });

  test('second test', async ({ page }) => {
    // This test also runs independently
  });
});
```

### 5. **Explicit Assertions**

Be specific about what you're testing:

❌ **Bad** - Vague assertions:
```typescript
await expect(page.locator('div')).toBeVisible();
```

✅ **Good** - Explicit assertions:
```typescript
await expect(page.locator('h1')).toContainText('Color Gallery');
await expect(page.locator('img[alt]')).toHaveCount(23);
```

## Test Patterns in This Project

### Pattern 1: Testing Image Gallery Loading

```typescript
test('should load gallery images', async ({ page }) => {
  await page.goto('/gallery/color');

  // Wait for data fetch
  await page.waitForResponse(response =>
    response.url().includes('/data/images.json') && response.status() === 200
  );

  // Verify images are rendered
  const images = page.locator('img[alt]');
  await expect(images.first()).toBeVisible();
});
```

### Pattern 2: Testing Lightbox Interactions

```typescript
test('should open and close lightbox', async ({ page }) => {
  await page.goto('/gallery/color');
  await page.waitForLoadState('networkidle');

  // Open lightbox
  await page.locator('img[alt]').first().click();
  const lightbox = page.locator('[class*="fixed"][class*="inset-0"]').first();
  await expect(lightbox).toBeVisible();

  // Close with ESC key
  await page.keyboard.press('Escape');
  await expect(lightbox).not.toBeVisible();
});
```

### Pattern 3: Testing Navigation

```typescript
test('should navigate between galleries', async ({ page }) => {
  await page.goto('/gallery/color');

  // Navigate to B&W gallery
  await page.click('header a[href="/gallery/bw"]');

  // Verify navigation
  await expect(page).toHaveURL('/gallery/bw');
  await expect(page.locator('h1')).toContainText('Black & White Gallery');
});
```

### Pattern 4: Testing Error States

```typescript
test('should show loading state', async ({ page }) => {
  // Intercept and delay request
  await page.route('**/data/images.json', async route => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await route.continue();
  });

  await page.goto('/gallery/color');

  // Verify loading indicator
  await expect(page.locator('text=/loading/i')).toBeVisible();
});
```

## Debugging Tests

### Using Playwright Inspector

```bash
# Run with debug flag
npx playwright test --debug

# Debug specific test
npx playwright test e2e/gallery-color.spec.ts:10 --debug
```

### Using Trace Viewer

```bash
# Run with trace
npx playwright test --trace on

# View trace
npx playwright show-trace trace.zip
```

### Using VS Code Extension

Install the [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extension to:

- Run tests from VS Code
- Set breakpoints
- See live test execution
- View traces inline

## Test Priority Levels (BMAD)

Tests are organized by priority:

- **P0** - Critical user paths (must never break)
  - Loading gallery page
  - Displaying images
  - Opening/closing lightbox

- **P1** - Important features (should work)
  - Keyboard navigation
  - Hover states
  - Gallery navigation

- **P2** - Nice-to-have features
  - Responsive layout changes
  - Loading states

- **P3** - Edge cases
  - Empty states
  - Error handling

## CI/CD Integration

Tests run automatically in CI with:

- 2 retries for flaky tests
- Parallel execution disabled in CI (workers: 1)
- HTML reports generated
- Traces captured on failure

See `playwright.config.ts` for full configuration.

## Common Issues & Solutions

### Issue: Tests fail with "Timeout waiting for element"

**Solution**: Ensure you're waiting for network requests:
```typescript
await page.waitForResponse(response =>
  response.url().includes('/data/images.json') && response.status() === 200
);
```

### Issue: Tests are flaky (sometimes pass, sometimes fail)

**Solutions**:
1. Avoid `waitForTimeout()` - use `waitForResponse()` or `waitForSelector()`
2. Check for race conditions
3. Ensure proper test isolation in `beforeEach()`

### Issue: "Element is not visible"

**Solution**: Wait for element to be visible:
```typescript
await page.locator('img[alt]').first().waitFor({ state: 'visible' });
```

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [BMAD Test Architecture Docs](_bmad/bmm/workflows/testarch/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Test Priority Matrix](_bmad/bmm/workflows/testarch/knowledge/test-priorities-matrix.md)

## Next Steps

1. **Add data-testid attributes** to gallery components for more reliable selectors
2. **Implement visual regression tests** for image layouts
3. **Add API tests** for images.json endpoint
4. **Create fixtures** for test data management
5. **Add performance tests** for image loading times
