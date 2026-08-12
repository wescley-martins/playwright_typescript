import { expect } from '@playwright/test'
import { test } from './fixtures/test.fixture'

test('Successfully logs in', async ({ page, loginPage }) => {
    await loginPage.login()
    await expect(page).toHaveTitle('Seu Barriga - Home')
})