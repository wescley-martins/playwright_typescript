import { test as base } from '@playwright/test'
import { LoginPage } from '../support/pages/loginPage'
import { NavBar } from '../support/pages/components/navBar'
import { BillPage } from '../support/pages/billPage'
import { faker } from '@faker-js/faker'
import { deleteBill, createBills } from '../support/helpers/helpers'

type testFixtures = {
    loginPage: LoginPage
    navBar: NavBar
    billPage: BillPage
    billName: string
    updatedBillName: string
    deleteBillByName: void
    createBill: void
    deleteUpdatedBill: void

}

export const test = base.extend<testFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },

    navBar: async ({ page }, use) => {
        await use(new NavBar(page))
    },

    billPage: async ({ page }, use) => {
        await use(new BillPage(page))
    },

    billName: async ({ }, use) => {
        const billName = faker.word.words()
        await use(billName)
    },

    updatedBillName: async ({ }, use) => {
        const billName = faker.word.words()
        await use(billName)
    },

    deleteBillByName: async ({ request, billName }, use) => {
        await use()
        await deleteBill(request, billName)
    },

    deleteUpdatedBill: async ({ request, updatedBillName }, use) => {
        await use()
        await deleteBill(request, updatedBillName)
    },

    createBill: async ({ request, billName }, use) => {
        await createBills(request, billName)
        await use()
    }
})

export { expect } from '@playwright/test'