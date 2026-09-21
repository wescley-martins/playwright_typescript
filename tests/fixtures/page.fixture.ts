import { test as base } from '@playwright/test'
import { LoginPage } from '../support/pages/loginPage'
import { NavBar } from '../support/pages/components/navBar'
import { Alert } from '../support/pages/components/alert'
import { BillPage } from '../support/pages/billPage'
import { TransactionsPage } from '../support/pages/transactionsPage'

type PageFixtures = {
    loginPage: LoginPage
    navBar: NavBar
    alert: Alert
    billPage: BillPage
    transactionPage: TransactionsPage
}

export const pageFixture = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },

    navBar: async ({ page }, use) => {
        await use(new NavBar(page));
    },

    alert: async ({ page }, use) => {
        await use(new Alert(page));
    },

    billPage: async ({ page }, use) => {
        await use(new BillPage(page))
    },

    transactionPage: async ({ page }, use) => {
        await use(new TransactionsPage(page))
    }
});