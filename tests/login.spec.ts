import { expect } from '@playwright/test'
import { test } from './fixtures/auth.fixture'


test('Successfully logs in', async ({ page, authenticatedLogin }) => {
    //const loginPage: LoginPage = new LoginPage(page)
    //await loginPage.login()
    authenticatedLogin
    await expect(page).toHaveTitle('Seu Barriga - Home')
})