import { expect, test } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'


test.only('Successfully logs in', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page)
    await loginPage.login()
    await expect(page).toHaveTitle('Seu Barriga - Home')
})