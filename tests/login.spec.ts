import { expect } from '@playwright/test'
import { test } from './fixtures/auth.fixture'


test('Successfully logs in', async ({ page, authenticatedLogin }) => {
    await authenticatedLogin.login()
    await expect(page).toHaveTitle('Seu Barriga - Home')
})