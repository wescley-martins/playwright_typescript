import { test as base } from '@playwright/test'
import { LoginPage } from '../support/pages/loginPage'


type authFixture = {
    authenticatedLogin: LoginPage
}

export const test = base.extend<authFixture>({
    authenticatedLogin: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage)
    }
})