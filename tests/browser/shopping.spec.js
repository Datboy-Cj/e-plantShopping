import { test, expect } from '@playwright/test';

test('shopping journey updates totals and restores deleted products', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('button', { name: 'Get Started' }).click();
  const snake = page.getByRole('article').filter({ has: page.getByRole('heading', { name: 'Snake Plant', exact: true }) });
  const zz = page.getByRole('article').filter({ has: page.getByRole('heading', { name: 'ZZ Plant', exact: true }) });
  await snake.getByRole('button', { name: 'Add to Cart' }).click();
  await expect(snake.getByRole('button')).toBeDisabled();
  await zz.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: /Cart/ }).click();
  const total = page.locator('.total_cart_amount');
  await expect(total).toContainText('$40.00');
  await page.getByRole('button', { name: 'Increase Snake Plant' }).click();
  await expect(total).toContainText('$58.00');
  await expect(page.getByLabel('3 items in cart')).toHaveText('3');
  await page.getByRole('button', { name: 'Decrease Snake Plant' }).click();
  await expect(total).toContainText('$40.00');
  await page.getByRole('button', { name: 'Delete ZZ Plant' }).click();
  await expect(total).toContainText('$18.00');
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await expect(zz.getByRole('button', { name: 'Add to Cart' })).toBeEnabled();
  await expect(snake.getByRole('button')).toBeDisabled();
});

test('empty cart, checkout notice, and home navigation work', async ({ page }) => {
  await page.goto('./#cart');
  await expect(page.getByText('Your cart is empty.')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Checkout' })).toBeDisabled();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('article').filter({ has: page.getByRole('heading', { name: 'Snake Plant', exact: true }) }).getByRole('button').click();
  await page.getByRole('link', { name: /Cart/ }).click();
  const dialogPromise = page.waitForEvent('dialog');
  const clickPromise = page.getByRole('button', { name: 'Checkout' }).click();
  const dialog = await dialogPromise;
  expect(dialog.message()).toBe('Coming Soon');
  await dialog.accept();
  await clickPromise;
  await page.getByRole('button', { name: 'Decrease Snake Plant' }).click();
  await expect(page.getByText('Your cart is empty.')).toBeVisible();
  await expect(page.locator('.total_cart_amount')).toContainText('$0.00');
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Get Started' })).toBeVisible();
});
