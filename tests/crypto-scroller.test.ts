import { test, expect } from '@playwright/test';

test('should display loading state initially', async ({ page }) => {
  await page.goto('/');
  
  await test.step('Wait for skeleton', async () => {
    const skeleton = await page.getByTestId('skeleton-scroller');

    expect(skeleton).toBeTruthy();
  });
});

test('should render crypto scroller correctly', async ({page}) => {
  await page.goto('/');

  await test.step('renders crypto scroller', async () =>  {
    const cryptoScroller = await page.getByTestId('scroller')

    expect(cryptoScroller).toBeTruthy();
  })

})

test('should render crypto cards correctly', async ({page}) => {
  await page.goto('/')

  await test.step('renders crypto cards', async () => {
    const cryptoCard = await page.getByRole('listitem');
    expect(cryptoCard).toBeTruthy();
  })
})