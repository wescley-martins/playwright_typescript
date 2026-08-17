import { test as setup, expect} from './fixtures/test.fixture'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

setup('Authenticated User', async({ loginPage, alert, page }) => {
    await page.goto(process.env.BASE_URL!)
    await loginPage.login()
    await expect(alert.alert).toHaveText('Bem vindo, Wescley!')
    await page.context().storageState({ path: 'playwright/.auth/storeState.json'})
})