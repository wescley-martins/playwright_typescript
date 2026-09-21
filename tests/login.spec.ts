import { test, expect } from './fixtures/index'

test.use({
    storageState: { cookies: [], origins: [] } 
})

test('Successfully logs in', async ({ page, loginPage }) => {
    await loginPage.login()
    await expect(page).toHaveTitle('Seu Barriga - Home')
})